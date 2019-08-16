import React from 'react'

export default function Contact () {
    return (
        <div>
            <div className="contact-header">
                <h2 className="contact-header__title">Tell me about your projects.</h2>
                <a href="mailto:annietaylorchen@gmail.com">annie.taylor.chen@gmail.com</a>
            </div>

            <div className="contact">
                <div className="contact-bg"></div>
                <form className="contact-form" method="POST" action="https://formspree.io/annietaylorchen@gmail.com">
                    <label>Name: (required)</label>
                    <input type="text" name="name" placeholder="your name" required />
                    <label>Email: (required)</label>
                    <input type="email" name="email" placeholder="your email" required />
                    <label>Request: (required)</label>
                    <textarea name="message" type="text" placeholder="your request" rows="12" required></textarea>
                    <button className="send" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
