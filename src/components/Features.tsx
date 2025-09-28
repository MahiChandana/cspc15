import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Calendar, 
  Heart, 
  MapPin, 
  MessageCircle, 
  Shield,
  Stethoscope,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Health Awareness",
      description: "Access verified information about diseases, prevention tips, and healthy lifestyle guidance.",
      details: ["Disease information", "Prevention guides", "Diet & fitness tips", "Health screening reminders"],
      link: "/awareness",
      gradient: "from-primary to-accent"
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Find nearby hospitals and PHCs, check availability, and book appointments instantly.",
      details: ["Hospital finder", "Real-time availability", "Easy scheduling", "Appointment reminders"],
      link: "/appointment",
      gradient: "from-secondary to-accent"
    },
    {
      icon: MessageCircle,
      title: "AI Health Assistant",
      description: "Get instant answers to health queries from our intelligent chatbot available 24/7.",
      details: ["Health Q&A", "Symptom checker", "Medicine information", "Emergency guidance"],
      link: "#",
      gradient: "from-accent to-primary"
    }
  ];

  const additionalFeatures = [
    {
      icon: MapPin,
      title: "Nearby Healthcare",
      description: "Locate hospitals, clinics, and PHCs in your area with accurate directions."
    },
    {
      icon: Shield,
      title: "Government Verified",
      description: "Information sourced from official Government of India health datasets."
    },
    {
      icon: Stethoscope,
      title: "Professional Network",
      description: "Connect with verified healthcare professionals and specialists."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join health awareness programs and community wellness initiatives."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for better health management in one intelligent platform
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-healthcare transition-all duration-300 border-0 shadow-card">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to={feature.link}>
                    Explore Feature
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature) => (
            <Card key={feature.title} className="text-center p-6 hover:shadow-card transition-shadow border-0 bg-white/50">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-gradient-primary shadow-healthcare">
            <Link to="/appointment">
              Start Your Health Journey
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;