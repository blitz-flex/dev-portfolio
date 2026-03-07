import { useRef } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const projects = [
  {
    title: 'Product Preview Card',
    description: 'Pixel-perfect, responsive robust product implementation featuring clean HTML semantic standards and sophisticated layout approaches.',
    image: 'https://github.com/blitz-flex/product-preview-card/blob/master/design/desktop-design.jpg?raw=true',
    github: 'https://github.com/blitz-flex/product-preview-card',
    live: 'https://blitz-flex.github.io/product-preview-card/',
    tags: ['HTML5', 'CSS', 'Responsive']
  },
  {
    title: 'Order Summary Module',
    description: 'A deeply interactive and responsive order module demonstrating advanced Flexbox integration and subtle interaction designs.',
    image: 'https://github.com/blitz-flex/order-summary/blob/master/design/desktop-preview.jpg?raw=true',
    github: 'https://github.com/blitz-flex/order-summary/tree/master',
    live: 'https://blitz-flex.github.io/order-summary/',
    tags: ['CSS Flexbox', 'UI Layout']
  },
  {
    title: 'Odin Web Calculator',
    description: 'Fully-functional scientific browser calculator powered by JavaScript. Boasts smooth DOM manipulations, keyboard support, and precise evaluation logic.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f720?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/blitz-flex/calculatot_odin',
    live: 'https://blitz-flex.github.io/calculatot_odin/',
    tags: ['JavaScript', 'Algorithms', 'DOM']
  },
  {
    title: 'Portfolio Interface',
    description: 'A minimalist, dark-themed portfolio website with subtle animations, custom styling, and optimized React architecture.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    github: '#',
    live: '#',
    tags: ['React', 'Tailwind CSS', 'UI/UX']
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }
  })
}

function Projects() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      scrollRef.current.scrollBy({ left: direction === 'left' ? -clientWidth : clientWidth, behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className="section-container relative z-10 overflow-hidden">
      <AnimatedSection>
        <h2 className="section-header relative z-10 mt-12 mb-10">Featured Work</h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="relative group/slider">
        {/* Navigation buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 dark:bg-black/30 backdrop-blur-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-text-light dark:text-text-dark shadow-[0_8px_32px_rgba(0,0,0,0.12)] opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hover:scale-105 hover:bg-white dark:hover:bg-black/50 group/btn"
          aria-label="Previous project"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover/btn:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 dark:bg-black/30 backdrop-blur-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-text-light dark:text-text-dark shadow-[0_8px_32px_rgba(0,0,0,0.12)] opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hover:scale-105 hover:bg-white dark:hover:bg-black/50 group/btn"
          aria-label="Next project"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards scroll area */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-12 relative z-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5% 0px' }}
              className="pro-card p-0 flex flex-col group h-[320px] w-[85vw] md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.35rem)] shrink-0 snap-start bg-surface-light dark:bg-surface-dark/40 border border-black/5 dark:border-white/5 hover:border-brand-primary/20 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.15)] transition-all duration-500"
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 260, damping: 22 } }}
            >
              {/* Top area — Links only */}
              <div className="relative h-40 overflow-hidden rounded-t-2xl shrink-0 bg-black/5 dark:bg-white/5">
                {/* Hover overlay — triggered by parent group class */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-brand-primary text-white flex items-center justify-center border border-white/20"
                    target="_blank" rel="noopener noreferrer" title="View Code"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-brand-primary text-white flex items-center justify-center border border-white/20"
                    target="_blank" rel="noopener noreferrer" title="Live Demo"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Card body */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-6">{project.title}</h3>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5 dark:border-white/5">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="tech-chip shrink-0">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

export default Projects
