import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiUploadCloud, FiTrash2, FiFileText } from 'react-icons/fi';
import api from '../../api';

const ManageMedia = () => {
  const [mediaItems, setMediaItems] = useState<{id: number, url: string, title: string, public_id: string}[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingMedia, setEditingMedia] = useState<{id: number, title: string} | null>(null);
  const [messageData, setMessageData] = useState<{isOpen: boolean, title: string, text: string}>({ isOpen: false, title: '', text: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showMessage = (title: string, text: string) => {
    setMessageData({ isOpen: true, title, text });
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const { data } = await api.get('/media');
      setMediaItems(data);
    } catch (error) {
      console.error('Error fetching media', error);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    if (!title.trim()) {
      showMessage('Missing Title', 'Please provide a title for the media before uploading.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('media', file);
    formData.append('title', title);

    setIsUploading(true);
    try {
      const { data } = await api.post('/media/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      // Add the new item to the top of the list
      setMediaItems([{ id: data.id, url: data.url, title: data.title, public_id: data.public_id }, ...mediaItems]);
      setTitle(''); // reset title
    } catch (error) {
      console.error('Upload failed', error);
      showMessage('Upload Failed', 'An error occurred while uploading the media. Check console.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this media?')) {
      try {
        await api.delete(`/media/${id}`);
        fetchMedia();
      } catch (error) {
        console.error('Error deleting media', error);
        showMessage('Error', 'Failed to delete media.');
      }
    }
  };

  const openEditModal = (id: number, currentTitle: string) => {
    setEditingMedia({ id, title: currentTitle || '' });
    setIsEditModalOpen(true);
  };

  const handleUpdateMedia = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMedia) return;
    try {
      await api.put(`/media/${editingMedia.id}`, { title: editingMedia.title });
      setIsEditModalOpen(false);
      fetchMedia();
    } catch (error) {
      console.error('Error updating media', error);
      showMessage('Error', 'Failed to update media title.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Media Library</h1>
          <p className="text-neutral-400 mt-1">Upload and manage your images and videos.</p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-4"
      >
        <div className="w-full max-w-md space-y-4 text-left">
          <label className="block text-neutral-400 text-sm">Media Title (Required before uploading)</label>
          <div className="relative">
            <FiFileText className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input 
              type="text" 
              placeholder="e.g., Graduation Ceremony 2026"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>
        </div>

        <div className="relative group cursor-pointer w-full max-w-md">
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleUpload}
            disabled={isUploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className={`p-8 border-2 border-dashed rounded-2xl transition-colors flex flex-col items-center justify-center space-y-4 ${isUploading ? 'border-pink-500/50 bg-pink-500/10' : 'border-neutral-700 bg-neutral-900 group-hover:border-pink-500 group-hover:bg-neutral-800/50'}`}>
            <FiUploadCloud className={`w-12 h-12 ${isUploading ? 'text-pink-500 animate-bounce' : 'text-neutral-500 group-hover:text-pink-400'} transition-colors`} />
            <div>
              <p className="text-white font-medium text-lg">{isUploading ? 'Uploading to Cloudinary...' : 'Click to Upload Media'}</p>
              <p className="text-neutral-500 text-sm mt-1">Supports JPG, PNG, MP4</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaItems.map((item) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={item.id} 
            className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col"
          >
            <div className="relative aspect-square">
              <img src={item.url} alt={item.title || 'Media'} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 space-y-3 border-t border-neutral-800">
              <p className="text-white font-medium truncate" title={item.title || 'Untitled'}>{item.title || 'Untitled'}</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => openEditModal(item.id, item.title)}
                  className="flex-1 flex justify-center items-center gap-2 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-sm font-medium"
                >
                  <FiFileText /> Edit
                </button>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 flex justify-center items-center gap-2 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-sm font-medium"
                >
                  <FiTrash2 /> Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {isEditModalOpen && editingMedia && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl w-full max-w-md shadow-2xl relative"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Edit Media Title</h2>
            <form onSubmit={handleUpdateMedia} className="space-y-4">
              <div>
                <label className="block text-neutral-400 mb-1">Title</label>
                <input 
                  type="text" 
                  value={editingMedia.title} 
                  onChange={e => setEditingMedia({...editingMedia, title: e.target.value})}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-5 py-2.5 text-neutral-400 hover:text-white transition-colors">Cancel</button>
                <button type="submit" className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-pink-500/25">Save Changes</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Message Modal */}
      {messageData.isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl w-full max-w-sm shadow-2xl relative flex flex-col items-center text-center"
          >
            <h2 className="text-xl font-bold text-white mb-2">{messageData.title}</h2>
            <p className="text-neutral-400 mb-6">{messageData.text}</p>
            <button 
              onClick={() => setMessageData({ ...messageData, isOpen: false })} 
              className="w-full bg-pink-600 hover:bg-pink-500 text-white py-3 rounded-xl font-medium transition-colors shadow-lg shadow-pink-500/25"
            >
              Got it
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ManageMedia;
