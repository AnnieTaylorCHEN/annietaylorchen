import React from "react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    img: "/imgs/projects/project-pm-store-cover.jpg",
    alt: "project Petite and Minimal Store cover",
    summary: "A JAMstack E-commerce solution.",
    tech: "Gatsby, GraphQL, Contentful, Commercelayer",
    url: "/projects/petiteandminimalstore",
  },
  {
    img: "/imgs/projects/project-pmblog-cover.jpg",
    alt: "project Petite and Minimal Blog cover",
    summary: "A JAMstack eco-friendly lifestyle website.",
    tech: "Gatsby, GraphQL, APIs",
    url: "/projects/petiteandminimalblog",
  },
  {
    img: "/imgs/projects/project-mars-cover.jpg",
    alt: "project Thirty Seconds to Mars cover",
    summary: "A MERN stack website for band - promotion, e-commerce, community.",
    tech: "React, Redux, MongoDB, Node.js, Stripe",
    url: "/projects/thirtysecondstomars",
  },
  {
    img: "/imgs/projects/project-meowlo-cover.jpg",
    alt: "project Meowlo cover",
    summary: "An MVC website for a cat start-up.",
    tech: "HTML, CSS, Javascript, Node.js, APIs",
    url: "/projects/meowlo",
  },
  {
    img: "/imgs/projects/project-IA-cover.jpg",
    alt: "project Ingers Alternativ cover",
    summary: "A static website for a therapist.",
    tech: "HTML, CSS, Javascript",
    url: "/projects/ingersalternativ",
  },
  {
    img: "/imgs/projects/coming-soon.png",
    alt: "project coming soon",
    summary: "Something is cooking...",
    tech: "For sure the latest hot tech",
    url: "/about",
  },
];

const Project = ({ project }) => (
  <div className="project">
    <Link to={project.url}>
      <img src={project.img} alt={project.alt} />
    </Link>
    <div className="project__summary">
      <p>{project.summary}</p>
      <p className="project__tech">{project.tech}</p>
    </div>
    <span className="project-overlay">
      <Link to={project.url}>
        <span>View More</span>
      </Link>
    </span>
  </div>
);

export default function Projects() {
  return (
    <>
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        {projectsData.map((project) => (
          <Project key={project.alt} project={project} />
        ))}
      </div>
    </>
  );
}
