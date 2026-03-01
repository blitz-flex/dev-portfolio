import React from 'react'

const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-700 bg-bg-light dark:bg-bg-dark">
            {/* 
          MESH GRADIENT ORBS 
          Best practice: Large, soft, low-opacity orbs that break the flat background 
          without drawing attention away from content.
      */}
            <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[60%] rounded-full bg-brand-primary/5 dark:bg-brand-primary/10 blur-[130px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-[0%] right-[-10%] w-[70%] h-[70%] rounded-full bg-brand-secondary/5 dark:bg-brand-secondary/10 blur-[120px] animate-float pointer-events-none" style={{ animationDelay: '-4s' }} />

            {/* 
          TEXTURE: NOISE/GRAIN 
          Best practice: Adds a "physical" feel to the UI, making it feel less digital and more premium.
          We use an SVG filter for ultra-crisp performance.
      */}
            <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05] mix-blend-multiply dark:mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* 
          SOPHISTICATED GRID 
          Best practice: Fading out the grid at the edges (Vignette) keeps the focus on the center.
      */}
            <div className="absolute inset-0 bg-grid-black/[0.03] dark:bg-grid-white/[0.04] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_20%,transparent_100%)] pointer-events-none" />

            {/* 
          VIGNETTE EFFECT
          Darkens/Lightens the edges to create depth and focus.
      */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-bg-light/20 dark:to-bg-dark/40 pointer-events-none" />
        </div>
    )
}

export default Background
