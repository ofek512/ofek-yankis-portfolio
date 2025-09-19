import React from 'react';

const ExperienceCard = ({ title, company, location, date, description }) => {
    return (
        <article className="experience-card">
            <div className="experience-header">
                <div>
                    <h3 className="experience-title">{title}</h3>
                    <div className="experience-company">{company}</div>
                    <div className="experience-location">
                        <i className="fas fa-map-marker-alt" aria-hidden="true"></i> {location}
                    </div>
                </div>
                <div className="experience-date">
                    <i className="far fa-calendar-alt" aria-hidden="true"></i> {date}
                </div>
            </div>
            <div className="experience-description">
                <ul>
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;