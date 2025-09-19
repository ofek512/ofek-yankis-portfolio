import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo" aria-label="Site logo">Ofek<span>Yankis</span></div>
                <div className="social-links">
                    <a href="https://github.com/ofek512" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
                        <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ofek-jankis-a44450223/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                    <a href="mailto:ofek5202@gmail.com" className="social-icon" aria-label="Email me">
                        <i className="fas fa-envelope" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="copyright">
                    &copy; <span id="currentYear">{currentYear}</span> Ofek Yankis. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

// This is the line that was missing or incorrect.
export default Footer;