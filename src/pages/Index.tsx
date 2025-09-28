import React from 'react';
import Navbar from '@/components/ui/navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import USP from '@/components/sections/USP';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <USP />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
