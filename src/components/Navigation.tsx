import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/service-areas", label: "Service Areas" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background border-b-2 border-construction-orange sticky top-0 z-50 shadow-hard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-accent rounded-lg p-2">
              <div className="w-8 h-8 bg-navy-blue rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-work-sans font-bold text-lg text-navy-blue">
                Palmetto Pump & Control
              </h1>
              <p className="text-xs text-muted-foreground font-medium">LLC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-work-sans font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-construction-orange border-b-2 border-construction-orange pb-1"
                    : "text-foreground hover:text-construction-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-xs text-muted-foreground font-medium">24/7 Emergency</p>
              <a
                href="tel:+18435551234"
                className="font-work-sans font-bold text-navy-blue hover:text-construction-orange transition-colors"
              >
                (843) 555-1234
              </a>
            </div>
            <Button variant="default" size="sm" className="bg-gradient-accent text-white font-bold">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-navy-blue hover:bg-muted"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-work-sans font-medium px-2 py-2 rounded transition-colors ${
                    isActive(link.path)
                      ? "text-construction-orange bg-muted"
                      : "text-foreground hover:text-construction-orange hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground font-medium mb-1">24/7 Emergency</p>
                <a
                  href="tel:+18435551234"
                  className="font-work-sans font-bold text-navy-blue block mb-2"
                >
                  (843) 555-1234
                </a>
                <Button className="w-full bg-gradient-accent text-white font-bold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;