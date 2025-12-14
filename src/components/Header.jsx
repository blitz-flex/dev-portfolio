import { useState } from 'react'

function Header({ darkMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="fixed w-full top-0 bg-[var(--color-lightbg)]/85 dark:bg-[var(--color-darkbg)]/85 z-50 shadow-md backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-accent font-bold text-xl font-mono">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0,0,256,256">
              <g fill="currentColor" fillRule="nonzero">
                <g transform="scale(5.12,5.12)">
                  <path d="M5.489,24.746l12.936,3.715l-2.843,-8.842zM44.571,25.524l-12.81,-2.869l2.312,9.607zM17.676,17.451l11.39,2.551l-3.702,-15.385zM29.587,22.168l-11.944,-2.675l3.096,9.633l11.303,3.246zM31.877,34.405l-10.401,-2.987l4.506,14.017zM33.992,34.691l-6.819,12.758l19.578,-20.947zM47.226,24.019l-20.384,-21.811l4.399,18.281l15.799,3.538c0.061,-0.012 0.124,-0.008 0.186,-0.008zM19.161,30.753l-16.24,-4.664l21.724,21.725zM15.306,17.516l8.933,-14.912l-21.085,21.085z"></path>
                </g>
              </g>
            </svg>
          </a>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:block">
              <ul className="flex space-x-6 text-sm font-mono">
                <li><a href="#home" className="text-secondary hover:text-accent transition">Home</a></li>
                <li><a href="#about" className="text-secondary hover:text-accent transition">About</a></li>
                <li><a href="#experience" className="text-secondary hover:text-accent transition">Experience</a></li>
                <li><a href="#projects" className="text-secondary hover:text-accent transition">Projects</a></li>
                <li><a href="#contact" className="text-secondary hover:text-accent transition">Contact</a></li>
                <li><a href="/assets/Irakli_Abashidze_CV.pdf" className="px-3 py-1 text-sm rounded border border-accent text-accent hover:bg-accent hover:text-[var(--color-lightbg)] transition">Resume</a></li>
              </ul>
            </nav>
            
            <button onClick={toggleTheme} className="p-2 border border-accent text-accent hover:bg-accent hover:text-[var(--color-lightbg)] rounded transition" aria-label="Toggle theme">
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
            
            <button onClick={toggleMobileMenu} className={`md:hidden p-2 focus:outline-none ${mobileMenuOpen ? 'active' : ''}`}>
              <div className={`w-6 h-0.5 bg-accent transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-accent transition-all duration-300 mt-1.5 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-accent transition-all duration-300 mt-1.5 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
            </button>
          </div>
        </div>
      </header>

      <nav className={`md:hidden fixed top-0 right-0 w-3/4 max-w-sm h-full bg-[var(--color-lightbg)] dark:bg-[var(--color-darkbg)] shadow-lg z-[60] transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={closeMobileMenu} className="absolute top-5 right-5 p-2 text-secondary">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-mono">
          <li><a href="#home" onClick={closeMobileMenu} className="text-secondary hover:text-accent transition">Home</a></li>
          <li><a href="#about" onClick={closeMobileMenu} className="text-secondary hover:text-accent transition">About</a></li>
          <li><a href="#experience" onClick={closeMobileMenu} className="text-secondary hover:text-accent transition">Experience</a></li>
          <li><a href="#projects" onClick={closeMobileMenu} className="text-secondary hover:text-accent transition">Projects</a></li>
          <li><a href="#contact" onClick={closeMobileMenu} className="text-secondary hover:text-accent transition">Contact</a></li>
          <li><a href="/assets/Irakli_Abashidze_CV.pdf" className="px-4 py-2 rounded border border-accent text-accent hover:bg-accent hover:text-[var(--color-lightbg)] transition">Resume</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
