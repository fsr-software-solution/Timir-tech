import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import FullStackWebDev from './pages/services/FullStackWebDev';
import MobileAppDev from './pages/services/MobileAppDev';
import GraphicsDesign from './pages/services/GraphicsDesign';
import VideoEditing from './pages/services/VideoEditing';
import LearningBootcamp from './pages/services/LearningBootcamp';

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
