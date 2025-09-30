import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { fadeInUp } from '@/lib/motion-variants';
import { useScrollInView } from '@/hooks/useAnimations';

const Services = () => {
  const { ref: servicesRef, isInView } = useScrollInView(0.1);
  const slideshowRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const services = [
    {
      color: 'from-blue-600 to-blue-800',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      tagline: 'When storms strike',
      subtitle: 'we restore your peace of mind'
    },
    {
      color: 'from-yellow-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
      tagline: 'Harness the power',
      subtitle: 'of sustainable energy'
    },
    {
      color: 'from-green-600 to-green-800',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&h=600&fit=crop',
      tagline: 'Transform your home',
      subtitle: 'with premium roofing'
    },
    {
      color: 'from-red-600 to-red-800',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      tagline: 'Rapid response',
      subtitle: 'when you need us most'
    },
    {
      color: 'from-cyan-600 to-blue-700',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=600&fit=crop',
      tagline: 'Stop leaks',
      subtitle: 'before they start'
    },
    {
      color: 'from-purple-600 to-purple-800',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop',
      tagline: 'Professional insight',
      subtitle: 'for lasting protection'
    }
  ];

  const slidesRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !isAnimating && isInView) {
      autoPlayRef.current = setInterval(() => {
        navigate('next');
      }, 4000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, isAnimating, isInView]);

  // Initialize slideshow effects
  useEffect(() => {
    if (!isInView) return;

    const firstSlide = slidesRef.current[0];
    const firstImage = imagesRef.current[0];
    
    if (firstSlide && firstImage) {
      firstSlide.classList.add('slide--current');
      gsap.set(firstImage, {
        clipPath: 'circle(55% at 70% 50%)'
      });
    }

    // Hover effects on slide container
    services.forEach((_, index) => {
      const imageEl = imagesRef.current[index];
      const slideEl = slidesRef.current[index];
      
      if (imageEl && slideEl) {
        slideEl.addEventListener('mouseenter', () => {
          if (!isAnimating) {
            gsap.killTweensOf(imageEl);
            gsap.to(imageEl, {
              duration: 1,
              ease: 'expo',
              clipPath: 'circle(20% at 30% 50%)'
            });
          }
        });
        
        slideEl.addEventListener('mouseleave', () => {
          if (!isAnimating) {
            gsap.killTweensOf(imageEl);
            gsap.to(imageEl, {
              duration: 1,
              ease: 'expo',
              clipPath: 'circle(55% at 70% 50%)'
            });
          }
        });
      }
    });
  }, [isInView, services.length]);

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;

    setIsAnimating(true);
    const currentSlideEl = slidesRef.current[currentSlide];
    const currentImageEl = imagesRef.current[currentSlide];

    let nextIndex;
    if (direction === 'next') {
      nextIndex = currentSlide < services.length - 1 ? currentSlide + 1 : 0;
    } else {
      nextIndex = currentSlide > 0 ? currentSlide - 1 : services.length - 1;
    }

    const nextSlideEl = slidesRef.current[nextIndex];
    const nextImageEl = imagesRef.current[nextIndex];

    if (!currentSlideEl || !nextSlideEl || !currentImageEl || !nextImageEl) {
      setIsAnimating(false);
      return;
    }

    const tl = gsap.timeline({
      onStart: () => {
        nextSlideEl.classList.add('slide--current');
      },
      onComplete: () => {
        setIsAnimating(false);
        currentSlideEl.classList.remove('slide--current');
        setCurrentSlide(nextIndex);
      }
    });

    tl.set(nextImageEl, {
      y: direction === 'next' ? '100%' : '-100%',
      clipPath: 'circle(15% at 70% 50%)'
    })
    .set(nextSlideEl, { opacity: 1 })
    .set(nextSlideEl.querySelector('.slide__img'), {
      y: direction === 'next' ? '-50%' : '50%'
    })
    .set([
      ...nextSlideEl.querySelectorAll('.text-row > span')
    ], {
      y: direction === 'next' ? '100%' : '-100%',
      opacity: 0
    });

    // Animate current slide out
    tl.to(currentImageEl, {
      duration: 1,
      ease: 'power3',
      clipPath: 'circle(15% at 70% 50%)',
      rotation: 0.001
    }, 0)
    .to([
      ...currentSlideEl.querySelectorAll('.text-row > span')
    ], {
      duration: 1,
      ease: 'power3',
      y: direction === 'next' ? '-100%' : '100%',
      opacity: 0
    }, 0);

    // Move slides
    tl.to(currentImageEl, {
      duration: 1,
      ease: 'power2.inOut',
      y: direction === 'next' ? '-100%' : '100%',
      rotation: 0.001
    }, 0.6)
    .to(currentSlideEl.querySelector('.slide__img'), {
      duration: 1,
      ease: 'power2.inOut',
      y: direction === 'next' ? '50%' : '-50%'
    }, 0.6)
    .to(nextImageEl, {
      duration: 1,
      ease: 'power2.inOut',
      y: '0%',
      rotation: 0.001
    }, 0.6)
    .to(nextSlideEl.querySelector('.slide__img'), {
      duration: 1,
      ease: 'power2.inOut',
      y: '0%'
    }, 0.6);

    // Animate next slide
    tl.to(nextImageEl, {
      duration: 1.5,
      ease: 'expo.inOut',
      clipPath: 'circle(55% at 70% 50%)'
    }, 1.2)
    .to([
      ...nextSlideEl.querySelectorAll('.text-row > span')
    ], {
      duration: 1.5,
      ease: 'expo.inOut',
      y: '0%',
      opacity: 1,
      rotation: 0.001,
      stagger: direction === 'next' ? 0.1 : -0.1
    }, 1.1);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <section ref={servicesRef} id="services" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <motion.div 
        className="relative z-20 text-center pt-24 pb-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
          Comprehensive roofing solutions designed to protect, enhance, and future-proof your home
        </p>
      </motion.div>

      {/* Auto-play Toggle */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30">
        <button
          onClick={toggleAutoPlay}
          className="flex items-center gap-1 sm:gap-2 bg-black/50 backdrop-blur-sm rounded-lg px-2 sm:px-4 py-1 sm:py-2 text-white hover:bg-black/70 transition-all duration-300"
        >
          {isAutoPlay ? <Pause size={14} className="sm:w-4 sm:h-4" /> : <Play size={14} className="sm:w-4 sm:h-4" />}
          <span className="text-xs sm:text-sm font-medium hidden sm:inline">
            {isAutoPlay ? 'Pause' : 'Play'}
          </span>
        </button>
      </div>

      {/* Slideshow */}
      <div ref={slideshowRef} className="slideshow relative h-[50vh] sm:h-[60vh] lg:h-[70vh]">
        {services.map((service, index) => (
          <figure
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
            className={`slide absolute inset-0 opacity-0 ${index === 0 ? 'opacity-100' : ''}`}
          >
            {/* Image */}
            <div 
              ref={(el) => (imagesRef.current[index] = el)}
              className="slide__img-wrap absolute inset-0"
              style={{
                clipPath: index === 0 ? 'circle(55% at 70% 50%)' : 'circle(15% at 70% 50%)'
              }}
            >
              <div 
                className={`slide__img absolute inset-0 bg-gradient-to-br ${service.color}`}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </div>

            {/* Caption */}
            <figcaption className="slide__caption absolute bottom-16 sm:bottom-20 lg:bottom-16 left-4 sm:left-8 lg:left-16 z-10 max-w-[calc(100vw-2rem)] sm:max-w-none">
              <h2 className="slides__caption-headline text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4">
                <span className="text-row block overflow-hidden">
                  <span 
                    className="inline-block"
                    style={{ 
                      transform: index === 0 ? 'translateY(0%)' : 'translateY(100%)',
                      opacity: index === 0 ? 1 : 0
                    }}
                  >
                    {service.tagline}
                  </span>
                </span>
                <span className="text-row block overflow-hidden">
                  <span 
                    className="inline-block text-gray-300"
                    style={{ 
                      transform: index === 0 ? 'translateY(0%)' : 'translateY(100%)',
                      opacity: index === 0 ? 1 : 0
                    }}
                  >
                    {service.subtitle}
                  </span>
                </span>
              </h2>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Navigation */}
      <nav className="slides-nav absolute bottom-8 right-8 z-20 flex items-center gap-6">
        <button
          onClick={() => navigate('prev')}
          className="slides-nav__button slides-nav__button--prev group p-3 border border-white/30 rounded-full hover:border-white transition-colors duration-300"
          aria-label="Previous slide"
          disabled={isAnimating}
        >
          <ChevronLeft size={24} className="text-white group-hover:text-primary transition-colors duration-300" />
        </button>

        <div className="slides-nav__index text-white font-mono">
          <span className="slides-nav__index-current text-2xl font-bold">
            <span>{String(currentSlide + 1).padStart(2, '0')}</span>
          </span>
          <span className="text-white/50 mx-2">—</span>
          <span className="slides-nav__index-total text-white/70">
            {String(services.length).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={() => navigate('next')}
          className="slides-nav__button slides-nav__button--next group p-3 border border-white/30 rounded-full hover:border-white transition-colors duration-300"
          aria-label="Next slide"
          disabled={isAnimating}
        >
          <ChevronRight size={24} className="text-white group-hover:text-primary transition-colors duration-300" />
        </button>
      </nav>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating && index !== currentSlide) {
                setCurrentSlide(index);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
