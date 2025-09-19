import React from 'react';

// A more structured way to handle your skills
const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", icon: "fab fa-python" },
            { name: "C / C++", icon: "fas fa-file-code" },
            { name: "JavaScript", icon: "fab fa-js-square" }
        ]
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            { name: "FastAPI", icon: "fas fa-bolt" },
            { name: "Express.js", icon: "fas fa-server" },
            { name: "React", icon: "fab fa-react" },
            { name: "Next.js", icon: "fas fa-arrow-right" },
            { name: "Node.js", icon: "fab fa-node-js" }
        ]
    },
    {
        title: "Cloud & Infrastructure",
        skills: [
            { name: "Google Cloud", icon: "fab fa-google" },
            { name: "BigQuery", icon: "fas fa-database" },
            { name: "Cloud SQL", icon: "fas fa-database" },
            { name: "Cloud Storage", icon: "fas fa-cloud" },
            { name: "Cloud Run", icon: "fas fa-running" },
            { name: "Cloud Build", icon: "fas fa-hammer" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "GitLab CI/CD", icon: "fab fa-gitlab" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="section-header">
                    <h2>Skills & Expertise</h2>
                </div>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card fade-in">
                            <h3 className="skill-category-title">{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="skill-item">
                                        <i className={skill.icon}></i>
                                        <span>{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;