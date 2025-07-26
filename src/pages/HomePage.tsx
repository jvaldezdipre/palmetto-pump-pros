import { Phone, CheckCircle, Wrench, Settings, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/hero-pump-worker.jpg";
import serviceTruck from "@/assets/service-truck.jpg";
import pumpInstallation from "@/assets/pump-installation.jpg";
import maintenanceWork from "@/assets/maintenance-work.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-hero flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-navy-blue/70" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="font-work-sans font-black text-5xl md:text-7xl leading-tight mb-6">
              Your Local <span className="text-construction-orange">Pump Experts</span>
            </h1>
            <p className="font-lato text-xl md:text-2xl mb-8 text-gray-200">
              Fast, Reliable Service for Water & Wastewater Systems Throughout South Carolina
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="construction" size="xl" className="shadow-strong">
                <Phone className="w-6 h-6 mr-3" />
                Call (843) 555-1234
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-navy-blue">
                Get Free Quote
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-8 h-8 text-construction-orange flex-shrink-0" />
                <div>
                  <p className="font-bold">Licensed & Insured</p>
                  <p className="text-sm text-gray-300">Fully bonded professionals</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-8 h-8 text-construction-orange flex-shrink-0" />
                <div>
                  <p className="font-bold">24/7 Emergency</p>
                  <p className="text-sm text-gray-300">Always available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-8 h-8 text-construction-orange flex-shrink-0" />
                <div>
                  <p className="font-bold">20+ Years Experience</p>
                  <p className="text-sm text-gray-300">Trusted local experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-work-sans font-bold text-4xl md:text-5xl text-navy-blue mb-6">
                Built on <span className="text-construction-orange">Local Trust</span> & Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over two decades, Palmetto Pump & Control has been the go-to choice for municipalities, 
                facility managers, and property owners across South Carolina. We're not just another service 
                company – we're your neighbors, committed to keeping your water systems running smoothly.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of certified technicians brings real-world experience to every job, from routine 
                maintenance to emergency repairs. When something goes wrong, we respond fast because we 
                understand that downtime costs money.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-construction-orange mb-2">500+</div>
                  <p className="text-sm font-medium text-muted-foreground">Systems Serviced</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-construction-orange mb-2">24/7</div>
                  <p className="text-sm font-medium text-muted-foreground">Emergency Response</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-construction-orange mb-2">20+</div>
                  <p className="text-sm font-medium text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-construction-orange mb-2">100%</div>
                  <p className="text-sm font-medium text-muted-foreground">Licensed & Insured</p>
                </div>
              </div>

              <Button variant="work" size="lg">
                Learn More About Us
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={serviceTruck} 
                alt="Palmetto Pump & Control service truck" 
                className="rounded-lg shadow-strong"
              />
              <div className="absolute -bottom-6 -left-6 bg-construction-orange text-white p-6 rounded-lg shadow-strong">
                <p className="font-bold text-lg">South Carolina's</p>
                <p className="font-black text-xl">Pump Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-work-sans font-bold text-4xl md:text-5xl text-navy-blue mb-6">
              Complete <span className="text-construction-orange">Pump Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From installation to emergency repairs, we handle every aspect of your pump and control systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-strong transition-all duration-300 border-2 hover:border-construction-orange">
              <CardContent className="p-8">
                <div className="bg-navy-blue text-white p-4 rounded-lg mb-6 w-fit group-hover:bg-construction-orange transition-colors">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Installation</h3>
                <p className="text-muted-foreground mb-6">
                  Professional installation of new pump systems, control panels, and automation equipment.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>System Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Professional Installation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Testing & Commissioning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-strong transition-all duration-300 border-2 hover:border-construction-orange">
              <CardContent className="p-8">
                <div className="bg-navy-blue text-white p-4 rounded-lg mb-6 w-fit group-hover:bg-construction-orange transition-colors">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Maintenance</h3>
                <p className="text-muted-foreground mb-6">
                  Preventive maintenance programs to keep your systems running efficiently and extend equipment life.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Regular Inspections</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Preventive Maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-strong transition-all duration-300 border-2 hover:border-construction-orange">
              <CardContent className="p-8">
                <div className="bg-navy-blue text-white p-4 rounded-lg mb-6 w-fit group-hover:bg-construction-orange transition-colors">
                  <Settings className="w-8 h-8 rotate-45" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Repairs</h3>
                <p className="text-muted-foreground mb-6">
                  Fast, reliable repair services for all types of pump systems and control equipment.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Emergency Service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Pump Rebuilds</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Control System Repair</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-strong transition-all duration-300 border-2 hover:border-construction-orange">
              <CardContent className="p-8">
                <div className="bg-navy-blue text-white p-4 rounded-lg mb-6 w-fit group-hover:bg-construction-orange transition-colors">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Sales</h3>
                <p className="text-muted-foreground mb-6">
                  Quality pumps, parts, and control equipment from leading manufacturers.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Quality Equipment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Genuine Parts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Expert Consultation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-work-sans font-bold text-4xl md:text-5xl text-navy-blue mb-6">
              <span className="text-construction-orange">Real Work</span> for Real Clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our satisfied customers have to say about our work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Images */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={pumpInstallation} 
                alt="Pump installation project" 
                className="rounded-lg shadow-hard hover:shadow-strong transition-shadow"
              />
              <img 
                src={maintenanceWork} 
                alt="Maintenance work" 
                className="rounded-lg shadow-hard hover:shadow-strong transition-shadow"
              />
              <img 
                src={serviceTruck} 
                alt="Service truck on site" 
                className="rounded-lg shadow-hard hover:shadow-strong transition-shadow col-span-2"
              />
            </div>

            {/* Testimonials */}
            <div className="space-y-8">
              <Card className="border-l-4 border-construction-orange shadow-hard">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-construction-orange text-construction-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Palmetto Pump saved us when our main lift station failed on a Friday evening. 
                    They had a crew out within 2 hours and got us back online before the weekend. 
                    Professional, fast, and reliable."
                  </p>
                  <div className="font-bold text-navy-blue">
                    Mike Johnson
                    <span className="block text-sm font-normal text-muted-foreground">
                      Facilities Manager, Charleston County
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-construction-orange shadow-hard">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-construction-orange text-construction-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "We've used Palmetto Pump for our preventive maintenance contract for 3 years. 
                    Their scheduled service has helped us avoid costly breakdowns and keeps our 
                    systems running efficiently."
                  </p>
                  <div className="font-bold text-navy-blue">
                    Sarah Mitchell
                    <span className="block text-sm font-normal text-muted-foreground">
                      Property Manager, Coastal Properties
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-construction-orange shadow-hard">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-construction-orange text-construction-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Outstanding service and fair pricing. The team really knows their stuff and 
                    takes time to explain what they're doing. Highly recommend for any pump or 
                    control system work."
                  </p>
                  <div className="font-bold text-navy-blue">
                    Tom Rodriguez
                    <span className="block text-sm font-normal text-muted-foreground">
                      Plant Supervisor, Lowcountry Water Authority
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-work-sans font-bold text-4xl md:text-5xl mb-6">
              Ready to Get <span className="text-construction-orange">Started?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today for fast, reliable service you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-dark-gray p-8 rounded-lg shadow-strong mb-8">
                <h3 className="font-work-sans font-bold text-2xl mb-6 text-construction-orange">
                  Emergency Service Available 24/7
                </h3>
                
                <div className="space-y-6">
                  <a href="tel:+18435551234" className="flex items-center space-x-4 text-xl hover:text-construction-orange transition-colors">
                    <div className="bg-construction-orange p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">(843) 555-1234</p>
                      <p className="text-sm text-gray-300">Call anytime for emergencies</p>
                    </div>
                  </a>

                  <div className="pt-6 border-t border-gray-600">
                    <h4 className="font-bold text-lg mb-4">Our Service Areas</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      <div>• Charleston County</div>
                      <div>• Berkeley County</div>
                      <div>• Dorchester County</div>
                      <div>• Colleton County</div>
                      <div>• Beaufort County</div>
                      <div>• And surrounding areas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background p-8 rounded-lg shadow-strong">
              <h3 className="font-work-sans font-bold text-2xl text-navy-blue mb-6">
                Request a Quote
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      First Name
                    </label>
                    <Input className="border-2 focus:border-construction-orange" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Last Name
                    </label>
                    <Input className="border-2 focus:border-construction-orange" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" className="border-2 focus:border-construction-orange" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" className="border-2 focus:border-construction-orange" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-3 py-2 border-2 border-input rounded-md focus:border-construction-orange focus:outline-none">
                    <option>Select a service...</option>
                    <option>Emergency Repair</option>
                    <option>Installation</option>
                    <option>Maintenance</option>
                    <option>Sales Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project or service needs..."
                    className="border-2 focus:border-construction-orange min-h-[120px]"
                  />
                </div>
                
                <Button variant="construction" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;