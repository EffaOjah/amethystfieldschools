import { useState, useEffect } from 'react';
import api from '../../api';

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  media_url: string;
  created_at: string;
}

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ title: '', content: '', author: '', media_url: '' });
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const fetchBlogs = async () => {
    try {
      const { data } = await api.get('/blogs');
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setMessage({ type: 'danger', text: 'Failed to load blogs.' });
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    setIsUploading(true);

    try {
      let finalMediaUrl = formData.media_url;

      // If a new file is selected, upload it to media endpoint first
      if (file) {
        const uploadData = new FormData();
        uploadData.append('title', `Blog Image: ${formData.title}`);
        uploadData.append('media', file);

        const uploadRes = await api.post('/media/upload', uploadData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        
        finalMediaUrl = uploadRes.data.url;
      }

      const blogData = {
        ...formData,
        media_url: finalMediaUrl
      };

      if (isEditing && editingId) {
        await api.put(`/blogs/${editingId}`, blogData);
        setMessage({ type: 'success', text: 'Blog updated successfully!' });
      } else {
        await api.post('/blogs', blogData);
        setMessage({ type: 'success', text: 'Blog created successfully!' });
      }
      
      setFormData({ title: '', content: '', author: '', media_url: '' });
      setFile(null);
      const fileInput = document.getElementById('mediaFile') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
      setIsEditing(false);
      setEditingId(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
      setMessage({ type: 'danger', text: 'Failed to save blog.' });
    } finally {
      setIsUploading(false);
    }
  };

  const handleEdit = (blog: Blog) => {
    setIsEditing(true);
    setEditingId(blog.id);
    setFormData({ title: blog.title, content: blog.content, author: blog.author, media_url: blog.media_url || '' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({ title: '', content: '', author: '', media_url: '' });
    setFile(null);
    const fileInput = document.getElementById('mediaFile') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
    setMessage({ type: '', text: '' });
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await api.delete(`/blogs/${id}`);
        setMessage({ type: 'success', text: 'Blog deleted successfully!' });
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
        setMessage({ type: 'danger', text: 'Failed to delete blog.' });
      }
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Manage Blogs</h4>
            <p className="card-description">
              {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
            </p>

            {message.text && (
              <div className={`alert alert-${message.type}`} role="alert">
                {message.text}
              </div>
            )}

            <form className="forms-sample" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="author" name="author" value={formData.author} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="mediaFile">Upload Cover Image (Optional)</label>
                <input 
                  type="file" 
                  className="form-control" 
                  id="mediaFile" 
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFile(e.target.files[0]);
                    }
                  }} 
                />
                {formData.media_url && !file && (
                  <small className="form-text text-muted d-block mt-2">
                    Current image: <a href={formData.media_url} target="_blank" rel="noopener noreferrer">View</a>
                  </small>
                )}
                {file && (
                  <small className="form-text text-info d-block mt-2">
                    New file selected: {file.name}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea className="form-control" id="content" name="content" rows={5} value={formData.content} onChange={handleInputChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary me-2" disabled={isUploading}>
                {isUploading ? 'Saving...' : isEditing ? 'Update Blog' : 'Publish Blog'}
              </button>
              {isEditing && (
                <button type="button" className="btn btn-light" onClick={handleCancelEdit}>
                  Cancel
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">All Blogs</h4>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-4">No blogs found.</td>
                    </tr>
                  ) : (
                    blogs.map((blog) => (
                      <tr key={blog.id}>
                        <td>{blog.title}</td>
                        <td>{blog.author}</td>
                        <td>{new Date(blog.created_at).toLocaleDateString()}</td>
                        <td>
                          <button className="btn btn-sm btn-info me-2 text-white" onClick={() => handleEdit(blog)}>Edit</button>
                          <button className="btn btn-sm btn-danger text-white" onClick={() => handleDelete(blog.id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
