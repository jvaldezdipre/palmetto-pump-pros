import { MapPin, CheckCircle, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServiceAreas = () => {
  const counties = [
    {
      name: "Charleston County",
      cities: [
        "Charleston",
        "Mount Pleasant",
        "North Charleston",
        "Summerville",
        "Goose Creek",
        "Hanahan",
      ],
      description: "Our home base with the fastest response times",
    },
    {
      name: "Berkeley County",
      cities: [
        "Moncks Corner",
        "Summerville",
        "Hanahan",
        "Goose Creek",
        "St. Stephen",
      ],
      description: "Full service coverage throughout the county",
    },
    {
      name: "Dorchester County",
      cities: ["Summerville", "North Charleston", "St. George", "Harleyville"],
      description: "Comprehensive pump services for all facilities",
    },
    {
      name: "Colleton County",
      cities: ["Walterboro", "Edisto Beach", "Cottageville", "Ruffin"],
      description: "Municipal and industrial pump specialists",
    },
    {
      name: "Beaufort County",
      cities: ["Beaufort", "Hilton Head", "Bluffton", "Port Royal"],
      description: "Coastal pump systems and saltwater applications",
    },
    {
      name: "Jasper County",
      cities: ["Ridgeland", "Hardeeville", "Yemassee"],
      description: "Industrial and municipal service coverage",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-work-sans font-black text-5xl md:text-6xl mb-6">
              <span className="text-construction-orange">Service Areas</span>{" "}
              Across South Carolina
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
              Providing reliable pump and control system services throughout the
              Lowcountry and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-work-sans font-bold text-4xl text-navy-blue mb-6">
              <span className="text-construction-orange">Local</span> Coverage
              You Can Count On
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With our Charleston base and mobile service fleet, we provide fast
              response times throughout the region
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-muted rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-construction-orange mx-auto mb-4" />
                  <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-2">
                    Interactive Service Map
                  </h3>
                  <p className="text-muted-foreground">
                    Our service area covers over 6 counties throughout South
                    Carolina
                  </p>
                </div>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="space-y-6">
              <Card className="border-l-4 border-construction-orange">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-construction-orange" />
                    <h3 className="font-bold text-lg text-navy-blue">
                      Response Times
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Charleston County: 30-60 minutes</li>
                    <li>• Berkeley County: 45-90 minutes</li>
                    <li>• Dorchester County: 45-90 minutes</li>
                    <li>• Other areas: 90-120 minutes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-construction-orange">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-construction-orange" />
                    <h3 className="font-bold text-lg text-navy-blue">
                      Service Guarantee
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• 24/7 emergency response</li>
                    <li>• Licensed in all service areas</li>
                    <li>• Fully insured operations</li>
                    <li>• Local parts inventory</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-construction-orange">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="w-6 h-6 text-construction-orange" />
                    <h3 className="font-bold text-lg text-navy-blue">
                      Contact Info
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">Emergency Hotline:</p>
                    <a
                      href="tel:+18035321001"
                      className="text-construction-orange font-bold text-lg"
                    >
                      (803) 532-1001
                    </a>
                    <p className="text-muted-foreground">Available 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Counties Served */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-work-sans font-bold text-4xl text-navy-blue mb-6">
              Counties &{" "}
              <span className="text-construction-orange">Cities</span> We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive pump services for municipalities, facilities, and
              businesses throughout the region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {counties.map((county, index) => (
              <Card
                key={index}
                className="hover:shadow-strong transition-shadow border-2 hover:border-construction-orange"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-navy-blue text-white p-2 rounded-full">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="font-work-sans font-bold text-xl text-navy-blue">
                      {county.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm">
                    {county.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-navy-blue">
                      Cities & Towns:
                    </h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      {county.cities.map((city, cityIndex) => (
                        <div
                          key={cityIndex}
                          className="flex items-center space-x-1"
                        >
                          <CheckCircle className="w-3 h-3 text-construction-orange flex-shrink-0" />
                          <span>{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types by Area */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-work-sans font-bold text-4xl text-navy-blue mb-6">
              <span className="text-construction-orange">Specialized</span>{" "}
              Services by Region
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the unique challenges in different areas and tailor
              our services accordingly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-construction-orange transition-colors">
              <CardContent className="p-8">
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">
                  Coastal Areas
                </h3>
                <p className="text-muted-foreground mb-6">
                  Specialized in saltwater applications and corrosion-resistant
                  systems
                </p>
                <ul className="space-y-2 text-sm text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Saltwater pump systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Corrosion protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Hurricane preparedness</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-construction-orange transition-colors">
              <CardContent className="p-8">
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">
                  Municipal
                </h3>
                <p className="text-muted-foreground mb-6">
                  Complete solutions for city and county water/wastewater
                  systems
                </p>
                <ul className="space-y-2 text-sm text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Lift station maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Treatment plant pumps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>SCADA integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-construction-orange transition-colors">
              <CardContent className="p-8">
                <h3 className="font-work-sans font-bold text-xl text-navy-blue mb-4">
                  Industrial
                </h3>
                <p className="text-muted-foreground mb-6">
                  Heavy-duty solutions for manufacturing and processing
                  facilities
                </p>
                <ul className="space-y-2 text-sm text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Process pumps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Chemical handling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-construction-orange" />
                    <span>Custom automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-work-sans font-bold text-4xl md:text-5xl mb-6">
            Serving Your{" "}
            <span className="text-construction-orange">Community</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't see your area listed? Contact us - we may still be able to
            help with your pump service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="construction" size="xl">
              <Phone className="w-6 h-6 mr-3" />
              Call (803) 532-1001
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white text-white bg-transparent hover:bg-white hover:text-navy-blue"
            >
              Check Service Availability
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;
