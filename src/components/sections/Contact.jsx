import React from 'react';
import Button from '../ui/Button';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2>Get In Touch</h2>
                </div>
                <div className="contact-container">
                    <div className="contact-info">
                        {/* Contact Items */}
                        <div className="contact-item">
                            <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                            <div className="contact-text"><a href="mailto:ofek5202@gmail.com">ofek5202@gmail.com</a></div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><i className="fab fa-linkedin"></i></div>
                            <div className="contact-text"><a href="https://www.linkedin.com/in/ofek-jankis-a44450223/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><i className="fab fa-github"></i></div>
                            <div className="contact-text"><a href="https://github.com/ofek512" target="_blank" rel="noopener noreferrer">GitHub Profile</a></div>
                        </div>
                    </div>

                    <div className="contact-availability">
                        <div className="contact-buttons">
                            <Button href="mailto:ofek5202@gmail.com" primary icon="fa-envelope">Send Email</Button>
                            <Button href="https://www.linkedin.com/in/ofek-jankis-a44450223/">Connect on LinkedIn</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;