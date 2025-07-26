import { Settings, Wrench, Truck, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import pumpInstallation from "@/assets/pump-installation.jpg";
import maintenanceWork from "@/assets/maintenance-work.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-work-sans font-black text-5xl md:text-6xl mb-6">
              Complete <span className="text-construction-orange">Pump Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
              From emergency repairs to new installations, we handle every aspect of your pump and control systems
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-strong transition-all duration-300 border-2 hover:border-construction-orange">
              <CardContent className="p-8 text-center">
                <div className="bg-navy-blue text-white p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-construction-orange transition-colors">
                  <Settings className="w-10 h-10" />
                </div>
                <h3 className="font-work-sans font-bold text-2xl text-navy-blue mb-4">Installation</h3>
                <p className="text-muted-foreground">
                  Professional installation of new pump systems and control equipment
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-strong transition-all duration-300 border-2 hover:border-construction-orange">
              <CardContent className="p-8 text-center">
                <div className="bg-navy-blue text-white p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-construction-orange transition-colors">
                  <Wrench className="w-10 h-10" />
                </div>
                <h3 className="font-work-sans font-bold text-2xl text-navy-blue mb-4">Maintenance</h3>
                <p className="text-muted-foreground">
                  Preventive maintenance programs to keep your systems running efficiently
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-strong transition-all duration-300 border-2 hover:border-construction-orange">
              <CardContent className="p-8 text-center">
                <div className="bg-navy-blue text-white p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-construction-orange transition-colors">
                  <Settings className="w-10 h-10 rotate-45" />
                </div>
                <h3 className="font-work-sans font-bold text-2xl text-navy-blue mb-4">Repairs</h3>
                <p className="text-muted-foreground">
                  24/7 emergency repair services for all types of pump systems
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-strong transition-all duration-300 border-2 hover:border-construction-orange">
              <CardContent className="p-8 text-center">
                <div className="bg-navy-blue text-white p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-construction-orange transition-colors">
                  <Truck className="w-10 h-10" />
                </div>
                <h3 className="font-work-sans font-bold text-2xl text-navy-blue mb-4">Sales</h3>
                <p className="text-muted-foreground">
                  Quality pumps, parts, and control equipment from leading manufacturers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-work-sans font-bold text-4xl text-navy-blue mb-6">
                <span className="text-construction-orange">Professional</span> Installation Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From design to commissioning, we handle complete pump system installations with 
                precision and expertise. Our licensed engineers ensure your system is properly 
                sized, efficiently designed, and built to last.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl text-navy-blue mb-4">What We Install:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>Centrifugal Pumps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>Submersible Pumps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>Control Panels</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>VFD Systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>SCADA Systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>Lift Stations</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl text-navy-blue mb-4">Our Process:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-construction-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                      <span>Site assessment and system design</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-construction-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                      <span>Equipment procurement and staging</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-construction-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                      <span>Professional installation and wiring</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-construction-orange text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                      <span>Testing, commissioning, and training</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={pumpInstallation} 
                alt="Professional pump installation" 
                className="rounded-lg shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={maintenanceWork} 
                alt="Preventive maintenance service" 
                className="rounded-lg shadow-strong"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-work-sans font-bold text-4xl text-navy-blue mb-6">
                <span className="text-construction-orange">Preventive</span> Maintenance Programs
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Regular maintenance is the key to reliable operation and long equipment life. 
                Our comprehensive maintenance programs are designed to catch problems before 
                they become costly failures.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl text-navy-blue mb-4">Maintenance Includes:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>Regular inspections and performance testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>Lubrication and mechanical adjustments</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>Electrical connections and control testing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>Wear part replacement as needed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                      <span>Detailed reporting and recommendations</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-navy-blue mb-3">Program Benefits:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>• Reduced downtime</div>
                    <div>• Lower operating costs</div>
                    <div>• Extended equipment life</div>
                    <div>• Improved efficiency</div>
                    <div>• Priority service</div>
                    <div>• Fixed annual costs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-work-sans font-bold text-4xl md:text-5xl mb-6">
              <span className="text-construction-orange">24/7</span> Emergency Service
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              When your pumps fail, every minute counts. Our emergency response team is standing by around the clock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-dark-gray border-construction-orange border-2">
              <CardContent className="p-8 text-center">
                <div className="bg-construction-orange text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-white mb-4">Fast Response</h3>
                <p className="text-gray-300">
                  We guarantee response within 2 hours for emergency calls, often much faster.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-gray border-construction-orange border-2">
              <CardContent className="p-8 text-center">
                <div className="bg-construction-orange text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-white mb-4">Fully Equipped</h3>
                <p className="text-gray-300">
                  Our service trucks carry extensive inventory and all necessary tools for most repairs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-gray border-construction-orange border-2">
              <CardContent className="p-8 text-center">
                <div className="bg-construction-orange text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-white mb-4">Expert Technicians</h3>
                <p className="text-gray-300">
                  Licensed, experienced technicians who can diagnose and fix problems quickly.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="font-work-sans font-bold text-2xl mb-4">Emergency Hotline</h3>
            <a 
              href="tel:+18435551234"
              className="text-4xl font-black text-construction-orange hover:text-construction-yellow transition-colors"
            >
              (843) 555-1234
            </a>
            <p className="text-gray-300 mt-2">Available 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-work-sans font-bold text-4xl md:text-5xl text-navy-blue mb-6">
            Ready to Get <span className="text-construction-orange">Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a free consultation and quote on your pump system needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="construction" size="xl">
              <Phone className="w-6 h-6 mr-3" />
              Call (843) 555-1234
            </Button>
            <Button variant="outline" size="xl" className="border-2 border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white">
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;