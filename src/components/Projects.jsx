function Projects() {
  const projects = [
    {
      title: 'product-preview-card',
      description: 'Created a pixel-perfect, responsive product preview card component as part of a Frontend Mentor challenge, demonstrating proficiency in HTML structure and CSS styling.',
      image: 'https://github.com/blitz-flex/product-preview-card/blob/master/design/desktop-design.jpg?raw=true',
      github: 'https://github.com/blitz-flex/product-preview-card',
      live: 'https://blitz-flex.github.io/product-preview-card/'
    },
    {
      title: 'order-summary',
      description: 'Created an accurate and responsive implementation of the Order Summary card component based on the Frontend Mentor design specifications, utilizing HTML structure and CSS styling.',
      image: 'https://github.com/blitz-flex/order-summary/blob/master/design/desktop-preview.jpg?raw=true',
      github: 'https://github.com/blitz-flex/order-summary/tree/master',
      live: 'https://blitz-flex.github.io/order-summary/'
    },
    {
      title: 'calculator_odin',
      description: 'A fully-functional web calculator built with HTML, CSS, and JavaScript. Features modern interface with smooth animations and comprehensive calculation capabilities. Supports both mouse and keyboard input for versatile usage.',
      image: '/assets/1.jpg',
      github: 'https://github.com/blitz-flex/calculatot_odin',
      live: 'https://blitz-flex.github.io/calculatot_odin/'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-lightbg dark:bg-darkbg">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="section-title">
          <span className="font-mono text-xl md:text-2xl text-accent dark:text-dark-accent font-normal mr-2">03.</span>
          Portfolio
          <span className="block flex-1 h-px bg-light-border dark:bg-dark-border ml-4"></span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <div key={index} className="card-gradient hover-lift border border-light-border dark:border-dark-border rounded-xl overflow-hidden flex flex-col h-full group">
              <div className="relative overflow-hidden h-48 bg-light-border dark:bg-dark-border">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <i className="far fa-folder text-accent dark:text-dark-accent text-3xl"></i>
                  <div className="flex space-x-3">
                    <a href={project.github} className="text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent transition-all duration-300 hover:scale-125" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="View Code">
                      <i className="fab fa-github text-lg"></i>
                    </a>
                    <a href={project.live} className="text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent transition-all duration-300 hover:scale-125" target="_blank" rel="noopener noreferrer" aria-label="Live Demo" title="View Live">
                      <i className="fas fa-external-link-alt text-lg"></i>
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-heading dark:text-dark-heading mb-2">{project.title}</h3>
                <p className="text-secondary dark:text-dark-secondary text-sm leading-relaxed flex-grow">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
