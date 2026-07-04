import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiTrash2, FiEdit2 } from 'react-icons/fi';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ title: '', content: '', author: '', media_url: '' });
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await api.get('/blogs');
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs', error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    setIsUploading(true);
    try {
      const file = e.target.files[0];
      const uploadData = new FormData();
      uploadData.append('media', file);
      // Give it a default title for the media library
      uploadData.append('title', formData.title ? `Blog Cover: ${formData.title}` : 'Untitled Blog Cover');

      const { data } = await api.post('/media/upload', uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      setFormData(prev => ({ ...prev, media_url: data.url }));
    } catch (error) {
      console.error('Upload failed', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/blogs/${editingId}`, formData);
      } else {
        await api.post('/blogs', formData);
      }
      closeModal();
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog', error);
    }
  };

  const openModalForCreate = () => {
    setEditingId(null);
    setFormData({ title: '', content: '', author: '', media_url: '' });
    setIsModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingId(blog.id);
    setFormData({ title: blog.title, content: blog.content, author: blog.author, media_url: blog.media_url || '' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({ title: '', content: '', author: '', media_url: '' });
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        await api.delete(`/blogs/${id}`);
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Manage Blogs</h1>
          <p className="text-neutral-400 mt-1">Create, edit, and delete your blog posts.</p>
        </div>
        <button
          onClick={openModalForCreate}
          className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 transition-colors shadow-lg shadow-purple-500/25"
        >
          <FiPlus />
          <span>New Blog</span>
        </button>
      </div>

      <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-neutral-900/80 border-b border-neutral-800 text-neutral-400">
            <tr>
              <th className="p-4 font-medium">Title</th>
              <th className="p-4 font-medium">Author</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-neutral-800/30 transition-colors text-white">
                <td className="p-4">{blog.title}</td>
                <td className="p-4">{blog.author}</td>
                <td className="p-4 text-neutral-400">{new Date(blog.created_at).toLocaleDateString()}</td>
                <td className="p-4 flex justify-end space-x-3">
                  <button 
                    onClick={() => openModalForEdit(blog)}
                    className="p-2 text-neutral-400 hover:text-blue-400 transition-colors"
                  >
                    <FiEdit2 />
                  </button>
                  <button onClick={() => handleDelete(blog.id)} className="p-2 text-neutral-400 hover:text-red-400 transition-colors">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-neutral-500">No blogs found. Create one!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl w-full max-w-2xl shadow-2xl relative"
          >
            <h2 className="text-2xl font-bold text-white mb-6">{editingId ? 'Edit Blog' : 'Create New Blog'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-neutral-400 mb-1">Title</label>
                <input 
                  type="text" required
                  value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-neutral-400 mb-1">Author</label>
                <input 
                  type="text" required
                  value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-neutral-400 mb-1">Cover Image</label>
                <div className="flex items-center space-x-4">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUploading}
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500/10 file:text-purple-400 hover:file:bg-purple-500/20 transition-colors cursor-pointer"
                  />
                  {formData.media_url && (
                    <img src={formData.media_url} alt="Cover preview" className="w-12 h-12 rounded-lg object-cover border border-neutral-700" />
                  )}
                </div>
                {isUploading && <p className="text-purple-400 text-sm mt-2 animate-pulse">Uploading image...</p>}
              </div>
              <div>
                <label className="block text-neutral-400 mb-1">Content</label>
                <textarea 
                  required rows={6}
                  value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={closeModal} className="px-5 py-2.5 text-neutral-400 hover:text-white transition-colors">Cancel</button>
                <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-purple-500/25">
                  {editingId ? 'Save Changes' : 'Publish Blog'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ManageBlogs;
