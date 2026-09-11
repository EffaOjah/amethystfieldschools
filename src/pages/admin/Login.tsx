import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const styles = [
      '/admin-assets/vendors/feather/feather.css',
      '/admin-assets/vendors/mdi/css/materialdesignicons.min.css',
      '/admin-assets/vendors/ti-icons/css/themify-icons.css',
      '/admin-assets/vendors/typicons/typicons.css',
      '/admin-assets/vendors/simple-line-icons/css/simple-line-icons.css',
      '/admin-assets/vendors/css/vendor.bundle.base.css',
      '/admin-assets/css/style.css',
    ];

    const injectedStyles: HTMLLinkElement[] = [];

    styles.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      injectedStyles.push(link);
    });

    return () => {
      injectedStyles.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login', { username, password });
      login(response.data.token);
      navigate('/admin');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0" style={{ background: '#f8f9fa' }}>
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5 shadow-lg rounded">
                <div className="brand-logo mb-4 text-center">
                  <h3 className="font-weight-bold" style={{ color: '#662D91' }}>AMF ADMIN</h3>
                </div>
                <h4 className="font-weight-light text-center mb-4">Sign in to continue.</h4>
                
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                
                <form className="pt-3" onSubmit={handleLogin}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="username" 
                      placeholder="Username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="password" 
                      className="form-control form-control-lg" 
                      id="password" 
                      placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-3">
                    <button 
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn text-uppercase w-100" 
                      style={{ backgroundColor: '#662D91', borderColor: '#662D91' }}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? 'Signing In...' : 'SIGN IN'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
