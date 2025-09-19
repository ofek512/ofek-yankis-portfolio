import React from 'react';

const experiences = [
    {
        title: "Software Engineer",
        company: "ODINI",
        date: "June 2025 — Present",
        description: [
            "Overhauling the frontend of ODINI to a more modern and user-friendly interface.",
            "Maintaining and optimizing existing data pipelines to ensure efficient data flow and processing.",
            "Integrating new repositories into the system, ensuring seamless data ingestion and processing.",
            "Guiding students who are doing their semester project at ODINI, providing mentorship and technical support as they work on real-world challenges.",
        ]
    }
    // You can add more experiences here in the future.
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="section-header">
                    <h2>Work Experience</h2>
                </div>
                {/* New Timeline Layout */}
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item fade-in">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="experience-header">
                                    <h3 className="experience-title">{exp.title}</h3>
                                    <span className="experience-date">{exp.date}</span>
                                </div>
                                <div className="experience-meta">
                                    <span className="experience-company">{exp.company}</span>
                                </div>
                                <ul className="experience-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;