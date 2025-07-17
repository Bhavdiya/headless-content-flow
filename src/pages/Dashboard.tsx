
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Users, 
  Database, 
  TrendingUp, 
  Globe, 
  Activity,
  Plus,
  Eye,
  Edit,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Total Content", value: "2,847", change: "+12%", icon: FileText, color: "text-blue-600" },
    { title: "Active Users", value: "156", change: "+8%", icon: Users, color: "text-green-600" },
    { title: "API Requests", value: "98.2K", change: "+23%", icon: Database, color: "text-purple-600" },
    { title: "Uptime", value: "99.9%", change: "+0.1%", icon: Activity, color: "text-orange-600" }
  ];

  const recentContent = [
    { title: "Product Launch Blog Post", type: "Article", status: "Published", author: "Sarah Chen", date: "2 hours ago" },
    { title: "Q4 Financial Report", type: "Document", status: "Draft", author: "Mike Johnson", date: "4 hours ago" },
    { title: "New Feature Announcement", type: "Page", status: "Review", author: "Alex Rodriguez", date: "6 hours ago" },
    { title: "Customer Success Story", type: "Case Study", status: "Published", author: "Emily Davis", date: "1 day ago" },
    { title: "API Documentation Update", type: "Documentation", status: "Published", author: "David Kim", date: "2 days ago" }
  ];

  const contentTypes = [
    { name: "Articles", count: 1245, percentage: 44 },
    { name: "Pages", count: 892, percentage: 31 },
    { name: "Products", count: 456, percentage: 16 },
    { name: "Media", count: 254, percentage: 9 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-700';
      case 'Draft': return 'bg-yellow-100 text-yellow-700';
      case 'Review': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your content.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Content
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-green-600 font-medium">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Content */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Recent Content
            </CardTitle>
            <CardDescription>Latest content updates and activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContent.map((content, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{content.title}</h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                      <span>{content.type}</span>
                      <span>•</span>
                      <span>by {content.author}</span>
                      <span>•</span>
                      <span>{content.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(content.status)}>
                      {content.status}
                    </Badge>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Content Types Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Content Distribution
            </CardTitle>
            <CardDescription>Breakdown by content type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contentTypes.map((type, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{type.name}</span>
                    <span className="text-gray-600">{type.count}</span>
                  </div>
                  <Progress value={type.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-purple-600" />
            Quick Actions
          </CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Plus className="w-5 h-5" />
              New Article
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <FileText className="w-5 h-5" />
              New Page
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Users className="w-5 h-5" />
              Manage Users
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Database className="w-5 h-5" />
              View API
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Post
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Activity className="w-5 h-5" />
              Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
