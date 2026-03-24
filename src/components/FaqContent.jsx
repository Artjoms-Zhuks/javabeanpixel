import React, { useState } from 'react'
import './FaqContent.css'

const FaqContent = ({ faqItems }) => {
    const [openFaq, setOpenFaq] = useState(null)
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }
    return (
        <section id="faq">
            <div className="container">
                <span className="section-title reveal">SECTION 4: FAQ</span>
                <div className="faq-list">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item reveal visible reveal-delay-${index + 1} ${openFaq === index ? 'open' : ''}`}
                        >
                            <div className="faq-q" onClick={() => toggleFaq(index)}>
                                {item.q}
                                <span className="faq-icon">∧</span>
                            </div>
                            <div className="faq-a">{item.a}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FaqContent