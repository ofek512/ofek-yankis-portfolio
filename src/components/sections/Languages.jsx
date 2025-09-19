import React from 'react';
import LanguageCard from '../ui/LanguageCard';

const languagesData = [
    { name: 'English', level: 'Native' },
    { name: 'Hebrew', level: 'Native' },
    { name: 'Russian', level: 'Limited Professional Proficiency' },
];

const Languages = () => {
    return (
        <section id="languages" className="languages-section">
            <div className="container">
                <div className="section-header">
                    <h2>Languages</h2>
                </div>
                <div className="language-container">
                    {languagesData.map((lang, index) => (
                        <LanguageCard key={index} {...lang} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Languages;