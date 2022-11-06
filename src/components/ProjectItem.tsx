import React, { FC } from 'react';
import ProjectItem from '../utils/types/ProjectItem';
import placeholder from '../images/placeholder.jpg';
import '../styles/components/Projects.scss';

const ProjectItem: FC<ProjectItem> = ({ title, desc, image, imageAlt, link }) => (
    <div className="ProjectItem">
        <img src={ image || placeholder } alt={ imageAlt || '' } />
        <div className="Text">
            <h2>
                { title }
            </h2>
            <p>
                { desc }
            </p>
        </div>
        <a href={ link || '#' }>View on GitHub</a>
    </div>
);

export default ProjectItem;