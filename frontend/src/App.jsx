import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import ScrollToTop from './Components/Layout/ScrollToTop';
import Home from './pages/Home';
import SoftwareDevelopment from './Pages/services/SoftwareDevelopment';
import FullStackWebDev from './Pages/services/FullStackWebDev';
import MobileAppDev from './Pages/services/MobileAppDev';
import GraphicsDesign from './Pages/services/GraphicsDesign';
import VideoEditing from './Pages/services/VideoEditing';
import LearningBootcamp from './Pages/services/LearningBootcamp';
import CyberSecurity from './Pages/services/CyberSecurity';
import WebDevelopmentService from './Pages/services/WebDevelopmentService';
import MobileDevelopmentService from './Pages/services/MobileDevelopmentService';
import GraphicsDesignService from './Pages/services/GraphicsDesignService';
import VideoEditingService from './Pages/services/VideoEditingService';
import CyberSecurityService from './Pages/services/CyberSecurityService';
import PrivacyPolicy from './Pages/legal/PrivacyPolicy';
import TermsOfService from './Pages/legal/TermsOfService';
import CookiePolicy from './Pages/legal/CookiePolicy';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/services/web-development-service" element={<WebDevelopmentService />} />
        <Route path="/services/mobile-development-service" element={<MobileDevelopmentService />} />
        <Route path="/services/graphics-design-service" element={<GraphicsDesignService />} />
        <Route path="/services/video-editing-service" element={<VideoEditingService />} />
        <Route path="/services/cyber-security-service" element={<CyberSecurityService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
