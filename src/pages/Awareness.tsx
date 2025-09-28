import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Apple, 
  Heart, 
  Shield, 
  Brain, 
  Eye,
  Clock,
  Users
} from "lucide-react";

const Awareness = () => {
  const categories = [
    {
      name: "General Health",
      icon: Heart,
      color: "bg-red-100 text-red-600",
      articles: 12
    },
    {
      name: "Preventive Care",
      icon: Shield,
      color: "bg-blue-100 text-blue-600",
      articles: 8
    },
    {
      name: "Diet & Fitness",
      icon: Apple,
      color: "bg-green-100 text-green-600",
      articles: 15
    },
    {
      name: "Mental Health",
      icon: Brain,
      color: "bg-purple-100 text-purple-600",
      articles: 6
    }
  ];

  const articles = [
    {
      title: "Understanding Diabetes: Prevention and Management",
      description: "Learn about diabetes types, symptoms, and effective management strategies for a healthier life.",
      category: "General Health",
      readTime: "5 min read",
      featured: true,
      icon: Activity
    },
    {
      title: "Heart-Healthy Diet: Foods That Love Your Heart",
      description: "Discover foods that support cardiovascular health and reduce the risk of heart disease.",
      category: "Diet & Fitness",
      readTime: "4 min read",
      featured: true,
      icon: Heart
    },
    {
      title: "Mental Health Awareness: Breaking the Stigma",
      description: "Understanding mental health, recognizing signs, and finding support when you need it most.",
      category: "Mental Health",
      readTime: "6 min read",
      featured: false,
      icon: Brain
    },
    {
      title: "Vaccination Schedule for Adults",
      description: "Stay protected with the right vaccines at the right time. Complete adult vaccination guide.",
      category: "Preventive Care",
      readTime: "3 min read",
      featured: false,
      icon: Shield
    },
    {
      title: "Eye Care in the Digital Age",
      description: "Protect your vision from digital strain and maintain healthy eyes in our screen-dominated world.",
      category: "General Health",
      readTime: "4 min read",
      featured: false,
      icon: Eye
    },
    {
      title: "Stress Management Techniques",
      description: "Practical methods to manage stress and improve your overall well-being and quality of life.",
      category: "Mental Health",
      readTime: "5 min read",
      featured: false,
      icon: Brain
    }
  ];

  const healthTips = [
    "Drink at least 8 glasses of water daily",
    "Get 7-9 hours of quality sleep each night",
    "Exercise for at least 30 minutes, 5 days a week",
    "Eat 5 servings of fruits and vegetables daily",
    "Practice deep breathing for stress relief"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-light/10 to-background pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Health Awareness Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with verified health information, prevention tips, and wellness guidance from trusted medical sources.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <Card key={category.name} className="text-center hover:shadow-card transition-shadow cursor-pointer border-0">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.articles} articles</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Articles */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
              <div className="space-y-6">
                {articles.filter(article => article.featured).map((article) => (
                  <Card key={article.title} className="hover:shadow-healthcare transition-shadow cursor-pointer border-0 shadow-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary-light rounded-lg">
                            <article.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                            <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </div>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Articles */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.filter(article => !article.featured).map((article) => (
                  <Card key={article.title} className="hover:shadow-card transition-shadow cursor-pointer border-0">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <article.icon className="h-4 w-4 text-primary" />
                        <Badge variant="outline" className="text-xs">{article.category}</Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </span>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                          Read
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Health Tips */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Heart className="mr-2 h-5 w-5 text-secondary" />
                  Daily Health Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {healthTips.map((tip, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Health Stats */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="mr-2 h-5 w-5 text-accent" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-primary-light/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">25,000+</p>
                  <p className="text-sm text-muted-foreground">People Informed</p>
                </div>
                <div className="text-center p-4 bg-secondary-light/10 rounded-lg">
                  <p className="text-2xl font-bold text-secondary">500+</p>
                  <p className="text-sm text-muted-foreground">Health Articles</p>
                </div>
                <div className="text-center p-4 bg-accent-light/10 rounded-lg">
                  <p className="text-2xl font-bold text-accent">95%</p>
                  <p className="text-sm text-muted-foreground">User Satisfaction</p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Info */}
            <Card className="shadow-card border-0 bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">Emergency Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="text-red-700">National Emergency: <strong>108</strong></p>
                  <p className="text-red-700">Ambulance: <strong>102</strong></p>
                  <p className="text-red-700">Police: <strong>100</strong></p>
                  <p className="text-red-700">Fire: <strong>101</strong></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awareness;