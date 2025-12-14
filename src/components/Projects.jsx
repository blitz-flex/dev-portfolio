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
      title: 'calculatot_odin',
      description: 'This project is a fully-functional web calculator built with HTML, CSS, and JavaScript. It features a modern, visually appealing interface with smooth animations and comprehensive calculation capabilities. The calculator is designed for both mouse and keyboard input, making it versatile for different user preferences.',
      image: '/assets/1.jpg',
      github: 'https://github.com/blitz-flex/calculatot_odin',
      live: 'https://blitz-flex.github.io/calculatot_odin/'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-[var(--color-lightbg)] dark:bg-[var(--color-darkbg)]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8 relative flex items-center">
          <span className="font-mono text-xl md:text-2xl text-accent font-normal mr-2"></span>
          Some Things I've Built
          <span className="block flex-1 h-px bg-[var(--color-light-border)] dark:bg-[var(--color-dark-border)] ml-4"></span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-card border border-[var(--color-light-border)] dark:border-[var(--color-dark-border)] rounded-lg overflow-hidden shadow-lg transition flex flex-col h-full hover:-translate-y-1 hover:shadow-xl">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <i className="far fa-folder text-accent text-3xl"></i>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-secondary hover:text-accent transition" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href={project.live} className="text-secondary hover:text-accent transition" target="_blank" rel="noopener noreferrer" aria-label="External Link">
                      <i className="fas fa-external-link-alt text-xl"></i>
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">{project.title}</h3>
                <p className="mt-2 text-secondary text-sm mb-4 flex-grow">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
