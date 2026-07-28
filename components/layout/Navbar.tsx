'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Mark */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-light tracking-wide text-[#f5f4f0] group-hover:text-[#c8a96e] transition-colors duration-300">
              EMMANUEL AHIMANA
            </span>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#9e9a91] group-hover:text-[#c9beaa] transition-colors duration-300 -mt-0.5">
              Choreographer — Kigali
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                    isActive ? 'text-[#c8a96e]' : 'text-[#9e9a91] hover:text-[#f5f4f0]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#c8a96e]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f5f4f0] hover:text-[#c8a96e] transition-colors"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-[#0b0b0c] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#c8a96e] border-b border-[rgba(200,169,110,0.2)] pb-2">
                Navigation Menu
              </span>
              {navItems.map((item, idx) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center justify-between font-serif text-3xl tracking-tight transition-colors ${
                        isActive ? 'text-[#c8a96e]' : 'text-[#f5f4f0] hover:text-[#c8a96e]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className={`w-5 h-5 opacity-40 ${isActive ? 'text-[#c8a96e] opacity-100' : ''}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 flex flex-col space-y-2">
              <p className="text-xs text-[#9e9a91]">Emmanuel Ahimana Contemporary Dance</p>
              <p className="text-xs text-[#c9beaa]">Kigali, Rwanda — East Africa</p>
              <a
                href="mailto:emmanuelahimana01@gmail.com"
                className="text-xs text-[#c8a96e] underline pt-1"
              >
                emmanuelahimana01@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
