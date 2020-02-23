import React from 'react'
import { Link } from 'react-router-dom'

const projectsData = [
  {
    img: 'imgs/project-mars-cover.jpg',
    alt: 'project Thirty Seconds to Mars cover',
    summary: 'A MERN website for band - promotion, e-commerce, community.',
    tech: 'React, Redux, MongoDB, Node.js, Stripe',
    url: '/projects/thirtysecondstomars'
  },
  {
    img: 'imgs/project-meowlo-cover.jpg',
    alt: 'project Meowlo cover',
    summary: 'An MVC website for a cat start-up.',
    tech: 'HTML, CSS, Javascript, Node.js, Api',
    url: '/projects/meowlo'
  },
  {
    img: 'imgs/project-IA-cover.jpg',
    alt: 'project Ingers Alternativ cover',
    summary: 'A static website for a therapist.',
    tech: 'HTML, CSS, Javascript',
    url: '/projects/ingersalternativ'
  },
  {
    img: 'imgs/coming-soon.png',
    alt: 'project coming soon',
    summary: 'Something is cooking...',
    tech: 'For sure the latest hot tech',
    url: '/about'
  }
]

export default function Projects() {
    
  return (
    <>
      <h2 className='projects-title'>Projects</h2>
      <div className='projects'>
        {projectsData.map(project => (
            
          <div className='project' key={project.alt}>
            <Link to={project.url}>
              <img
                src={project.img}
                alt={project.alt}
              />
            </Link>
            <div className='project__summary'>
              <p>{project.summary}</p>
              <p>{project.tech}</p>
            </div>
            <span className='project-overlay'>
              <Link to={project.url}>
                <span>View More</span>
              </Link>
            </span>
          </div>
        ))}

      </div>
    </>
  )
}
