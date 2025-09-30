import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you! We\'ll contact you soon for your free quote.');
  };

  return (
    <section className="contact-section" id="quote">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="section-header">
              <h2 className="section-title">
                Get Your <span className="title-accent">Free Quote</span>
              </h2>
              <div className="title-underline"></div>
            </div>
            
            <p className="contact-description">
              Ready to protect your property with professional roofing? Contact us today 
              for a free, no-obligation quote. Our experts will assess your needs and 
              provide honest, transparent pricing.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h4>Call Us</h4>
                  <p>(555) 123-ROOF</p>
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email Us</h4>
                  <p>info@apexroofing.com</p>
                  <span>quotes@apexroofing.com</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Visit Us</h4>
                  <p>123 Construction Lane</p>
                  <span>Builder City, BC 12345</span>
                </div>
              </div>
            </div>
            
            <div className="service-areas">
              <h4>Service Areas</h4>
              <p>Serving Builder City and surrounding areas within 50 miles</p>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Roofing</option>
                  <option value="commercial">Commercial Roofing</option>
                  <option value="repairs">Roof Repairs</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="inspection">Roof Inspection</option>
                  <option value="emergency">Emergency Service</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell us about your roofing project, timeline, and any specific requirements..."
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit-btn">
                Get My Free Quote
              </button>
              
              <p className="form-disclaimer">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;