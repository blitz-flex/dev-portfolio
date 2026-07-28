import React, { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    WebGLFluid(canvasRef.current, {
      TRIGGER: 'hover',
      IMMEDIATE: false,    
      AUTO: false,         
      SIM_RESOLUTION: 256,        // Higher resolution for ultra-smooth, premium curls
      DYE_RESOLUTION: 1024,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 2.0,   // Balanced fade so it feels like elegant ink
      VELOCITY_DISSIPATION: 0.8,  // Smooth flowing trails without stopping abruptly
      PRESSURE: 0.5,              // Softer pressure for organic spreading
      PRESSURE_ITERATIONS: 25,    // More precise physics calculation
      CURL: 12,                   // Wide, graceful curls instead of chaotic ones
      SPLAT_RADIUS: 0.12,         // Thinner, more refined trace
      SPLAT_FORCE: 3000,          // Gentle injection force
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 1,      // Extremely slow, elegant color transitions
      PAUSED: false,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: true,   
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.2,       // Very subtle, expensive-looking glow
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: false,             // Sunrays disabled for a cleaner, modern aesthetic
    });

    const canvas = canvasRef.current;
    const forwardEvent = (e) => {
      if (e.isTrusted && canvas) {
        const clone = new e.constructor(e.type, e);
        canvas.dispatchEvent(clone);
      }
    };

    window.addEventListener('mousemove', forwardEvent);
    window.addEventListener('touchmove', forwardEvent, { passive: true });

    return () => {
      window.removeEventListener('mousemove', forwardEvent);
      window.removeEventListener('touchmove', forwardEvent);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none opacity-90 invert hue-rotate-180 mix-blend-multiply dark:mix-blend-screen dark:invert-0 dark:hue-rotate-0 dark:opacity-30 transition-all duration-1000"
      />
    </div>
  );
};

export default Background;
