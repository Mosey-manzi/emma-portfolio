'use client';

/**
 * Dynamic Project Detail Page (`/projects/[slug]`)
 * Displays full choreographic narrative, performance specifications, 
 * explicit role attribution, creative team credits, image gallery & fullscreen lightbox.
 */

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Clock, Users, Tag, Sparkles, X, ChevronLeft, ChevronRight, Maximize2, Camera, Music, Award, UserCheck } from 'lucide-react';
import { TextReveal } from '@/components/animations/TextReveal';
import { Button } from '@/components/ui/Button';
import { projectsData } from '@/data/projects';

/**
 * Returns an appropriate Lucide icon component based on the credit role title.
 * Used in the Creative Team & Credits sidebar card.
 */
const getCreditIcon = (roleName: string) => {
  const lower = roleName.toLowerCase();
  if (lower.includes('photo') || lower.includes('camera')) return <Camera className="w-3.5 h-3.5 text-[#c8a96e]" />;
  if (lower.includes('music') || lower.includes('singer')) return <Music className="w-3.5 h-3.5 text-[#c8a96e]" />;
  if (lower.includes('emmanuel') || lower.includes('soloist') || lower.includes('dancer')) return <UserCheck className="w-3.5 h-3.5 text-[#c8a96e]" />;
  if (lower.includes('choreograph') || lower.includes('artistic')) return <Award className="w-3.5 h-3.5 text-[#c8a96e]" />;
  return <Sparkles className="w-3.5 h-3.5 text-[#c8a96e]" />;
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Retrieve project data by URL slug parameter
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  // Calculate previous and next project indices for pagination footer
  const prevProject = projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  // Image Lightbox Modal State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const nextLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  return (
    <div className="relative overflow-hidden space-y-20 md:space-y-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Stage light blur background */}
      <div className="stage-spotlight" />
      <div className="stage-glow top-1/3 left-1/4 w-[500px] h-[500px]" />

      {/* BACK BUTTON */}
      <div className="pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c8a96e] hover:text-[#f5f4f0] transition-colors"
          data-cursor="BACK"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Works</span>
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#c8a96e]">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.category}</span>
            {project.role && (
              <>
                <span>•</span>
                <span className="text-[#f5f4f0] font-medium border border-[rgba(200,169,110,0.4)] px-2.5 py-0.5 rounded-full bg-[rgba(200,169,110,0.1)]">
                  {project.role}
                </span>
              </>
            )}
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-light text-[#f5f4f0] leading-tight">
            {project.title}
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#c9beaa] font-light max-w-3xl">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden border border-[rgba(200,169,110,0.2)] shadow-2xl">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-transparent opacity-80" />
        </div>
      </section>

      {/* METADATA SPECS GRID */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-6 p-8 glass-panel rounded-sm text-xs text-[#9e9a91]">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[#c8a96e] uppercase tracking-wider font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>Location</span>
          </div>
          <p className="text-[#f5f4f0] text-sm">{project.location}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[#c8a96e] uppercase tracking-wider font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>Duration</span>
          </div>
          <p className="text-[#f5f4f0] text-sm">{project.duration}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[#c8a96e] uppercase tracking-wider font-medium">
            <Calendar className="w-3.5 h-3.5" />
            <span>Premiere Year</span>
          </div>
          <p className="text-[#f5f4f0] text-sm">{project.year}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[#c8a96e] uppercase tracking-wider font-medium">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Emmanuel&apos;s Role</span>
          </div>
          <p className="text-[#f5f4f0] text-sm truncate">{project.role || 'Choreographer'}</p>
        </div>

        {project.collaborators?.length ? (
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[#c8a96e] uppercase tracking-wider font-medium">
              <Users className="w-3.5 h-3.5" />
              <span>{project.collaboratorsLabel ?? "Ensemble"}</span>
            </div>
            <p className="text-[#f5f4f0] text-sm truncate">
              {project.collaborators?.[0]}
            </p>
          </div>
        ) : null}
      </section>

      {/* NARRATIVE & CONCEPT STORY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Concept Narrative */}
        <div className="lg:col-span-8 space-y-6 text-base text-[#9e9a91] font-light leading-relaxed">
          <TextReveal>
            <h2 className="font-serif text-3xl text-[#f5f4f0] font-light border-b border-[rgba(255,255,255,0.08)] pb-4">
              Choreographic Concept
            </h2>
          </TextReveal>

          {project.quote && (
            <TextReveal delay={0.1}>
              <blockquote className="font-serif italic text-2xl text-[#c9beaa] border-l-2 border-[#c8a96e] pl-6 py-2 leading-relaxed">
                &ldquo;{project.quote}&rdquo;
              </blockquote>
            </TextReveal>
          )}

          <TextReveal delay={0.2}>
            <div className="whitespace-pre-line space-y-4">
              {project.concept}
            </div>
          </TextReveal>
        </div>

        {/* Right Collaborators & Credits */}
        <div className="lg:col-span-4 space-y-8 glass-panel p-8 rounded-sm">
          {/* Emmanuel's Specific Role Card */}
          {project.role && (
            <div className="p-4 rounded border border-[rgba(200,169,110,0.3)] bg-[rgba(200,169,110,0.05)] space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96e] font-semibold block">
                Emmanuel&apos;s Contribution
              </span>
              <p className="text-sm font-medium text-[#f5f4f0] flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#c8a96e] shrink-0" />
                <span>{project.role}</span>
              </p>
            </div>
          )}

          {/* Structured Creative Team Credits */}
          {project.credits && project.credits.length > 0 ? (
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#c8a96e] font-semibold flex items-center gap-2 border-b border-[rgba(255,255,255,0.08)] pb-3">
                <Award className="w-4 h-4" />
                <span>Creative Team & Credits</span>
              </h3>
              <ul className="space-y-3 text-xs">
                {project.credits.map((credit, idx) => (
                  <li key={idx} className="flex items-start justify-between gap-3 border-b border-[rgba(255,255,255,0.04)] pb-2.5">
                    <div className="flex items-center gap-1.5 text-[#9e9a91] font-medium shrink-0">
                      {getCreditIcon(credit.role)}
                      <span>{credit.role}:</span>
                    </div>
                    <span className="text-[#f5f4f0] font-normal text-right italic">{credit.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#c8a96e] font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Key Collaborators</span>
              </h3>
              {project.collaborators?.length ? (
                <ul className="space-y-2 text-xs text-[#f5f4f0]">
                  {project.collaborators.map((collab, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 border-b border-[rgba(255,255,255,0.05)] pb-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]" />
                      <span>{collab}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-[#9e9a91] italic">
                  No collaborators listed.
                </p>
              )}
            </div>
          )}

          {/* Performance Tags */}
          <div className="space-y-3 pt-2 border-t border-[rgba(255,255,255,0.08)]">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#c8a96e] font-semibold flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Performance Tags</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[rgba(200,169,110,0.3)] text-[#c9beaa]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      {project.gallery.length > 0 && (
        <section className="space-y-8">
          <div className="border-b border-[rgba(255,255,255,0.08)] pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
                Visual Documentation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f4f0] font-light mt-1">
                Performance Gallery ({project.gallery.length})
              </h2>
            </div>
            <span className="text-xs text-[#9e9a91] hidden sm:block">Click image for fullscreen view</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((imgSrc, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(idx)}
                className="relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer border border-[rgba(255,255,255,0.08)] group"
                data-cursor="EXPAND"
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} gallery photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-[#c8a96e]" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* PREVIOUS / NEXT PROJECT NAVIGATION */}
      <section className="pt-12 border-t border-[rgba(255,255,255,0.08)] grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          href={`/projects/${prevProject.slug}`}
          className="glass-panel p-6 rounded-sm space-y-2 group hover:border-[#c8a96e] transition-colors"
          data-cursor="PREVIOUS"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#c8a96e] flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            Previous Piece
          </span>
          <h3 className="font-serif text-xl text-[#f5f4f0] group-hover:text-[#c8a96e] transition-colors">
            {prevProject.title}
          </h3>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="glass-panel p-6 rounded-sm space-y-2 text-right group hover:border-[#c8a96e] transition-colors flex flex-col items-end"
          data-cursor="NEXT"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#c8a96e] flex items-center gap-1">
            Next Piece
            <ArrowRight className="w-3 h-3" />
          </span>
          <h3 className="font-serif text-xl text-[#f5f4f0] group-hover:text-[#c8a96e] transition-colors">
            {nextProject.title}
          </h3>
        </Link>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-[#f5f4f0] hover:text-[#c8a96e] z-50 bg-black/50 rounded-full"
              aria-label="Close Lightbox"
              data-cursor="CLOSE"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevLightboxImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-[#f5f4f0] hover:text-[#c8a96e] z-50 bg-black/50 rounded-full"
              aria-label="Previous Image"
              data-cursor="PREV"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextLightboxImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-[#f5f4f0] hover:text-[#c8a96e] z-50 bg-black/50 rounded-full"
              aria-label="Next Image"
              data-cursor="NEXT"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image View */}
            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={project.gallery[lightboxIndex]}
                alt="Fullscreen gallery view"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
