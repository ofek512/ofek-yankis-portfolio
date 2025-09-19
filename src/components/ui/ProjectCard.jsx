import React from 'react';

const ProjectCard = ({ href, icon, title, tags, description }) => {
    const content = (
        <article className="project-card">
            <div className="project-img">
                <i className={icon} aria-hidden="true"></i>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                    ))}
                </div>
                <p className="project-description">{description}</p>
            </div>
        </article>
    );

    if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
    }

    return content;
};

export default ProjectCard;