function Experience() {
  const experiences = [
    {
      date: '2024 - Present',
      title: 'UI/Frontend Developer (Freelance)',
      company: 'Upwork',
      companyUrl: 'https://www.upwork.com/',
      description: 'Building responsive, user-friendly web interfaces and applications using HTML5, CSS3, and JavaScript, while adhering to modern UI/UX best practices. Experienced in client collaboration to deliver tailored web solutions based on specific needs.',
      technologies: ['HTML & CSS3', 'JavaScript', 'UI Design', 'Design Tools & Prototyping']
    },
    {
      date: '2020 — 2021',
      title: 'Information Technology Specialist',
      company: 'ITCraft',
      companyUrl: 'https://itcraft.ge/ka',
      description: 'Delivering end-to-end IT support, managing hardware setup, software deployment (OS, apps, antivirus), and peripheral integration. Actively troubleshooting network connectivity issues and maintaining the functionality of critical systems including radio communications and video monitoring software. Focused on resolving technical challenges efficiently to maximize uptime and ensure a stable computing environment for all users.',
      technologies: ['Networking', 'Software & Applications', 'Network Monitoring & Diagnostics', 'Hardware Support']
    },
    {
      date: '2017 — 2018',
      title: 'Information Technology Services Specialist',
      company: 'Bitforx',
      companyUrl: 'http://bitforx.ge/',
      description: 'Overseeing network infrastructure through configuration, monitoring, and diagnostics of LAN/WAN environments and hardware (routers, switches, etc.). Includes physical network deployment, structured cabling, and hardware installation/maintenance. Ensures optimal performance, security, and reliability via proactive monitoring, troubleshooting, certification, and detailed documentation, collaborating with relevant IT teams.',
      technologies: ['Network Hardware', 'Network Protocols & Technologies', 'Network Monitoring & Diagnostics', 'Physical Infrastructure']
    }
  ]

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="section-title">
        <span className="font-mono text-xl md:text-2xl text-accent dark:text-dark-accent font-normal mr-2">02.</span>
        Where I've Worked
        <span className="block flex-1 h-px bg-light-border dark:bg-dark-border ml-4"></span>
      </h2>
      <div className="space-y-10 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="card-gradient hover-lift border border-light-border dark:border-dark-border">
            <span className="block text-accent dark:text-dark-accent text-sm font-mono uppercase tracking-wide mb-3 font-semibold">{exp.date}</span>
            <h3 className="text-xl font-bold text-heading dark:text-dark-heading mb-2">
              {exp.title}
              <a href={exp.companyUrl} className="text-accent dark:text-dark-accent hover:underline ml-2 text-lg transition-colors" target="_blank" rel="noopener noreferrer">
                @ {exp.company}
                <svg className="inline-block w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </h3>
            <p className="mt-3 text-secondary dark:text-dark-secondary leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-4 font-mono text-xs">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="bg-accent/10 dark:bg-dark-accent/15 text-accent dark:text-dark-accent px-3 py-1.5 rounded-full font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
