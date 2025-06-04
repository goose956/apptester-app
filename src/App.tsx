import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/lib/auth-context";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topbar";
import { Button } from "@/components/ui/button";
import { useEffect, useState, lazy, Suspense } from "react";
import { analytics } from "@/lib/analytics-tracker";
import { GlobalTimer } from "@/components/global-timer";
import { ErrorBoundary } from "@/components/error-boundary";
import Dashboard from "@/pages/dashboard";
import Chat from "@/pages/chat";
import AIAssistant from "@/pages/ai-assistant";
import CodingAssistant from "@/pages/coding-assistant";
import Projects from "@/pages/projects";
import Files from "@/pages/files";
import TimeTracker from "@/pages/time-tracker";
import Roadmap from "@/pages/roadmap";
import EnhancedRoadmap from "@/pages/enhanced-roadmap";
import EnhancedRoadmapV2 from "@/pages/enhanced-roadmap-v2";
import WorkingRoadmap from "@/pages/working-roadmap";
import ProjectRoadmap from "@/pages/project-roadmap";
import Ideas from "@/pages/ideas";
import Canvas from "@/pages/canvas";
import VibeJobs from "@/pages/vibe-jobs";
import VibeMarketing from "@/pages/VibeMarketing";

import Admin from "@/pages/admin";
import AdminPage from "@/pages/AdminPage";
import ComponentPreview from "@/pages/component-preview";
import ProjectViewer from "@/pages/project-viewer";
import Profile from "@/pages/profile-fixed";
import Gamification from "@/pages/gamification";
import DatabaseTestPage from "@/pages/DatabaseTestPage";
import AdminPrompts from "@/pages/admin-prompts";
import AnalyticsDashboard from "@/pages/AnalyticsDashboard";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import SimpleAnalytics from "@/pages/SimpleAnalytics";
import PageSettings from "@/pages/PageSettings";
import DeploymentPage from "@/pages/DeploymentPage";

// Public pages for non-members
import HomePage from "@/pages/home";
import ContactPage from "@/pages/contact";
import AboutPage from "@/pages/about";
import VibeJobsPublicPage from "@/pages/vibe-jobs-public";

import AcceptInvite from "@/pages/accept-invite";
import Login from "@/pages/login";
import NotFound from "@/pages/not-found";
import TestPage from "@/pages/test-page";


function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return <>{children}</>;
}

