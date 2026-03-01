import { useState, useEffect } from 'react'

function Header({ darkMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-light/90 dark:bg-bg-dark/90 backdrop-blur-lg' : 'bg-transparent'} py-2`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="hover:opacity-80 transition-opacity relative z-20 flex items-center group">
            <div className="relative w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <svg viewBox="0 0 100 110" className="w-full h-full transition-all duration-500">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>

                {/* Serif 'I' — top serif */}
                <rect x="30" y="14" width="40" height="7" rx="2" fill="url(#logoGrad)" />
                {/* Stem */}
                <rect x="44" y="21" width="12" height="62" rx="1" fill="url(#logoGrad)" />
                {/* Bottom serif */}
                <rect x="30" y="79" width="40" height="7" rx="2" fill="url(#logoGrad)" />

                {/* Leaf 1 — tall center leaf */}
                <path d="M56 83 C 62 65, 80 60, 82 45 C 80 62, 70 70, 56 83 Z"
                  fill="url(#logoGrad)" opacity="0.95" />

                {/* Leaf 2 — wide right leaf */}
                <path d="M56 86 C 65 78, 90 75, 95 63 C 88 76, 72 80, 56 86 Z"
                  fill="url(#logoGrad)" opacity="0.75" />

                {/* Leaf 3 — small lower leaf */}
                <path d="M56 88 C 60 82, 76 82, 82 75 C 76 83, 64 85, 56 88 Z"
                  fill="url(#logoGrad)" opacity="0.55" />
              </svg>
              <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </a>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-sm font-medium">
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#experience" className="nav-link">Experience</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
              </ul>
            </nav>

            <button onClick={toggleTheme} className="p-2 border border-border-light dark:border-border-dark text-text-light-muted dark:text-text-dark-muted hover:text-brand-primary dark:hover:text-brand-primary rounded-lg transition-all duration-300 bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow" aria-label="Toggle theme">
              {darkMode ? (
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button onClick={toggleMobileMenu} className={`md:hidden p-2 focus:outline-none transition-all duration-300 z-50`}>
              <div className={`w-6 h-[2px] bg-text-light dark:bg-text-dark transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
              <div className={`w-6 h-[2px] bg-text-light dark:bg-text-dark transition-all duration-300 mt-1.5 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-[2px] bg-text-light dark:bg-text-dark transition-all duration-300 mt-1.5 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></div>
            </button>
          </div>
        </div>
      </header>

      <nav className={`md:hidden fixed inset-0 w-full h-full bg-bg-light/95 dark:bg-bg-dark/95 backdrop-blur-lg z-40 transition-all duration-300 flex items-center justify-center ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center justify-center space-y-8 text-2xl font-bold">
          <li><a href="#home" onClick={closeMobileMenu} className="text-text-light-muted dark:text-text-dark-muted hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-300">Home</a></li>
          <li><a href="#about" onClick={closeMobileMenu} className="text-text-light-muted dark:text-text-dark-muted hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-300">About</a></li>
          <li><a href="#experience" onClick={closeMobileMenu} className="text-text-light-muted dark:text-text-dark-muted hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-300">Experience</a></li>
          <li><a href="#projects" onClick={closeMobileMenu} className="text-text-light-muted dark:text-text-dark-muted hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-300">Projects</a></li>
          <li><a href="#contact" onClick={closeMobileMenu} className="text-text-light-muted dark:text-text-dark-muted hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-300">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
