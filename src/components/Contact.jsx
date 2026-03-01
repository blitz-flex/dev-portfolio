import { useState } from 'react'

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
        headers: {
          'Accept': 'application/json'
        }
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
    <section id="contact" className="section-container relative z-10 bg-bg-light dark:bg-bg-dark overflow-hidden">


      <h2 className="section-header relative z-10">Let's Connect</h2>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mt-12 relative z-10">
        <div className="space-y-6 text-lg text-text-light-muted dark:text-text-dark-muted leading-relaxed font-normal">
          <p>
            I am currently open for full-time roles or freelance opportunities. Whether you have a specific project in mind or want to discuss a potential partnership, I'm always excited to hear about new challenges and how I can help solve them.
          </p>
        </div>

        <div className="pro-card !p-6 md:!p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-text-light-muted dark:text-text-dark-muted ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-xl px-4 py-3 text-[0.95rem] text-text-light dark:text-text-dark focus:border-brand-primary dark:focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all duration-300 placeholder:text-text-light-muted/50 dark:placeholder:text-text-dark-muted/50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-text-light-muted dark:text-text-dark-muted ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="_replyto"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-xl px-4 py-3 text-[0.95rem] text-text-light dark:text-text-dark focus:border-brand-primary dark:focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all duration-300 placeholder:text-text-light-muted/50 dark:placeholder:text-text-dark-muted/50"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-text-light-muted dark:text-text-dark-muted ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="How can I help you?"
                required
                className="resize-none w-full bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-xl px-4 py-3 text-[0.95rem] text-text-light dark:text-text-dark focus:border-brand-primary dark:focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all duration-300 placeholder:text-text-light-muted/50 dark:placeholder:text-text-dark-muted/50"
              ></textarea>
            </div>

            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            {isSubmitted && (
              <div className="p-3 bg-brand-primary/10 border border-brand-primary rounded-xl text-center animate-fade-in text-brand-primary font-medium text-xs">
                ✓ Message sent successfully!
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
