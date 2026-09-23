import { useState, useEffect } from 'react';
import api from '../../api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalMedia: 0,
    totalVisits: 0,
    activeSessions: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get('/dashboard/stats');
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container-fluid py-4">
      {/* Stats Row */}
      <div className="row mb-4">
        {/* Total Blogs */}
        <div className="col-12 col-md-6 col-xl-3 mb-4 mb-xl-0">
          <div className="card border-0 shadow-sm h-100 p-2" style={{ borderRadius: '1rem' }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-muted font-weight-bold mb-0">Total Blogs</h6>
                <i className="mdi mdi-file-document-outline fs-4" style={{ color: '#8b5cf6' }}></i>
              </div>
              <h3 className="font-weight-bold text-dark mb-4">{loading ? '...' : stats.totalBlogs}</h3>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="text-muted small">Content updates</span>
              </div>
              <div className="progress mt-2" style={{ height: '6px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '65%', backgroundColor: '#8b5cf6' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Media Assets */}
        <div className="col-12 col-md-6 col-xl-3 mb-4 mb-xl-0">
          <div className="card border-0 shadow-sm h-100 p-2" style={{ borderRadius: '1rem' }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-muted font-weight-bold mb-0">Media Assets</h6>
                <i className="mdi mdi-cloud-upload-outline fs-4" style={{ color: '#14b8a6' }}></i>
              </div>
              <h3 className="font-weight-bold text-dark mb-4">{loading ? '...' : stats.totalMedia}</h3>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="text-muted small">Storage utilization</span>
              </div>
              <div className="progress mt-2" style={{ height: '6px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '45%', backgroundColor: '#14b8a6' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Visits */}
        <div className="col-12 col-md-6 col-xl-3 mb-4 mb-xl-0">
          <div className="card border-0 shadow-sm h-100 p-2" style={{ borderRadius: '1rem' }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-muted font-weight-bold mb-0">Total Visits</h6>
                <i className="mdi mdi-chart-line fs-4" style={{ color: '#ef4444' }}></i>
              </div>
              <h3 className="font-weight-bold text-dark mb-4">{loading ? '...' : stats.totalVisits}</h3>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="text-muted small">Traffic overview</span>
              </div>
              <div className="progress mt-2" style={{ height: '6px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '80%', backgroundColor: '#ef4444' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="col-12 col-md-6 col-xl-3 mb-4 mb-xl-0">
          <div className="card border-0 shadow-sm h-100 p-2" style={{ borderRadius: '1rem' }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-muted font-weight-bold mb-0">Active Sessions</h6>
                <i className="mdi mdi-account-multiple-outline fs-4" style={{ color: '#f59e0b' }}></i>
              </div>
              <h3 className="font-weight-bold text-dark mb-4">{loading ? '...' : stats.activeSessions}</h3>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="text-muted small">Current engagement</span>
              </div>
              <div className="progress mt-2" style={{ height: '6px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '30%', backgroundColor: '#f59e0b' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Row */}
      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-4 p-md-5">
              <h4 className="font-weight-bold text-dark mb-1">Quick Actions</h4>
              <p className="text-muted small mb-4">Manage your website content easily</p>
              
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary px-4 py-2 shadow-sm d-flex align-items-center">
                  <i className="mdi mdi-plus me-2 fs-5"></i> Create New Blog Post
                </button>
                <button className="btn px-4 py-2 shadow-sm text-white d-flex align-items-center" style={{ backgroundColor: '#8b5cf6', borderColor: '#8b5cf6', borderRadius: '6px', fontWeight: 600 }}>
                  <i className="mdi mdi-upload me-2 fs-5"></i> Upload Media Asset
                </button>
                <button className="btn btn-light border px-4 py-2 shadow-sm d-flex align-items-center" style={{ borderRadius: '6px', fontWeight: 600, color: '#475569' }}>
                  <i className="mdi mdi-calendar me-2 fs-5"></i> Manage Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
