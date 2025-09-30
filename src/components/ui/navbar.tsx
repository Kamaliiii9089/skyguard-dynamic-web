import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './button';
import skyguardLogo from '@/assets/skyguard-logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, staggerItem, slideInFromTop } from '@/lib/motion-variants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src={skyguardLogo} 
              alt="SkyGuard Roofing Solutions" 
              className={`h-8 sm:h-10 md:h-12 w-auto transition-all duration-300 ${
                isScrolled ? 'border-2 sm:border-3 border-black rounded-lg sm:rounded-xl p-1 sm:p-2 bg-white shadow-lg' : 'border border-transparent'
              }`}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 hidden xs:block ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`}>
              SkyGuard
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                variants={staggerItem}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
                <motion.span 
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Free Quote
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 mx-3 p-4 shadow-xl border"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="flex flex-col space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                    variants={staggerItem}
                    whileHover={{ x: 10, color: "#var(--primary)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4 w-full">
                    Free Quote
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;