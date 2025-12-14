function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="font-mono text-xl md:text-2xl text-accent font-normal mr-2"></span>
          Contact
        </h2>
        
        <form action="https://formspree.io/f/myzeojjw" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="w-full py-3 px-4 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              type="email" 
              id="email" 
              name="_replyto" 
              placeholder="Your Email" 
              required 
              className="w-full py-3 px-4 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              placeholder="Your Message" 
              required 
              className="w-full py-3 px-4 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
            ></textarea>
          </div>
          
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          
          <button 
            type="submit" 
            className="w-full py-3 bg-black text-white font-bold rounded-lg transition-all duration-300 hover:bg-opacity-80 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
