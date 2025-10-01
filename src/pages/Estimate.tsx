import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const Estimate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    projectDetails: "",
    urgency: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add form validation and submission logic here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-12 xs:py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-5 sm:mb-6"
          >
            Get Your <span className="text-blue-400">Free Estimate</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl opacity-90 mb-6 xs:mb-7 sm:mb-8 px-2"
          >
            Professional roofing assessment with no obligation. Get your detailed quote today.
          </motion.p>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section className="py-8 xs:py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
                <CardHeader className="px-4 xs:px-6 py-4 xs:py-6">
                  <CardTitle className="text-xl xs:text-2xl text-gray-900">Request Your Estimate</CardTitle>
                  <CardDescription className="text-sm xs:text-base">
                    Fill out the form below and we'll contact you within 24 hours with your personalized quote.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 xs:px-6 pb-4 xs:pb-6">
                  <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm xs:text-base">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1 h-10 xs:h-11 text-sm xs:text-base touch-manipulation"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm xs:text-base">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1 h-10 xs:h-11 text-sm xs:text-base touch-manipulation"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-sm xs:text-base">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="mt-1 h-10 xs:h-11 text-sm xs:text-base touch-manipulation"
                        />
                      </div>
                      <div>
                        <Label htmlFor="urgency" className="text-sm xs:text-base">Project Urgency</Label>
                        <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger className="mt-1 h-10 xs:h-11 text-sm xs:text-base touch-manipulation">
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (Emergency)</SelectItem>
                            <SelectItem value="1-2-weeks">1-2 Weeks</SelectItem>
                            <SelectItem value="1-month">Within 1 Month</SelectItem>
                            <SelectItem value="3-months">Within 3 Months</SelectItem>
                            <SelectItem value="planning">Just Planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-sm xs:text-base">Property Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                        className="mt-1 h-10 xs:h-11 text-sm xs:text-base touch-manipulation"
                        placeholder="Street address, City, State, ZIP"
                      />
                    </div>

                    <div>
                      <Label htmlFor="serviceType" className="text-sm xs:text-base">Service Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("serviceType", value)} required>
                        <SelectTrigger className="mt-1 h-10 xs:h-11 text-sm xs:text-base touch-manipulation">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="roof-replacement">Complete Roof Replacement</SelectItem>
                          <SelectItem value="roof-repair">Roof Repair</SelectItem>
                          <SelectItem value="roof-inspection">Roof Inspection</SelectItem>
                          <SelectItem value="gutter-installation">Gutter Installation</SelectItem>
                          <SelectItem value="gutter-repair">Gutter Repair</SelectItem>
                          <SelectItem value="emergency-repair">Emergency Repair</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="projectDetails" className="text-sm xs:text-base">Project Details</Label>
                      <Textarea
                        id="projectDetails"
                        value={formData.projectDetails}
                        onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                        className="mt-1 text-sm xs:text-base touch-manipulation"
                        rows={4}
                        placeholder="Please describe your roofing needs, any issues you've noticed, or specific requirements..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-base xs:text-lg py-3 xs:py-4 min-h-[48px] touch-manipulation font-medium">
                      Submit Estimate Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 xs:space-y-8"
            >
              {/* Contact Info */}
              <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
                <CardHeader className="px-4 xs:px-6 py-4 xs:py-6">
                  <CardTitle className="text-lg xs:text-xl text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 xs:space-y-4 px-4 xs:px-6 pb-4 xs:pb-6">
                  <a 
                    href="tel:555-123-4567"
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors touch-manipulation"
                  >
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm xs:text-base">(555) 123-4567</span>
                  </a>
                  <a 
                    href="mailto:info@skyguardroofing.com"
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors touch-manipulation"
                  >
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm xs:text-base">info@skyguardroofing.com</span>
                  </a>
                  <div className="flex items-center space-x-3 p-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm xs:text-base">Serving the Greater Metro Area</span>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
                <CardHeader className="px-4 xs:px-6 py-4 xs:py-6">
                  <CardTitle className="text-lg xs:text-xl text-gray-900">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="px-4 xs:px-6 pb-4 xs:pb-6">
                  <div className="space-y-3 xs:space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm xs:text-base">Quick Response</h4>
                        <p className="text-gray-600 text-xs xs:text-sm">We'll contact you within 24 hours to schedule your consultation.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm xs:text-base">On-Site Assessment</h4>
                        <p className="text-gray-600 text-xs xs:text-sm">Our experts will inspect your roof and provide detailed analysis.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm xs:text-base">Detailed Quote</h4>
                        <p className="text-gray-600 text-xs xs:text-sm">Receive a comprehensive quote with materials, labor, and timeline.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm xs:text-base">No Obligation</h4>
                        <p className="text-gray-600 text-xs xs:text-sm">Our estimates are completely free with no pressure to commit.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estimate;