import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'experience', label: 'Experience', path: '/experience' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { href: 'https://github.com/TejasGulati', icon: <Github size={20} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/tejas-gulati/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
    { href: 'mailto:tejasgulati101@gmail.com', icon: <Mail size={20} />, label: 'Email' },
    { href: 'https://drive.google.com/file/d/1CHSmFEME9H1IG4JfVafxM_y4MmNasv2K/view?usp=sharing', icon: <FileText size={20} />, label: 'Resume' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          <Link 
            to="/" 
            className="text-2xl font-bold text-gray-900 hover:text-blue-700 transition-colors"
          >
            Tejas Gulati
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-700 font-semibold'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-xl shadow-lg p-4 mt-2 border border-gray-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-center space-x-3 pt-4 mt-2 border-t border-gray-200">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;