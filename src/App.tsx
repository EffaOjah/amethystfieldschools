import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import Academics from './components/Academics';
import Contact from './pages/Contact';
import Information from './pages/Information';
import Apply from './pages/Apply';
import MediaPage from './pages/MediaPage';

function App() {
  return (
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
      </Routes>
    </Router>
  )
}

export default App;
