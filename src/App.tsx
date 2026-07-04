import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import Academics from './components/Academics';
import Contact from './pages/Contact';
import Information from './pages/Information';
import Apply from './pages/Apply';
import MediaPage from './pages/MediaPage';
import BlogsPage from './pages/BlogsPage';

import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageBlogs from './pages/admin/ManageBlogs';
import ManageMedia from './pages/admin/ManageMedia';
import AdminSettings from './pages/admin/AdminSettings';
import Login from './pages/admin/Login';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  useEffect(() => {
    // Record visit once per session
    if (!sessionStorage.getItem('amf_visited')) {
      import('./api').then(({ default: api }) => {
        api.post('/dashboard/visit')
          .then(() => sessionStorage.setItem('amf_visited', 'true'))
          .catch(err => console.error('Error recording visit:', err));
      });
    }
  }, []);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <BackToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="blogs" element={<ManageBlogs />} />
            <Route path="media" element={<ManageMedia />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;
