import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Hook to detect if user prefers reduced motion
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Hook for enhanced scroll-based animations
export const useScrollInView = (
  threshold: number = 0.1,
  margin: string = '0px 0px -100px 0px'
) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    margin: margin as any,
    once: true,
  });

  return { ref, isInView };
};

// Hook for stagger delays
export const useStaggerDelay = (index: number, baseDelay: number = 0.1) => {
  return index * baseDelay;
};

// Hook for random animation delays
export const useRandomDelay = (min: number = 0, max: number = 0.5) => {
  const [delay] = useState(() => Math.random() * (max - min) + min);
  return delay;
};

// Hook to manage animation states
export const useAnimationState = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setHasAnimated(true);
  };

  const endAnimation = () => {
    setIsAnimating(false);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setHasAnimated(false);
  };

  return {
    isAnimating,
    hasAnimated,
    startAnimation,
    endAnimation,
    resetAnimation,
  };
};