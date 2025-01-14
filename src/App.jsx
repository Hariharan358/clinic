import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar'; // Import Navbar
import HomePage from './components/HomePage';
import AppointmentBooking from './components/AppointmentBooking';
import ConsultationRequest from './components/ConsultationRequest';
import VirtualConsultation from './components/VirtualConsultation';
import Services from './components/Services';
import TeamProfiles from './components/TeamProfiles';
import PatientEducation from './components/PatientEducation';
import Reviews from './components/Reviews';
import Emergency from './components/Emergency';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AdminPage from './admin/AdminPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Login from './components/Login';
import Register from './components/Register';
import ImprovedDentalQueryForm from './components/DentalQuery';

function App() {
  const location = useLocation(); // Get the current route

  // List of routes where Navbar should not be displayed
  const noNavbarRoutes = ['/login', '/register'];

  return (
    <div className="min-h-screen w-screen bg-gray-100">
      {/* Conditionally render Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointment" element={<AppointmentBooking />} />
        <Route path="/consultation-request" element={<ConsultationRequest />} />
        <Route path="/virtual-consultation" element={<VirtualConsultation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<TeamProfiles />} />
        <Route path="/education" element={<PatientEducation />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/query" element={<ImprovedDentalQueryForm />} />
      </Routes>
      <footer className="bg-gray-200 text-center p-4 mt-8">
        <p>&copy; 2023 Smile Bright Dental Clinic. All rights reserved.</p>
        <div className="mt-2">
          <Link to="/privacy-policy" className="mx-2 text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="mx-2 text-blue-600 hover:underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
