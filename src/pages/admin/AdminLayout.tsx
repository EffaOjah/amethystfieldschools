import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    // Dynamically inject CSS
    const styles = [
      'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
      '/admin-assets/vendors/feather/feather.css',
      '/admin-assets/vendors/mdi/css/materialdesignicons.min.css',
      '/admin-assets/vendors/ti-icons/css/themify-icons.css',
      '/admin-assets/vendors/font-awesome/css/font-awesome.min.css',
      '/admin-assets/vendors/typicons/typicons.css',
      '/admin-assets/vendors/simple-line-icons/css/simple-line-icons.css',
      '/admin-assets/vendors/css/vendor.bundle.base.css',
      '/admin-assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css',
      '/admin-assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css',
      '/admin-assets/js/select.dataTables.min.css',
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

    // Dynamically inject JS
    const scripts = [
      '/admin-assets/vendors/js/vendor.bundle.base.js',
      '/admin-assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js',
      '/admin-assets/js/off-canvas.js',
      '/admin-assets/js/template.js',
      '/admin-assets/js/settings.js',
      '/admin-assets/js/hoverable-collapse.js',
    ];

    const injectedScripts: HTMLScriptElement[] = [];

    // Load scripts sequentially to respect dependencies
    const loadScripts = async () => {
      for (const src of scripts) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = false;
          script.onload = resolve;
          document.body.appendChild(script);
          injectedScripts.push(script);
        });
      }
    };

    loadScripts();

    // Add specific body class
    document.body.classList.add('with-welcome-text');

    return () => {
      // Cleanup styles
      injectedStyles.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
      // Cleanup scripts
      injectedScripts.forEach((script) => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
      document.body.classList.remove('with-welcome-text');
    };
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: 'mdi-grid-large' },
    { name: 'Blogs', path: '/admin/blogs', icon: 'mdi-file-document' },
    { name: 'Media', path: '/admin/media', icon: 'mdi-image-multiple' },
    { name: 'Calendar', path: '/admin/calendar', icon: 'mdi-calendar' },
    { name: 'Settings', path: '/admin/settings', icon: 'mdi-settings' },
  ];

  return (
    <div className="container-scroller">
      {/* Custom styles to make it less plain */}
      <style>{`
        body, .container-scroller {
          font-family: 'Open Sans', sans-serif !important;
        }
        .navbar.default-layout {
          background: #ffffff !important;
          border-bottom: 1px solid #eef2f5 !important;
          box-shadow: none !important;
        }
        .navbar .navbar-brand-wrapper,
        .navbar .navbar-menu-wrapper {
          background: transparent !important;
        }
        .navbar .navbar-brand h3 {
          color: #8b5cf6 !important;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .navbar .welcome-text {
          color: #334155 !important;
          font-size: 1.1rem;
        }
        .navbar .welcome-sub-text {
          color: #94a3b8 !important;
          font-size: 0.85rem;
        }
        .navbar .navbar-toggler span, .navbar .nav-link i {
          color: #64748b !important;
        }
        .sidebar {
          background: #ffffff !important;
          border-right: 1px solid #eef2f5 !important;
          box-shadow: none !important;
        }
        .sidebar .nav .nav-item {
          padding: 0 15px;
          margin-bottom: 5px;
        }
        .sidebar .nav .nav-item .nav-link {
          border-radius: 8px;
          transition: all 0.3s ease;
          color: #64748b !important;
          background: transparent !important;
          font-weight: 600;
        }
        .sidebar .nav .nav-item .nav-link i {
          color: #94a3b8 !important;
        }
        .sidebar .nav .nav-item.custom-active > .nav-link {
          background: #f3e8ff !important;
          color: #8b5cf6 !important;
          box-shadow: none !important;
        }
        .sidebar .nav .nav-item.custom-active > .nav-link i {
          color: #8b5cf6 !important;
        }
        .sidebar .nav .nav-item .nav-link:hover {
          background: #f8fafc !important;
          color: #8b5cf6 !important;
          transform: translateX(4px);
        }
        .sidebar .nav .nav-item .nav-link:hover i {
          color: #8b5cf6 !important;
        }
        .sidebar .nav .nav-item .menu-title {
          color: inherit !important;
        }
        .content-wrapper {
          background: #f8f9fa !important;
        }
        .btn-primary, .btn-info, .btn-outline-info {
          background-color: #14b8a6 !important;
          border-color: #14b8a6 !important;
          color: #ffffff !important;
          border-radius: 6px;
          font-weight: 600;
        }
        .btn-primary:hover, .btn-info:hover, .btn-outline-info:hover {
          background-color: #0d9488 !important;
          border-color: #0d9488 !important;
          color: #ffffff !important;
        }
        .page-body-wrapper {
          padding-top: 70px !important;
        }
        @media (max-width: 991px) {
          .page-body-wrapper {
            padding-top: 85px !important;
          }
          .content-wrapper {
            padding-top: 1rem !important;
          }
        }
      `}</style>
      {/* Top Navbar */}
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <div className="me-3">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
              <span className="icon-menu"></span>
            </button>
          </div>
          <div>
            <Link className="navbar-brand brand-logo" to="/admin">
              <h3 className="font-weight-bold mb-0">Admin</h3>
            </Link>
            <Link className="navbar-brand brand-logo-mini" to="/admin">
              <h3 className="font-weight-bold mb-0">Admin</h3>
            </Link>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-top">
          <ul className="navbar-nav">
            <li className="nav-item fw-semibold d-none d-lg-block ms-0">
              <h1 className="welcome-text">Hello, <span className="text-black fw-bold">Admin</span></h1>
              <h3 className="welcome-sub-text">Home {'>'} Dashboard</h3>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto gap-3 d-flex align-items-center">

            <li className="nav-item dropdown d-none d-lg-block user-dropdown">
              <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="img-xs rounded-circle bg-purple-100 text-purple-700 d-flex align-items-center justify-content-center fw-bold" style={{ backgroundColor: '#f3e8ff', color: '#8b5cf6' }}>A</div>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown shadow-sm border-0" aria-labelledby="UserDropdown">
                <div className="dropdown-header text-center">
                  <div className="img-md rounded-circle d-flex align-items-center justify-content-center mx-auto fw-bold" style={{ backgroundColor: '#f3e8ff', color: '#8b5cf6' }}>A</div>
                  <p className="mb-1 mt-3 fw-semibold text-dark">Admin</p>
                </div>
                <Link to="/" className="dropdown-item"><i className="dropdown-item-icon mdi mdi-web text-primary me-2"></i> View Website</Link>
                <a className="dropdown-item" onClick={handleLogout}><i className="dropdown-item-icon mdi mdi-power text-danger me-2"></i>Sign Out</a>
              </div>
            </li>
          </ul>
          <button 
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" 
            type="button" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className={`mdi ${isSidebarOpen ? 'mdi-close' : 'mdi-menu'}`}></span>
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="container-fluid page-body-wrapper">
        {/* Sidebar */}
        <nav className={`sidebar sidebar-offcanvas ${isSidebarOpen ? 'active' : ''}`} id="sidebar">
          <ul className="nav pt-4 mt-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
              return (
                <li className={`nav-item ${isActive ? 'custom-active' : ''}`} key={item.name}>
                  <Link className="nav-link" to={item.path}>
                    <i className={`mdi ${item.icon} menu-icon`}></i>
                    <span className="menu-title font-weight-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-item mt-4">
              <a className="nav-link" onClick={handleLogout} style={{ cursor: 'pointer', color: '#ef4444' }}>
                <i className="mdi mdi-power menu-icon" style={{ color: '#ef4444' }}></i>
                <span className="menu-title font-weight-medium">Logout</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Content panel */}
        <div className="main-panel">
          <div className="content-wrapper">
            <Outlet />
          </div>
          {/* Footer */}
          <footer className="footer bg-white border-top">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">AMF Admin Portal</span>
              <span className="float-none float-sm-end d-block mt-1 mt-sm-0 text-center">Copyright © 2026. All rights reserved.</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
