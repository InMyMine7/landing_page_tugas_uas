import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/constants/navigation';

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };
  
  return (
    <motion.nav 
      className={`sticky top-0 z-50 px-6 py-3 transition-all duration-300 ${isScrolled ? 'bg-slate-900/70 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            CyberShield
          </span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)} className="font-medium text-slate-300 hover:text-white transition-colors">{link.label}</button>
          ))}
          <Button onClick={() => handleNavClick('cta')} className="bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-fuchsia-500/20 hover:scale-105 transition-transform btn-shine">
            Mulai Sekarang
          </Button>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-6"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => handleNavClick(link.id)} className="text-left text-slate-300 hover:text-white transition-colors py-2">{link.label}</button>
            ))}
            <Button onClick={() => handleNavClick('cta')} className="bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-fuchsia-500/20 w-full mt-4 py-3 btn-shine">
              Mulai Sekarang
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default React.memo(Navbar);