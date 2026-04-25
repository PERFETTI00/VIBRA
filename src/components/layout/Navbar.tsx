import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/src/constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-display font-black text-xl italic">
            V
          </div>
          <span className={`text-2xl font-display font-black tracking-tighter ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
            {BRAND.name.toUpperCase()}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-semibold transition-colors hover:text-brand-red ${
                scrolled ? 'text-brand-navy' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-red text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform active:scale-95">
            Pide ahora
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className={scrolled ? 'text-brand-navy' : 'text-white'}>
            <ShoppingBag size={24} />
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={scrolled ? 'text-brand-navy' : 'text-white'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-brand-navy border-b border-gray-100 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-red text-white px-6 py-3 rounded-xl font-bold mt-2">
                Pide ahora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
