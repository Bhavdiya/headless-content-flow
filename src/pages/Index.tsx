
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Database, 
  Layers, 
  Zap, 
  Shield, 
  Globe, 
  Code,
  Smartphone,
  Monitor
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Database,
      title: "API-First Architecture",
      description: "RESTful and GraphQL APIs for seamless content delivery across all platforms"
    },
    {
      icon: Shield,
      title: "Role-Based Access Control",
      description: "Secure authentication with granular permissions for content creators and administrators"
    },
    {
      icon: Layers,
      title: "Flexible Content Modeling",
      description: "Dynamic content types and relationships that adapt to your business needs"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant content synchronization across all connected applications and devices"
    },
    {
      icon: Globe,
      title: "Multi-Platform Delivery",
      description: "Deliver content to websites, mobile apps, IoT devices, and digital displays"
    },
    {
      icon: Code,
      title: "Developer-Friendly",
      description: "Comprehensive API documentation and SDKs for rapid integration"
    }
  ];

  const platforms = [
    { icon: Monitor, name: "Web Applications", color: "bg-blue-100 text-blue-700" },
    { icon: Smartphone, name: "Mobile Apps", color: "bg-green-100 text-green-700" },
    { icon: Globe, name: "Digital Displays", color: "bg-purple-100 text-purple-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
              Headless CMS Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Content Management
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Without Boundaries
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Build, manage, and deliver content across all platforms with our scalable headless CMS. 
              Decouple your content from presentation for ultimate flexibility and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/dashboard')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Launch Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate('/api-docs')}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
              >
                View API Docs
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Platform Integration */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            One CMS, Multiple Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deliver consistent content experiences across all your digital touchpoints
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <Card key={index} className="text-center border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <platform.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{platform.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Content Management
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and deliver content at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to revolutionize your content strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and content creators who trust our headless CMS 
            for their mission-critical applications.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate('/dashboard')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
