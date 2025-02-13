import React from "react";
import projects from "../projects"

function Projects() {
    return (
        <>
        <h1 className="heading">Projects</h1>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p>Project link: <a href={project.link}>{project.link}</a></p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects;