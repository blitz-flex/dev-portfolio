function About() {
  const skills = ['HTML5', 'Tailwind CSS', 'JavaScript', 'React', 'C', 'Python']

  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="section-title">
        <span className="font-mono text-xl md:text-2xl text-accent dark:text-dark-accent font-normal mr-2"></span>
        About Me
        <span className="block flex-1 h-px bg-light-border dark:bg-dark-border ml-4"></span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="text-secondary dark:text-dark-secondary mb-4 leading-relaxed text-lg">
            Hello! I'm Irakli, a passionate <span className="text-accent dark:text-dark-accent font-semibold">web developer</span> with a love for building beautiful and functional digital experiences.
          </p>
          <p className="text-secondary dark:text-dark-secondary mb-4 leading-relaxed">
            My journey started during university, where I discovered my passion for coding. Since then, I've been actively developing my skills in modern web technologies, focusing on creating clean, maintainable code and intuitive user interfaces.
          </p>
          <p className="text-secondary dark:text-dark-secondary leading-relaxed">
            When I'm not coding, you'll find me learning new technologies, contributing to open-source projects, or exploring the latest design trends.
          </p>
        </div>
        <div className="card-gradient hover-lift">
          <h3 className="text-lg font-bold text-heading dark:text-dark-heading mb-4">Tech Stack</h3>
          <ul className="space-y-3">
            {skills.map((skill, index) => (
              <li key={index} className="relative pl-6 text-secondary dark:text-dark-secondary before:content-['→'] before:absolute before:left-0 before:text-accent dark:before:text-dark-accent before:font-bold">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
