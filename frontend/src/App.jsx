import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SoftwareDevelopment from './Pages/services/SoftwareDevelopment';
import FullStackWebDev from './Pages/services/FullStackWebDev';
import MobileAppDev from './Pages/services/MobileAppDev';
import GraphicsDesign from './Pages/services/GraphicsDesign';
import VideoEditing from './Pages/services/VideoEditing';
import LearningBootcamp from './Pages/services/LearningBootcamp';
import CyberSecurity from './Pages/services/CyberSecurity';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/fullstack-web-development" element={<FullStackWebDev />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDev />} />
        <Route path="/services/graphics-design" element={<GraphicsDesign />} />
        <Route path="/services/video-editing" element={<VideoEditing />} />
        <Route path="/services/learning-bootcamp" element={<LearningBootcamp />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
