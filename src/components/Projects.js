import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <>
            <h2 className="projects-title">Projects</h2>
            <div className="projects">

                <div className="project">
                    <Link to="/projects/ingersalternativ">
                        <img src="imgs/project-IA-cover.png" alt="project Ingers Alternativ cover"/>
                    </Link>
                    <span className="project-overlay">
                        <Link to="/projects/ingersalternativ"><span>View More</span></Link>
                    </span>
                </div>

                <div className="project">
                    <Link to="/projects/meowlo" >
                        <img src="imgs/project-meowlo-cover.png" alt="project Meowlo cover" />
                    </Link>
                    <span className="project-overlay">
                        <Link to="/projects/meowlo"><span>View More</span></Link>
                    </span>
                </div>

                <div className="project">
                    <Link to="/projects/thirtysecondstomars">
                        <img src="imgs/project-mars-cover.png" alt="project Thirty Seconds to Mars cover" />
                    </Link>
                    <span className="project-overlay">
                        <Link to="/projects/thirtysecondstomars" ><span>View More</span></Link>
                    </span>
                </div>

                <div className="project">
                    <Link to="/about">
                        <img src="imgs/coming-soon.png" alt="project Meowlo cover" />
                    </Link>
                    <span className="project-overlay">
                        <Link to="/about" ><span>View More</span></Link>
                    </span>
                </div>

            </div>
        </>
    )
}
