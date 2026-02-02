function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/50 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center max-w-3xl mx-auto animate-float relative z-10">
        <p className="text-accent text-sm mb-4 font-mono uppercase tracking-widest">Welcome to my portfolio</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-heading leading-tight mb-4 dark:text-dark-heading">
          Irakli <span className="neon-glow">Abashidze</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-secondary dark:text-dark-secondary mb-8 font-light">
          Full Stack Developer & UI/UX Enthusiast
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-secondary dark:text-dark-secondary text-base sm:text-lg leading-relaxed mb-10">
          I craft responsive, user-centric web experiences using modern technologies. Passionate about clean code and beautiful design.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="btn-gradient">
            Get In Touch ↓
          </a>
          <a href="#projects" className="px-8 py-3 text-sm font-semibold rounded-lg border-2 border-accent dark:border-dark-accent text-accent dark:text-dark-accent hover:bg-accent dark:hover:bg-dark-accent hover:text-white dark:hover:text-darkbg transition-all duration-300 inline-block hover:-translate-y-0.5 group">
            View My Work
            <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
