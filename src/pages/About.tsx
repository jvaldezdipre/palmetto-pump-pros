import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import serviceTruck from "@/assets/service-truck.jpg";
import maintenanceWork from "@/assets/maintenance-work.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-work-sans font-black text-5xl md:text-6xl mb-6">
              About <span className="text-construction-orange">Palmetto Pump & Control</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
              Two decades of trusted service, local expertise, and unwavering commitment to keeping South Carolina's water systems running
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-work-sans font-bold text-4xl text-navy-blue mb-6">
                Built on <span className="text-construction-orange">Hard Work</span> & Integrity
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2002, Palmetto Pump & Control started with a simple mission: provide reliable, 
                honest pump and control system services to our local South Carolina communities. What began 
                as a small operation has grown into the region's most trusted pump service company.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our founder, a licensed engineer with over 25 years in the water industry, saw the need for 
                a local company that truly understood the unique challenges of our coastal environment. 
                From saltwater corrosion to hurricane preparedness, we know what South Carolina systems face.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we're proud to serve municipalities, industrial facilities, property managers, and 
                homeowners throughout the Lowcountry and beyond. Our reputation is built on showing up when 
                we say we will, doing the job right the first time, and standing behind our work.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-black text-construction-orange mb-2">2002</div>
                  <p className="text-sm font-medium text-muted-foreground">Founded</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-black text-construction-orange mb-2">500+</div>
                  <p className="text-sm font-medium text-muted-foreground">Systems Serviced</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={serviceTruck} 
                alt="Our service truck ready for work" 
                className="rounded-lg shadow-strong"
              />
              <div className="absolute -bottom-6 -right-6 bg-construction-orange text-white p-6 rounded-lg shadow-strong">
                <p className="font-bold text-lg">Always Ready</p>
                <p className="font-black text-xl">To Serve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-work-sans font-bold text-4xl md:text-5xl text-navy-blue mb-6">
              Our <span className="text-construction-orange">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from emergency calls to major installations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:border-construction-orange transition-colors">
              <CardContent className="p-8">
                <div className="bg-navy-blue text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Reliability</h3>
                <p className="text-muted-foreground">
                  When we say we'll be there, we show up. When we promise a solution, we deliver. 
                  Your trust is our most valuable asset.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-construction-orange transition-colors">
              <CardContent className="p-8">
                <div className="bg-navy-blue text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Quality</h3>
                <p className="text-muted-foreground">
                  We use only the best materials and equipment. Our workmanship meets the highest 
                  standards because your systems deserve nothing less.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-construction-orange transition-colors">
              <CardContent className="p-8">
                <div className="bg-navy-blue text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Service</h3>
                <p className="text-muted-foreground">
                  Every customer matters, from the largest municipality to the smallest facility. 
                  We treat your problems like our own.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-construction-orange transition-colors">
              <CardContent className="p-8">
                <div className="bg-navy-blue text-white p-4 rounded-full w-fit mx-auto mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">Responsiveness</h3>
                <p className="text-muted-foreground">
                  Pump problems don't wait for business hours. Neither do we. Our emergency 
                  response team is available 24/7.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={maintenanceWork} 
                alt="Our skilled technician at work" 
                className="rounded-lg shadow-strong"
              />
              <div className="absolute -top-6 -left-6 bg-navy-blue text-white p-6 rounded-lg shadow-strong">
                <p className="font-bold text-lg">Licensed &</p>
                <p className="font-black text-xl">Certified Team</p>
              </div>
            </div>
            
            <div>
              <h2 className="font-work-sans font-bold text-4xl text-navy-blue mb-6">
                <span className="text-construction-orange">Experienced</span> Professionals
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our team consists of licensed technicians, certified electricians, and experienced 
                mechanics who bring decades of combined experience to every job. We invest heavily 
                in ongoing training to stay current with the latest technologies and techniques.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-construction-orange flex-shrink-0" />
                  <span className="text-muted-foreground">Licensed Professional Engineers on staff</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-construction-orange flex-shrink-0" />
                  <span className="text-muted-foreground">Certified electricians and controls specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-construction-orange flex-shrink-0" />
                  <span className="text-muted-foreground">OSHA safety trained and compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-construction-orange flex-shrink-0" />
                  <span className="text-muted-foreground">Manufacturer certified on major pump brands</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-construction-orange flex-shrink-0" />
                  <span className="text-muted-foreground">Drug-free workplace program</span>
                </div>
              </div>

              <div className="bg-construction-orange text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Fully Licensed, Bonded & Insured</h3>
                <p className="text-sm">
                  Your peace of mind is important to us. We carry full liability insurance 
                  and are bonded to protect our customers on every job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-work-sans font-bold text-4xl md:text-5xl mb-6">
            Ready to Experience the <span className="text-construction-orange">Palmetto Difference?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied customers who trust us with their pump and control systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+18435551234"
              className="bg-construction-orange hover:bg-construction-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Call (843) 555-1234
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-blue font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;