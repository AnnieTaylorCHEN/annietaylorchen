import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectMars() {
    return (
        <>
            <section className="project-grid">
                <div className="project-intro">
                    <h2 className="project-title">The Making of Thirty Seconds to Mars</h2>
                    <p className="project-text">I’m a big fan of Thirty Seconds to Mars. I wish I had been to all of their concerts. This website is a nostalgic corner I built for myself and other Mars fans, where I turn back time and revisit some moments (and practice coding).  </p>
                </div>
            
                <div className="did">
                    <h3 className="project-subtitle">What I did</h3>
                    <ol>
                        <li className="did-list-item">Content Creation</li>
                        <li className="did-list-item">Web Development</li>
                        <li className="did-list-item">Image and Video Processing </li>
                    </ol>
                </div>
                <div className="tech">
                <h3 className="project-subtitle">Tech I used</h3>
                    <ol>
                        <li className="did-list-item">HTML5</li>
                        <li className="did-list-item">CSS3</li>
                        <li className="did-list-item">Javascript</li>
                        <li className="did-list-item">Node.js</li>
                        <li className="did-list-item">Express.js</li>
                        <li className="did-list-item">React</li>
                        <li className="did-list-item">Redux</li>
                        <li className="did-list-item">MongoDB</li>
                    </ol>
                </div>
                <div className="demo-code">
                    <a className="demo-code--button" href="https://meowlo.herokuapp.com/" target="_blank" rel="noopener noreferrer">LIVE DEMO</a>
                    <a className="demo-code--button" href="https://github.com/AnnieTaylorCHEN/Meowlo" target="_blank" rel="noopener noreferrer">VIEW CODE</a>
                </div> 
            </section>

            <section className="meowlo-grid">
                <div className="meowlo-story">
                    <h4 className="context-subtitle">How I started</h4>
                    <p className="project-text">It all started with a code review project that I collaborated with a friend. I had several small javascript projects and I thought it would be a fun idea to organize them into one project with a theme. I was a bit tired so I started to use a few fun cat pictures in it, and voila! Meowlo was born. </p>
                    
                </div>
                <div className="meowlo-video">
                    <video width="100%" height="auto" muted loop autoPlay playsInline >
                        <source src="/imgs/meowlo-video.mp4" type="video/mp4" />
                        Your browser doesn't support the video tag.
                    </video>
                </div>
                <div className="meowlo-video2">
                    <video width="100%" height="auto" muted loop autoPlay playsInline >
                        <source src="/imgs/meowlo-video2.mp4" type="video/mp4" />
                        Your browser doesn't support the video tag.
                    </video>
                </div>
                <div className="meowlo-story2">
                    <p className="project-text">I wrote a back story of a group of cats that want to work to gain more benefits. As a serious startup, they not only have registered address and phone, but also a website that offers valuable services to humans (especially those cat lovers). When I showed this website to a friend, she asked if I really have an office dog, ;) That proves how realistic our Meowlo startup is, non? </p>
                    <p className="project-text">This project is still on-going, as long as I find something fun to play with, you might get to see a new small demo in Meowlo. </p>
                </div>
            </section>

            <section>
                <Link to="/projects" className="demo-code--button back-to-projects">Back to Projects</Link>
            </section>
        </>
    )
}
