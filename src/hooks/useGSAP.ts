import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const contextRef = useRef<gsap.Context>();

  useEffect(() => {
    contextRef.current = gsap.context(() => {});
    
    return () => {
      contextRef.current?.revert();
    };
  }, []);

  return contextRef.current;
};

// Animation presets
export const gsapAnimations = {
  fadeInUp: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay,
        ease: "power2.out" 
      }
    );
  },

  fadeInLeft: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay,
        ease: "power2.out"
      }
    );
  },

  fadeInRight: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay,
        ease: "power2.out"
      }
    );
  },

  scaleIn: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay,
        ease: "back.out(1.7)"
      }
    );
  },

  staggerFadeInUp: (elements: string | Element[], delay = 0) => {
    return gsap.fromTo(elements,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay,
        stagger: 0.1,
        ease: "power2.out"
      }
    );
  },

  textReveal: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        y: 100,
        skewY: 7
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1,
        delay,
        ease: "power4.out"
      }
    );
  },

  drawLine: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        scaleX: 0,
        transformOrigin: "left center"
      },
      {
        scaleX: 1,
        duration: 1,
        delay,
        ease: "power2.out"
      }
    );
  },

  morphShape: (element: string | Element, delay = 0) => {
    return gsap.fromTo(element,
      {
        scale: 0,
        rotation: 45
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        delay,
        ease: "elastic.out(1, 0.5)"
      }
    );
  }
};

// Scroll-triggered animations
export const useScrollAnimation = (
  element: string | Element,
  animation: gsap.core.Timeline | gsap.core.Tween,
  trigger?: string | Element,
  options?: ScrollTrigger.Vars
) => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: trigger || element,
      start: "top 80%",
      end: "bottom 20%",
      animation: animation,
      toggleActions: "play none none reverse",
      ...options
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
};