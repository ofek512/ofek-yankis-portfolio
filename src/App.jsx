// The main fix is ensuring both React and useState are imported correctly
import React, { useState } from 'react';

// I'll make the import path more explicit just in case
import Sidebar from './components/layout/Sidebar.jsx'; 
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import Hero from './components/sections/Hero.jsx';
import Experience from './components/sections/Experience.jsx';
import Skills from './components/sections/Skills.jsx';
import Projects from './components/sections/Projects.jsx';
import Education from './components/sections/Education.jsx';
import Languages from './components/sections/Languages.jsx';
import Contact from './components/sections/Contact.jsx';

import './styles/variables.css';
import './styles/global.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app-layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
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