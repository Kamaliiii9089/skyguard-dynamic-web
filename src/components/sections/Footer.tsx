import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import skyguardLogo from '@/assets/skyguard-logo.png';

const Footer = () => {
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
    <footer className="bg-gradient-to-b from-background to-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={skyguardLogo} 
                alt="SkyGuard Roofing Solutions" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-foreground">
                SkyGuard
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Protecting Texas homes with storm-resistant, energy-efficient roofing solutions. 
              Your trusted partner for comprehensive roofing services with lifetime warranty.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-muted-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-foreground font-medium">(555) 123-ROOF</p>
                  <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-foreground font-medium">info@skyguardroofing.com</p>
                  <p className="text-sm text-muted-foreground">Free estimates</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-foreground font-medium">Serving All of Texas</p>
                  <p className="text-sm text-muted-foreground">Licensed & Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 SkyGuard Roofing Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Warranty Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;