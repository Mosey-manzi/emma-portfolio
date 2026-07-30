'use client';

/**
 * Portfolio Homepage (`/`)
 * Features Emmanuel Ahimana's hero intro, artistic manifesto statement,
 * featured choreographies showcase, core philosophy pillars & call to action.
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Download, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TextReveal } from '@/components/animations/TextReveal';
import { ImageParallax } from '@/components/animations/ImageParallax';
import { projectsData } from '@/data/projects';
import { biographyData } from '@/data/biography';

export default function HomePage() {
  // Filter projects configured for featured display on Homepage
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="relative overflow-hidden space-y-32 md:space-y-44 pb-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-between px-6 md:px-12 max-w-7xl mx-auto pt-8 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content Left */}
          <div className="lg:col-span-7 space-y-8 z-10">
            <TextReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(18,18,21,0.6)] backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#c8a96e]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9beaa] font-medium">
                  Contemporary Choreographer & Soloist
                </span>
              </div>
            </TextReveal>

            <TextReveal delay={0.2}>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[#f5f4f0] leading-[0.95]">
                EMMANUEL <br />
                <span className="italic text-[#c8a96e] font-normal">AHIMANA</span>
              </h1>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="font-sans text-base sm:text-lg text-[#9e9a91] max-w-xl font-light leading-relaxed">
                Sculpting movement through space, memory, and silence. Based in Kigali, Rwanda — creating contemporary dance pieces that give voice to resilience and human emotion.
              </p>
            </TextReveal>

            {/* CTAs */}
            <TextReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/projects" variant="gold" size="lg">
                  <span>Explore Choreographies</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
                <Button href="/resume" variant="secondary" size="lg">
                  <Download className="w-4 h-4 mr-1 text-[#c8a96e]" />
                  <span>Download CV</span>
                </Button>
              </div>
            </TextReveal>

            {/* Quick Hero Metadata */}
            <TextReveal delay={0.5}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[rgba(255,255,255,0.08)] text-xs text-[#9e9a91]">
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl text-[#f5f4f0] font-light">10+</span>
                  <span className="uppercase tracking-widest text-[10px] text-[#c8a96e]">Years of Experience</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl text-[#f5f4f0] font-light">100+</span>
                  <span className="uppercase tracking-widest text-[10px] text-[#c8a96e]">Performances</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl text-[#f5f4f0] font-light">5</span>
                  <span className="uppercase tracking-widest text-[10px] text-[#c8a96e]">Nations Toured</span>
                </div>
              </div>
            </TextReveal>
          </div>

          {/* Hero Visual Right — Image Card IMG_9966 */}
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Primary Featured Image: IMG_9966 */}
              <div className="relative rounded-sm overflow-hidden border border-[rgba(200,169,110,0.2)] shadow-2xl">
                <ImageParallax
                  src="/images/irebe/IMG_0025.jpg"
                  alt="Emmanuel Ahimana performing IREBE (IMG_9966)"
                  aspectRatio="aspect-[3/4]"
                  priority
                />
              </div>

              {/* Floating Secondary Image Card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-10 -left-10 w-44 sm:w-52 p-3 bg-[#121215]/90 border border-[rgba(200,169,110,0.3)] backdrop-blur-md rounded-sm shadow-2xl hidden sm:block"
              >
                <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-2">
                  <Image
                    src="/images/kwibuka30/IMG_3752.jpg"
                    alt="Kwibuka 30 Choreography"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-serif text-xs text-[#f5f4f0] font-medium truncate">Kwibuka 30</p>
                <p className="text-[10px] uppercase tracking-widest text-[#c8a96e]">Choreographer & artistic director: <em style={{ color: "white" }}>Wesley Ruzibiza</em></p>
                <p className="text-[10px] uppercase tracking-widest text-[#c8a96e]">Assistant choreographer: <em style={{ color: "white" }}>Emmanuel Ahimana</em></p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ARTISTIC STATEMENT & CURATORIAL MANIFESTO */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="glass-panel p-8 sm:p-14 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-[#c8a96e]/10 pointer-events-none">
            <Compass className="w-64 h-64" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
                Artistic Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f4f0] font-light leading-snug">
                Movement as a Sacred Dialogue
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 border-l lg:border-l border-[rgba(200,169,110,0.2)] lg:pl-12">
              <p className="font-serif italic text-xl sm:text-2xl text-[#c9beaa] leading-relaxed">
                &ldquo;Through physical immersion, dance becomes more than technique; it evolves into a journey of self-discovery, where rhythm and spirit intertwine to nurture artistic growth and inner harmony.&rdquo;
              </p>
              <p className="text-sm text-[#9e9a91] leading-relaxed font-light">
                Choreographing from Kigali across East Africa and Senegal, Emmanuel blends classic ballet posture, traditional Rwandan Intore heritage, raw Afro-contemporary release, and storytelling to investigate themes of connection, trauma, solitude, and national renewal.
              </p>
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c8a96e] hover:text-[#f5f4f0] animated-link pt-2"
                >
                  <span>Read Full Artistic Biography</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CHOREOGRAPHIES SHOWCASE */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(255,255,255,0.08)] pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
              Selected Works
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#f5f4f0] font-light mt-2">
              Choreographic Repertoire
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c8a96e] hover:text-[#f5f4f0] transition-colors"
          >
            <span>View All Works ({projectsData.length})</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className={`lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Project Image */}
                <div
                  className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <ImageParallax
                      src={project.heroImage}
                      alt={project.title}
                      aspectRatio="aspect-[16/10]"
                    />
                  </Link>
                </div>

                {/* Project Details */}
                <div
                  className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                >
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#c8a96e]">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#f5f4f0] font-light leading-tight">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-[#c8a96e] transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-xs uppercase tracking-widest text-[#9e9a91]">
                    {project.location}
                  </p>

                  <p className="text-sm text-[#9e9a91] font-light leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)] text-[#c9beaa]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button href={`/projects/${project.slug}`} variant="outline" size="sm">
                      <span>Explore Piece</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PHILOSOPHY PILLARS */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
            Core Foundations
          </span>
          <h2 className="font-serif text-4xl text-[#f5f4f0] font-light">
            Choreographic Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {biographyData.philosophy.map((pillar, idx) => (
            <TextReveal key={pillar.title} delay={idx * 0.1}>
              <div
                className="glass-panel p-8 space-y-4 h-full hover:border-[#c8a96e]/50 transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-full border border-[rgba(200,169,110,0.3)] flex items-center justify-center text-[#c8a96e] font-serif text-lg group-hover:bg-[#c8a96e] group-hover:text-[#0b0b0c] transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl text-[#f5f4f0] font-medium pt-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#9e9a91] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* PERFORMANCE REEL / CALL TO ACTION */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-sm overflow-hidden bg-[#121215] border border-[rgba(200,169,110,0.2)] p-12 sm:p-20 text-center space-y-8">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="/images/irebe/P1305365.jpg"
              alt="Stage Lighting Banner"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
              Performance Vision
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#f5f4f0] font-light leading-tight">
              &ldquo;Beneath the surface, a body listens.&rdquo;
            </h2>
            <p className="text-sm text-[#c9beaa] font-light max-w-xl mx-auto">
              Available for international festival invitations, choreography commissions, masterclass residencies, and artistic collaborations worldwide.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="gold" size="lg">
                <span>Initiate Collaboration</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/gallery" variant="secondary" size="lg">
                <span>Browse Gallery</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
