import React from 'react'
import './About.css'

const About = ({ about }) => {
    return (
        <section id="about">
            <div className="container">
                <span className="section-title reveal">SECTION: ABOUT</span>
                <div className="about-wrap">
                    <div className="about-text reveal">
                        <h2 className="about-heading">We Build More Than Websites</h2>
                        <p className="about-desc">{about.about_desc1}</p>
                        <p className="about-desc">{about.about_desc2}</p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card reveal reveal-delay-1">
                            <div className="about-card-icon">🌐</div>
                            <div className="about-card-title">Web Development</div>
                            <div className="about-card-desc">{about.about_card_desc1}</div>
                        </div>
                        <div className="about-card reveal reveal-delay-2">
                            <div className="about-card-icon">☕</div>
                            <div className="about-card-title">Java Backend</div>
                            <div className="about-card-desc">{about.about_card_desc2}</div>
                        </div>
                        <div className="about-card reveal reveal-delay-3">
                            <div className="about-card-icon">🎯</div>
                            <div className="about-card-title">Custom Solutions</div>
                            <div className="about-card-desc">{about.about_card_desc3}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About