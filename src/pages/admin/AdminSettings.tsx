import { useState } from 'react';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Amethyst Field Schools',
    contactEmail: 'info@amethystfieldschools.com',
    phoneNumber: '+234 123 456 7890',
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving settings
    setMessage({ type: 'success', text: 'Settings saved successfully!' });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  return (
    <div className="row">
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">General Settings</h4>
            <p className="card-description">Manage basic website configuration</p>
            
            {message.text && (
              <div className={`alert alert-${message.type}`} role="alert">
                {message.text}
              </div>
            )}

            <form className="forms-sample" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="siteName">Site Name</label>
                <input type="text" className="form-control" id="siteName" name="siteName" value={settings.siteName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Contact Email</label>
                <input type="email" className="form-control" id="contactEmail" name="contactEmail" value={settings.contactEmail} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={settings.phoneNumber} onChange={handleInputChange} />
              </div>
              <button type="submit" className="btn btn-primary me-2">Save Settings</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Security Settings</h4>
            <p className="card-description">Update your password</p>
            <form className="forms-sample">
              <div className="form-group">
                <label htmlFor="currentPassword">Current Password</label>
                <input type="password" className="form-control" id="currentPassword" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input type="password" className="form-control" id="newPassword" placeholder="New Password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
              </div>
              <button type="submit" className="btn btn-primary me-2">Update Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
