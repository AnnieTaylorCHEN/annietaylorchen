import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <>
            <h2 className="projects-title">Projects</h2>
            <div className="projects">

                <div className="project">
                    <Link to="/about" target="_blank">
                        <img src="imgs/project-IA-cover.png" alt="project Ingers Alternativ cover"/>
                    </Link>
                    <span className="project-overlay">
                        <Link to="/about" target="_blank" ><span>View More</span></Link>
                    </span>
                </div>

                <div className="project">
                    <Link to="/about" target="_blank">
                        <img src="imgs/project-meowlo-cover.png" alt="project Meowlo cover" />
                    </Link>
                    <span className="project-overlay">
                        <Link to="/about" target="_blank" ><span>View More</span></Link>
                    </span>
                </div>

                <div className="project">
                    <Link to="/about" target="_blank">
                        <img src="imgs/project-meowlo-cover.png" alt="project Meowlo cover" />
                    </Link>
                    <span className="project-overlay">
                        <Link to="/about" target="_blank" ><span>View More</span></Link>
                    </span>
                </div>

                <div className="project">
                    <Link to="/about" target="_blank">
                        <img src="imgs/project-meowlo-cover.png" alt="project Meowlo cover" />
                    </Link>
                    <span className="project-overlay">
                        <Link to="/about" target="_blank" ><span>View More</span></Link>
                    </span>
                </div>

            </div>
        </>
    )
}
