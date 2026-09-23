import { useState, useEffect } from 'react';
import api from '../../api';

interface Media {
  id: number;
  title: string;
  url: string;
  type: string;
}

const ManageMedia = () => {
  const [media, setMedia] = useState<Media[]>([]);
  const [formData, setFormData] = useState({ title: '' });
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  const fetchMedia = async () => {
    try {
      const { data } = await api.get('/media');
      setMedia(data);
    } catch (error) {
      console.error('Error fetching media:', error);
      setMessage({ type: 'danger', text: 'Failed to load media.' });
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (isEditing && editingId) {
      try {
        setIsUploading(true);
        await api.put(`/media/${editingId}`, { title: formData.title });
        setMessage({ type: 'success', text: 'Media updated successfully!' });

        setFormData({ title: '' });
        setIsEditing(false);
        setEditingId(null);
        fetchMedia();
      } catch (error) {
        console.error('Error updating media:', error);
        setMessage({ type: 'danger', text: 'Failed to update media.' });
      } finally {
        setIsUploading(false);
      }
      return;
    }

    if (!file) {
      setMessage({ type: 'danger', text: 'Please select a file to upload.' });
      return;
    }

    setIsUploading(true);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('media', file);

    try {
      await api.post('/media/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage({ type: 'success', text: 'Media added successfully!' });
      setFormData({ title: '' });
      setFile(null);
      // Reset file input
      const fileInput = document.getElementById('mediaFile') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

      fetchMedia();
    } catch (error) {
      console.error('Error adding media:', error);
      setMessage({ type: 'danger', text: 'Failed to upload media.' });
    } finally {
      setIsUploading(false);
    }
  };

  const handleEdit = (item: Media) => {
    setIsEditing(true);
    setEditingId(item.id);
    setFormData({ title: item.title });
    setFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({ title: '' });
    setMessage({ type: '', text: '' });
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this media asset?')) {
      try {
        await api.delete(`/media/${id}`);
        setMessage({ type: 'success', text: 'Media deleted successfully!' });
        fetchMedia();
      } catch (error) {
        console.error('Error deleting media:', error);
        setMessage({ type: 'danger', text: 'Failed to delete media.' });
      }
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Manage Media Assets</h4>
            <p className="card-description">
              {isEditing ? 'Edit Media Asset' : 'Upload and manage school photos and videos'}
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
              {!isEditing && (
                <div className="form-group">
                  <label htmlFor="mediaFile">Upload File</label>
                  <input
                    type="file"
                    className="form-control"
                    id="mediaFile"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFile(e.target.files[0]);
                      }
                    }}
                    required={!isEditing}
                  />
                  <small className="form-text text-muted">Select an image or video to upload to Cloudinary.</small>
                </div>
              )}
              <button type="submit" className="btn btn-primary me-2" disabled={isUploading}>
                {isUploading ? 'Saving...' : isEditing ? 'Update Media' : 'Add Media'}
              </button>
              {isEditing && (
                <button type="button" className="btn btn-light" onClick={handleCancelEdit} disabled={isUploading}>
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
            <h4 className="card-title">Media Gallery</h4>
            <div className="row mt-4">
              {(() => {
                const filteredMedia = media.filter(item => !item.title?.startsWith('Blog Cover:') && !item.title?.startsWith('Blog Image:'));
                if (filteredMedia.length === 0) {
                  return <div className="col-12 text-center text-muted">No media assets found.</div>;
                }
                return filteredMedia.map((item) => (
                  <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card border h-100 shadow-sm">
                      {item.url && (item.url.includes('/video/upload/') || item.url.match(/\.(mp4|webm|ogg)$/i)) ? (
                        <div className="bg-dark text-white d-flex align-items-center justify-content-center" style={{ height: '150px' }}>
                          <i className="mdi mdi-play-circle-outline" style={{ fontSize: '3rem' }}></i>
                        </div>
                      ) : (
                        <img src={item.url} className="card-img-top" alt={item.title} style={{ height: '150px', objectFit: 'cover' }} />
                      )}
                      <div className="card-body p-3 d-flex flex-column">
                        <h6 className="card-title text-truncate mb-2" title={item.title}>{item.title}</h6>
                        <p className="text-muted small mb-3 text-uppercase">
                          {item.url && (item.url.includes('/video/upload/') || item.url.match(/\.(mp4|webm|ogg)$/i)) ? 'VIDEO' : 'IMAGE'}
                        </p>
                        <div className="mt-auto d-flex gap-2">
                          <button className="btn btn-sm btn-info text-white flex-grow-1" onClick={() => handleEdit(item)}>Edit</button>
                          <button className="btn btn-sm btn-danger text-white flex-grow-1" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMedia;
