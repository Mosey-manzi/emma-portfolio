'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, Award, GraduationCap, Briefcase, Globe, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { TextReveal } from '@/components/animations/TextReveal';
import { Button } from '@/components/ui/Button';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { resumeData } from '@/data/resume';

export default function ResumePage() {
  return (
    <div className="relative overflow-hidden space-y-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Stage light blur background */}
      <div className="stage-spotlight" />
      <div className="stage-glow top-1/4 right-1/4 w-[500px] h-[500px]" />

      {/* HEADER & DOWNLOAD CTA */}
      <section className="pt-8 md:pt-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[rgba(255,255,255,0.08)] pb-12">
        <div className="space-y-4">
          <TextReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(18,18,21,0.6)] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#c8a96e]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9beaa] font-medium">
                Curriculum Vitae / Resume
              </span>
            </div>
          </TextReveal>

          <TextReveal delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-7xl font-light text-[#f5f4f0] leading-tight">
              Executive <br />
              <span className="italic text-[#c8a96e]">Curriculum Vitae</span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="font-sans text-base text-[#9e9a91] max-w-2xl font-light leading-relaxed">
              Professional credentials, choreographic experience, festival performances, teaching history, and education.
            </p>
          </TextReveal>
        </div>

        {/* Download PDF Action */}
        <TextReveal delay={0.3}>
          <div className="flex flex-col items-start md:items-end gap-3">
            <Button
              href={resumeData.contactInfo.pdfPath}
              download
              variant="gold"
              size="lg"
              cursorText="DOWNLOAD PDF"
            >
              <Download className="w-4 h-4 mr-1" />
              <span>Download Full CV (PDF)</span>
            </Button>
            <span className="text-[10px] uppercase tracking-widest text-[#9e9a91]">
              Official PDF Document • 415 KB
            </span>
          </div>
        </TextReveal>
      </section>

      {/* CONTACT METADATA BANNER */}
      <section className="glass-panel p-8 rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#9e9a91]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[rgba(200,169,110,0.3)] flex items-center justify-center text-[#c8a96e]">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#c8a96e]">Location</span>
            <span className="text-[#f5f4f0] text-sm">{resumeData.contactInfo.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[rgba(200,169,110,0.3)] flex items-center justify-center text-[#c8a96e]">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#c8a96e]">Email</span>
            <a href={`mailto:${resumeData.contactInfo.email}`} className="text-[#f5f4f0] text-sm underline hover:text-[#c8a96e]">
              {resumeData.contactInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[rgba(200,169,110,0.3)] flex items-center justify-center text-[#c8a96e]">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#c8a96e]">Phone</span>
            <span className="text-[#f5f4f0] text-sm">{resumeData.contactInfo.phone}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[rgba(200,169,110,0.3)] flex items-center justify-center text-[#c8a96e]">
            <InstagramIcon className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#c8a96e]">Instagram</span>
            <a href={resumeData.contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-[#f5f4f0] text-sm underline hover:text-[#c8a96e]">
              @emmymario8
            </a>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE TIMELINE */}
      <section className="space-y-12">
        <div className="border-b border-[rgba(255,255,255,0.08)] pb-4 flex items-center gap-3">
          <Briefcase className="w-5 h-5 text-[#c8a96e]" />
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f4f0] font-light">
            Dance & Choreography Experience
          </h2>
        </div>

        <div className="space-y-8">
          {resumeData.experience.map((item, idx) => (
            <TextReveal key={idx} delay={idx * 0.05}>
              <div className="glass-panel p-8 rounded-sm space-y-4 hover:border-[#c8a96e]/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(255,255,255,0.06)] pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#c8a96e] font-semibold">
                      {item.period}
                    </span>
                    <h3 className="font-serif text-2xl text-[#f5f4f0] font-normal mt-1">
                      {item.role}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-[#c9beaa] font-medium">{item.company}</p>
                    <p className="text-[11px] text-[#9e9a91]">{item.location}</p>
                  </div>
                </div>

                <p className="text-xs text-[#9e9a91] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* WORKSHOPS & INTERNATIONAL RESIDENCIES */}
      <section className="space-y-8">
        <div className="border-b border-[rgba(255,255,255,0.08)] pb-4 flex items-center gap-3">
          <Globe className="w-5 h-5 text-[#c8a96e]" />
          <h2 className="font-serif text-3xl text-[#f5f4f0] font-light">
            Workshops & International Residencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.workshops.map((ws, idx) => (
            <TextReveal key={idx} delay={idx * 0.1}>
              <div className="glass-panel p-6 rounded-sm space-y-3 h-full">
                <span className="text-[10px] uppercase tracking-widest text-[#c8a96e]">
                  {ws.period}
                </span>
                <h3 className="font-serif text-xl text-[#f5f4f0] font-medium">
                  {ws.title}
                </h3>
                <p className="text-xs text-[#c9beaa]">
                  Led by: {ws.ledBy}
                </p>
                <p className="text-[11px] text-[#9e9a91]">
                  {ws.organization} • {ws.location}
                </p>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS & STRENGTHS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-panel p-8 rounded-sm space-y-4">
          <h3 className="font-serif text-2xl text-[#f5f4f0] font-light text-[#c8a96e]">
            Movement Styles
          </h3>
          <ul className="space-y-2 text-xs text-[#9e9a91]">
            {resumeData.skills.technical.map((sk) => (
              <li key={sk} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a96e]" />
                <span>{sk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-8 rounded-sm space-y-4">
          <h3 className="font-serif text-2xl text-[#f5f4f0] font-light text-[#c8a96e]">
            Choreographic Leadership
          </h3>
          <ul className="space-y-2 text-xs text-[#9e9a91]">
            {resumeData.skills.choreographic.map((sk) => (
              <li key={sk} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a96e]" />
                <span>{sk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-8 rounded-sm space-y-4">
          <h3 className="font-serif text-2xl text-[#f5f4f0] font-light text-[#c8a96e]">
            Soft Skills & Endurance
          </h3>
          <ul className="space-y-2 text-xs text-[#9e9a91]">
            {resumeData.skills.soft.map((sk) => (
              <li key={sk} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a96e]" />
                <span>{sk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EDUCATION & LANGUAGES */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="border-b border-[rgba(255,255,255,0.08)] pb-3 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-[#c8a96e]" />
            <h2 className="font-serif text-3xl text-[#f5f4f0] font-light">
              Education & Diplomas
            </h2>
          </div>

          <div className="space-y-4">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-sm space-y-2">
                <h3 className="font-serif text-xl text-[#f5f4f0]">
                  {edu.institution}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#c8a96e]">
                  {edu.degree}
                </p>
                <p className="text-xs text-[#9e9a91]">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="border-b border-[rgba(255,255,255,0.08)] pb-3 flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#c8a96e]" />
            <h2 className="font-serif text-3xl text-[#f5f4f0] font-light">
              Languages
            </h2>
          </div>

          <div className="glass-panel p-6 rounded-sm space-y-3">
            {resumeData.languages.map((lang) => (
              <div key={lang} className="flex items-center justify-between text-xs border-b border-[rgba(255,255,255,0.05)] pb-2">
                <span className="text-[#f5f4f0] font-medium">{lang}</span>
                <span className="text-[#c8a96e] text-[10px] uppercase tracking-wider">Proficient</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
