import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import skyguardLogo from '@/assets/skyguard-logo.png';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800); // Delay for exit animation
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  const containerVariants: any = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants: any = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotateY: -90 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  const progressBarVariants: any = {
    hidden: { 
      scaleX: 0,
      opacity: 0 
    },
    visible: { 
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.2
      }
    }
  };

  const circleVariants: any = {
    hidden: { 
      pathLength: 0,
      opacity: 0 
    },
    visible: { 
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-background to-secondary flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="hidden"
          exit="exit"
        >
          {/* Animated Background Circles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-white/10"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.2],
                  opacity: [0, 0.3, 0],
                  rotate: 360
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              className="mb-8"
              variants={logoVariants}
              initial="hidden"
              animate={progress < 100 ? "visible" : "pulse"}
            >
              <div className="relative">
                <img 
                  src={skyguardLogo} 
                  alt="SkyGuard Logo" 
                  className="w-24 h-24 mx-auto mb-4 filter drop-shadow-2xl"
                />
                
                {/* Rotating ring around logo */}
                <motion.svg
                  className="absolute inset-0 w-32 h-32 -m-4"
                  viewBox="0 0 100 100"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={circleVariants}
                    style={{
                      rotate: -90,
                      transformOrigin: "50% 50%"
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              className="text-4xl font-bold text-white mb-2"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              SkyGuard
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 mb-8"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Roofing Solutions
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              className="w-64 mx-auto"
              variants={progressBarVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent via-primary to-secondary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                {/* Glowing effect */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent via-primary to-secondary rounded-full opacity-50 blur-sm"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              {/* Progress percentage */}
              <motion.p
                className="text-white/60 text-sm mt-2 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>

            {/* Loading dots */}
            <motion.div
              className="flex justify-center space-x-1 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white/60 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 left-10">
            <motion.div
              className="w-16 h-16 border-2 border-white/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <div className="absolute bottom-10 right-10">
            <motion.div
              className="w-12 h-12 border-2 border-white/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;