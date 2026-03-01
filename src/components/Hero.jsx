function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center relative z-10 w-full">
        {/* Left — Text */}
        <div className="text-left animate-fade-in-up order-2 lg:order-1">
          <p className="text-sm font-mono text-brand-primary dark:text-indigo-400 mb-4 tracking-widest uppercase">
            Full Stack Developer & UI/UX Enthusiast
          </p>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-text-light dark:text-text-dark tracking-tight mb-5 leading-[1.05]">
            Hi, I'm{' '}
            <span className="text-gradient">Irakli</span>
          </h1>

          <p className="max-w-lg text-base sm:text-lg text-text-light-muted dark:text-text-dark-muted mb-8 leading-relaxed font-normal">
            I engineer elegant, user-centric digital experiences by blending modern technical architectures with meticulous design principles.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right — Illustration */}
        <div className="relative group order-1 lg:order-2 flex justify-center">
          <div className="absolute inset-0 bg-brand-primary/20 rounded-3xl blur-3xl opacity-25 group-hover:opacity-40 transition-opacity duration-700" />
          <img
            src="/assets/dev_illustration.png"
            alt="Irakli - Developer Illustration"
            className="relative w-full h-auto max-w-[420px] xl:max-w-[480px] rounded-3xl object-contain animate-fade-in transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </div>


    </section>
  )
}

export default Hero
