import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

// Wave stagger — each chip flies up with a spring overshoot
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } }
}

const chipVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.75, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 380, damping: 18, mass: 0.6 }
  }
}

const bullets = [
  { icon: '⚡', text: 'Building performant, pixel-perfect frontends with React & Tailwind' },
  { icon: '🐍', text: 'Developing REST APIs and server-side logic with Python & Flask' },
  { icon: '🔧', text: 'Deep IT background - networking, infrastructure, and systems administration' },
  { icon: '🎨', text: 'UI/UX prototyping - turning wireframes into polished, interactive products' },
]

const skills = [
  'HTML5', 'CSS3 / Tailwind', 'JavaScript (ES6+)', 'React',
  'Python', 'Flask', 'Node.js', 'REST APIs',
  'Linux / SysAdmin', 'Networking', 'UI/UX Prototyping'
]

function About() {
  return (
    <section id="about" className="section-container relative z-10 overflow-hidden">
      <AnimatedSection>
        <h2 className="section-header relative z-10">About Me</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-5 gap-12 items-start relative z-10">

        {/* Text — slides in from left */}
        <AnimatedSection
          delay={0.1}
          direction="left"
          className="md:col-span-3 space-y-6"
        >
          <p className="text-lg text-text-light-muted dark:text-text-dark-muted leading-relaxed font-normal">
            Hey, I'm Irakli - a{' '}
            <span className="text-brand-primary font-semibold">Full-Stack Developer</span>{' '}
            and{' '}
            <span className="text-brand-primary font-semibold">IT Specialist</span>{' '}
            with a passion for building elegant, user-centric digital experiences. I bridge the gap between solid backend infrastructure and polished, interactive frontends.
          </p>

          <p className="text-lg text-text-light-muted dark:text-text-dark-muted leading-relaxed font-normal">
            My path started in IT - managing networks, servers, and critical systems - which gave me a deep understanding of how software and infrastructure connect. That foundation now powers the way I architect and ship full-stack solutions.
          </p>

          {/* Bullet highlights */}
          <motion.ul
            className="space-y-3 pt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5% 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          >
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                className="flex items-start gap-3 text-[1rem] text-text-light-muted dark:text-text-dark-muted"
              >
                <span className="mt-0.5 text-base shrink-0">{b.icon}</span>
                <span>{b.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatedSection>

        {/* Skill card — animated border reveal + wave chip entrance */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="md:col-span-2"
        >
          <motion.div
            className="pro-card relative w-full h-full flex flex-col justify-center overflow-hidden"
            initial={{ boxShadow: '0 0 0px 0px rgba(99,102,241,0)' }}
            whileInView={{ boxShadow: ['0 0 0px 0px rgba(99,102,241,0)', '0 0 28px 4px rgba(99,102,241,0.18)', '0 0 0px 0px rgba(99,102,241,0)'] }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.5, ease: 'easeInOut' }}
            style={{ border: '1px solid rgba(0,0,0,0.05)' }}
          >
            {/* Subtle top-edge gradient line that sweeps across on reveal */}
            <motion.div
              className="absolute top-0 left-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary to-transparent pointer-events-none"
              initial={{ width: '0%', opacity: 0 }}
              whileInView={{ width: '100%', opacity: [0, 1, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
            />

            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -8, 4, 0] }}
                transition={{ duration: 2, delay: 1, ease: 'easeInOut', repeat: 0 }}
              >
                <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Core Stack</h3>
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5% 0px' }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={chipVariants}
                  className="tech-chip"
                  whileHover={{
                    scale: 1.12,
                    y: -3,
                    boxShadow: '0 0 16px 2px rgba(99,102,241,0.35)',
                    borderColor: 'rgba(99,102,241,0.55)',
                    backgroundColor: 'rgba(99,102,241,0.14)',
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
