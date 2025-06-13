// components/Navbar.jsx
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ 
  logoText = { first: "My", second: "Portfolio" },
  logoColor = "purple-400",
  navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ],
  ctaButton = { text: "Contact", to: "contact" }
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Update the scroll effect to include more properties
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 10;
      const opacity = Math.min(scrollY / 100, 0.8); // Max opacity of 0.8
      
      if (scrollY > threshold) {
        setScrolled(true);
        document.querySelector('header').style.setProperty('--scroll-opacity', opacity);
      } else {
        setScrolled(false);
        document.querySelector('header').style.setProperty('--scroll-opacity', 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <header 
      className={`
        fixed w-full z-50 transition-all duration-300 
        ${scrolled 
          ? 'bg-gray-900/[var(--scroll-opacity)] backdrop-blur-[8px] border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
        } 
        text-white
      `}
      style={{ 
        '--scroll-opacity': 0,
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500} 
              className="text-xl font-bold cursor-pointer flex items-center"
              onSetActive={() => handleSetActive('home')}
            >
              <span className={`text-${logoColor}`}>{logoText.first}</span>
              <span className="ml-1">{logoText.second}</span>
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={`px-3 py-2  rounded-md text-lg font-medium transition-colors cursor-pointer hover:text-${logoColor} ${
                  activeLink === link.to ? `text-${logoColor} font-semibold` : 'text-gray-300'
                }`}
                onSetActive={() => handleSetActive(link.to)}
                spy={true}
              >
                {link.name}
              </ScrollLink>
            ))}

            {/* CTA Button */}
            
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === link.to ? `text-${logoColor} font-semibold` : 'text-gray-300'
              } hover:bg-gray-700 cursor-pointer`}
              onSetActive={() => handleSetActive(link.to)}
              spy={true}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}

          {/* Mobile CTA Button */}
          {ctaButton && (
            <div className="px-3 py-2">
              <ScrollLink
                to={ctaButton.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={`block w-full text-center px-4 py-2 rounded-md text-base font-medium bg-${logoColor} text-white hover:bg-opacity-90 transition-all`}
                onClick={() => setIsOpen(false)}
              >
                {ctaButton.text}
              </ScrollLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;