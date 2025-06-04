import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, AlertCircle, Rocket, Github, Globe } from "lucide-react";

interface DeploymentStatus {
  appName: string;
  status: "ready" | "deploying" | "deployed" | "error";
  url?: string;
  progress: number;
  logs: string[];
}

const DeploymentPage = () => {
  const [deployments, setDeployments] = useState<DeploymentStatus[]>([
    { appName: "apptester", status: "ready", progress: 0, logs: [] },
    { appName: "celtic", status: "ready", progress: 0, logs: [] },
    { appName: "france", status: "ready", progress: 0, logs: [] }
  ]);

  const [isDeploying, setIsDeploying] = useState(false);

  const deployApp = async (appName: string) => {
    const updateDeployment = (updates: Partial<DeploymentStatus>) => {
      setDeployments(prev => prev.map(d => 
        d.appName === appName ? { ...d, ...updates } : d
      ));
    };

    updateDeployment({ status: "deploying", progress: 10, logs: ["Starting deployment..."] });
    
    try {
      // Step 1: Create GitHub repository
      updateDeployment({ progress: 25, logs: ["Creating GitHub repository..."] });
      const repoResponse = await fetch("/api/deploy/create-repo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appName })
      });
      
      if (!repoResponse.ok) throw new Error("Failed to create repository");
      
      // Step 2: Upload code to GitHub
      updateDeployment({ progress: 50, logs: ["Uploading code to GitHub..."] });
      const uploadResponse = await fetch("/api/deploy/upload-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appName })
      });
      
      if (!uploadResponse.ok) throw new Error("Failed to upload code");
      
      // Step 3: Deploy to Netlify
      updateDeployment({ progress: 75, logs: ["Deploying to Netlify..."] });
      const deployResponse = await fetch("/api/deploy/netlify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ appName })
      });
      
      if (!deployResponse.ok) throw new Error("Failed to deploy to Netlify");
      
      const { url } = await deployResponse.json();
      
      updateDeployment({ 
        status: "deployed", 
        progress: 100, 
        url,
        logs: ["Deployment completed successfully!", `Live at: ${url}`] 
      });
      
    } catch (error) {
      updateDeployment({ 
        status: "error", 
        logs: [`Error: ${error.message}`] 
      });
    }
  };

  const deployAllApps = async () => {
    setIsDeploying(true);
    for (const deployment of deployments) {
      if (deployment.status === "ready") {
        await deployApp(deployment.appName);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Delay between deployments
      }
    }
    setIsDeploying(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ready": return <Circle className="w-5 h-5 text-gray-400" />;
      case "deploying": return <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      case "deployed": return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "error": return <AlertCircle className="w-5 h-5 text-red-500" />;
      default: return <Circle className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready": return "bg-gray-100 text-gray-800";
      case "deploying": return "bg-blue-100 text-blue-800";
      case "deployed": return "bg-green-100 text-green-800";
      case "error": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Rocket className="w-8 h-8 text-blue-600" />
          App Deployment Center
        </h1>
        <p className="text-gray-600 mb-6">
          Deploy your React applications to Netlify with one click. Each app will get its own GitHub repository and live URL.
        </p>
        
        <Button 
          onClick={deployAllApps} 
          disabled={isDeploying}
          className="mb-6"
          size="lg"
        >
          {isDeploying ? "Deploying..." : "Deploy All Apps"}
          <Rocket className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid gap-6">
        {deployments.map((deployment) => (
          <Card key={deployment.appName} className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(deployment.status)}
                  <span className="capitalize">{deployment.appName}</span>
                  <Badge className={getStatusColor(deployment.status)}>
                    {deployment.status}
                  </Badge>
                </div>
                
                <div className="flex gap-2">
                  {deployment.url && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => window.open(deployment.url, "_blank")}
                    >
                      <Globe className="w-4 h-4 mr-1" />
                      Visit
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => deployApp(deployment.appName)}
                    disabled={deployment.status === "deploying" || isDeploying}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Deploy
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              {deployment.status === "deploying" && (
                <div className="mb-4">
                  <Progress value={deployment.progress} className="w-full" />
                  <p className="text-sm text-gray-600 mt-1">{deployment.progress}% complete</p>
                </div>
              )}
              
              {deployment.logs.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium mb-2">Deployment Logs:</h4>
                  <div className="space-y-1">
                    {deployment.logs.map((log, index) => (
                      <p key={index} className="text-sm font-mono text-gray-700">
                        {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              
              {deployment.url && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm font-medium text-green-800">Live URL:</p>
                  <a 
                    href={deployment.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 underline break-all"
                  >
                    {deployment.url}
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeploymentPage;