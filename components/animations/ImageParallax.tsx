'use client';

import React from 'react';
import Image from 'next/image';

interface ImageParallaxProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  cursorText?: string;
  priority?: boolean;
}

export const ImageParallax: React.FC<ImageParallaxProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/5]',
  priority = false
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-[#141418] border border-[rgba(200,169,110,0.15)] shadow-xl ${aspectRatio} ${className}`}
    >
      <div className="w-full h-full relative group">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={95}
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle hover gradient frame */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
};
