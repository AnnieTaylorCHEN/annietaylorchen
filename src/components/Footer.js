import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <section className="footer__email">
                <p>Have a web or photography project?</p>
                <p>Let's build it together!</p>
                <a href="mailto:annietaylorchen@gmail.com">annie.taylor.chen@gmail.com</a>
            </section>

            <section className="footer__links">
                <div className="site-links">
                    <Link to="/about" className="header__menu__item">About</Link>
                    <Link to="/projects" className="header__menu__item">Projects</Link>
                    <Link to="/contact" className="header__menu__item">Contact</Link>
                    <a href="https://petiteandminimal.com" className="header__menu__item" target="_blank" rel="noopener noreferrer">Petite &amp; Minimal</a>
                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/annietaylorchen/" className="header__menu__item" target="_blank" rel="noopener noreferrer"><img src="/imgs/linkedin.svg" alt="annietaylorchen-linkedin" /></a>
                    <a href="https://github.com/AnnieTaylorCHEN" className="header__menu__item" target="_blank" rel="noopener noreferrer"><img src="/imgs/github.svg" alt="annietaylorchen-github" /></a>
                    <a href="https://www.goodreads.com/user/show/18792704-annie-taylor-chen" className="header__menu__item" target="_blank" rel="noopener noreferrer"><img src="/imgs/goodreads.svg" alt="annietaylorchen-goodreads" /></a>
                    <a href="https://www.facebook.com/PetiteandMinimal/" className="header__menu__item" target="_blank" rel="noopener noreferrer"><img src="/imgs/facebook.svg" alt="annietaylorchen-facebook" /></a>
                    <a href="https://twitter.com/petiteminimal" className="header__menu__item" target="_blank" rel="noopener noreferrer"><img src="/imgs/twitter.svg" alt="annietaylorchen-twitter" /></a>
                    <a href="https://www.instagram.com/petiteandminimal/" className="header__menu__item" target="_blank" rel="noopener noreferrer"><img src="/imgs/instagram.svg" alt="annietaylorchen-instagram" /></a>
                </div>
            </section>

            <section className="footer__copyright">
                <p>Handmade with &#10084; by Annie Taylor Chen</p>
            </section>
        </div>
    )
}
