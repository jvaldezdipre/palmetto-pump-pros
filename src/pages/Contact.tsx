import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-work-sans font-black text-5xl md:text-6xl mb-6">
              <span className="text-construction-orange">Contact</span> Palmetto Pump & Control
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
              Ready to help with your pump and control system needs - 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Emergency Contact */}
            <Card className="border-l-4 border-construction-orange shadow-strong">
              <CardContent className="p-8 text-center">
                <div className="bg-construction-orange text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Emergency Service</h3>
                <a 
                  href="tel:+18435551234"
                  className="text-3xl font-black text-construction-orange hover:text-construction-yellow transition-colors block mb-2"
                >
                  (843) 555-1234
                </a>
                <p className="text-muted-foreground mb-4">Available 24/7</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium text-navy-blue mb-1">Emergency Response:</p>
                  <p className="text-xs text-muted-foreground">2-hour guarantee in primary service areas</p>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-l-4 border-navy-blue shadow-strong">
              <CardContent className="p-8 text-center">
                <div className="bg-navy-blue text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-navy-blue">Monday - Friday</p>
                    <p className="text-muted-foreground">7:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-navy-blue">Saturday</p>
                    <p className="text-muted-foreground">8:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-navy-blue">Sunday</p>
                    <p className="text-muted-foreground">Emergency Only</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-l-4 border-dark-gray shadow-strong">
              <CardContent className="p-8 text-center">
                <div className="bg-dark-gray text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Main Office</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium">123 Industrial Way</p>
                  <p>Charleston, SC 29401</p>
                  <a 
                    href="mailto:info@palmettopump.com"
                    className="text-construction-orange hover:text-construction-yellow transition-colors block mt-4"
                  >
                    info@palmettopump.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-work-sans font-bold text-4xl text-navy-blue mb-6">
                Get a <span className="text-construction-orange">Free Quote</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tell us about your project or service needs and we'll get back to you within 24 hours.
              </p>

              <Card className="shadow-strong">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          First Name *
                        </label>
                        <Input className="border-2 focus:border-construction-orange" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Last Name *
                        </label>
                        <Input className="border-2 focus:border-construction-orange" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input type="tel" className="border-2 focus:border-construction-orange" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Email Address *
                        </label>
                        <Input type="email" className="border-2 focus:border-construction-orange" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Company/Organization
                      </label>
                      <Input className="border-2 focus:border-construction-orange" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Service Type *
                        </label>
                        <select className="w-full px-3 py-2 border-2 border-input rounded-md focus:border-construction-orange focus:outline-none" required>
                          <option value="">Select a service...</option>
                          <option value="emergency">Emergency Repair</option>
                          <option value="installation">New Installation</option>
                          <option value="maintenance">Maintenance Program</option>
                          <option value="sales">Equipment Sales</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Location
                        </label>
                        <Input placeholder="City, County" className="border-2 focus:border-construction-orange" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Project Details *
                      </label>
                      <Textarea 
                        placeholder="Please describe your pump system needs, any issues you're experiencing, or questions you have..."
                        className="border-2 focus:border-construction-orange min-h-[150px]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="contact" value="phone" className="text-construction-orange" />
                          <span className="text-sm">Phone</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="contact" value="email" className="text-construction-orange" />
                          <span className="text-sm">Email</span>
                        </label>
                      </div>
                    </div>
                    
                    <Button variant="construction" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Required fields. We typically respond within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-strong">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-construction-orange mx-auto mb-3" />
                      <h3 className="font-work-sans font-bold text-lg text-navy-blue mb-2">
                        Find Us Here
                      </h3>
                      <p className="text-muted-foreground">123 Industrial Way, Charleston, SC 29401</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-navy-blue mb-3">Directions</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Located in the industrial district, just off Highway 17. Easy access from I-26 and I-526.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service Promise */}
              <Card className="bg-navy-blue text-white shadow-strong">
                <CardContent className="p-8">
                  <h3 className="font-work-sans font-bold text-xl mb-4 text-construction-orange">
                    Our Service Promise
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-construction-orange rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium">Fast Response</p>
                        <p className="text-sm text-gray-300">Emergency calls answered within 2 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-construction-orange rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium">Fair Pricing</p>
                        <p className="text-sm text-gray-300">Transparent quotes with no hidden fees</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-construction-orange rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium">Quality Work</p>
                        <p className="text-sm text-gray-300">Licensed professionals with guaranteed workmanship</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Coverage Areas */}
              <Card className="shadow-strong">
                <CardContent className="p-6">
                  <h4 className="font-bold text-navy-blue mb-4">Primary Service Areas</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">• Charleston County</div>
                    <div className="text-muted-foreground">• Berkeley County</div>
                    <div className="text-muted-foreground">• Dorchester County</div>
                    <div className="text-muted-foreground">• Colleton County</div>
                    <div className="text-muted-foreground">• Beaufort County</div>
                    <div className="text-muted-foreground">• Jasper County</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Don't see your area? Contact us - we may still be able to help!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;