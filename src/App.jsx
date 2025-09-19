import React, { useState } from 'react';

// --- Your component imports ---
import Sidebar from './components/layout/Sidebar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Languages from './components/sections/Languages';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/layout/ScrollToTop';

// --- Your CSS imports ---
import './styles/global.css';
import './styles/variables.css';

function App() {
  // State for the DESKTOP sidebar (controlled by the arrow button)
  const [isDesktopSidebarClosed, setDesktopSidebarClosed] = useState(false);
  
  // State for the MOBILE sidebar (controlled by the hamburger button)
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Function for the DESKTOP arrow button
  const toggleDesktopSidebar = () => {
    setDesktopSidebarClosed(!isDesktopSidebarClosed);
  };

  // Function for the MOBILE hamburger button
  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Combine class names dynamically for both desktop and mobile states
  const layoutClasses = [
    'app-layout',
    isDesktopSidebarClosed ? 'sidebar-closed' : '', // For desktop collapse
    isMobileSidebarOpen ? 'sidebar-visible' : ''    // For mobile slide-in
  ].join(' ').trim();

  return (
    <div className={layoutClasses}>
      
      {/* --- MOBILE-ONLY ELEMENTS --- */}
      <button className="hamburger-menu" onClick={toggleMobileSidebar} aria-label="Open menu">
        <i className="fas fa-bars" aria-hidden="true"></i>
      </button>
      <div className="mobile-overlay" onClick={toggleMobileSidebar}></div>
      
      {/* --- YOUR COMPONENTS (with props restored for desktop) --- */}
      <Sidebar toggleSidebar={toggleDesktopSidebar} />
      
      <div className="main-content">
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Languages />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
