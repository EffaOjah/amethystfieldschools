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
  const [formData, setFormData] = useState({ title: '', url: '', type: 'image' });
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

    try {
      await api.post('/media', formData);
      setMessage({ type: 'success', text: 'Media added successfully!' });
      setFormData({ title: '', url: '', type: 'image' });
      fetchMedia();
    } catch (error) {
      console.error('Error adding media:', error);
      setMessage({ type: 'danger', text: 'Failed to add media.' });
    }
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
            <p className="card-description">Upload and manage school photos and videos</p>

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
                <label htmlFor="url">Media URL</label>
                <input type="text" className="form-control" id="url" name="url" value={formData.url} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="type">Media Type</label>
                <select className="form-select form-control" id="type" name="type" value={formData.type} onChange={handleInputChange}>
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary me-2">Add Media</button>
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Media Gallery</h4>
            <div className="row mt-4">
              {media.length === 0 ? (
                <div className="col-12 text-center text-muted">No media assets found.</div>
              ) : (
                media.map((item) => (
                  <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card border h-100 shadow-sm">
                      {item.type === 'video' ? (
                        <div className="bg-dark text-white d-flex align-items-center justify-content-center" style={{ height: '150px' }}>
                          <i className="mdi mdi-play-circle-outline" style={{ fontSize: '3rem' }}></i>
                        </div>
                      ) : (
                        <img src={item.url} className="card-img-top" alt={item.title} style={{ height: '150px', objectFit: 'cover' }} />
                      )}
                      <div className="card-body p-3 d-flex flex-column">
                        <h6 className="card-title text-truncate mb-2" title={item.title}>{item.title}</h6>
                        <p className="text-muted small mb-3 text-uppercase">{item.type}</p>
                        <button className="btn btn-sm btn-danger mt-auto" onClick={() => handleDelete(item.id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMedia;
