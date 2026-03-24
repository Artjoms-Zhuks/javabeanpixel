import React from 'react'
import './Service.css'
function Service() {
    return (
        <section id="services">
            <div className="container">
                <span className="section-title reveal">SECTION 2: SERVICES</span>
                <div className="services-grid">
                    <div className="service-card reveal reveal-delay-1">
                        <div className="service-icon">👥</div>
                        <div className="service-name">JAVA BACKENDS</div>
                        <div className="service-desc">Clean OOP logic, secure and reliable</div>
                    </div>
                    <div className="service-card reveal reveal-delay-2">
                        <div className="service-icon">🔗</div>
                        <div className="service-name">API INTEGRATIONS</div>
                        <div className="service-desc">Connect systems effortlessly (Lite REST/SOAP)</div>
                    </div>
                    <div className="service-card reveal reveal-delay-3">
                        <div className="service-icon">🖥️</div>
                        <div className="service-name">MODERN WEB UI</div>
                        <div className="service-desc">Full-stack responsive design (React/Tailwind)</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service