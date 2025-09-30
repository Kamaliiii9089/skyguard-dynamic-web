import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">
                <span className="title-accent">About</span> Apex Roofing
              </h2>
              <div className="title-underline"></div>
            </div>
            
            <div className="about-description">
              <p className="about-intro">
                For over <strong>15 years</strong>, Apex Roofing has been the trusted choice for 
                residential and commercial roofing solutions. We combine traditional craftsmanship 
                with modern materials and techniques to deliver roofing systems that stand the test of time.
              </p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">🏆</div>
                  <div className="feature-content">
                    <h3>Licensed & Insured</h3>
                    <p>Fully licensed contractors with comprehensive insurance coverage</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-content">
                    <h3>Emergency Services</h3>
                    <p>24/7 emergency repair services when you need us most</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🔧</div>
                  <div className="feature-content">
                    <h3>Lifetime Warranty</h3>
                    <p>Comprehensive warranty on all workmanship and materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number" data-count="500">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number" data-count="15">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number" data-count="100">100%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <img 
            src="https://picsum.photos/800/600?architecture,construction&random=60" 
            alt="Professional roofing team at work"
            className="about-img"
          />
          <div className="image-overlay">
            <div className="overlay-content">
              <h3>Professional Excellence</h3>
              <p>Every project reflects our commitment to quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;