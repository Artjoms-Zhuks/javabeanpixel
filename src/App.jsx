import { useState, useEffect } from 'react'
import './App.css'
import { content } from '../contents/content'  // импорт
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import FaqContent from './components/FaqContent'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* FONTS ELEMENTS */}
      <div className="bg-canvas"></div>
      <div className="grid-overlay"></div>
      <div className="neon-bars">
        <div className="neon-bar"></div>
        <div className="neon-bar"></div>
        <div className="neon-bar"></div>
        <div className="neon-bar"></div>
        <div className="neon-bar"></div>
        <div className="neon-bar"></div>
      </div>

      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <Hero hero={content.hero} />

      {/* ABOUT */}
      <About about={content.about} />

      {/* SERVICES */}
      <Service />


      {/* PORTFOLIO */}
      <Portfolio portfolio={content.portfolio} />


      {/* FAQ */}
      <FaqContent faqItems={content.faqItems} />


      {/* CONTACT */}
      <Contact />
      <div id="about" style={{ position: 'relative', marginTop: '-80px', visibility: 'hidden' }}></div>

      <footer>
        © 2026 <span>THE JAVA BEAN / PIXEL</span> — All Rights Reserved
      </footer>
    </>
  )
}

export default App;