import React from 'react';
import { useParallax } from '../hooks/useParallax';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export default function ParallaxImage({ src, alt, className = '', speed = 0.5 }: ParallaxImageProps) {
  const offset = useParallax(speed);

  return (
    <div className="overflow-hidden relative rounded-lg">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transform ${className}`}
        style={{
          transform: `translateY(${offset}px)`,
          marginTop: -offset,
          marginBottom: -offset,
        }}
      />
    </div>
  );
}