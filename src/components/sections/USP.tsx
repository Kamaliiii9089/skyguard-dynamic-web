import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Award, Users, CheckCircle, Star } from 'lucide-react';

const USP = () => {
  const timeline = [
    {
      year: 'Year 1',
      title: 'Installation Complete',
      description: 'Professional installation with quality materials and expert craftsmanship',
      icon: CheckCircle,
      color: 'secondary'
    },
    {
      year: 'Year 2',
      title: 'First Checkup',
      description: 'Comprehensive inspection and maintenance to ensure optimal performance',
      icon: Clock,
      color: 'primary'
    },
    {
      year: 'Year 4',
      title: 'Second Checkup',
      description: 'Detailed assessment and any necessary adjustments or repairs',
      icon: Clock,
      color: 'primary'
    },
    {
      year: 'Lifetime',
      title: 'Warranty Protection',
      description: 'Ongoing coverage and peace of mind for the life of your roof',
      icon: Shield,
      color: 'accent'
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

  return (
    <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30 px-6 py-2 text-lg font-semibold animate-float">
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

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Care Timeline</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary via-primary to-accent opacity-30"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <Card className="bg-card/80 border-border/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <CardContent className="p-6">
                          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              item.color === 'primary' ? 'bg-primary/20 text-primary' :
                              item.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                              'bg-accent/20 text-accent'
                            }`}>
                              <Icon size={20} />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Point */}
                    <div className={`w-6 h-6 rounded-full border-4 border-background z-10 ${
                      item.color === 'primary' ? 'bg-primary' :
                      item.color === 'secondary' ? 'bg-secondary' :
                      'bg-accent'
                    } animate-glow-pulse`}></div>
                    
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group text-center border-2 border-border/50 hover:border-primary/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
          <div className="relative">
            <Badge className="bg-gradient-to-r from-accent to-secondary text-background px-8 py-4 text-xl font-bold animate-float shadow-yellow-glow">
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