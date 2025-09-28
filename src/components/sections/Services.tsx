import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Sun, Hammer, Zap, Droplets, Eye } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Storm Damage Repair',
      description: 'Expert repairs for hail, wind, and storm damage with insurance claim assistance.',
      features: ['Emergency Response', 'Insurance Claims', '24/7 Service'],
      color: 'primary'
    },
    {
      icon: Sun,
      title: 'Solar Installation',
      description: 'Professional solar panel installation for energy-efficient, eco-friendly homes.',
      features: ['Energy Savings', 'Tax Credits', 'Eco-Friendly'],
      color: 'accent'
    },
    {
      icon: Hammer,
      title: 'Roof Replacement',
      description: 'Complete roof replacement with premium materials and lifetime warranty.',
      features: ['Premium Materials', 'Lifetime Warranty', 'Expert Installation'],
      color: 'secondary'
    },
    {
      icon: Zap,
      title: 'Emergency Repairs',
      description: 'Fast emergency roofing services to protect your home when you need it most.',
      features: ['24/7 Emergency', 'Rapid Response', 'Temporary Protection'],
      color: 'primary'
    },
    {
      icon: Droplets,
      title: 'Leak Detection',
      description: 'Advanced leak detection and waterproofing solutions for lasting protection.',
      features: ['Advanced Detection', 'Waterproofing', 'Preventive Care'],
      color: 'secondary'
    },
    {
      icon: Eye,
      title: 'Roof Inspection',
      description: 'Comprehensive roof inspections with detailed reports and maintenance plans.',
      features: ['Detailed Reports', 'Maintenance Plans', 'Professional Assessment'],
      color: 'accent'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/20 hover:border-primary/40';
      case 'secondary':
        return 'border-secondary/20 hover:border-secondary/40';
      case 'accent':
        return 'border-accent/20 hover:border-accent/40';
      default:
        return 'border-primary/20 hover:border-primary/40';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-secondary';
      case 'accent':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive roofing solutions designed to protect, enhance, and future-proof your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 ${getColorClasses(service.color)} bg-card/50 backdrop-blur-sm animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-card to-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${getIconColor(service.color)}`}>
                    <Icon size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full mr-3 ${getIconColor(service.color)} opacity-60`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none
                    ${service.color === 'primary' ? 'from-primary to-transparent' :
                      service.color === 'secondary' ? 'from-secondary to-transparent' :
                      'from-accent to-transparent'}`}>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;