import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, scaleIn, slideInFromBottom, staggerContainer, staggerItem } from '@/lib/motion-variants';
import { useScrollInView } from '@/hooks/useAnimations';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, isInView } = useScrollInView(0.1);
  const { ref: statsRef, isInView: statsInView } = useScrollInView(0.1);

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
      <motion.div
        key={index}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: index * 0.1,
          type: "spring",
          stiffness: 200 
        }}
      >
        <Star
          className={`w-5 h-5 ${
            index < rating ? 'text-accent fill-accent' : 'text-muted-foreground'
          }`}
        />
      </motion.div>
    ));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-gradient-to-b from-background/50 to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
            variants={fadeInUp}
          >
            What Our <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">Customers Say</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Real stories from homeowners who trust SkyGuard to protect their most valuable investment
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleIn}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="px-4"
              >
                <Card className="bg-card/80 border-border/50 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-8 sm:p-12 text-center">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <Quote className="text-primary/30 mx-auto mb-6" size={48} />
                    </motion.div>
                    
                    {/* Rating */}
                    <motion.div 
                      className="flex justify-center mb-6 gap-1"
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                    >
                      {renderStars(testimonials[currentIndex].rating)}
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.blockquote 
                      className="text-lg sm:text-xl text-foreground mb-8 leading-relaxed italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.blockquote>

                    {/* Service */}
                    <motion.div 
                      className="text-primary font-medium mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      {testimonials[currentIndex].service}
                    </motion.div>

                    {/* Customer Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    >
                      <div className="text-xl font-semibold text-foreground mb-1">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].location}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.div 
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft size={20} />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight size={20} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Dots Indicator */}
          <motion.div 
            className="flex justify-center gap-2 mt-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                variants={staggerItem}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          <motion.div variants={staggerItem}>
            <motion.div 
              className="text-4xl font-bold text-accent mb-2"
              initial={{ scale: 0 }}
              animate={statsInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              4.9/5
            </motion.div>
            <motion.div 
              className="text-muted-foreground"
              variants={fadeInUp}
            >
              Average Rating
            </motion.div>
          </motion.div>
          <motion.div variants={staggerItem}>
            <motion.div 
              className="text-4xl font-bold text-secondary mb-2"
              initial={{ scale: 0 }}
              animate={statsInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              500+
            </motion.div>
            <motion.div 
              className="text-muted-foreground"
              variants={fadeInUp}
            >
              Happy Customers
            </motion.div>
          </motion.div>
          <motion.div variants={staggerItem}>
            <motion.div 
              className="text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0 }}
              animate={statsInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            >
              100%
            </motion.div>
            <motion.div 
              className="text-muted-foreground"
              variants={fadeInUp}
            >
              Satisfaction Rate
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;