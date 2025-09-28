import Navigation from "@/components/ui/navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Booking appointments has never been easier. Found a nearby clinic and got an appointment within hours!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "The health awareness articles helped me understand diabetes management better. Very informative!",
      rating: 5
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      text: "The AI assistant answered all my health questions instantly. Great support system!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      
      {/* Testimonials Section */}
      <section className="py-16 bg-primary-light/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied users who trust HealthCare+ for their health needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who have already made their health journey easier and more informed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-healthcare">
              <Link to="/appointment">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your First Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/awareness">
                <Heart className="mr-2 h-5 w-5" />
                Explore Health Tips
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-primary rounded-lg">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">HealthCare+</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Your Smart Health Companion for awareness, access, and appointments.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/features" className="block text-white/70 hover:text-white text-sm">Features</Link>
                <Link to="/appointment" className="block text-white/70 hover:text-white text-sm">Book Appointment</Link>
                <Link to="/awareness" className="block text-white/70 hover:text-white text-sm">Health Awareness</Link>
                <Link to="/about" className="block text-white/70 hover:text-white text-sm">About Us</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/contact" className="block text-white/70 hover:text-white text-sm">Contact Us</Link>
                <a href="#" className="block text-white/70 hover:text-white text-sm">Help Center</a>
                <a href="#" className="block text-white/70 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="block text-white/70 hover:text-white text-sm">Terms of Service</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Emergency</h3>
              <div className="space-y-2 text-sm">
                <p className="text-white/70">National Emergency: <span className="text-white font-medium">108</span></p>
                <p className="text-white/70">Ambulance: <span className="text-white font-medium">102</span></p>
                <p className="text-white/70">Medical Helpline: <span className="text-white font-medium">1075</span></p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70 text-sm">
              © 2024 HealthCare+. All rights reserved. | Data sourced from Government of India health datasets.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
