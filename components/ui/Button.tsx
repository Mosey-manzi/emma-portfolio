'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  cursorText?: string;
  download?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  cursorText,
  download = false,
  type = 'button',
  disabled = false
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#f5f4f0] text-[#0b0b0c] hover:bg-[#c8a96e] hover:text-[#0b0b0c] border border-transparent';
      case 'gold':
        return 'bg-[#c8a96e] text-[#0b0b0c] hover:bg-[#e5cd9c] hover:text-[#0b0b0c] border border-transparent font-medium';
      case 'secondary':
        return 'bg-[rgba(255,255,255,0.06)] text-[#f5f4f0] hover:bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.12)]';
      case 'outline':
        return 'bg-transparent text-[#c8a96e] border border-[#c8a96e]/40 hover:border-[#c8a96e] hover:bg-[#c8a96e]/10';
      default:
        return 'bg-[#f5f4f0] text-[#0b0b0c]';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-xs';
      case 'md':
        return 'px-6 py-3.5 text-xs';
      case 'lg':
        return 'px-8 py-4 text-sm';
      default:
        return 'px-6 py-3.5 text-xs';
    }
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 uppercase tracking-[0.2em] font-sans rounded-none transition-all duration-500 relative overflow-hidden group ${getVariantStyles()} ${getSizeStyles()} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />
    </>
  );

  if (href) {
    if (download) {
      return (
        <a
          href={href}
          download
          data-cursor={cursorText || 'DOWNLOAD'}
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} data-cursor={cursorText || 'GO'} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-cursor={cursorText}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {content}
    </button>
  );
};
