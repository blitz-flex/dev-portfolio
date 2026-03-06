function About() {
  const skills = ['HTML5', 'CSS3 / Tailwind', 'JavaScript (ES6+)', 'React', 'Python', 'Flask', 'Node.js', 'UI/UX Prototyping']

  return (
    <section id="about" className="section-container relative z-10 overflow-hidden">


      <h2 className="section-header relative z-10">About Me</h2>

      <div className="grid md:grid-cols-5 gap-12 items-start relative z-10">
        <div className="md:col-span-3 space-y-6 text-lg text-text-light-muted dark:text-text-dark-muted leading-relaxed font-normal">
          <p>
            Hello! I'm Irakli, a detail-oriented <span className="text-brand-primary font-semibold">Web Developer</span> who loves crafting seamless digital experiences that balance form and function.
          </p>
          <p>
            My journey began driven by an insatiable curiosity for how things work on the internet. Since then, I've honed my skills building fast, scalable frontends with clean, maintainable architecture.
          </p>
          <p>
            I approach problems with a design-engineering mindset, ensuring UI patterns don't just look stunning, but also provide an incredibly comfortable user experience.
          </p>
        </div>

        <div className="md:col-span-2 pro-card">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Core Stack</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="tech-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
