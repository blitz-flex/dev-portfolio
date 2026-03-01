function Experience() {
  const experiences = [
    {
      date: '2024 - Present',
      title: 'UI/Frontend Developer',
      company: 'Freelance / Upwork',
      companyUrl: 'https://www.upwork.com/',
      description: 'Building responsive, user-friendly web interfaces and applications using modern web technologies, while adhering to modern UI/UX best practices. Experienced in client collaboration to deliver tailored web solutions based on specific needs.',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion']
    },
    {
      date: '2020 — 2021',
      title: 'IT Specialist',
      company: 'ITCraft',
      companyUrl: 'https://itcraft.ge/ka',
      description: 'Delivered end-to-end IT support, managed hardware setup, software deployment, and peripheral integration. Actively troubleshooted network connectivity issues and maintained the functionality of critical systems to maximize uptime.',
      technologies: ['SysAdmin', 'Networking', 'Diagnostics']
    },
    {
      date: '2017 — 2018',
      title: 'IT Services Specialist',
      company: 'Bitforx',
      companyUrl: 'http://bitforx.ge/',
      description: 'Architected and documented comprehensive LAN/WAN infrastructures with a strict focus on optimal routing performance and stringent security protocols. Ensured reliable network operation through proactive monitoring.',
      technologies: ['LAN/WAN', 'Security', 'Infrastructure']
    }
  ]

  return (
    <section id="experience" className="section-container relative z-10 bg-bg-light dark:bg-bg-dark border-t border-border-light dark:border-border-dark overflow-hidden">
      <h2 className="section-header">Experience</h2>

      <div className="relative mt-12 max-w-5xl mx-auto">

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative grid md:grid-cols-[180px_auto_1fr] lg:grid-cols-[220px_auto_1fr] gap-6 md:gap-10">

              {/* Left Column: Date */}
              <div className="text-left md:text-right pt-1 md:pt-6">
                <span className="inline-block px-5 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-xs sm:text-sm font-mono font-bold tracking-widest border border-brand-primary/20 transition-all duration-300 shadow-sm opacity-90 group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent">
                  {exp.date}
                </span>
              </div>

              {/* Center Column: Timeline Line & Dot (Hidden on mobile) */}
              <div className="hidden md:flex flex-col items-center relative z-10 w-8">
                {/* The vertical timeline bar */}
                <div className="w-[2px] h-full bg-gradient-to-b from-brand-primary/10 via-brand-primary/30 to-transparent absolute top-0 -bottom-8 group-last:h-[40px] group-last:bg-gradient-to-b group-last:from-brand-primary/10 group-last:to-transparent"></div>
                {/* The glowing dot */}
                <div className="w-4 h-4 rounded-full bg-surface-light dark:bg-surface-dark border-[3px] border-brand-primary group-hover:bg-brand-primary group-hover:scale-125 transition-all duration-500 will-change-transform mt-9 relative z-20 shadow-[0_0_12px_rgba(79,70,229,0.5)]"></div>
              </div>

              {/* Right Column: Content (No Card) */}
              <div className="text-left pt-1 md:pt-4 relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-text-light dark:text-text-dark mb-2 flex flex-col sm:flex-row sm:items-center gap-2 transition-colors">
                  {exp.title}
                  <span className="hidden sm:inline text-text-light-muted dark:text-text-dark-muted font-normal text-lg">at</span>
                  <a href={exp.companyUrl} className="text-brand-primary hover:text-brand-secondary transition-colors inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                    {exp.company}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </h3>

                <p className="mt-4 text-text-light-muted dark:text-text-dark-muted leading-relaxed font-normal text-[1.05rem] max-w-3xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-chip bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark group-hover:border-brand-primary/40 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blurred spots */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  )
}

export default Experience
