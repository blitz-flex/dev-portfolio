function About() {
  const skills = ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'C', 'Python']

  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8 relative flex items-center">
        <span className="font-mono text-xl md:text-2xl text-accent font-normal mr-2"></span>
        About Me
        <span className="block flex-1 h-px bg-[var(--color-light-border)] dark:bg-[var(--color-dark-border)] ml-4"></span>
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <p className="text-secondary mb-4 leading-relaxed">
            Hello! I'm Irakli, a Junior Web Developer driven by a passion for coding discovered during my university studies. I focus on building clean and user-friendly web experiences, utilizing my foundational front-end skills while actively learning back-end technologies.
          </p>
          <p className="text-secondary mb-4 leading-relaxed">
            Through various academic and personal projects, I've enjoyed turning ideas into code. I'm now eager to apply my skills, learn from experienced developers, and contribute positively to a team.
          </p>
          <p className="text-secondary mb-4">Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 text-secondary font-mono text-sm mt-4">
            {skills.map((skill, index) => (
              <li key={index} className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">
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
