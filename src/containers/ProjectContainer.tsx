import React, { FC } from "react";
import ProjectItem from "../components/ProjectItem";
import projects from '../data/projects';

const Projects: FC<{ header?: string }> = ({ header }) => (
    <div className="ProjectsContainer">
        <h1>
            { header || 'Projects' }
        </h1>
        <div className="ProjectList">
            { projects.map((project, i) => (
                <ProjectItem key={i} title={project.title} desc={project.desc} image={project.image} imageAlt={project.imageAlt} link={ project.link } />
            )) }
        </div>
    </div>
);

export default Projects;