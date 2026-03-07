<div align="center">
  <h1>Full-Stack Developer Portfolio</h1>


  <a>
    <picture>
      <img
        src="https://res-portfilio.netlify.app/assets/dev_illustration.png"
        alt="→ Open live site: res-portfilio.netlify.app"
        width="950"
      </div>
    </picture>
    <br/>
  </a>
</div>


Single-page portfolio built with React and Vite. Glassmorphism dark theme, spring-physics animations via Framer Motion, and a Formspree contact form — fully static, no backend.


## Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture Notes](#architecture-notes)



## Features

| | |  
|---|---|
| **Dark / Light mode** | Reads `prefers-color-scheme` on first load; persists choice to `localStorage` |
| **Scroll animations** | Every section wrapped in `AnimatedSection` — Framer Motion `whileInView` with configurable `direction` and `delay` |
| **Experience timeline** | Three-column layout: date badge · animated dot-line connector · content with tech chips |
| **Project slider** | Horizontal `snap-x` scroll; prev / next buttons appear on hover; works on touch |
| **Contact form** | Async POST to Formspree; local `isSubmitting` / `isSubmitted` state; no backend |
| **Responsive layout** | Fluid grid from 320 px to 4K; no layout shift on hydration |



## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| UI | React | Concurrent rendering, stable hooks API |
| Build | Vite | Sub-second HMR; `vite preview` for prod smoke-testing |
| Styling | Tailwind CSS | Design tokens live in `tailwind.config.js`; custom utilities in `input.css` |
| Animation | Framer Motion | `whileInView`, `AnimatePresence`, spring variants |
| Forms | Formspree | Spam filtering and email delivery handled externally |
| Hosting | Netlify | Auto-deploy on push to `main` |


## Project Structure

```
src/
├── components/
│   ├── AnimatedSection.jsx   # Shared scroll-reveal wrapper (direction, delay props)
│   ├── Background.jsx        # Fixed ambient layer; position:fixed, z-index 0
│   ├── Header.jsx            # Sticky nav + theme toggle
│   ├── Hero.jsx              # Above-the-fold; two-column grid, staggered text entrance
│   ├── About.jsx             # Bio paragraphs + wave-stagger skill chip card
│   ├── Experience.jsx        # Timeline: three columns, spring hover on dot
│   ├── Projects.jsx          # Snap-scroll slider; GitHub + Live Demo hover overlay
│   ├── Contact.jsx           # Formspree async form with submission feedback
│   └── Social.jsx            # Footer: GitHub, LinkedIn, X
├── App.jsx                   # Theme state (useState + useEffect) + root layout
├── main.jsx                  # React entry point — mounts to #root
└── input.css                 # @tailwind directives + custom design tokens
```



## Architecture Notes

**Theme system**

Theme state is owned by `App.jsx`. On mount, a `useEffect` reads `localStorage` and falls back to `window.matchMedia('prefers-color-scheme: dark')`. Toggling adds or removes the `dark` class on `<html>`, which Tailwind's `darkMode: 'class'` config picks up. The choice is written back to `localStorage` on every toggle.

**Animation pattern**

`AnimatedSection.jsx` is a single Framer Motion wrapper reused by every section. Keeping the entrance animation logic in one place means adjusting the global motion feel — easing curve, distance, duration — requires one file change. Individual components only pass `direction` and `delay`; they have no knowledge of Framer Motion.

**Static form delivery**

Routing contact form submissions through Formspree keeps the project fully static. A custom API route would add infrastructure with no meaningful benefit for a portfolio. Formspree handles CORS, spam filtering, and email forwarding; the component tracks `isSubmitting` and `isSubmitted` locally to give the user feedback.



## Live Site

<a href="https://res-portfilio.netlify.app">
    <img alt="visit" src="https://img.shields.io/badge/🌐%20%20Explore Live Production-%20%20→-6366f1?style=for-the-badge&logoColor=white"/>
  </a>













