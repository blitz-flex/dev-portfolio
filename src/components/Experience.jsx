import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const experiences = [
  {
    date: '2024 - Present',
    title: 'Full-Stack Developer',
    company: 'Freelance / Upwork',
    companyUrl: 'https://www.upwork.com/',
    bullets: [
      'Designing and building responsive, pixel-perfect UIs with React, Tailwind CSS, and Framer Motion',
      'Developing RESTful APIs and server-side logic using Python & Flask, integrated with SQL/NoSQL databases',
      'Collaborating directly with clients to translate requirements into scalable, maintainable web solutions',
      'Optimizing frontend performance, accessibility, and SEO across diverse project types',
    ],
    technologies: ['React', 'Python', 'Flask', 'TypeScript', 'Tailwind', 'REST APIs', 'Framer Motion']
  },
  {
    date: '2020 — 2021',
    title: 'IT Specialist',
    company: 'ITCraft',
    companyUrl: 'https://itcraft.ge/ka',
    bullets: [
      'Managed end-to-end IT support: hardware setup, OS deployment, and peripheral integration',
      'Diagnosed and resolved network connectivity issues across multi-device environments',
      'Maintained uptime of critical business systems through proactive monitoring and preventive maintenance',
      'Automated routine system tasks, reducing manual workload and human error',
    ],
    technologies: ['SysAdmin', 'Windows Server', 'Networking', 'Diagnostics', 'Linux']
  },
  {
    date: '2017 — 2018',
    title: 'IT Services Specialist',
    company: 'Bitforx',
    companyUrl: 'http://bitforx.ge/',
    bullets: [
      'Architected and documented LAN/WAN infrastructures with optimal routing and security protocols',
      'Planned and deployed structured cabling and network hardware across multiple office sites',
      'Enforced security policies including firewall configuration and access control management',
      'Ensured reliable network operation through continuous monitoring and incident response',
    ],
    technologies: ['LAN/WAN', 'Cisco', 'Firewall', 'Security', 'Infrastructure']
  }
]


const cardVariants = {
  hidden: { opacity: 0, x: -30, y: 10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.18 }
  })
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'backOut' } }
}

function Experience() {
  return (
    <section id="experience" className="section-container relative z-10 overflow-hidden">
      <AnimatedSection>
        <h2 className="section-header">Experience</h2>
      </AnimatedSection>

      <div className="relative mt-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5% 0px' }}
              className="group relative grid md:grid-cols-[180px_auto_1fr] lg:grid-cols-[220px_auto_1fr] gap-6 md:gap-10 p-4 md:p-8 rounded-3xl transition-colors duration-500 hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
              whileHover={{ x: 4, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
            >
              {/* Left: Date badge */}
              <div className="text-left md:text-right pt-1 md:pt-4">
                <motion.span
                  className="inline-block px-5 py-2 rounded-full bg-brand-primary/5 dark:bg-brand-primary/10 text-brand-primary text-xs sm:text-sm font-mono font-bold tracking-widest border border-brand-primary/10 transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent"
                >
                  {exp.date}
                </motion.span>
              </div>

              {/* Center: Timeline line & dot */}
              <div className="hidden md:flex flex-col items-center relative z-10 w-8">
                <div className="w-[1.5px] h-full bg-gradient-to-b from-brand-primary/20 via-brand-primary/10 to-transparent absolute top-0 -bottom-8 group-last:h-[40px] transition-all duration-500 group-hover:via-brand-primary/50" />
                <div className="w-4 h-4 rounded-full bg-surface-light dark:bg-surface-dark border-[3px] border-brand-primary/30 group-hover:border-brand-primary group-hover:scale-125 transition-all duration-500 will-change-transform mt-7 relative z-20 shadow-[0_0_0px_rgba(99,102,241,0)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
              </div>

              {/* Right: Content */}
              <div className="text-left pt-1 md:pt-3 relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-text-light dark:text-text-dark mb-2 flex flex-col sm:flex-row sm:items-center gap-2">
                  {exp.title}
                  <span className="hidden sm:inline text-text-light-muted/40 dark:text-text-dark-muted/30 font-normal text-lg">at</span>
                  <a
                    href={exp.companyUrl}
                    className="text-brand-primary hover:text-brand-secondary transition-colors inline-flex items-center gap-1.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </h3>

                <motion.ul
                  className="mt-4 space-y-2 max-w-3xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: index * 0.18 + 0.2 } } }}
                >
                  {exp.bullets.map((item, bi) => (
                    <motion.li
                      key={bi}
                      variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
                      className="flex items-start gap-2.5 text-[0.98rem] text-text-light-muted dark:text-text-dark-muted leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brand-primary/60 shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  className="flex flex-wrap gap-2 mt-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: index * 0.18 + 0.35 } } }}
                >
                  {exp.technologies.map((tech, i) => (
                    <motion.span key={i} variants={chipVariants} className="tech-chip group-hover:border-brand-primary/30 transition-all duration-300">
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
