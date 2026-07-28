'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { TextReveal } from '@/components/animations/TextReveal';
import { projectsData } from '@/data/projects';

// Aggregate all gallery images with metadata
const allGalleryItems = projectsData.flatMap((project) =>
  project.gallery.map((imgSrc, idx) => ({
    id: `${project.slug}-${idx}`,
    src: imgSrc,
    title: project.title,
    subtitle: project.subtitle,
    location: project.location,
    year: project.year,
    slug: project.slug,
    category: project.category
  }))
);

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredItems = filter === 'All'
    ? allGalleryItems
    : allGalleryItems.filter(item => item.category === filter);

  const currentItem = lightboxIdx !== null ? filteredItems[lightboxIdx] : null;

  return (
    <div className="relative overflow-hidden space-y-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Stage light blur background */}
      <div className="stage-spotlight" />
      <div className="stage-glow top-1/4 right-1/4 w-[500px] h-[500px]" />

      {/* HEADER */}
      <section className="pt-8 md:pt-16 space-y-6">
        <TextReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(18,18,21,0.6)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a96e]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9beaa] font-medium">
              Performance & Residency Gallery
            </span>
          </div>
        </TextReveal>

        <TextReveal delay={0.1}>
          <h1 className="font-serif text-5xl sm:text-7xl font-light text-[#f5f4f0] leading-tight">
            Visual Movement <br />
            <span className="italic text-[#c8a96e]">Documentation</span>
          </h1>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="font-sans text-base sm:text-lg text-[#9e9a91] max-w-2xl font-light leading-relaxed">
            High-resolution photography documenting choreography, international residencies, and stage performances across Africa.
          </p>
        </TextReveal>
      </section>

      {/* FILTER TABS */}
      <section className="flex flex-wrap items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-6">
        {['All', 'Solo Works', 'Commemorative', 'Opera & Collaboration', 'Residencies'].map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor={cat.toUpperCase()}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? 'bg-[#c8a96e] text-[#0b0b0c] font-medium shadow-md'
                  : 'bg-[rgba(255,255,255,0.05)] text-[#9e9a91] hover:text-[#f5f4f0]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </section>

      {/* MASONRY GALLERY GRID */}
      <section className="min-h-[60vh]">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              whileHover={{ y: -4 }}
              onClick={() => setLightboxIdx(idx)}
              className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[rgba(255,255,255,0.08)] cursor-pointer group bg-[#121215]"
              data-cursor="EXPAND"
            >
              <Image
                src={item.src}
                alt={`${item.title} performance photo`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Metadata Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-widest text-[#c8a96e]">
                  {item.year} • {item.location}
                </span>
                <h3 className="font-serif text-xl text-[#f5f4f0] font-light">
                  {item.title}
                </h3>
                <p className="text-xs text-[#c9beaa] font-light truncate">
                  {item.subtitle}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#c8a96e]">
                  <span>Click for Fullscreen</span>
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between z-50 text-xs uppercase tracking-widest text-[#9e9a91]">
              <div>
                <span className="text-[#c8a96e] font-semibold">{currentItem.title}</span> — {currentItem.year}
              </div>
              <button
                onClick={() => setLightboxIdx(null)}
                className="p-3 text-[#f5f4f0] hover:text-[#c8a96e] bg-black/50 rounded-full"
                data-cursor="CLOSE"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Area */}
            <div className="relative w-full max-w-6xl h-[75vh] mx-auto my-auto flex items-center justify-center">
              <button
                onClick={() => setLightboxIdx((lightboxIdx! - 1 + filteredItems.length) % filteredItems.length)}
                className="absolute left-2 sm:left-6 z-50 p-3 text-[#f5f4f0] hover:text-[#c8a96e] bg-black/50 rounded-full"
                data-cursor="PREV"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={currentItem.src}
                  alt={currentItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <button
                onClick={() => setLightboxIdx((lightboxIdx! + 1) % filteredItems.length)}
                className="absolute right-2 sm:right-6 z-50 p-3 text-[#f5f4f0] hover:text-[#c8a96e] bg-black/50 rounded-full"
                data-cursor="NEXT"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer Caption */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 z-50 pt-2 border-t border-[rgba(255,255,255,0.1)] text-xs text-[#9e9a91]">
              <p>{currentItem.subtitle} — {currentItem.location}</p>
              <Link
                href={`/projects/${currentItem.slug}`}
                className="inline-flex items-center gap-1.5 text-[#c8a96e] hover:text-[#f5f4f0] uppercase tracking-wider"
                data-cursor="GO TO PIECE"
              >
                <span>Go to Piece Detail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
