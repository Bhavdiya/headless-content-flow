
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Globe, 
  Key, 
  Database, 
  Zap,
  Copy,
  ExternalLink,
  CheckCircle
} from "lucide-react";

const ApiDocs = () => {
  const endpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/content",
      description: "Retrieve all content items",
      parameters: ["limit", "offset", "type", "status"],
      response: "Array of content objects"
    },
    {
      method: "GET",
      endpoint: "/api/v1/content/{id}",
      description: "Retrieve a specific content item",
      parameters: ["id"],
      response: "Single content object"
    },
    {
      method: "POST",
      endpoint: "/api/v1/content",
      description: "Create new content",
      parameters: ["title", "body", "type", "status"],
      response: "Created content object"
    },
    {
      method: "PUT",
      endpoint: "/api/v1/content/{id}",
      description: "Update existing content",
      parameters: ["id", "title", "body", "status"],
      response: "Updated content object"
    },
    {
      method: "DELETE",
      endpoint: "/api/v1/content/{id}",
      description: "Delete content item",
      parameters: ["id"],
      response: "Success confirmation"
    }
  ];

  const authenticationMethods = [
    {
      name: "API Key",
      description: "Simple authentication using API keys",
      example: "Authorization: Bearer your-api-key-here"
    },
    {
      name: "JWT Token",
      description: "JSON Web Token authentication",
      example: "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    },
    {
      name: "OAuth 2.0",
      description: "OAuth 2.0 flow for secure third-party access",
      example: "Authorization: Bearer oauth-access-token"
    }
  ];

  const sdks = [
    {
      name: "JavaScript/Node.js",
      description: "Official SDK for JavaScript and Node.js applications",
      install: "npm install @headlesscms/js-sdk",
      github: "https://github.com/headlesscms/js-sdk"
    },
    {
      name: "Python",
      description: "Python SDK for backend and data science applications",
      install: "pip install headlesscms-python",
      github: "https://github.com/headlesscms/python-sdk"
    },
    {
      name: "PHP",
      description: "PHP SDK for WordPress and Laravel integrations",
      install: "composer require headlesscms/php-sdk",
      github: "https://github.com/headlesscms/php-sdk"
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-700 border-green-200';
      case 'POST': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'PUT': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'DELETE': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">API Documentation</h1>
          <p className="text-gray-600 mt-1">Complete guide to integrating with our headless CMS API.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <ExternalLink className="w-4 h-4 mr-2" />
            Postman Collection
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Key className="w-4 h-4 mr-2" />
            Get API Key
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Base URL</p>
                <p className="text-lg font-bold text-gray-900">api.headlesscms.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">API Version</p>
                <p className="text-lg font-bold text-gray-900">v1.2.0</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Rate Limit</p>
                <p className="text-lg font-bold text-gray-900">1000/hour</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Uptime</p>
                <p className="text-lg font-bold text-gray-900">99.9%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="endpoints" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="endpoints">API Endpoints</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="sdks">SDKs & Libraries</TabsTrigger>
          <TabsTrigger value="examples">Code Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="endpoints" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                REST API Endpoints
              </CardTitle>
              <CardDescription>
                Complete list of available API endpoints for content management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={getMethodColor(endpoint.method)}>
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                            {endpoint.endpoint}
                          </code>
                        </div>
                        <p className="text-gray-700 mb-2">{endpoint.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Parameters: {endpoint.parameters.join(', ')}</span>
                          <span>•</span>
                          <span>Returns: {endpoint.response}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="authentication" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5 text-green-600" />
                Authentication Methods
              </CardTitle>
              <CardDescription>
                Secure your API requests with our supported authentication methods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {authenticationMethods.map((auth, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{auth.name}</h3>
                    <p className="text-gray-600 mb-3">{auth.description}</p>
                    <div className="bg-gray-50 border border-gray-200 rounded p-3">
                      <code className="text-sm font-mono text-gray-800">{auth.example}</code>
                      <Button variant="ghost" size="sm" className="ml-2">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sdks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-600" />
                Official SDKs & Libraries
              </CardTitle>
              <CardDescription>
                Get started quickly with our official SDKs and community libraries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {sdks.map((sdk, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{sdk.name}</h3>
                        <p className="text-gray-600 mb-4">{sdk.description}</p>
                        <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-4">
                          <code className="text-sm font-mono text-gray-800">{sdk.install}</code>
                          <Button variant="ghost" size="sm" className="ml-2">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Documentation
                      </Button>
                      <Button variant="outline" size="sm">
                        <Code className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-orange-600" />
                Code Examples
              </CardTitle>
              <CardDescription>
                Ready-to-use code snippets for common API operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Fetch All Content (JavaScript)</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`fetch('https://api.headlesscms.com/v1/content', {
  headers: {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Create Content (Python)</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`import requests

url = "https://api.headlesscms.com/v1/content"
headers = {
    "Authorization": "Bearer your-api-key",
    "Content-Type": "application/json"
}
data = {
    "title": "My New Article",
    "body": "Content goes here...",
    "type": "article",
    "status": "published"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">GraphQL Query</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`query GetContent($limit: Int, $type: String) {
  content(limit: $limit, type: $type) {
    id
    title
    body
    type
    status
    createdAt
    updatedAt
    author {
      name
      email
    }
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApiDocs;
