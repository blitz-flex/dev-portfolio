import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Social from './components/Social'
import Background from './components/Background'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen relative bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark font-sans selection:bg-brand-primary/30 antialiased overflow-x-hidden">
      <CustomCursor />
      <Background />
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main className="w-full flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Social />
      </div>
    </div>
  )
}

export default App
