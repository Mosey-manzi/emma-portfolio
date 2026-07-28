'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="stage-spotlight" />
      <div className="stage-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]" />

      <div className="relative z-10 max-w-xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(18,18,21,0.6)] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#c8a96e]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9beaa]">
            404 — Page Not Found
          </span>
        </div>

        <h1 className="font-serif text-7xl sm:text-9xl font-light text-[#f5f4f0] tracking-tight">
          40<span className="italic text-[#c8a96e]">4</span>
        </h1>

        <blockquote className="font-serif italic text-2xl text-[#c9beaa] font-light leading-relaxed">
          &ldquo;Buried in silence, something flickers... a path waiting to be rediscovered.&rdquo;
        </blockquote>

        <p className="text-xs text-[#9e9a91] font-light">
          The choreography sequence you requested does not exist or has moved to a new stage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button href="/" variant="gold" size="lg">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Return to Homepage</span>
          </Button>
          <Button href="/projects" variant="secondary" size="lg">
            <span>Explore Works</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
