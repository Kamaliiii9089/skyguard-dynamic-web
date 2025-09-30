import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Residential Customer",
      text: "Apex Roofing transformed our home with a beautiful new roof. The team was professional, punctual, and the quality exceeded our expectations. Highly recommended!",
      rating: 5,
      image: "https://picsum.photos/100/100?face&random=70"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      location: "Commercial Property Manager",
      text: "We've used Apex Roofing for multiple commercial projects. Their attention to detail and commitment to deadlines makes them our go-to roofing contractor.",
      rating: 5,
      image: "https://picsum.photos/100/100?face&random=71"
    },
    {
      id: 3,
      name: "Jennifer Chen",
      location: "Homeowner",
      text: "After storm damage, Apex Roofing provided emergency repairs and a complete roof replacement. They handled everything professionally and efficiently.",
      rating: 5,
      image: "https://picsum.photos/100/100?face&random=72"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">
            What Our <span className="title-accent">Customers</span> Say
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Don't just take our word for it - hear from satisfied customers who trust Apex Roofing
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card" data-testimonial={testimonial.id}>
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-cta">
          <h3>Ready to Join Our Satisfied Customers?</h3>
          <a href="#quote" className="cta-button">Get Your Free Quote</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;