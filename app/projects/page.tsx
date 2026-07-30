'use client';

/**
 * Choreographic Repertoire Showcase Page (`/projects`)
 * Renders all projects with category filter tabs and asymmetric responsive grid.
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { ImageParallax } from '@/components/animations/ImageParallax';
import { TextReveal } from '@/components/animations/TextReveal';
import { projectsData, Project } from '@/data/projects';

/** Category filter options */
const categories = ['All', 'Solo Works', 'Duet', 'Commemorative', 'Opera & Collaboration', 'Residencies'] as const;

export default function ProjectsPage() {
  // Selected category filter state
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Filter projects by category selection
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="relative overflow-hidden space-y-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Stage light blur background */}
      <div className="stage-spotlight" />
      <div className="stage-glow top-1/4 left-1/4 w-[500px] h-[500px]" />

      {/* HEADER */}
      <section className="pt-8 md:pt-16 space-y-6">
        <TextReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(18,18,21,0.6)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a96e]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9beaa] font-medium">
              Choreographic Repertoire
            </span>
          </div>
        </TextReveal>

        <TextReveal delay={0.1}>
          <h1 className="font-serif text-5xl sm:text-7xl font-light text-[#f5f4f0] leading-tight">
            Selected Works & <br />
            <span className="italic text-[#c8a96e]">Performances</span>
          </h1>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="font-sans text-base sm:text-lg text-[#9e9a91] max-w-2xl font-light leading-relaxed">
            Exploring solo pieces, mass ensemble commemorations, cross-border operatic fusions, and international residencies across East Africa and Senegal.
          </p>
        </TextReveal>
      </section>

      {/* CATEGORY FILTER TABS */}
      <section className="flex flex-wrap items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-6">
        <div className="flex items-center gap-2 pr-4 text-xs uppercase tracking-widest text-[#c8a96e] border-r border-[rgba(255,255,255,0.1)] mr-2 hidden sm:flex">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter Repertoire:</span>
        </div>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = cat === 'All' ? projectsData.length : projectsData.filter(p => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              data-cursor={cat.toUpperCase()}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${isActive
                  ? 'bg-[#c8a96e] text-[#0b0b0c] font-medium shadow-md'
                  : 'bg-[rgba(255,255,255,0.05)] text-[#9e9a91] hover:text-[#f5f4f0] hover:bg-[rgba(255,255,255,0.1)]'
                }`}
            >
              {cat} <span className="opacity-60 ml-1 text-[10px]">({count})</span>
            </button>
          );
        })}
      </section>

      {/* PROJECTS MASONRY/ASYMMETRIC GRID */}
      <section className="min-h-[50vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {filteredProjects.map((project, idx) => {
              const isLarge = idx % 3 === 0;
              const colSpan = isLarge ? 'lg:col-span-8' : 'lg:col-span-4';
              const aspect = isLarge ? 'aspect-[16/9]' : 'aspect-[4/5]';

              return (
                <div
                  key={project.id}
                  className={`${colSpan} group relative flex flex-col justify-between space-y-4`}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <ImageParallax
                      src={project.heroImage}
                      alt={project.title}
                      aspectRatio={aspect}
                      cursorText="VIEW WORK"
                    />
                  </Link>

                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap items-center justify-between text-xs uppercase tracking-widest text-[#c8a96e] gap-2">
                      <span>{project.year}</span>
                      {project.role && (
                        <span className="text-[10px] text-[#f5f4f0] font-normal border border-[rgba(200,169,110,0.3)] px-2 py-0.5 rounded-full bg-[rgba(200,169,110,0.08)]">
                          Role: {project.role}
                        </span>
                      )}
                      <span>{project.location}</span>
                    </div>

                    <h2 className="font-serif text-3xl text-[#f5f4f0] font-light group-hover:text-[#c8a96e] transition-colors">
                      <Link href={`/projects/${project.slug}`} data-cursor="EXPLORE">
                        {project.title}
                      </Link>
                    </h2>

                    <p className="text-xs uppercase tracking-wider text-[#c9beaa] font-medium">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-[#9e9a91] font-light leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[#9e9a91]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c8a96e] hover:text-[#f5f4f0] animated-link"
                        data-cursor="OPEN"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
