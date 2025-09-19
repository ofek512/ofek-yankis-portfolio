import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="site-header">
            <div className="container">
                <nav aria-label="Main navigation">
                    {/* <div className="logo" aria-label="Site logo">Ofek<span>Yankis</span></div> */}
                    <ul className="nav-links" id="nav-links">
                        <li><a href="#home" aria-current="page">Home</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#languages">Languages</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
                        {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;