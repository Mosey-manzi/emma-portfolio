'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#08080a] border-t border-[rgba(200,169,110,0.15)] text-[#9e9a91] pt-20 pb-12 overflow-hidden">
      {/* Stage light blur background */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(200,169,110,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[rgba(255,255,255,0.06)]">
          {/* Brand & Quote Column */}
          <div className="md:col-span-6 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl text-[#f5f4f0] group-hover:text-[#c8a96e] transition-colors">
                EMMANUEL AHIMANA
              </span>
              <span className="block text-xs uppercase tracking-[0.3em] text-[#c8a96e] mt-1">
                Contemporary Choreographer — Kigali, Rwanda
              </span>
            </Link>

            <blockquote className="font-serif italic text-lg text-[#c9beaa] max-w-md leading-relaxed">
              &ldquo;Dance is a dialogue with emotions, a pathway to peacefulness and resilience where even in the deepest night, light insists on being born.&rdquo;
            </blockquote>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9e9a91]">
              <Sparkles className="w-3.5 h-3.5 text-[#c8a96e]" />
              <span>Kigali — Senegal — Kenya — Tanzania — Congo</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#c8a96e] font-semibold">
              Exploration
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#f5f4f0] transition-colors">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#f5f4f0] transition-colors">
                  Choreographic Works
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#f5f4f0] transition-colors">
                  Performance Gallery
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#f5f4f0] transition-colors">
                  Executive Resume / CV
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f5f4f0] transition-colors">
                  Inquiries & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#c8a96e] font-semibold">
              Connect
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-[#c9beaa]">
                Kigali, Rwanda (Central/East Africa)
              </p>
              <a
                href="mailto:emmanuelahimana01@gmail.com"
                className="block hover:text-[#c8a96e] transition-colors underline"
              >
                emmanuelahimana01@gmail.com
              </a>
              <p className="text-xs text-[#9e9a91]">+250 780 615 144</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/emmymario8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[rgba(255,255,255,0.1)] hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:emmanuelahimana01@gmail.com"
                className="p-2.5 rounded-full border border-[rgba(255,255,255,0.1)] hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="p-2.5 rounded-full border border-[rgba(255,255,255,0.1)] hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#68645d]">
          <p>&copy; 2026 Emmanuel Ahimana. All rights reserved.</p>
          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#9e9a91] hover:text-[#c8a96e] uppercase tracking-widest text-[11px] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c8a96e]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
