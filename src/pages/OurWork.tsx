import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, CheckCircle, Star } from "lucide-react";

const OurWork = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Residential Roof Replacement",
      category: "residential",
      location: "Suburban Heights",
      date: "September 2024",
      duration: "5 days",
      description: "Complete roof replacement with premium architectural shingles and upgraded ventilation system.",
      image: "/placeholder.svg",
      features: ["Architectural Shingles", "Ridge Ventilation", "Ice Dam Protection", "25-Year Warranty"],
      testimonial: "Exceptional work! The team was professional and completed the job ahead of schedule.",
      rating: 5
    },
    {
      id: 2,
      title: "Commercial Flat Roof Restoration",
      category: "commercial",
      location: "Downtown Business District",
      date: "August 2024",
      duration: "8 days",
      description: "Complete restoration of 15,000 sq ft commercial flat roof with modern EPDM membrane.",
      image: "/placeholder.svg",
      features: ["EPDM Membrane", "Improved Drainage", "Energy Efficient", "10-Year Warranty"],
      testimonial: "Professional service with minimal disruption to our business operations.",
      rating: 5
    },
    {
      id: 3,
      title: "Emergency Storm Damage Repair",
      category: "emergency",
      location: "Oak Valley",
      date: "July 2024",
      duration: "2 days",
      description: "Emergency repair service following severe storm damage, including shingle replacement and leak fixes.",
      image: "/placeholder.svg",
      features: ["Emergency Response", "Insurance Coordination", "Temporary Protection", "Quick Turnaround"],
      testimonial: "They responded immediately and saved our home from further damage.",
      rating: 5
    },
    {
      id: 4,
      title: "Historic Home Restoration",
      category: "residential",
      location: "Heritage District",
      date: "June 2024",
      duration: "12 days",
      description: "Careful restoration of 1920s home roof maintaining historical authenticity with modern protection.",
      image: "/placeholder.svg",
      features: ["Historical Accuracy", "Cedar Shingles", "Custom Gutters", "Heritage Compliance"],
      testimonial: "They perfectly preserved the character of our historic home while providing modern protection.",
      rating: 5
    },
    {
      id: 5,
      title: "Industrial Warehouse Roof",
      category: "commercial",
      location: "Industrial Park",
      date: "May 2024",
      duration: "15 days",
      description: "Large-scale industrial roof installation with TPO membrane and advanced drainage systems.",
      image: "/placeholder.svg",
      features: ["TPO Membrane", "Advanced Drainage", "Skylight Installation", "Energy Star Rated"],
      testimonial: "Handled our large project with professionalism and attention to detail.",
      rating: 5
    },
    {
      id: 6,
      title: "Luxury Home Complex",
      category: "residential",
      location: "Hillside Estates",
      date: "April 2024",
      duration: "20 days",
      description: "Premium roofing installation for luxury home complex with multiple roof lines and custom features.",
      image: "/placeholder.svg",
      features: ["Premium Materials", "Complex Design", "Custom Gutters", "Lifetime Warranty"],
      testimonial: "Outstanding craftsmanship that exceeded our expectations.",
      rating: 5
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "residential", label: "Residential", count: projects.filter(p => p.category === "residential").length },
    { id: "commercial", label: "Commercial", count: projects.filter(p => p.category === "commercial").length },
    { id: "emergency", label: "Emergency", count: projects.filter(p => p.category === "emergency").length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-12 xs:py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-5 sm:mb-6"
          >
            Our <span className="text-blue-400">Recent Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl opacity-90 mb-6 xs:mb-7 sm:mb-8 px-2"
          >
            Explore our portfolio of completed roofing projects and see the quality craftsmanship we deliver.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 xs:py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 mb-8 xs:mb-12 sm:mb-16"
          >
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl text-center">
              <CardContent className="pt-4 xs:pt-6 px-2 xs:px-4">
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-600 mb-1 xs:mb-2">500+</h3>
                <p className="text-gray-700 text-xs xs:text-sm sm:text-base">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl text-center">
              <CardContent className="pt-4 xs:pt-6 px-2 xs:px-4">
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-600 mb-1 xs:mb-2">25+</h3>
                <p className="text-gray-700 text-xs xs:text-sm sm:text-base">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl text-center">
              <CardContent className="pt-4 xs:pt-6 px-2 xs:px-4">
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-600 mb-1 xs:mb-2">98%</h3>
                <p className="text-gray-700 text-xs xs:text-sm sm:text-base">Customer Satisfaction</p>
              </CardContent>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl text-center">
              <CardContent className="pt-4 xs:pt-6 px-2 xs:px-4">
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-blue-600 mb-1 xs:mb-2">24/7</h3>
                <p className="text-gray-700 text-xs xs:text-sm sm:text-base">Emergency Service</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 xs:grid-cols-4 bg-white/95 backdrop-blur-sm mb-6 xs:mb-8 h-auto">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id}
                    value={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs xs:text-sm py-2 xs:py-3 px-2 xs:px-4"
                  >
                    <span className="hidden xs:inline">{category.label} ({category.count})</span>
                    <span className="xs:hidden">{category.label.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCategory} className="mt-6 xs:mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                          {/* Placeholder for project image */}
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-lg flex items-center justify-center">
                                📸
                              </div>
                              <p className="text-sm">Project Photo</p>
                            </div>
                          </div>
                          <Badge 
                            className={`absolute top-4 right-4 ${
                              project.category === 'residential' ? 'bg-green-600' :
                              project.category === 'commercial' ? 'bg-blue-600' :
                              'bg-red-600'
                            }`}
                          >
                            {project.category}
                          </Badge>
                        </div>
                        
                        <CardHeader className="px-4 xs:px-6 py-3 xs:py-4">
                          <CardTitle className="text-base xs:text-lg text-gray-900 line-clamp-2">{project.title}</CardTitle>
                          <CardDescription className="text-xs xs:text-sm line-clamp-3">{project.description}</CardDescription>
                        </CardHeader>
                        
                        <CardContent className="space-y-3 xs:space-y-4 px-4 xs:px-6 pb-4 xs:pb-6">
                          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-4 text-xs xs:text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" />
                              <span className="truncate">{project.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" />
                              <span className="truncate">{project.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" />
                              <span className="truncate">{project.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Star className="w-3 h-3 xs:w-4 xs:h-4 text-yellow-500 flex-shrink-0" />
                              <span className="truncate">{project.rating}/5 Stars</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-xs xs:text-sm">Key Features:</h4>
                            <div className="flex flex-wrap gap-1 xs:gap-2">
                              {project.features.slice(0, 3).map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs px-2 py-1">
                                  {feature}
                                </Badge>
                              ))}
                              {project.features.length > 3 && (
                                <Badge variant="secondary" className="text-xs px-2 py-1">
                                  +{project.features.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className="border-t pt-3 xs:pt-4">
                            <p className="text-xs xs:text-sm italic text-gray-600 mb-2 line-clamp-2">"{project.testimonial}"</p>
                            <div className="flex items-center space-x-1">
                              {[...Array(project.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 xs:w-4 xs:h-4 fill-yellow-500 text-yellow-500" />
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 xs:py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 xs:p-6 sm:p-8 shadow-2xl"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 mb-6 xs:mb-8 px-2">
              Join hundreds of satisfied customers who trust SkyGuard Roofing for their roofing needs.
            </p>
            <div className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/estimate')} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base sm:text-lg min-h-[48px] touch-manipulation"
              >
                Get Free Estimate
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base sm:text-lg min-h-[48px] touch-manipulation"
                onClick={() => window.open('tel:555-123-4567', '_self')}
              >
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;