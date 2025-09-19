import React from 'react';

const LanguageCard = ({ name, level }) => {
    return (
        <div className="language-card">
            <h3 className="language-name">{name}</h3>
            <p className="language-level">{level}</p>
        </div>
    );
};

export default LanguageCard;