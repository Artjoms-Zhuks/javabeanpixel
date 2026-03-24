import React, { useState, useEffect } from 'react'
import './Navbar.css'
function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <div className="nav-inner">
                <a href="#hero" className="nav-link">HOME</a>
                <a href="#about" className="nav-link">ABOUT</a>
                <a href="#portfolio" className="nav-link">PORTFOLIO</a>
                <a href="#services" className="nav-link">SERVICES</a>
                <a href="#faq" className="nav-link">FAQ</a>
                <a href="#contact" className="nav-link">CONTACT</a>
            </div>
        </nav>
    )
}

export default Navbar