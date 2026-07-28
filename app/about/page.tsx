'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Award, MapPin, Heart, Users, GraduationCap, Download } from 'lucide-react';
import { TextReveal } from '@/components/animations/TextReveal';
import { ImageParallax } from '@/components/animations/ImageParallax';
import { Button } from '@/components/ui/Button';
import { biographyData } from '@/data/biography';
import { resumeData } from '@/data/resume';

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden space-y-28 md:space-y-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Stage light blur background */}
      <div className="stage-spotlight" />
      <div className="stage-glow top-1/3 right-1/4 w-[500px] h-[500px]" />

      {/* HEADER */}
      <section className="pt-8 md:pt-16 space-y-6">
        <TextReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(18,18,21,0.6)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a96e]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9beaa] font-medium">
              Biography & Artistic Philosophy
            </span>
          </div>
        </TextReveal>

        <TextReveal delay={0.1}>
          <h1 className="font-serif text-5xl sm:text-7xl font-light text-[#f5f4f0] leading-tight">
            The Body as a <br />
            <span className="italic text-[#c8a96e]">Luminous Dialogue</span>
          </h1>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="font-sans text-base sm:text-lg text-[#9e9a91] max-w-3xl font-light leading-relaxed">
            Contemporary choreographer, soloist, and dance instructor based in Kigali, Rwanda. Exploring the intersection of traditional Rwandan rhythms, classical ballet posture, and raw physical release.
          </p>
        </TextReveal>
      </section>

      {/* EDITORIAL BIOGRAPHY SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Portrait & Highlights */}
        <div className="lg:col-span-5 space-y-8 sticky top-28">
          <ImageParallax
            src="/images/ecole-des-sables/1b78a41b-0c80-4447-a11c-295bef533aca.jpg"
            alt="Emmanuel Ahimana Portrait at École des Sables"
            aspectRatio="aspect-[4/5]"
            cursorText="EMMANUEL"
            priority
          />

          <div className="glass-panel p-6 space-y-4 rounded-sm">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#c8a96e]">
              <MapPin className="w-4 h-4" />
              <span>Kigali, Rwanda — East Africa</span>
            </div>
            <p className="text-xs text-[#9e9a91] font-light leading-relaxed">
              Instructor in the dance school program under L’Espace Kigali, lead trainer in refugee camp dance initiatives, and international soloist.
            </p>
            <div className="pt-2">
              <Button href="/resume" variant="gold" size="sm" cursorText="RESUME">
                <Download className="w-3.5 h-3.5 mr-1" />
                <span>Download Executive CV</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Full Narrative Story */}
        <div className="lg:col-span-7 space-y-8 text-base text-[#9e9a91] font-light leading-relaxed">
          <TextReveal>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f4f0] font-light border-b border-[rgba(255,255,255,0.08)] pb-4">
              Artistic Roots & Journey
            </h2>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p className="text-lg font-serif italic text-[#c9beaa] leading-relaxed">
              &ldquo;My passion for dancing traces back to my childhood when I discovered that movement was not only an art form, but also a source of wholeness — a gift that came like a birthright.&rdquo;
            </p>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p>
              Growing up in Kigali, Emmanuel Ahimana started dancing in 2008 by imitating traditional dancers at home. What began as a childhood joy quickly grew into a lifelong dedication. In 2014, he joined MindLeaps, where he embraced rigorous modern dance, ballet, contemporary release, and hip-hop technique.
            </p>
          </TextReveal>

          <TextReveal delay={0.3}>
            <p>
              Over the years, Emmanuel’s choreography has evolved into a compelling voice on the East African and international stage. From choreographing mass ensemble pieces with 130 dancers for the 30th Genocide against Tutsi commemoration (**Kwibuka 30: The Gift of Time**) to performing solo pieces at the Kenya National Theatre (**IREBE**), his repertoire challenges physical limits while nurturing deep emotional resonance.
            </p>
          </TextReveal>

          <TextReveal delay={0.4}>
            <p>
              His commitment extends into cross-border artistic collaborations, such as **Les Noces de Suzanne** (inspired by Mozart’s Figaro with Congolese and Rwandan dancers), **MULTITUDE** (performed in Tanzania and Kigali Triennial), and **MITI MITI** (a raw dance of survival and resistance).
            </p>
          </TextReveal>
        </div>
      </section>

      {/* MENTORSHIP & LINEAGE */}
      <section className="space-y-12">
        <div className="border-b border-[rgba(255,255,255,0.08)] pb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
            Lineage & Influence
          </span>
          <h2 className="font-serif text-4xl text-[#f5f4f0] font-light mt-2">
            Mentors & Master Teachers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {biographyData.mentors.map((mentor, idx) => (
            <TextReveal key={mentor.name} delay={idx * 0.1}>
              <div
                className="glass-panel p-8 space-y-4 rounded-sm hover:border-[#c8a96e]/50 transition-all duration-500"
                data-cursor="MENTOR"
              >
                <div className="flex items-center justify-between border-b border-[rgba(200,169,110,0.15)] pb-3">
                  <span className="text-xs uppercase tracking-widest text-[#c8a96e] font-medium">
                    {mentor.organization}
                  </span>
                  <Award className="w-4 h-4 text-[#c8a96e]/60" />
                </div>
                <h3 className="font-serif text-2xl text-[#f5f4f0] font-normal">
                  {mentor.name}
                </h3>
                <p className="text-xs text-[#c9beaa] uppercase tracking-wider">
                  {mentor.role}
                </p>
                <p className="text-xs text-[#9e9a91] font-light leading-relaxed pt-1">
                  {mentor.description}
                </p>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* COMMUNITY IMPACT & YOUTH TRAINING */}
      <section className="glass-panel p-10 sm:p-16 rounded-sm space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
              Pedagogy & Community
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f4f0] font-light">
              Nurturing the Next Generation
            </h2>
            <p className="text-sm text-[#9e9a91] font-light leading-relaxed">
              In addition to performing on stage, Emmanuel leads training sessions for Rwandan youth under L’Espace Kigali and has conducted intensive workshops across 3 refugee camps in Rwanda, training over 30 dance instructors in ballet, contemporary, and trauma-informed artistic leadership.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-3">
            <div className="text-left lg:text-right">
              <span className="block font-serif text-5xl text-[#c8a96e]">30+</span>
              <span className="text-xs uppercase tracking-widest text-[#9e9a91]">Instructors Trained</span>
            </div>
            <div className="text-left lg:text-right">
              <span className="block font-serif text-5xl text-[#c8a96e]">3</span>
              <span className="text-xs uppercase tracking-widest text-[#9e9a91]">Refugee Camps Reached</span>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE OF EXPERIENCE */}
      <section className="space-y-12">
        <div className="border-b border-[rgba(255,255,255,0.08)] pb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
            Chronology
          </span>
          <h2 className="font-serif text-4xl text-[#f5f4f0] font-light mt-2">
            Career Timeline
          </h2>
        </div>

        <div className="relative border-l border-[rgba(200,169,110,0.2)] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {resumeData.experience.map((item, idx) => (
            <TextReveal key={idx} delay={idx * 0.05}>
              <div className="relative group" data-cursor="MILESTONE">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#0b0b0c] border-2 border-[#c8a96e] group-hover:bg-[#c8a96e] transition-colors" />

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold">
                      {item.period}
                    </span>
                    <span className="text-xs text-[#9e9a91]">•</span>
                    <span className="text-xs uppercase tracking-wider text-[#c9beaa]">
                      {item.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#f5f4f0] font-normal">
                    {item.role}
                  </h3>

                  <p className="text-xs text-[#9e9a91] font-light">
                    {item.company}
                  </p>

                  <p className="text-xs text-[#9e9a91] font-light leading-relaxed max-w-2xl pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
