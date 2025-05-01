import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
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
    { href: 'https://github.com/TejasGulati', icon: <Github size={18} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/tejas-gulati/', icon: <Linkedin size={18} />, label: 'LinkedIn' },
    { href: 'mailto:tejasgulati11227@gmail.com', icon: <Mail size={18} />, label: 'Email' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e9e0ca]/95 dark:bg-[#3a4a38]/95 backdrop-blur-md shadow-lg border-b border-[#bc8c5f]/30 dark:border-[#d4a373]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-2xl font-bold text-[#3a4a38] dark:text-[#e9e0ca] hover:text-[#bc8c5f] dark:hover:text-[#d4a373] transition-colors"
          >
            Tejas Gulati
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-[#bc8c5f] dark:text-[#d4a373] font-bold'
                    : 'text-[#3a4a38]/90 dark:text-[#e9e0ca]/90 hover:text-[#bc8c5f] dark:hover:text-[#d4a373]'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#bc8c5f] dark:bg-[#d4a373] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Social & Dark Mode */}
          <div className="hidden md:flex items-center space-x-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 text-[#3a4a38] dark:text-[#e9e0ca] hover:bg-[#bc8c5f]/20 dark:hover:bg-[#d4a373]/20 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 hover:bg-[#bc8c5f]/20 dark:hover:bg-[#d4a373]/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? 
                <Sun className="text-[#e9e0ca]" size={20} /> : 
                <Moon className="text-[#3a4a38]" size={20} />
              }
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 text-[#3a4a38] dark:text-[#e9e0ca] hover:bg-[#bc8c5f]/20 dark:hover:bg-[#d4a373]/20 transition-all"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#e9e0ca] dark:bg-[#3a4a38] rounded-lg shadow-xl p-4 mt-2 border border-[#bc8c5f]/20 dark:border-[#d4a373]/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-[#bc8c5f]/20 dark:bg-[#d4a373]/20 text-[#bc8c5f] dark:text-[#d4a373] font-bold'
                      : 'text-[#3a4a38] dark:text-[#e9e0ca] hover:bg-[#3a4a38]/10 dark:hover:bg-[#e9e0ca]/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#3a4a38]/20 dark:border-[#e9e0ca]/20">
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 text-[#3a4a38] dark:text-[#e9e0ca] hover:bg-[#bc8c5f]/20 dark:hover:bg-[#d4a373]/20 transition-all"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
                <button
                  onClick={toggleDarkMode}
                  className="p-3 rounded-full bg-[#3a4a38]/10 dark:bg-[#e9e0ca]/10 hover:bg-[#bc8c5f]/20 dark:hover:bg-[#d4a373]/20 transition-all"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? 
                    <Sun className="text-[#e9e0ca]" size={20} /> : 
                    <Moon className="text-[#3a4a38]" size={20} />
                  }
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;