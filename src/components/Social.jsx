function Social() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/blitz-flex',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/irakliabashidze/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: 'X',
      url: 'https://x.com/irakli_dev',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ]

  return (
    <footer className="relative py-12 flex flex-col items-center gap-5">

      {/* Social Links */}
      <div className="flex items-center gap-7">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="group relative p-2 text-text-light dark:text-text-dark-muted/50 hover:text-brand-primary transition-all duration-300 hover:-translate-y-1.5 hover:scale-110"
          >
            <span className="absolute inset-0 bg-brand-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            <span className="relative z-10 block">{link.icon}</span>
          </a>
        ))}
      </div>

      {/* Copyright Line */}
      <p className="text-[10px] font-mono text-text-light/60 dark:text-text-dark-muted/30 uppercase tracking-[0.3em] font-medium pointer-events-none">
        Copyright © {new Date().getFullYear()} — Irakli
      </p>

    </footer>
  )
}

export default Social
