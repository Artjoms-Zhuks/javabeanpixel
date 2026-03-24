import React from 'react'
import './Portfolio.css'


const Portfolio = ({ portfolio }) => {
    return (
        <section id="portfolio">
            <div className="container">
                <span className="section-title reveal">SECTION 3: PORTFOLIO</span>
                <div className="portfolio-grid">
                    {portfolio.map((item, index) => (
                        <a
                            key={index}
                            href={item.portfolioLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`portfolio-card reveal reveal-delay-${index + 1}`}
                        >
                            <div className="portfolio-thumb">
                                <img
                                    src={item.portfolioPhoto}
                                    alt={item.portfolioLabel}
                                    className="portfolio-img"
                                />
                                <div className="portfolio-overlay">VIEW PROJECT →</div>
                            </div>
                            <div className="portfolio-label">{item.label}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio