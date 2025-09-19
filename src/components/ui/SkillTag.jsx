import React from 'react';

const SkillTag = ({ icon, name }) => {
    return (
        <div className="skill-tag">
            <i className={icon} aria-hidden="true"></i> {name}
        </div>
    );
};

export default SkillTag;