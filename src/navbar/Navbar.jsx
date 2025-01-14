import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-white">
          PannerSelvam Dental Clinic
        </Link>
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row md:items-center absolute md:relative bg-blue-600 md:bg-transparent w-full md:w-auto top-16 left-0 md:top-auto md:left-auto z-50`}
        >
          <Link
            to="/appointment"
            className="block px-4 py-2 text-white hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Appointments
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-white hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/team"
            className="block px-4 py-2 text-white hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link
            to="/education"
            className="block px-4 py-2 text-white hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Patient Education
          </Link>
          <Link
            to="/reviews"
            className="block px-4 py-2 text-white hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-white hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
