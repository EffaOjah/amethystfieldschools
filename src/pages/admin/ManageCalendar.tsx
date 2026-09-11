import { useState, useEffect } from 'react';
import api from '../../api';

interface CalendarEvent {
  id: number;
  event: string;
  date: string;
}

const ManageCalendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ event: '', date: '' });
  const [message, setMessage] = useState({ type: '', text: '' });

  const fetchEvents = async () => {
    try {
      const { data } = await api.get('/calendar');
      setEvents(data);
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      setMessage({ type: 'danger', text: 'Failed to load calendar events.' });
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    try {
      if (isEditing && editingId) {
        await api.put(`/calendar/${editingId}`, formData);
        setMessage({ type: 'success', text: 'Event updated successfully!' });
      } else {
        await api.post('/calendar', formData);
        setMessage({ type: 'success', text: 'Event created successfully!' });
      }
      
      setFormData({ event: '', date: '' });
      setIsEditing(false);
      setEditingId(null);
      fetchEvents();
    } catch (error) {
      console.error('Error saving event:', error);
      setMessage({ type: 'danger', text: 'Failed to save event.' });
    }
  };

  const handleEdit = (event: CalendarEvent) => {
    setIsEditing(true);
    setEditingId(event.id);
    setFormData({ event: event.event, date: event.date });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({ event: '', date: '' });
    setMessage({ type: '', text: '' });
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await api.delete(`/calendar/${id}`);
        setMessage({ type: 'success', text: 'Event deleted successfully!' });
        fetchEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
        setMessage({ type: 'danger', text: 'Failed to delete event.' });
      }
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Manage Academic Calendar</h4>
            <p className="card-description">
              {isEditing ? 'Edit Calendar Event' : 'Add New Calendar Event'}
            </p>

            {message.text && (
              <div className={`alert alert-${message.type}`} role="alert">
                {message.text}
              </div>
            )}

            <form className="forms-sample" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="event">Event Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="event"
                  name="event"
                  placeholder="e.g. Resumption for 1st Term"
                  value={formData.event}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="date"
                  name="date"
                  placeholder="e.g. September 11, 2025"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary me-2">
                {isEditing ? 'Update Event' : 'Add Event'}
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
            <h4 className="card-title">Current Academic Calendar</h4>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="text-center py-4">No events found.</td>
                    </tr>
                  ) : (
                    events.map((evt) => (
                      <tr key={evt.id}>
                        <td>{evt.event}</td>
                        <td>{evt.date}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-info me-2 text-white"
                            onClick={() => handleEdit(evt)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger text-white"
                            onClick={() => handleDelete(evt.id)}
                          >
                            Delete
                          </button>
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

export default ManageCalendar;
