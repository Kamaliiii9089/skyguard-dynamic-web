import React from 'react';

const RoofingFooter = () => {
  return (
    <footer className="roofing-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="logo-text">APEX</span>
              <span className="logo-accent">ROOFING</span>
            </h3>
            <p className="footer-description">
              Professional roofing solutions built to protect your most valuable investment.
              Quality craftsmanship with a lifetime commitment to excellence.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li><a href="#residential">Residential Roofing</a></li>
              <li><a href="#commercial">Commercial Buildings</a></li>
              <li><a href="#repairs">Repair & Maintenance</a></li>
              <li><a href="#inspection">Roof Inspection</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="contact-info">
              <p>(555) 123-ROOF</p>
              <p>info@apexroofing.com</p>
              <p>123 Construction Lane<br />Builder City, BC 12345</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Get a Quote</h4>
            <p className="footer-cta-text">Ready to protect your home?</p>
            <a href="#quote" className="footer-cta-button">
              Free Estimate
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Apex Roofing. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#license">License #12345</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RoofingFooter;