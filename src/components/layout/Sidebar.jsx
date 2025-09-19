import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

// Accept the new props: isSidebarOpen and toggleSidebar
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();

    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <div className="profile-section">
                    <h1 className="sidebar-logo">Ofek<span>Yankis</span></h1>
                    <p className="sidebar-subtitle">Backend Software Engineer</p>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        {/* The links are still here */}
                        <li><a href="#home">Home</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#languages">Languages</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="sidebar-footer">
                     <div className="social-links">
                        <a href="https://github.com/ofek512" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
                            <i className="fab fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ofek-jankis-a44450223/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                        <a href="mailto:yankhoury9@gmail.com" className="social-icon" aria-label="Email me">
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                        </a>
                    </div>
                    <button 
                        className="theme-toggle" 
                        id="themeToggle" 
                        aria-label="Toggle dark mode" 
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                    </button>
                    <div className="copyright">
                        &copy; {currentYear} Ofek Yankis
                    </div>
                </div>
            </div>

            {/* --- ADD THIS BUTTON --- */}
            {/* This is the new button to toggle the sidebar */}
            <button onClick={toggleSidebar} className="sidebar-toggle" aria-label="Toggle sidebar">
                <i className={`fas ${isSidebarOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
            </button>
        </aside>
    );
};

export default Sidebar;