import React from 'react';

// Your project data
const projects = [
    {
        title: "AVL Tree Implementation",
        description: "Designed and developed an AVL tree data structure in C++, implementing various tree operations such as insertion, deletion, and balancing. The project aimed to enhance understanding of self-balancing trees and their applications.",
        tags: ["C++", "Data structure", "Algorithms", "Design"],
        github: "https://github.com/ofek512/AVL_tree",
        live: null
    },
    {
        title: "Smah Shell",
        description: "Developed a lightweight shell for Linux that supports basic commands, piping, and redirection. The project involved low-level programming in C and provided an opportunity to work with operating system concepts and kernel interactions.",
        tags: ["Linux", "Kernel", "C", "Threads", "Hardware"],
        github: "https://github.com/ofek512/OS_HW1",
        live: null
    },
    {
        title: "Portfolio Website",
        description: "Created a personal portfolio website using React to showcase projects, skills, and experience. The site features a responsive design, smooth animations, and easy navigation to provide an engaging user experience.",
        tags: ["React", "Javascript"],
        github: "https://github.com/ofek512/ofek-yankis-portfolio",
        live: null
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="section-header">
                    <h2>Projects</h2>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        // The 'div' is now an 'a' tag, making the whole card a link
                        <a
                            key={index}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card fade-in"
                        >
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                {/* The GitHub icon is now just a visual indicator */}
                                <div className="project-links">
                                    <i className="fab fa-github"></i>
                                </div>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
