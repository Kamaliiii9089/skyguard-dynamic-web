import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import skyguardLogo from '@/assets/skyguard-logo.png';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/motion-variants';
import { useScrollInView } from '@/hooks/useAnimations';

const Footer = () => {
  const { ref: footerRef, isInView } = useScrollInView(0.1);
  
  const services = [
    'Storm Damage Repair',
    'Solar Installation',
    'Roof Replacement',
    'Emergency Repairs',
    'Leak Detection',
    'Roof Inspection'
  ];

  const serviceAreas = [
    'Austin, TX',
    'Dallas, TX',
    'Houston, TX',
    'San Antonio, TX',
    'Fort Worth, TX',
    'Plano, TX'
  ];

  return (
    <footer ref={footerRef} className="bg-gradient-to-b from-background to-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={staggerItem}>
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={skyguardLogo} 
                alt="SkyGuard Roofing Solutions" 
                className="h-12 w-auto"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-xl font-bold text-foreground">
                SkyGuard
              </span>
            </motion.div>
            <motion.p 
              className="text-muted-foreground mb-6 leading-relaxed"
              variants={fadeInUp}
            >
              Protecting Texas homes with storm-resistant, energy-efficient roofing solutions. 
              Your trusted partner for comprehensive roofing services with lifetime warranty.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="hover:text-primary"
                    >
                      <Icon size={20} />
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <motion.h3 
              className="text-lg font-semibold text-foreground mb-6"
              variants={fadeInUp}
            >
              Our Services
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {services.map((service, index) => (
                <motion.li key={index} variants={staggerItem}>
                  <motion.a 
                    href="#services" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5, color: "#var(--primary)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div variants={staggerItem}>
            <motion.h3 
              className="text-lg font-semibold text-foreground mb-6"
              variants={fadeInUp}
            >
              Service Areas
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {serviceAreas.map((area, index) => (
                <motion.li 
                  key={index} 
                  className="text-muted-foreground"
                  variants={staggerItem}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {area}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <motion.h3 
              className="text-lg font-semibold text-foreground mb-6"
              variants={fadeInUp}
            >
              Contact Us
            </motion.h3>
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                { icon: Phone, title: "(555) 123-ROOF", subtitle: "24/7 Emergency Line" },
                { icon: Mail, title: "info@skyguardroofing.com", subtitle: "Free estimates" },
                { icon: MapPin, title: "Serving All of Texas", subtitle: "Licensed & Insured" }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ y: [-1, 1, -1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <contact.icon className="text-primary mt-1 flex-shrink-0" size={18} />
                  </motion.div>
                  <div>
                    <p className="text-foreground font-medium">{contact.title}</p>
                    <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-border/50 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div 
              className="text-sm text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              © 2024 SkyGuard Roofing Solutions. All rights reserved.
            </motion.div>
            <motion.div 
              className="flex space-x-6 text-sm"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {["Privacy Policy", "Terms of Service", "Warranty Info"].map((link, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  variants={staggerItem}
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;