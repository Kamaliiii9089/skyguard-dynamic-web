import React from 'react';
import { Shield, Clock, Award, Users, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import skyguardLogo from '@/assets/skyguard-logo.png';
import heroImage from '@/assets/roofing-hero.jpg';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed contractors with comprehensive insurance coverage'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency repair services when you need us most'
    },
    {
      icon: Award,
      title: 'Lifetime Warranty',
      description: 'Comprehensive warranty on all workmanship and materials'
    },
    {
      icon: Users,
      title: '25+ Years Experience',
      description: 'Trusted expertise in residential and commercial roofing'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Projects Completed' },
    { number: '25+', label: 'Years Experience' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Emergency Service' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Springfield, IL',
      rating: 5,
      text: 'SkyGuard exceeded our expectations. Professional, reliable, and the quality of work is outstanding!'
    },
    {
      name: 'Mike Chen',
      location: 'Aurora, IL',
      rating: 5,
      text: 'After storm damage, SkyGuard was there within hours. They handled everything perfectly.'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Naperville, IL',
      rating: 5,
      text: 'The lifetime warranty gave us peace of mind. Three years later, our roof still looks brand new!'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src={skyguardLogo} 
                alt="SkyGuard Roofing Solutions" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">SkyGuard</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Quote</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About SkyGuard Roofing
            </h1>
            <p className="text-xl text-blue-100">
              Protecting your home with expert craftsmanship and 25+ years of trusted experience
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Trusted Roofing Partner
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For over <strong>25 years</strong>, SkyGuard Roofing has been the premier choice for 
                  residential and commercial roofing solutions throughout Illinois. We combine traditional 
                  craftsmanship with modern materials and techniques to deliver roofing systems that 
                  stand the test of time.
                </p>
                <p>
                  Our team of certified professionals is committed to excellence in every project, 
                  from simple repairs to complete roof replacements. We understand that your roof 
                  is your home's first line of defense, and we take that responsibility seriously.
                </p>
                <p>
                  With our comprehensive warranty and 24/7 emergency service, you can trust SkyGuard 
                  to protect what matters most to you.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src={heroImage}
                alt="Professional SkyGuard roofing team"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Professional Excellence</h3>
                <p className="text-sm">Every project reflects our commitment to quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-lg text-gray-600">Numbers that speak to our commitment and excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SkyGuard?</h2>
            <p className="text-lg text-gray-600">What sets us apart in the roofing industry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real feedback from satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100">Contact us today for your free roofing consultation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">info@skyguardroofing.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">123 Main Street, Chicago, IL</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 mr-4">
              Get Free Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src={skyguardLogo} 
                alt="SkyGuard Roofing Solutions" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold">SkyGuard Roofing</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 SkyGuard Roofing Solutions. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-1">Licensed • Insured • Trusted</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
