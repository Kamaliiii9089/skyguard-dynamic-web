import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/roofing-hero.jpg';
import { gsap } from 'gsap';
import { gsapAnimations } from '@/hooks/useGSAP';

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for orchestrated animations
      const tl = gsap.timeline({ delay: 0.5 });

      // Background image scale and fade in
      tl.fromTo(imageRef.current,
        {
          scale: 1.2,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out"
        }
      );

      // Overlay fade in
      tl.fromTo(overlayRef.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        },
        "-=1.5"
      );

      // Title text reveal animation
      tl.add(gsapAnimations.textReveal(titleRef.current, 0), "-=1");

      // Subtitle fade in from bottom
      tl.add(gsapAnimations.fadeInUp(subtitleRef.current, 0), "-=0.5");

      // Buttons scale in with bounce
      tl.add(gsapAnimations.scaleIn(buttonRef.current, 0), "-=0.3");

      // Add subtle floating animation to buttons
      gsap.to(buttonRef.current, {
        y: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 3
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Background Image */}
      <div ref={imageRef} className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional roofing services - modern house with solar panels and pristine roof"
          className="w-full h-full object-cover"
        />
        <div ref={overlayRef} className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Enhanced Hero Content - Mobile Responsive */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-4xl">
            <h1 ref={titleRef} className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 opacity-0 leading-tight">
              <span className="block">Premium Roofing Solutions</span>
              <span className="block text-blue-400 mt-1 xs:mt-2">Built to Last</span>
            </h1>
            <p ref={subtitleRef} className="text-base xs:text-lg sm:text-xl md:text-2xl opacity-90 mb-6 xs:mb-7 sm:mb-8 leading-relaxed max-w-3xl">
              Protecting your home with expert craftsmanship, quality materials, and 25+ years of trusted experience in residential and commercial roofing.
            </p>
            <div ref={buttonRef} className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-3 sm:gap-4 opacity-0">
              <Button 
                size="lg"
                onClick={() => navigate('/estimate')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold shadow-xl w-full sm:w-auto min-h-[48px] touch-manipulation"
              >
                Get Free Estimate
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/our-work')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold backdrop-blur-sm w-full sm:w-auto min-h-[48px] touch-manipulation"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;