import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@healthcareplus.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 1800-123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Healthcare Street, Medical District",
      description: "New Delhi, India 110001"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Online Support",
      description: "Emergency support available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-light/10 to-background pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services? Need help with appointments? We're here to assist you with all your healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-healthcare border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Send className="mr-3 h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please describe your question or concern in detail..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-primary shadow-healthcare">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="shadow-card border-0 hover:shadow-healthcare transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-light rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="shadow-card border-0 bg-gradient-to-r from-primary-light/20 to-accent-light/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Quick Response Promise</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• General inquiries: Within 24 hours</p>
                  <p>• Technical support: Within 4 hours</p>
                  <p>• Emergency issues: Immediate response</p>
                  <p>• Appointment queries: Within 2 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="shadow-card border-0">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">Frequently Asked Questions</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Find quick answers to common questions about our services
                </p>
                <Button variant="outline" className="w-full">
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12">
          <Card className="shadow-healthcare border-0 bg-red-50 border-red-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-red-800 mb-2">Medical Emergency?</h3>
              <p className="text-red-700 mb-4">
                For immediate medical assistance, don't wait for our response. Call emergency services.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-red-800">108</p>
                  <p className="text-xs text-red-600">National Emergency</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-800">102</p>
                  <p className="text-xs text-red-600">Ambulance</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-800">100</p>
                  <p className="text-xs text-red-600">Police</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-800">101</p>
                  <p className="text-xs text-red-600">Fire Service</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;