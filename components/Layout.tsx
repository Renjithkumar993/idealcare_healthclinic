import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Appointments', path: '/online-clinic' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-100 transition-all duration-300">
        <div className="w-full px-6 md:px-12 h-20 flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <NavLink to="/" className="flex flex-col">
            <span className="font-heading text-2xl font-bold text-brand-800 tracking-tight">
              Ideal Cure.
            </span>
            <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-brand-500">
              Homeopathy
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 bg-brand-50/50 px-8 py-2 rounded-full border border-brand-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-600 font-bold' : 'text-gray-500 hover:text-brand-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <NavLink 
              to="/contact" 
              className="hidden md:inline-flex px-6 py-2.5 bg-brand-500 text-white text-sm font-bold rounded-full hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 hover:-translate-y-0.5"
            >
              Book Now
            </NavLink>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 text-brand-800 bg-brand-50 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-8 gap-6 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="text-3xl font-heading font-bold text-brand-900 hover:text-brand-500"
          >
            {link.name}
          </NavLink>
        ))}
        <NavLink to="/contact" className="mt-8 px-6 py-4 bg-brand-500 text-white text-center rounded-xl font-bold text-lg">
          Book Appointment
        </NavLink>
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white pt-20 pb-10 rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-brand-800 pb-16">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-brand-100">Ideal Cure.</h3>
            <p className="text-brand-200/80 leading-relaxed text-sm">
              Empowering your health journey with natural, effective, and holistic homeopathic care.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-brand-300">Contact</h4>
            <ul className="space-y-4 text-brand-100/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0" />
                <span>Unit 1 - 151 Main St,<br/> Fredericton, NB E3C 1A7</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-400" />
                <span>(506)-461-7535</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-400" />
                <span>contact@idealcurehomeopathy.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-300">Links</h4>
            <ul className="space-y-3 text-sm text-brand-100/80">
              <li><NavLink to="/about" className="hover:text-white">About Madhu</NavLink></li>
              <li><NavLink to="/treatments" className="hover:text-white">Our Treatments</NavLink></li>
              <li><NavLink to="/online-clinic" className="hover:text-white">Online Clinic</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white">Book Appointment</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-300">Follow Us</h4>
            <a 
              href="https://www.instagram.com/idealcurehomeopathy/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-brand-800 rounded-2xl hover:bg-brand-700 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="pt-8 text-center text-sm text-brand-400">
          © {new Date().getFullYear()} Ideal Cure Homeopathy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-sand-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};