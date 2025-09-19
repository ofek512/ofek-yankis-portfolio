import React from 'react';

const Button = ({ children, href, primary, outline, download, icon, ...props }) => {
    const className = `btn ${primary ? 'btn-primary' : ''} ${outline ? 'btn-outline' : ''}`;

    return (
        <a href={href} className={className} download={download} {...props}>
            {icon && <i className={`fas ${icon}`} aria-hidden="true"></i>} {children}
        </a>
    );
};

export default Button;