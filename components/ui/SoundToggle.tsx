'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export const SoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      // Fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
        setTimeout(() => {
          setIsPlaying(false);
        }, 500);
      }
    } else {
      // Start Web Audio API ambient stage sound
      try {
        const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContext();
        }

        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        // Create pink/brown noise for subtle warm stage atmosphere
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;

        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          // Lowpass filtering to make warm stage ambient breeze
          output[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = output[i];
          output[i] *= 0.15; // keep quiet
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
        gainNode.gain.setTargetAtTime(0.04, ctx.currentTime, 1.2);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();

        noiseNodeRef.current = whiteNoise;
        gainNodeRef.current = gainNode;
        setIsPlaying(true);
      } catch (e) {
        console.error('Audio Context Error:', e);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      data-cursor="SOUND"
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(200,169,110,0.25)] bg-[rgba(18,18,21,0.5)] backdrop-blur-md text-[11px] uppercase tracking-widest text-[#c9beaa] hover:text-[#c8a96e] hover:border-[#c8a96e] transition-all duration-300 group"
      title={isPlaying ? 'Mute Stage Atmosphere' : 'Enable Stage Atmosphere Sound'}
    >
      <span className="relative flex h-2 w-2">
        {isPlaying && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a96e] opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-[#c8a96e]' : 'bg-[#9e9a91]'}`}></span>
      </span>
      <span>{isPlaying ? 'Atmosphere On' : 'Atmosphere'}</span>
      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5 text-[#c8a96e] ml-0.5" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 opacity-60 ml-0.5" />
      )}
    </button>
  );
};
