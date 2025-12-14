function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="text-center max-w-3xl mx-auto animate-float">
        <p className="text-accent text-sm mb-2 font-mono">Hi, I'm</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-heading leading-tight">Irakli</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mt-2 text-secondary">I turn code into user experiences.</h2>
        <p className="mt-6 max-w-xl mx-auto text-secondary text-base sm:text-lg">
          I'm a Junior Web Developer actively honing my skills to build effective and user-centric digital experiences. Driven by a passion for web technologies, I'm ready and eager to contribute to a collaborative team.
        </p>
        <div className="mt-8">
          <a href="#contact" className="px-6 py-3 text-sm rounded border border-accent text-accent hover:bg-accent hover:text-[var(--color-lightbg)] transition inline-block">
            Reach Out
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
