import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Users, Briefcase, MessageSquare, TrendingUp, Shield, Zap, Send, Code2, Rocket, Timer, Star, ArrowRight, Globe, Database, Palette, BarChart3, DollarSign } from "lucide-react";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 dark:from-blue-600/10 dark:to-cyan-600/10"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center mb-6">
              <Badge className="px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 text-blue-800 dark:text-blue-200 hover:from-blue-200 hover:to-cyan-200 dark:hover:from-blue-800 dark:hover:to-cyan-800 transition-all duration-300 shadow-lg hover:shadow-xl border-0 text-sm font-medium">
                <Rocket className="w-4 h-4 mr-2" />
                Code • Build • Deploy
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">
                vibeflo.io
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              From idea to your first customer on one platform. Build, market, and manage your projects with AI-powered 
              vibe coding and vibe marketing tools - no experience needed.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group border-0"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Start Building Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 px-10 py-5 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Globe className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </Link>
          </div>

          {/* Hero Stats with Analytics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Timer className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">2.5x</div>
                  <div className="text-green-600 text-sm font-medium">↑ 24% faster</div>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Development Speed</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">Hours, not days or weeks</div>
              
              {/* Mini Chart */}
              <div className="mt-4 flex items-end space-x-1 h-8">
                {[40, 65, 45, 80, 60, 95, 85].map((height, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-gradient-to-t from-green-400 to-green-500 rounded-sm opacity-70 hover:opacity-90 transition-opacity"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">Free</div>
                  <div className="text-blue-600 text-sm font-medium">Get Started</div>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Forever Tier</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">Build and deploy instantly</div>
              
              {/* Mini Progress Ring */}
              <div className="mt-4 flex items-center justify-center">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-300 dark:text-gray-600"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-blue-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="100, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-blue-600">100%</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">Zero</div>
                  <div className="text-purple-600 text-sm font-medium">Required</div>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Coding Experience</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">AI handles the complexity</div>
              
              {/* Skill Bars */}
              <div className="mt-4 space-y-2">
                {[
                  { label: "AI", width: 100 },
                  { label: "You", width: 30 },
                  { label: "Code", width: 0 }
                ].map((skill, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="text-xs text-gray-500 w-6">{skill.label}</div>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.width}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose vibeflo.io?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The complete vibe project management platform with AI-powered tools for vibe coding, vibe marketing, and everything you need from idea to your first customer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow group-hover:animate-pulse">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  AI-Powered Vibe Coding
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Build full-stack applications with intelligent vibe coding that understands your vision
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">AI code generation</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Smart auto-completion</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Instant deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-800 dark:to-purple-900/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow group-hover:animate-pulse">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  AI-Powered Vibe Marketing
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Reach your first customers with intelligent marketing tools that work around the clock
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">AI content creation</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Automated campaigns</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Customer insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-green-50/30 dark:from-gray-800 dark:to-green-900/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow group-hover:animate-pulse">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Complete Project Management
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  From initial idea to customer acquisition - manage every aspect of your project lifecycle
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Idea validation</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Roadmap planning</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Launch tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-800 dark:to-orange-900/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow group-hover:animate-pulse">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Software Roadmaps
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Create comprehensive project roadmaps and track progress with intelligent planning tools
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Milestone tracking</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Timeline visualization</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Progress analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-800 dark:to-indigo-900/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-violet-400/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow group-hover:animate-pulse">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Shared Project Collaboration
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Work together on projects with real-time collaboration and team management features
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Team workspaces</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Live editing</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Version control</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-800 dark:to-emerald-900/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow group-hover:animate-pulse">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Affordable & Free Tier
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  The cheapest vibe coding platform with a generous free tier to get you started
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Free starter projects</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">Transparent pricing</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">No hidden fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speed Challenge Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 bg-white dark:bg-gray-700">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Fastest App Development, Guaranteed
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Think you know a platform that can build and deploy full-stack applications faster than vibeflo.io? 
              Our AI-powered vibe coding gets you from concept to live app in record time.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 mb-6">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                Challenge accepted! If you believe another platform can out-code vibeflo.io in speed, 
                let's put it to the test. Same app idea, head-to-head development race.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                <Send className="w-4 h-4 mr-2" />
                Take the Challenge
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Transform your ideas into reality with AI-powered vibe coding and vibe marketing. From concept to your first customer - all on one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Free Project
            </Button>
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}