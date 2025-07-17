
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Database, Mail, Lock, ArrowRight, Shield, Globe, Zap } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    navigate("/dashboard");
  };

  const handleRememberMeChange = (checked: boolean | "indeterminate") => {
    setRememberMe(checked === true);
  };

  const features = [
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Globe, text: "Multi-platform delivery" },
    { icon: Zap, text: "Real-time content sync" }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-gray-900">HeadlessCMS</h1>
                <p className="text-sm text-gray-500">Content Management Platform</p>
              </div>
            </div>
            <Badge className="mb-4 px-3 py-1 bg-blue-100 text-blue-700 border-blue-200">
              Admin Portal
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-600 mt-2">Sign in to your account to continue</p>
          </div>

          {/* Login Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Enter your credentials to access the CMS</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={handleRememberMeChange}
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-sm text-blue-600">
                    Forgot password?
                  </Button>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Sign In
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Need access?{" "}
              <Button variant="link" className="p-0 h-auto text-blue-600">
                Contact your administrator
              </Button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Feature Showcase */}
      <div className="flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-8 text-white relative overflow-hidden">
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-6">
              Powerful Content Management Made Simple
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Manage your content across all platforms with our headless CMS. 
              Built for developers, designed for content creators.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-lg">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-sm text-blue-100">
                <strong>Demo Account:</strong> Use any email and password to explore the interface
              </p>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 right-0 w-16 h-16 bg-white/10 rounded-full transform translate-x-8"></div>
      </div>
    </div>
  );
};

export default Login;
