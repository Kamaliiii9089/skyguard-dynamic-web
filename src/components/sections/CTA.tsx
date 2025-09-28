import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-accent/20">
        <div className="absolute inset-0 animate-storm-to-sun opacity-60"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Ready to Protect Your
              <br />
              <span className="text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
                Most Valuable Investment?
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Get your free roof inspection today and discover how SkyGuard can enhance your home's protection, value, and energy efficiency.
            </p>

            {/* Main CTA Button */}
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-background font-bold px-12 py-6 text-xl rounded-full shadow-yellow-glow animate-glow-pulse mb-8"
            >
              <Calendar className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
              Book Free Inspection
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
            </Button>

            <p className="text-sm text-muted-foreground mb-12">
              No obligation • Free consultation • Same-day response
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Phone CTA */}
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <Phone className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-foreground mb-2">Call Now</h3>
              <p className="text-muted-foreground mb-4">Speak with a roofing expert</p>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                (555) 123-ROOF
              </Button>
            </div>

            {/* Email CTA */}
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Mail className="text-secondary mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-foreground mb-2">Get Quote</h3>
              <p className="text-muted-foreground mb-4">Email us your details</p>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-background font-semibold"
              >
                info@skyguardroofing.com
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              Licensed & Insured
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              15+ Years Experience
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              Lifetime Warranty
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              500+ Happy Customers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;