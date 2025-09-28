import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Database, 
  Heart, 
  Shield, 
  Users, 
  Target,
  Lightbulb,
  Globe
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Medical Advisor",
      description: "15+ years in public health and digital healthcare innovation"
    },
    {
      name: "Rahul Gupta",
      role: "Technology Lead",
      description: "Full-stack developer specializing in healthcare applications"
    },
    {
      name: "Anita Patel",
      role: "UX Designer",
      description: "Passionate about creating accessible healthcare experiences"
    },
    {
      name: "Dr. Vikram Singh",
      role: "Public Health Expert",
      description: "Former WHO consultant with expertise in preventive care"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every feature is designed with patient needs and comfort in mind"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Your health information is protected with enterprise-grade security"
    },
    {
      icon: Database,
      title: "Evidence-Based",
      description: "All information sourced from verified Government of India datasets"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Healthcare access should not be limited by geography or technology"
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "25,000+",
      label: "Users Served"
    },
    {
      icon: Heart,
      number: "10,000+",
      label: "Appointments Booked"
    },
    {
      icon: Award,
      number: "500+",
      label: "Healthcare Partners"
    },
    {
      icon: Target,
      number: "95%",
      label: "User Satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary-light/5 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About HealthCare+
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between healthcare access and awareness through technology, 
            making quality healthcare information and services available to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="shadow-healthcare border-0 bg-gradient-to-r from-primary-light/20 to-accent-light/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-6">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  To democratize healthcare access in India by providing a comprehensive platform that combines 
                  health awareness, easy appointment booking, and AI-powered assistance. We believe that every 
                  individual deserves access to quality healthcare information and services, regardless of their 
                  location or economic status.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center shadow-card border-0 hover:shadow-healthcare transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                HealthCare+ was born from a simple observation: despite India's growing digital infrastructure, 
                millions still struggle to access basic healthcare information and services. Long queues at 
                hospitals, misinformation about health conditions, and lack of awareness about preventive care 
                continue to be major challenges.
              </p>
              <p>
                Our team of healthcare professionals, technologists, and public health experts came together 
                with a shared vision: to create a platform that would make healthcare more accessible, 
                transparent, and user-friendly for every Indian.
              </p>
              <p>
                By leveraging official Government of India health datasets and modern web technologies, 
                we've built a comprehensive solution that addresses the three pillars of healthcare: 
                awareness, access, and assistance.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Government Partnership</h2>
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary-light rounded-lg">
                    <Database className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Verified Data Sources</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      All health information on our platform is sourced from verified Government of India datasets, 
                      ensuring accuracy and reliability.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="mr-2">Ministry of Health</Badge>
                      <Badge variant="outline" className="mr-2">AIIMS Database</Badge>
                      <Badge variant="outline" className="mr-2">WHO India</Badge>
                      <Badge variant="outline">ICMR Guidelines</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.label} className="text-center shadow-card border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{achievement.number}</p>
                  <p className="text-sm text-muted-foreground">{achievement.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="text-center shadow-card border-0 hover:shadow-healthcare transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16">
          <Card className="shadow-healthcare border-0 bg-gradient-to-r from-secondary-light/20 to-primary-light/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Looking Ahead</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                We're continuously working to expand our services, integrate with more healthcare providers, 
                and leverage emerging technologies like AI and machine learning to provide even better 
                healthcare solutions. Our goal is to become India's most trusted healthcare companion, 
                serving millions and saving lives through technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;