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
    <section id="contact" className="py-16 max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-accent dark:text-dark-accent text-sm font-mono uppercase tracking-widest mb-3 font-bold"> Get In Touch</p>

      </div>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name"
                required
                className="input-modern"
              />
            </div>
            
            <div className="group">
              <input 
                type="email" 
                id="email" 
                name="_replyto" 
                placeholder="Your Email"
                required
                className="input-modern"
              />
            </div>
          </div>
          
          <div className="group">
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              placeholder="Your Message"
              required
              className="input-modern resize-none"
            ></textarea>
          </div>
          
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          
          {isSubmitted && (
            <div className="p-4 bg-accent/10 dark:bg-dark-accent/10 border border-accent dark:border-dark-accent rounded-xl text-center animate-pulse">
              <p className="text-accent dark:text-dark-accent font-medium">✓ Message sent successfully!</p>
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full btn-gradient disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message '
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
