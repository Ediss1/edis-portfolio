import React from "react";
import projects from "../projects"


function Projects() {
    return (
        <>
        <div className="projects-container">
            <div className="projects-title">
                <h1>Small secrion of my projects</h1>
            </div>
            <div className="projects-content">
            {projects.map((project, index) => (
                <a href={project.link} target="_blank">
                        <div className="project" style={{  
                                backgroundImage: `url(${project.image})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                }} >
                                <div className="project-info">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p> 
                                    <p><span>Click to open on GitHub</span></p>
                                </div>
                        </div>
                </a>
            ))}
            </div>
        </div>
        </>
    )
}

export default Projects;