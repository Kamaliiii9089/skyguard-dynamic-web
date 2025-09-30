import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Shield,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '(555) 123-4567',
      subtitle: '24/7 Emergency Service'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@skyguardroofing.com',
      subtitle: 'Response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Main Street, Chicago, IL',
      subtitle: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 8AM-6PM',
      subtitle: 'Weekend appointments available'
    }
  ];

  const services = [
    'Roof Inspection',
    'Roof Repair', 
    'Roof Replacement',
    'Emergency Services',
    'Gutter Installation',
    'Maintenance',
    'Other'
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your <span className="text-blue-600">Free Quote</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to protect your home? Fill out the form below and we'll get back to you within 24 hours with a comprehensive quote.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Quote</h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                          <div>
                            <Label htmlFor="service" className="text-sm font-medium text-gray-700 mb-2 block">
                              Service Needed *
                            </Label>
                            <Select onValueChange={handleServiceChange} required>
                              <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                            Project Details
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="Tell us about your roofing project, any specific concerns, or questions you have..."
                          />
                        </div>

                        <Button 
                          type="submit"
                          size="lg"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold flex items-center justify-center space-x-2"
                        >
                          <Send className="h-5 w-5" />
                          <span>Send My Quote Request</span>
                        </Button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-4">
                        Your quote request has been submitted successfully. 
                      </p>
                      <p className="text-sm text-gray-500">
                        We'll get back to you within 24 hours with a comprehensive quote.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Info & Trust Indicators */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{info.title}</h4>
                            <p className="text-blue-600 font-medium">{info.content}</p>
                            <p className="text-gray-500 text-sm">{info.subtitle}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-600 shadow-lg border-0">
                <CardContent className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-6">Why Choose SkyGuard?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-blue-200" />
                      <span className="font-medium">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-blue-200" />
                      <span className="font-medium">25+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-blue-200" />
                      <span className="font-medium">Lifetime Warranty</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-blue-200" />
                      <span className="font-medium">24/7 Emergency Service</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-blue-500">
                    <p className="text-blue-100 text-sm">
                      <strong>Free Quote Guarantee:</strong> No hidden fees, no obligations. 
                      Get a detailed quote with transparent pricing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;