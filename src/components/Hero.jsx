function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-light dark:bg-bg-dark pt-20">
      {/* Background elegant grid */}
      <div className="absolute inset-0 bg-grid-black dark:bg-grid-white bg-[center_top_-1px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-brand-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-brand-secondary/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto px-6 animate-fade-in-up relative z-10">

        <h1 className="text-5xl sm:text-7xl font-black text-text-light dark:text-text-dark tracking-tight mb-6 leading-tight">
          Hi, I'm <span className="text-gradient">Irakli</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl text-text-light-muted dark:text-text-dark-muted font-medium mb-6">
          Full Stack Developer & UI/UX Enthusiast
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-text-light-muted dark:text-text-dark-muted mb-10 leading-relaxed font-normal">
          I engineer elegant, user-centric digital experiences by blending modern technical architectures with meticulous design principles.
        </p>

        <div className="flex justify-center items-center">
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
