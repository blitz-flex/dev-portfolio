import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
  })
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.target
    const formData = new FormData(form)
    try {
      await fetch('https://formspree.io/f/myzeojjw', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      setIsSubmitted(true)
      form.reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-container relative z-10 overflow-hidden">
      <AnimatedSection>
        <h2 className="section-header relative z-10">Let's Connect</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mt-12 relative z-10">

        {/* Left text — slide from left */}
        <AnimatedSection
          delay={0.1}
          direction="left"
          className="space-y-6 text-lg text-text-light-muted dark:text-text-dark-muted leading-relaxed font-normal"
        >
          <p>
            I am currently open for full-time roles or freelance opportunities. Whether you have a specific project in mind or want to discuss a potential partnership, I'm always excited to hear about new challenges and how I can help solve them.
          </p>
        </AnimatedSection>

        {/* Form card — Final fixed state entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { 
              opacity: 1, 
              x: 0, 
              transition: { 
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1], // Stays fixed after arrival
                staggerChildren: 0.1,
                delayChildren: 0.2
              } 
            }
          }}
          className="pro-card border border-black/5 dark:border-white/5 bg-surface-light dark:bg-surface-dark/40 !p-6 md:!p-8"
        >
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-text-light-muted dark:text-text-dark-muted ml-1">Name</label>
                  <input
                    type="text" id="name" name="name" placeholder="John Doe" required
                    className="w-full bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-xl px-4 py-3 text-[0.95rem] text-text-light dark:text-text-dark focus:border-brand-primary dark:focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all duration-300 placeholder:text-text-light-muted/50 dark:placeholder:text-text-dark-muted/50"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-text-light-muted dark:text-text-dark-muted ml-1">Email</label>
                  <input
                    type="email" id="email" name="email" placeholder="john@example.com" required
                    className="w-full bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-xl px-4 py-3 text-[0.95rem] text-text-light dark:text-text-dark focus:border-brand-primary dark:focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all duration-300 placeholder:text-text-light-muted/50 dark:placeholder:text-text-dark-muted/50"
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div variants={fieldVariants} className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-text-light-muted dark:text-text-dark-muted ml-1">Message</label>
                <textarea
                  id="message" name="message" rows="4" placeholder="How can I help you?" required
                  className="resize-none w-full bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-xl px-4 py-3 text-[0.95rem] text-text-light dark:text-text-dark focus:border-brand-primary dark:focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all duration-300 placeholder:text-text-light-muted/50 dark:placeholder:text-text-dark-muted/50"
                />
              </motion.div>

              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              {/* Success message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-3 bg-brand-primary/10 border border-brand-primary rounded-xl text-center text-brand-primary font-medium text-xs"
                    role="alert"
                    aria-live="polite"
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                variants={fieldVariants}
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending…
                  </span>
                ) : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
