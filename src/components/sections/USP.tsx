import React, { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Award, Users, CheckCircle, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsapAnimations } from '@/hooks/useGSAP';

gsap.registerPlugin(ScrollTrigger);

const USP = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const timeline = [
    {
      step: '01',
      title: 'Discovery Call',
      subtitle: '& Planning',
      description: 'We start by understanding your roofing needs and goals, then create a clear plan to guide your project.',
      icon: CheckCircle,
      color: 'primary'
    },
    {
      step: '02',
      title: 'Design',
      subtitle: '& Execution',
      description: 'We bring your vision to life, designing your roofing solution with precise execution and quality materials.',
      icon: Award,
      color: 'secondary'
    },
    {
      step: '03',
      title: 'Feedback',
      subtitle: '& Review',
      description: 'We get feedback from you, and implement necessary changes to ensure complete satisfaction.',
      icon: Clock,
      color: 'accent'
    },
    {
      step: '04',
      title: 'Launch',
      subtitle: '& Support',
      description: 'Your roof is complete! We provide ongoing support and warranty protection for lasting peace of mind.',
      icon: Shield,
      color: 'primary'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'Comprehensive coverage for materials and workmanship',
      color: 'accent'
    },
    {
      icon: Clock,
      title: '2-Year Checkups',
      description: 'Scheduled maintenance to keep your roof in perfect condition',
      color: 'primary'
    },
    {
      icon: Award,
      title: 'Licensed & Insured',
      description: 'Fully certified professionals with complete insurance coverage',
      color: 'secondary'
    },
    {
      icon: Users,
      title: '15+ Years Experience',
      description: 'Trusted expertise in residential and commercial roofing',
      color: 'accent'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animations
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top 80%",
        animation: gsap.timeline()
          .add(gsapAnimations.fadeInUp(headerRef.current?.querySelector('.badge'), 0))
          .add(gsapAnimations.textReveal(headerRef.current?.querySelector('h2'), 0.2))
          .add(gsapAnimations.fadeInUp(headerRef.current?.querySelector('p'), 0.4))
      });

      // Timeline items with modern animations
      const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
      if (timelineItems) {
        timelineItems.forEach((item, index) => {
          // Main content animation
          ScrollTrigger.create({
            trigger: item,
            start: "top 80%",
            animation: gsap.timeline()
              .add(gsapAnimations.fadeInUp(item.querySelector('.timeline-card'), 0))
              .add(gsapAnimations.scaleIn(item.querySelector('.timeline-point'), 0.3))
          });
          
          // Progress bar animation
          ScrollTrigger.create({
            trigger: item,
            start: "top 70%",
            animation: gsap.fromTo(item.querySelector('.timeline-progress'),
              { width: '0%' },
              { 
                width: `${((index + 1) / timelineItems.length) * 100}%`,
                duration: 1.5,
                ease: "power2.out"
              }
            )
          });
          
          // Floating animation for icons
          gsap.to(item.querySelector('.timeline-point'), {
            y: -10,
            duration: 2 + (index * 0.5),
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: 2 + (index * 0.2)
          });
        });
      }

      // Features grid animation
      const featureCards = featuresRef.current?.querySelectorAll('.feature-card');
      if (featureCards) {
        ScrollTrigger.create({
          trigger: featuresRef.current,
          start: "top 80%",
          animation: gsapAnimations.staggerFadeInUp(Array.from(featureCards), 0)
        });
      }

      // Floating badge animation
      ScrollTrigger.create({
        trigger: badgeRef.current,
        start: "top 90%",
        animation: gsap.timeline()
          .add(gsapAnimations.scaleIn(badgeRef.current, 0))
          .add(gsap.to(badgeRef.current, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
          }), 0.5)
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="badge bg-accent/20 text-accent border-accent/30 px-6 py-2 text-lg font-semibold">
              Why Choose SkyGuard?
            </Badge>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Unmatched <span className="text-transparent bg-gradient-to-r from-accent to-secondary bg-clip-text">Protection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just install roofs – we build lasting relationships with comprehensive care and protection
          </p>
        </div>

        {/* Timeline - Modern Step Process */}
        <div ref={timelineRef} className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-16">Our 4 Steps to Launch Your Project</h3>
          
          <div className="max-w-6xl mx-auto">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div 
                  key={index} 
                  className="timeline-item mb-20 last:mb-0"
                >
                  {/* Full width section with yellow background like reference */}
                  <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 rounded-3xl p-12 md:p-16 overflow-hidden min-h-[500px]">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-4 border-black/20"></div>
                      <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-black/10"></div>
                      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border-2 border-black/15"></div>
                    </div>
                    
                    {/* Content Layout */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[350px]">
                      {/* Left Content */}
                      <div className="space-y-6">
                        {/* Step Number */}
                        <div className="timeline-card opacity-0">
                          <h2 className="text-8xl md:text-9xl font-black text-black/80 mb-4 leading-none">
                            {item.step}
                          </h2>
                          
                          {/* Title */}
                          <div className="mb-6">
                            <h3 className="text-4xl md:text-5xl font-black text-black leading-tight">
                              {item.title}
                            </h3>
                            <h4 className="text-4xl md:text-5xl font-black text-black leading-tight">
                              {item.subtitle}
                            </h4>
                          </div>
                          
                          {/* Description */}
                          <p className="text-xl md:text-2xl text-black/80 leading-relaxed max-w-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Right Content - Illustration Area */}
                      <div className="flex items-center justify-center">
                        <div className="timeline-point opacity-0">
                          {/* Animated Icon Container */}
                          <div className="relative">
                            <div className="w-48 h-48 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                              <Icon size={80} className="text-black" />
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-black/20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-black/15 animate-bounce"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="absolute bottom-8 left-12 right-12">
                      <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-black transition-all duration-1000 ease-out timeline-progress"
                          style={{ width: `${((index + 1) / timeline.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="feature-card group text-center border-2 border-border/50 hover:border-primary/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    feature.color === 'primary' ? 'bg-primary/20 text-primary' :
                    feature.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                    'bg-accent/20 text-accent'
                  }`}>
                    <Icon size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Floating Lifetime Warranty Badge */}
        <div className="flex justify-center mt-16">
          <div ref={badgeRef} className="relative opacity-0">
            <Badge className="bg-gradient-to-r from-accent to-secondary text-background px-8 py-4 text-xl font-bold shadow-yellow-glow">
              <Star className="mr-2" size={24} />
              LIFETIME WARRANTY INCLUDED
              <Star className="ml-2" size={24} />
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;