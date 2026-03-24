import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        // Fixing the field error when printing begins
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' })
        }
    }

    const handleSubmit = async () => {
        // Cheking fields
        const newErrors = {}
        if (!form.name) newErrors.name = 'Please enter your name'
        if (!form.email) newErrors.email = 'Please enter your email'
        if (!form.message) newErrors.message = 'Please enter your message'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setStatus('sending')

        try {
            const templateParams = {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
            }

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID2,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID1,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setStatus('success')
            setForm({ name: '', email: '', message: '' })
            setErrors({})

        } catch (error) {
            // Checking limits EmailJS
            if (error?.status === 429 || error?.text?.includes('limit')) {
                setStatus('limit')
            } else {
                setStatus('error')
            }
        }
    }

    return (
        <section id="contact">
            <div className="container">
                <span className="section-title reveal">SECTION 5: CONTACT</span>
                <div className="contact-wrap reveal">

                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className={`form-input ${errors.name ? 'input-error' : ''}`}
                            placeholder="NAME"
                            value={form.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="field-error">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                            placeholder="EMAIL"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="field-error">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            className={`form-input ${errors.message ? 'input-error' : ''}`}
                            placeholder="MESSAGE"
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className="field-error">{errors.message}</p>}
                    </div>


                    {status === 'success' && (
                        <p className="form-success">Message sent! ✅</p>
                    )}
                    {status === 'error' && (
                        <p className="form-error">Something went wrong. Please try again ❌</p>
                    )}
                    {status === 'limit' && (
                        <p className="form-error">
                            Contact form is temporarily unavailable. Please email us directly at{' '}
                            <a href="mailto:a@testgmail.com" className="form-email-link">
                                a@testgmail.com
                            </a>{' '}
                            ❌
                        </p>
                    )}

                    <button
                        className="form-submit"
                        onClick={handleSubmit}
                        disabled={status === 'sending'}
                    >
                        <span>{status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
