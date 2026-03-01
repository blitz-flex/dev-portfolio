function Projects() {
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
    }
  ]

  return (
    <section id="projects" className="section-container relative z-10 bg-bg-light dark:bg-bg-dark border-t border-border-light dark:border-border-dark">
      <h2 className="section-header">Featured Work</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <div key={index} className="pro-card p-0 flex flex-col group h-full">
            <div className="relative h-48 sm:h-56 overflow-hidden bg-surface-dark border-b border-border-light dark:border-border-dark">
              <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{project.title}</h3>
                <div className="flex gap-3">
                  <a href={project.github} className="text-text-light-muted dark:text-text-dark-muted hover:text-brand-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a href={project.live} className="text-text-light-muted dark:text-text-dark-muted hover:text-brand-primary transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
              <p className="text-[0.95rem] text-text-light-muted dark:text-text-dark-muted leading-relaxed font-normal mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags?.map((tag, i) => (
                  <span key={i} className="tech-chip bg-transparent px-2 py-1 text-[11px] border-border-light dark:border-border-dark text-text-light-muted dark:text-text-dark-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
