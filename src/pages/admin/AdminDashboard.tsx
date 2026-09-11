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
    <div className="row">
      <div className="col-sm-12">
        <div className="home-tab">
          <div className="tab-content tab-content-basic">
            <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
              <div className="row">
                <div className="col-sm-12">
                  <div className="statistics-details row">
                    <div className="col-6 col-md-3 mb-3">
                      <p className="statistics-title">Total Blogs</p>
                      <h3 className="rate-percentage">{loading ? '...' : stats.totalBlogs}</h3>
                      <p className="text-success d-flex"><i className="mdi mdi-menu-up"></i><span>+0.1%</span></p>
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                      <p className="statistics-title">Media Assets</p>
                      <h3 className="rate-percentage">{loading ? '...' : stats.totalMedia}</h3>
                      <p className="text-success d-flex"><i className="mdi mdi-menu-up"></i><span>+0.1%</span></p>
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                      <p className="statistics-title">Total Visits</p>
                      <h3 className="rate-percentage">{loading ? '...' : stats.totalVisits}</h3>
                      <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>-0.5%</span></p>
                    </div>
                    <div className="col-6 col-md-3 mb-3 d-none d-md-block">
                      <p className="statistics-title">Active Sessions</p>
                      <h3 className="rate-percentage">{loading ? '...' : stats.activeSessions}</h3>
                      <p className="text-success d-flex"><i className="mdi mdi-menu-up"></i><span>+0.1%</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 d-flex flex-column">
                  <div className="row flex-grow">
                    <div className="col-12 grid-margin stretch-card">
                      <div className="card card-rounded">
                        <div className="card-body">
                          <div className="d-sm-flex justify-content-between align-items-start">
                            <div>
                              <h4 className="card-title card-title-dash">Quick Actions</h4>
                              <p className="card-subtitle card-subtitle-dash">Manage your website content easily</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="d-flex flex-wrap gap-2">
                              <button className="btn btn-primary text-white">Create New Blog Post</button>
                              <button className="btn btn-info text-white">Upload Media Asset</button>
                              <button className="btn btn-outline-info">Manage Calendar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
