import { motion } from 'framer-motion'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="home" className="min-h-[100svh] pt-28 md:pt-32 pb-12 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center relative z-10 w-full">
        {/* Left — Text */}
        <motion.div 
          className="text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-sm font-mono text-brand-primary dark:text-indigo-400 mb-4 tracking-widest uppercase">
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl xl:text-7xl font-black text-text-light dark:text-text-dark tracking-tight mb-5 leading-[1.05]">
            Hi, I'm{' '}
            <span className="text-gradient hover:opacity-80 transition-opacity cursor-default">Irakli</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-lg text-base sm:text-lg text-text-light-muted dark:text-text-dark-muted mb-8 leading-relaxed font-normal">
            I engineer elegant, user-centric digital experiences by blending modern technical architectures with meticulous design principles.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a href="#projects" className="btn-primary group">
              View Projects
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Illustration */}
        <motion.div 
          className="relative group order-1 lg:order-2 flex justify-center items-center py-8 lg:py-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div
            className="relative w-full max-w-[320px] sm:max-w-[450px] xl:max-w-[580px] drop-shadow-2xl dark:drop-shadow-none xl:-mt-8"
          >
            <img
              src="/assets/dev_illustration.png"
              alt="Irakli - Developer Illustration"
              className="relative w-full h-auto object-contain transition-all duration-700 group-hover:scale-[1.02] mix-blend-multiply opacity-80 contrast-125 brightness-110 grayscale-[0.2] invert-[0.9] hue-rotate-[185deg] dark:mix-blend-screen dark:invert-0 dark:hue-rotate-0 dark:opacity-90 dark:grayscale-0"
              style={{
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
