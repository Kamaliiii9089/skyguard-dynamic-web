import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import heroImage from '@/assets/roofing-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional roofing services - modern house with solar panels and pristine roof"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Call Now Button - Fixed position */}
      <div className="absolute top-6 right-6 z-50">
        <Button 
          size="lg"
          className="bg-accent hover:bg-accent/90 text-background font-bold px-6 py-3 rounded-full shadow-xl animate-glow-pulse"
        >
          <Phone className="mr-2" size={20} />
          Call Now
        </Button>
      </div>

      {/* Minimal Overlay Content */}
      <div className="absolute bottom-8 left-8 z-10 text-white">
        <h1 className="text-2xl font-bold mb-2">SkyGuard Roofing Solutions</h1>
        <p className="text-lg opacity-90">Professional Roofing Services</p>
      </div>
    </section>
  );
};

export default Hero;