// Dynamic component creator for generated pages
function createDynamicComponent(content: string) {
  return function DynamicPage() {
    try {
      // Create a safe evaluation environment
      const componentCode = content
        .replace(/import.*from.*['"]@\/components\/ui\/.*['"];?\n?/g, '')
        .replace(/import.*from.*['"]lucide-react['"];?\n?/g, '')
        .replace(/import.*from.*['"]framer-motion['"];?\n?/g, '')
        .replace(/export default function \w+\(\)/, 'function Component()');
      
      // Simple component renderer for demo - in production you'd want a more secure approach
      return (
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border">
            <div className="text-center text-slate-600 dark:text-slate-300">
              <h2 className="text-xl font-semibold mb-2">Dynamic Page</h2>
              <p>Page content is being processed for safe rendering...</p>
              <div className="mt-4 text-sm bg-slate-50 dark:bg-slate-900 p-4 rounded">
                This feature is under development. The page "{content.match(/function (\w+)/)?.[1] || 'Page'}" has been created successfully.
              </div>
            </div>
          </div>
        </div>
      );
    } catch (error) {
      return (
        <div className="container mx-auto px-4 py-6">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <h2 className="text-red-800 dark:text-red-200 font-semibold">Error Loading Page</h2>
            <p className="text-red-600 dark:text-red-300 mt-2">There was an issue rendering this page.</p>
          </div>
        </div>
      );
    }
  };
}

function AuthenticatedApp() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Fetch dynamic pages from the database
  const { data: codeFiles } = useQuery({
    queryKey: ['/api/code-files'],
    queryFn: async () => {
      const response = await fetch('/api/code-files');
      if (!response.ok) throw new Error('Failed to fetch code files');
      return response.json();
    }
  });

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return 'Dashboard';
      case '/chat': return 'Team Chat';
      case '/ai-assistant': return 'AI Assistant';
      case '/coding-assistant': return 'Coding Assistant';
      case '/projects': return 'Projects';
      case '/roadmap': return 'Roadmap';
      case '/ideas': return 'Ideas';
      case '/files': return 'Files';
      case '/time-tracker': return 'Time Tracker';
      case '/canvas': return 'Canvas';
      case '/admin': return 'Admin';
      case '/profile': return 'Profile & Inbox';
      case '/gamification': return 'Gamification';
      default: return 'vibeflo.io';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <TopBar title={getPageTitle(location)} />
      
      {/* Mobile Header */}
      <header className="lg:hidden bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">vibeflo.io</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      <div className="flex">
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <main className="flex-1 p-3 sm:p-4 lg:p-6 overflow-auto w-full min-w-0">
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/chat" component={Chat} />
            <Route path="/ai-assistant" component={AIAssistant} />
            <Route path="/coding-assistant" component={CodingAssistant} />
            <Route path="/projects" component={Projects} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/enhanced-roadmap" component={EnhancedRoadmap} />
            <Route path="/enhanced-roadmap-v2" component={EnhancedRoadmapV2} />
            <Route path="/projects/:projectId/roadmap" component={Roadmap} />
            <Route path="/projects/:projectId/enhanced-roadmap" component={EnhancedRoadmap} />
            <Route path="/projects/:projectId/enhanced-roadmap-v2" component={EnhancedRoadmapV2} />
            <Route path="/projects/:projectId/working-roadmap" component={WorkingRoadmap} />
            <Route path="/projects/:projectId/project-roadmap" component={ProjectRoadmap} />
            <Route path="/ideas" component={Ideas} />
            <Route path="/projects/:projectId/ideas" component={Ideas} />

            <Route path="/files" component={Files} />
            <Route path="/time-tracker" component={TimeTracker} />
            <Route path="/canvas">
              <ErrorBoundary>
                <Canvas />
              </ErrorBoundary>
            </Route>
            <Route path="/vibe-jobs" component={VibeJobs} />
            <Route path="/vibe-marketing" component={VibeMarketing} />

            <Route path="/analytics-dashboard" component={AnalyticsDashboard} />
            <Route path="/admin" component={Admin} />
            <Route path="/admin-panel" component={AdminPage} />
            <Route path="/admin-login" component={AdminLogin} />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/component-preview" component={ComponentPreview} />
            <Route path="/project-viewer" component={ProjectViewer} />
            <Route path="/profile" component={Profile} />
            <Route path="/gamification" component={Gamification} />
            <Route path="/database-test" component={DatabaseTestPage} />
            <Route path="/admin-prompts" component={AdminPrompts} />
            <Route path="/page-settings" component={PageSettings} />
            <Route path="/deployment" component={DeploymentPage} />
            <Route path="/data-insights-7x9k2m" component={SimpleAnalytics} />
            <Route path="/test-page" component={TestPage} />

            {/* Dynamic routes for generated pages */}
            {codeFiles && codeFiles
              .filter((file: any) => file.filename.endsWith('Page.tsx'))
              .map((file: any) => {
                const routeName = file.filename
                  .replace('Page.tsx', '')
                  .toLowerCase()
                  .replace(/([A-Z])/g, '-$1')
                  .replace(/^-/, '');
                
                return (
                  <Route 
                    key={file.id} 
                    path={`/${routeName}`} 
                    component={createDynamicComponent(file.content)} 
                  />
                );
              })}

            <Route path="/accept-invite/:token" component={AcceptInvite} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
      <GlobalTimer />
    </div>
  );
}

// Public navigation component for non-members
function PublicNavigation() {
  const [location, navigate] = useLocation();
  
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-blue-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              vibeflo.io
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                location === "/" 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate("/vibe-jobs")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                location === "/vibe-jobs" 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Vibe Jobs
            </button>
            <button
              onClick={() => navigate("/about")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                location === "/about" 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              About
            </button>
            <button
              onClick={() => navigate("/contact")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                location === "/contact" 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Testing Buttons - Remove these later */}
            <div className="hidden lg:flex items-center space-x-2 px-3 py-1 bg-yellow-100 rounded-lg">
              <span className="text-xs text-yellow-800 font-medium">Testing:</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => navigate("/dashboard")}
                className="text-xs px-2 py-1 h-auto"
              >
                Member View
              </Button>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              Sign Up
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-700">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Public app layout for non-members
function PublicApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
      <PublicNavigation />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/vibe-jobs" component={VibeJobsPublicPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function Router() {
  const { isAuthenticated, isLoading } = useAuth();
  const [location] = useLocation();
  
  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/admin-dashboard" component={AdminDashboard} />
      <Route path="/accept-invite/:token" component={AcceptInvite} />
      
      {/* If user is authenticated, show member dashboard with testing button */}
      {isAuthenticated ? (
        <Route>
          <div className="relative">
            {/* Testing Button for Non-Member View - Remove this later */}
            <div className="fixed top-4 right-4 z-50 bg-yellow-100 px-3 py-2 rounded-lg shadow-lg">
              <span className="text-xs text-yellow-800 font-medium mr-2">Testing:</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open("/", "_blank")}
                className="text-xs px-2 py-1 h-auto"
              >
                View Public Site
              </Button>
            </div>
            <AuthenticatedApp />
          </div>
        </Route>
      ) : (
        <Route>
          <PublicApp />
        </Route>
      )}
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <AuthProvider>
            <Router />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
