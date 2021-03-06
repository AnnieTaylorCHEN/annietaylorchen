import React from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    img: "/imgs/social/linkedin.svg",
    alt: "annietaylorchen-linkedin",
    url: "https://www.linkedin.com/in/annietaylorchen/",
  },
  {
    img: "/imgs/social/github.svg",
    alt: "annietaylorchen-github",
    url: "https://github.com/AnnieTaylorCHEN",
  },
  {
    img: "/imgs/social/codepen.svg",
    alt: "annietaylorchen-codepen",
    url: "https://codepen.io/annietaylorchen",
  },
  {
    img: "/imgs/social/devto.svg",
    alt: "annietaylorchen-devto",
    url: "https://dev.to/annietaylorchen",
  },
  {
    img: "/imgs/social/goodreads.svg",
    alt: "annietaylorchen-goodreads",
    url: "https://www.goodreads.com/annietaylorchen",
  }, 
];

export default function Footer() {
  return (
    <div className="footer">
      <section className="footer__email">
        <p>Have a web or photography project?</p>
        <p>Let's build it together!</p>
        <a href="mailto:annietaylorchen@gmail.com">
          annie.taylor.chen@gmail.com
        </a>
      </section>

      <section className="footer__links">
        <div className="site-links">
          <div className="site-links__part1">
            <Link to="/about">About</Link>
            <a
              href="/imgs/Annie-Taylor-Chen-Resume-2020-07.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="site-links__part2">
            <Link to="/projects">Projects</Link>
            <Link to="/resources">Resources</Link>
            <a
              href="https://dev.to/annietaylorchen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tech Blog
            </a>
            <a
              href="https://www.petiteandminimal.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Petite &amp; Minimal
            </a>
          </div>
        </div>

        <div className="social-links">
          {socialLinks.map((social) => (
            <a
              key={social.alt}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.img} alt={social.alt} />
            </a>
          ))}
        </div>
      </section>

      <section className="footer__copyright">
        <p>Handmade with &#10084; by Annie Taylor Chen</p>
      </section>
    </div>
  );
}
