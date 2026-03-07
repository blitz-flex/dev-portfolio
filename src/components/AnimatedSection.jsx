import { motion } from 'framer-motion'

// Reusable smooth-entry wrapper – used across every section
const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const yFrom = direction === 'up' ? 50 : direction === 'down' ? -50 : 0
  const xFrom = direction === 'left' ? -15 : direction === 'right' ? 15 : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: yFrom, x: xFrom }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      style={{ transition: 'none' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
