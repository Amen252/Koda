import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Blogs', path: '/blogs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Pages with full-bleed dark hero images that need white navbar text
  const darkHeroPages = ['/about'];
  const isDarkHero = darkHeroPages.includes(location.pathname) || /^\/blogs\/\d+$/.test(location.pathname);

  return (
    <nav
      className={`fixed w-full z-[100] top-0 transition-all duration-500 ${scrolled
          ? 'py-4 bg-white/90 backdrop-blur-2xl border-b border-primary/5 shadow-sm'
          : 'py-8 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Pro Brand: Geometric Icon + Syncopate Font */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className={`p-2 rounded-xl shadow-lg transition-all duration-500 group-hover:rotate-12 ${(isDarkHero && !scrolled) ? 'bg-white text-primary shadow-white/10' : 'bg-primary text-white shadow-primary/10'}`}>
              <Command className="w-6 h-6" />
            </div>
            <span 
              className={`text-2xl font-bold uppercase tracking-widest leading-none transition-colors duration-500 ${(isDarkHero && !scrolled) ? 'text-white' : 'text-primary'}`}
              style={{ fontFamily: "'Syncopate', sans-serif" }}
            >
              Koda
            </span>
          </Link>

          {/* High-Visibility Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group py-2"
                >
                  <span className={`text-[13px] font-black uppercase tracking-widest transition-all duration-500 ${(isDarkHero && !scrolled)
                      ? (location.pathname === link.path ? 'text-white' : 'text-white/60 group-hover:text-white')
                      : (location.pathname === link.path ? 'text-primary' : 'text-primary/60 group-hover:text-primary')
                    }`}>
                    {link.name}
                  </span>

                  {/* Selection Underline */}
                  <div className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-500 ${(isDarkHero && !scrolled) ? 'bg-white' : 'bg-primary'} ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </Link>
              ))}
            </div>

            {/* Clean Pro Auth */}
            <div className={`flex items-center space-x-8 border-l pl-12 ml-4 transition-colors duration-500 ${(isDarkHero && !scrolled) ? 'border-white/10' : 'border-primary/10'}`}>
              <Link to="/login" className={`text-sm font-black transition-all uppercase tracking-widest ${(isDarkHero && !scrolled) ? 'text-white/50 hover:text-white' : 'text-primary/40 hover:text-primary'}`}>
                Login
              </Link>
              <Link
                to="/register"
                className={`text-[11px] px-8 py-3 rounded-lg font-black uppercase tracking-widest transition-all duration-700 ${(isDarkHero && !scrolled)
                    ? 'bg-white/10 hover:bg-white border border-white/20 text-white hover:text-primary'
                    : 'bg-primary/5 hover:bg-primary border border-primary/20 text-primary hover:text-white'
                  }`}
              >
                Join Koda
              </Link>
            </div>
          </div>

          {/* Simple Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Simplified Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full bg-white border-b border-primary/5 p-8 shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-black text-primary uppercase tracking-tighter"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-primary/5 my-4" />
              <Link to="/login" className="text-center py-4 text-sm font-black uppercase text-primary/60 border border-primary/10 rounded-xl">
                Login
              </Link>
              <Link to="/register" className="text-center py-4 bg-primary text-white text-[11px] uppercase tracking-widest font-black rounded-xl">
                Join Koda
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
