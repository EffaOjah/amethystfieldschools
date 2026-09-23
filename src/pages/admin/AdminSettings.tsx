import { useState } from 'react';
import api from '../../api';
const AdminSettings = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage({ type: 'danger', text: 'New password and confirm password do not match.' });
      return;
    }

    if (passwords.newPassword.length < 6) {
      setMessage({ type: 'danger', text: 'New password must be at least 6 characters long.' });
      return;
    }

    try {
      setIsSubmitting(true);
      await api.put('/auth/password', {
        currentPassword: passwords.currentPassword,
        newPassword: passwords.newPassword,
      });
      setMessage({ type: 'success', text: 'Password updated successfully!' });
      setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error: any) {
      console.error('Password update error:', error);
      const errorMsg = error.response?.data?.message || 'Failed to update password.';
      setMessage({ type: 'danger', text: errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 mx-auto grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Security Settings</h4>
            <p className="card-description">Update your password</p>
            
            {message.text && (
              <div className={`alert alert-${message.type}`} role="alert">
                {message.text}
              </div>
            )}

            <form className="forms-sample" onSubmit={handleUpdatePassword}>
              <div className="form-group">
                <label htmlFor="currentPassword">Current Password</label>
                <input type="password" className="form-control" id="currentPassword" name="currentPassword" placeholder="Current Password" value={passwords.currentPassword} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input type="password" className="form-control" id="newPassword" name="newPassword" placeholder="New Password" value={passwords.newPassword} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={passwords.confirmPassword} onChange={handleInputChange} required />
              </div>
              <button type="submit" className="btn btn-primary me-2" disabled={isSubmitting}>
                {isSubmitting ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
