import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';

interface AnimationContextType {
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType>({
  reducedMotion: false,
  setReducedMotion: () => {},
});

export const useAnimationContext = () => useContext(AnimationContext);

interface AnimationProviderProps {
  children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion);
  }, [prefersReducedMotion]);

  // Define reduced motion settings
  const reducedMotionConfig = {
    transition: { duration: 0.1 },
    initial: false,
    animate: { transition: { duration: 0.1 } },
  };

  const normalMotionConfig = {
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  };

  return (
    <AnimationContext.Provider value={{ reducedMotion, setReducedMotion }}>
      <MotionConfig 
        transition={reducedMotion ? reducedMotionConfig.transition : normalMotionConfig.transition}
        reducedMotion={reducedMotion ? "always" : "never"}
      >
        {children}
      </MotionConfig>
    </AnimationContext.Provider>
  );
};

// HOC for conditionally animated components
export const withConditionalAnimation = <P extends object>(
  Component: React.ComponentType<P>,
  fallbackComponent?: React.ComponentType<P>
) => {
  return (props: P) => {
    const { reducedMotion } = useAnimationContext();
    
    if (reducedMotion && fallbackComponent) {
      const FallbackComponent = fallbackComponent;
      return <FallbackComponent {...props} />;
    }
    
    return <Component {...props} />;
  };
};

// Performance-optimized motion component
export const OptimizedMotion = motion.div;