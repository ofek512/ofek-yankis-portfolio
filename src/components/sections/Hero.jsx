import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="hero-main">
                    <div className="hero-intro fade-in">
                        <h1>Building the <span>future.</span></h1>
                        <p className="subtitle">
                            A Technion computer science student. Excelling in systems programming, data structures, algorithms and numerical algorithms, computer organisation and programming and more... with a passion for backend development and cloud technologies. I modernize UI of the frontend of softwares. Maintaining and optimising pipelines, integrating new systems into ODINI software, where i currently work as a software engineer.
                        </p>
                        <div className="cta-buttons">
                            <a href="#projects" className="btn btn-primary">See All Projects</a>
                            {/* Updated to use public path directly */}
                            <a href="/assets/ofek_yankis_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" download>View CV</a>
                        </div>
                    </div>
                    <div className="hero-image fade-in delay-1">
                        <img src="/images/profile.jpg" alt="Ofek Yankis" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;