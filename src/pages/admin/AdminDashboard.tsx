import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUsers, FiFileText, FiImage } from 'react-icons/fi';
import api from '../../api';

const AdminDashboard = () => {
  const [statsData, setStatsData] = useState({ totalBlogs: 0, totalMedia: 0, totalVisits: 0, activeSessions: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get('/dashboard/stats');
        setStatsData(data);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      }
    };
    fetchStats();
  }, []);

  const stats = [
    { label: 'Total Blogs', value: statsData.totalBlogs, icon: <FiFileText className="w-6 h-6 text-purple-400" />, color: 'from-purple-500/20 to-purple-500/0 border-purple-500/20' },
    { label: 'Media Assets', value: statsData.totalMedia, icon: <FiImage className="w-6 h-6 text-pink-400" />, color: 'from-pink-500/20 to-pink-500/0 border-pink-500/20' },
    { label: 'Total Visits', value: statsData.totalVisits, icon: <FiUsers className="w-6 h-6 text-blue-400" />, color: 'from-blue-500/20 to-blue-500/0 border-blue-500/20' },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-neutral-400">Welcome back! Here's what's happening today.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-6 rounded-2xl bg-gradient-to-b ${stat.color} border bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-neutral-400">{stat.label}</p>
                <h3 className="text-3xl font-bold text-white mt-2">{stat.value}</h3>
              </div>
              <div className="p-3 bg-neutral-800/50 rounded-xl">
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="pt-4"
      >
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/admin/blogs"
            className="flex items-center gap-4 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:bg-neutral-800/60 hover:border-purple-500/50 transition-all group"
          >
            <div className="p-4 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
              <FiFileText className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">Manage Blogs</h3>
              <p className="text-sm text-neutral-500 mt-1">Create, edit, or delete blog posts.</p>
            </div>
          </Link>

          <Link 
            to="/admin/media"
            className="flex items-center gap-4 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:bg-neutral-800/60 hover:border-pink-500/50 transition-all group"
          >
            <div className="p-4 bg-pink-500/10 rounded-xl group-hover:bg-pink-500/20 transition-colors">
              <FiImage className="w-8 h-8 text-pink-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">Manage Media</h3>
              <p className="text-sm text-neutral-500 mt-1">Upload and organize gallery images and videos.</p>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
