import React from 'react'
import './Hero.css'

const Hero = ({ hero }) => {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="logo-wrap">
          <img className="logo-img" src="/logo.png" alt="The Java Bean / Pixel" />
          <div className="logo-name">{hero.logoName}</div>
        </div>
        <h1 className="hero-title">
          OUR STUDIO CREATES ROBUST<br />WEB APPS &amp; JAVA BACKENDS
        </h1>
        <p className="hero-sub">{hero.heroSub}</p>
        <div className="hero-btns">
          <a href="#services" className="btn btn-primary">EXPLORE OUR DESIGNS</a>
          <a href="#portfolio" className="btn btn-outline">VIEW PORTFOLIOS</a>
        </div>
      </div>
      <div className="ui-badge">USER<br />INTERFACE<br />(Web/Mobile)</div>
    </section>
  )
}

export default Hero