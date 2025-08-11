import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden">
                <img
                  src="/src/assets/Pump-and-Control-Main-Logo.png"
                  alt="Palmetto Pump & Control Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-work-sans font-bold text-xl">
                  Palmetto Pump & Control
                </h3>
                {/* <p className="text-sm text-gray-300">LLC</p> */}
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted local experts for pump and control system
              installation, maintenance, and repair services throughout South
              Carolina.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-6 h-6 bg-construction-orange rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <span>Licensed, Bonded & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-6 h-6 bg-construction-orange rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-6 h-6 bg-construction-orange rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-work-sans font-bold text-lg mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-300 hover:text-construction-orange transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-construction-orange transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block text-gray-300 hover:text-construction-orange transition-colors"
              >
                Services
              </Link>
              <Link
                to="/service-areas"
                className="block text-gray-300 hover:text-construction-orange transition-colors"
              >
                Service Areas
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-construction-orange transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-work-sans font-bold text-lg mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+18035321001"
                className="flex items-center space-x-3 text-gray-300 hover:text-construction-orange transition-colors"
              >
                <Phone className="w-5 h-5" />
                <div>
                  <p className="font-medium">(803) 532-1001</p>
                  <p className="text-xs">24/7 Emergency</p>
                </div>
              </a>
              <a
                href="mailto:info@palmettopump.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-construction-orange transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@palmettopump.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p>123 Industrial Way</p>
                  <p>Charleston, SC 29401</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="font-medium">Mon-Fri: 7AM-6PM</p>
                  <p className="text-xs">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Palmetto Pump & Control, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
