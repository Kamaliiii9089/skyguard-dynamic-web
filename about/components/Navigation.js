import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav_top-wrapper">
        <div className="nav_top">
          <a href="#home" className="nav_link nav_logo">
            <span className="logo-text">APEX</span>
            <span className="logo-accent">ROOFING</span>
          </a>
          <div className="nav_menu">
            <a href="#services" className="nav_link">SERVICES</a>
            <a href="#projects" className="nav_link">PROJECTS</a>
            <a href="#contact" className="nav_link nav_cta">GET QUOTE</a>
          </div>
        </div>
        <div className="nav_top-line"></div>
      </div>
    </nav>
  );
};

export default Navigation;