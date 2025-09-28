import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Austin, TX',
      rating: 5,
      text: 'SkyGuard transformed our storm-damaged roof into something beautiful and durable. The solar panels they installed have already cut our energy bills in half!',
      service: 'Storm Repair & Solar Installation'
    },
    {
      name: 'Michael Chen',
      location: 'Dallas, TX',
      rating: 5,
      text: 'Professional, reliable, and honest. They completed our roof replacement ahead of schedule and the lifetime warranty gives us complete peace of mind.',
      service: 'Complete Roof Replacement'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Houston, TX',
      rating: 5,
      text: 'The emergency repair team arrived within hours during the storm. Their quick response prevented major water damage to our home. Truly lifesavers!',
      service: 'Emergency Storm Response'
    },
    {
      name: 'David Thompson',
      location: 'San Antonio, TX',
      rating: 5,
      text: 'Outstanding workmanship and customer service. The 2-year checkup service shows they really care about long-term customer satisfaction.',
      service: 'Roof Installation & Maintenance'
    },
    {
      name: 'Lisa Martinez',
      location: 'Fort Worth, TX',
      rating: 5,
      text: 'From initial consultation to final cleanup, everything was perfect. The solar installation process was seamless and our home looks amazing!',
      service: 'Solar Panel Installation'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-accent fill-accent' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background/50 to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from homeowners who trust SkyGuard to protect their most valuable investment
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card/80 border-border/50 backdrop-blur-sm shadow-xl">
                    <CardContent className="p-8 sm:p-12 text-center">
                      {/* Quote Icon */}
                      <Quote className="text-primary/30 mx-auto mb-6" size={48} />
                      
                      {/* Rating */}
                      <div className="flex justify-center mb-6 gap-1">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg sm:text-xl text-foreground mb-8 leading-relaxed italic">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Service */}
                      <div className="text-primary font-medium mb-4">
                        {testimonial.service}
                      </div>

                      {/* Customer Info */}
                      <div>
                        <div className="text-xl font-semibold text-foreground mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonial.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;