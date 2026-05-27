import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-white py-4 shadow-xl text-dark-900' : 'bg-transparent py-6 text-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-xl md:text-2xl font-serif tracking-[0.2em] uppercase cursor-pointer transition-colors duration-500 ${scrolled ? 'hover:text-gold-600' : 'hover:text-gold-300'}`}>
          Maison de L'Éclat
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-10 text-xs tracking-[0.2em] uppercase ${scrolled ? 'text-dark-900/70' : 'text-white/70'}`}>
          {['services', 'philosophy', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className={`transition-colors duration-300 relative group ${scrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'}`}
            >
              {item === 'services' ? 'บริการของเรา' : item === 'philosophy' ? 'ศาสตร์แห่งการดูแล' : 'ติดต่อเรา'}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-gold-600' : 'bg-gold-400'}`}></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className={`px-7 py-3 border text-xs tracking-[0.15em] uppercase transition-all duration-500 rounded-sm ${scrolled ? 'border-gold-500 text-dark-900 hover:bg-gold-500 hover:text-white' : 'border-gold-500/50 text-white hover:bg-gold-500 hover:text-dark-900 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]'}`}
          >
            ประเมินราคาฟรี
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden transition-colors ${scrolled ? 'text-dark-900 hover:text-gold-600' : 'text-white hover:text-gold-400'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t px-6 py-8 flex flex-col space-y-6 text-xs tracking-[0.2em] uppercase mt-4 ${scrolled ? 'glass-white border-dark-900/10 text-dark-900' : 'glass-dark border-white/10 text-white'}`}
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className={`py-2 ${scrolled ? 'hover:text-gold-600' : 'text-white/80 hover:text-gold-400'}`}>บริการของเรา</a>
            <a href="#philosophy" onClick={() => setIsMenuOpen(false)} className={`py-2 ${scrolled ? 'hover:text-gold-600' : 'text-white/80 hover:text-gold-400'}`}>ศาสตร์แห่งการดูแล</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className={`py-2 ${scrolled ? 'hover:text-gold-600' : 'text-white/80 hover:text-gold-400'}`}>ติดต่อเรา</a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className={`py-4 text-center font-semibold rounded-sm mt-4 ${scrolled ? 'bg-gold-gradient text-white' : 'bg-gold-gradient text-dark-900'}`}
            >
              ประเมินราคาฟรี
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}