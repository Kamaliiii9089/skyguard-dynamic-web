import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, staggerItem, pulseAnimation } from '@/lib/motion-variants';
import { useScrollInView } from '@/hooks/useAnimations';

const CTA = () => {
  const { ref: sectionRef, isInView } = useScrollInView(0.1);
  
  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-accent/20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 animate-storm-to-sun opacity-60"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <motion.div 
            className="mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              variants={fadeInUp}
            >
              Ready to Protect Your
              <br />
              <span className="text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
                Most Valuable Investment?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Get your free roof inspection today and discover how SkyGuard can enhance your home's protection, value, and energy efficiency.
            </motion.p>

            {/* Main CTA Button */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-background font-bold px-12 py-6 text-xl rounded-full shadow-yellow-glow mb-8"
              >
                <motion.div
                  animate={{ rotate: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Calendar className="mr-3" size={24} />
                </motion.div>
                Book Free Inspection
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="ml-3" size={24} />
                </motion.div>
              </Button>
            </motion.div>

            <motion.p 
              className="text-sm text-muted-foreground mb-12"
              variants={fadeInUp}
            >
              No obligation • Free consultation • Same-day response
            </motion.p>
          </motion.div>

          {/* Contact Options */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Phone CTA */}
            <motion.div 
              className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-transform duration-300"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Phone className="text-primary mx-auto mb-4" size={40} />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Call Now</h3>
              <p className="text-muted-foreground mb-4">Speak with a roofing expert</p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                >
                  (555) 123-ROOF
                </Button>
              </motion.div>
            </motion.div>

            {/* Email CTA */}
            <motion.div 
              className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-transform duration-300"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Mail className="text-secondary mx-auto mb-4" size={40} />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Get Quote</h3>
              <p className="text-muted-foreground mb-4">Email us your details</p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-background font-semibold"
                >
                  info@skyguardroofing.com
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { color: 'bg-secondary', text: 'Licensed & Insured' },
              { color: 'bg-primary', text: '15+ Years Experience' },
              { color: 'bg-accent', text: 'Lifetime Warranty' },
              { color: 'bg-secondary', text: '500+ Happy Customers' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center"
                variants={staggerItem}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className={`w-2 h-2 ${item.color} rounded-full mr-2`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                ></motion.div>
                {item.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;