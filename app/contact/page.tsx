'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle2, ArrowUpRight, Globe } from 'lucide-react';
import { TextReveal } from '@/components/animations/TextReveal';
import { Button } from '@/components/ui/Button';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Choreography Commission',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative overflow-hidden space-y-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Stage light blur background */}
      <div className="stage-spotlight" />
      <div className="stage-glow top-1/4 left-1/3 w-[500px] h-[500px]" />

      {/* HEADER */}
      <section className="pt-8 md:pt-16 space-y-6">
        <TextReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(18,18,21,0.6)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#c8a96e]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9beaa] font-medium">
              Collaborations & Inquiries
            </span>
          </div>
        </TextReveal>

        <TextReveal delay={0.1}>
          <h1 className="font-serif text-5xl sm:text-7xl font-light text-[#f5f4f0] leading-tight">
            Initiate a <br />
            <span className="italic text-[#c8a96e]">Conversation</span>
          </h1>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="font-sans text-base sm:text-lg text-[#9e9a91] max-w-2xl font-light leading-relaxed">
            Available worldwide for choreography commissions, festival invitations, solo performances, masterclass residencies, and artistic collaborations.
          </p>
        </TextReveal>
      </section>

      {/* MAIN CONTACT LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Contact Info & Location */}
        <div className="lg:col-span-5 space-y-8 glass-panel p-8 sm:p-10 rounded-sm">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
              Base Location
            </span>
            <h2 className="font-serif text-3xl text-[#f5f4f0] font-light">
              Kigali, Rwanda
            </h2>
            <p className="text-xs text-[#9e9a91] font-light leading-relaxed">
              Operating out of Kigali with creative footprint across East Africa, Sénégal, and international festival stages.
            </p>
          </div>

          <div className="space-y-6 border-t border-[rgba(255,255,255,0.08)] pt-6 text-xs text-[#9e9a91]">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full border border-[rgba(200,169,110,0.3)] text-[#c8a96e]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest text-[#c8a96e]">Direct Email</span>
                <a href="mailto:emmanuelahimana01@gmail.com" className="text-[#f5f4f0] text-sm underline hover:text-[#c8a96e]" data-cursor="EMAIL">
                  emmanuelahimana01@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full border border-[rgba(200,169,110,0.3)] text-[#c8a96e]">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest text-[#c8a96e]">Telephone / WhatsApp</span>
                <p className="text-[#f5f4f0] text-sm">+250 780 615 144</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full border border-[rgba(200,169,110,0.3)] text-[#c8a96e]">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest text-[#c8a96e]">Instagram</span>
                <a href="https://instagram.com/emmymario8" target="_blank" rel="noopener noreferrer" className="text-[#f5f4f0] text-sm underline hover:text-[#c8a96e]" data-cursor="INSTAGRAM">
                  @emmymario8
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#c8a96e]">Social Platforms</span>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="https://instagram.com/emmymario8" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[#c9beaa] hover:border-[#c8a96e] hover:text-[#c8a96e]">
                Instagram
              </a>
              <a href="mailto:emmanuelahimana01@gmail.com" className="px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[#c9beaa] hover:border-[#c8a96e] hover:text-[#c8a96e]">
                Email
              </a>
              <span className="px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[#9e9a91]">
                Vimeo / YouTube
              </span>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7 glass-panel p-8 sm:p-12 rounded-sm">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 space-y-6"
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#c8a96e] text-[#c8a96e] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-3xl text-[#f5f4f0]">
                Message Transmitted
              </h2>
              <p className="text-sm text-[#9e9a91] font-light max-w-md mx-auto">
                Thank you for reaching out to Emmanuel Ahimana. We will review your inquiry and respond within 24 to 48 hours.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 border-b border-[rgba(255,255,255,0.08)] pb-4">
                <h2 className="font-serif text-3xl text-[#f5f4f0] font-light">
                  Send an Inquiry
                </h2>
                <p className="text-xs text-[#9e9a91] font-light">
                  Fill out the form below to propose a performance, festival invitation, or artistic collaboration.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#c8a96e]">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marie Laurent"
                    className="w-full bg-[#121215] border border-[rgba(255,255,255,0.1)] rounded-none px-4 py-3 text-sm text-[#f5f4f0] focus:border-[#c8a96e] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#c8a96e]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. marie@festival-dance.org"
                    className="w-full bg-[#121215] border border-[rgba(255,255,255,0.1)] rounded-none px-4 py-3 text-sm text-[#f5f4f0] focus:border-[#c8a96e] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#c8a96e]">Organization / Festival</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Dance Life Festival Kenya"
                    className="w-full bg-[#121215] border border-[rgba(255,255,255,0.1)] rounded-none px-4 py-3 text-sm text-[#f5f4f0] focus:border-[#c8a96e] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#c8a96e]">Inquiry Nature</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#121215] border border-[rgba(255,255,255,0.1)] rounded-none px-4 py-3 text-sm text-[#f5f4f0] focus:border-[#c8a96e] focus:outline-none transition-colors"
                  >
                    <option value="Choreography Commission">Choreography Commission</option>
                    <option value="Festival Invitation / Booking">Festival Invitation / Booking</option>
                    <option value="Masterclass / Workshop Residency">Masterclass / Workshop Residency</option>
                    <option value="Press / Media Inquiry">Press / Media Inquiry</option>
                    <option value="Other Collaboration">Other Collaboration</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#c8a96e]">Message Details *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, proposed dates, venue, or collaboration concept..."
                  className="w-full bg-[#121215] border border-[rgba(255,255,255,0.1)] rounded-none px-4 py-3 text-sm text-[#f5f4f0] focus:border-[#c8a96e] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="gold" size="lg" cursorText="SEND">
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
