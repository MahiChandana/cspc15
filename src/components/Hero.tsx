import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Healthcare professionals and digital health services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Smart Health
            <span className="block text-accent-light">Companion</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Awareness, Access, Appointments. 
            <span className="block mt-2">Get verified health information, find nearby healthcare facilities, and book appointments seamlessly.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-healthcare">
              <Link to="/appointment">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/awareness">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Health Awareness</h3>
                <p className="text-sm opacity-90">Verified medical information</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Easy Booking</h3>
                <p className="text-sm opacity-90">Find & book appointments</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm opacity-90">24/7 health support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;