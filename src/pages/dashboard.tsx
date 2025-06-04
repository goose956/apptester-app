import { useQuery } from '@tanstack/react-query';
import { 
  Users, 
  Clock, 
  MessageCircle, 
  FileText,
  CheckCircle,
  TrendingUp,
  ArrowUpRight,
  BarChart3,
  Target,
  Zap,
  Star,
  Activity,
  Calendar,
  Award
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { ChatInterface } from '@/components/chat-interface';
import { TimeTrackerWidget } from '@/components/time-tracker-widget';
import { FileUpload } from '@/components/file-upload';
import type { Task } from '@shared/schema';

interface DashboardStats {
  activeProjects: number;
  hoursToday: number;
  messages: number;
  filesShared: number;
  unreadMessages: number;
}

export default function Dashboard() {
  const { data: stats } = useQuery<DashboardStats>({
    queryKey: ['/api/dashboard/stats'],
    refetchInterval: 30000,
  });

  const { data: todayTasks = [] } = useQuery<Task[]>({
    queryKey: ['/api/tasks'],
  });

  const statsCards = [
    {
      title: 'Active Projects',
      value: stats?.activeProjects || 0,
      change: '+2 this week',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      trend: 'up',
      progress: 75
    },
    {
      title: 'Hours Today',
      value: stats?.hoursToday || 0,
      change: '85% of goal',
      icon: Clock,
      color: 'text-emerald-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20',
      trend: 'up',
      progress: 85
    },
    {
      title: 'Team Messages',
      value: stats?.messages || 0,
      change: `${stats?.unreadMessages || 0} unread`,
      icon: MessageCircle,
      color: 'text-indigo-600',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20',
      trend: 'up',
      progress: 60
    },
    {
      title: 'Files Shared',
      value: stats?.filesShared || 0,
      change: '+5 today',
      icon: FileText,
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      trend: 'up',
      progress: 90
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400';
      case 'medium':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400';
      case 'low':
        return 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Main Navigation Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* IDEAS Section */}
        <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
          <CardContent className="p-0">
            <div className="relative p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-3">
                  <Star className="w-8 h-8" />
                </div>
                <ArrowUpRight className="w-6 h-6 opacity-70" />
              </div>
              
              <h2 className="text-2xl font-bold mb-3">IDEAS</h2>
              <p className="text-purple-100 mb-6 text-sm leading-relaxed">
                Capture, organize and rate your brilliant project ideas with AI-powered insights.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xs text-purple-200">Active Ideas</div>
                  <div className="text-xl font-bold">12</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-purple-200">AI Rating</div>
                  <div className="text-xl font-bold">8.5/10</div>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-white/20 hover:bg-white/30 backdrop-blur border-0 text-white">
                Explore Ideas
              </Button>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        {/* ROADMAP Section */}
        <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500">
          <CardContent className="p-0">
            <div className="relative p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-3">
                  <Target className="w-8 h-8" />
                </div>
                <ArrowUpRight className="w-6 h-6 opacity-70" />
              </div>
              
              <h2 className="text-2xl font-bold mb-3">ROADMAP</h2>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Plan your project journey with strategic milestones and timeline management.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xs text-blue-200">Milestones</div>
                  <div className="text-xl font-bold">8/12</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-blue-200">Progress</div>
                  <div className="text-xl font-bold">67%</div>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-white/20 hover:bg-white/30 backdrop-blur border-0 text-white">
                View Roadmap
              </Button>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        {/* CODING ASSISTANT Section */}
        <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-emerald-500 via-green-500 to-lime-500">
          <CardContent className="p-0">
            <div className="relative p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-3">
                  <Zap className="w-8 h-8" />
                </div>
                <ArrowUpRight className="w-6 h-6 opacity-70" />
              </div>
              
              <h2 className="text-2xl font-bold mb-3">CODING ASSISTANT</h2>
              <p className="text-emerald-100 mb-6 text-sm leading-relaxed">
                AI-powered code generation, file management, and intelligent development tools.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xs text-emerald-200">Files</div>
                  <div className="text-xl font-bold">47</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-emerald-200">AI Score</div>
                  <div className="text-xl font-bold">9.2/10</div>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-white/20 hover:bg-white/30 backdrop-blur border-0 text-white">
                Code Assistant
              </Button>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chat Section */}
        <div className="lg:col-span-2">
          <ChatInterface />
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Productivity Score */}
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg text-amber-900 dark:text-amber-100">Productivity Score</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-amber-200 text-amber-800">
                  92%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-700 dark:text-amber-300">Weekly Progress</span>
                  <span className="font-semibold text-amber-900 dark:text-amber-100">18/20 goals</span>
                </div>
                <Progress value={90} className="h-3 bg-amber-200" />
                <div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12% from last week</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Tracker */}
          <TimeTrackerWidget />

          {/* File Upload */}
          <FileUpload />

          {/* Enhanced Today's Tasks */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-blue-900 dark:text-blue-100">Today's Tasks</CardTitle>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-100">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayTasks.length === 0 ? (
                <p className="text-sm text-slate-500">No tasks for today</p>
              ) : (
                todayTasks.slice(0, 3).map((task) => (
                  <div key={task.id} className="flex items-center space-x-3">
                    <Checkbox 
                      checked={task.completed}
                      className="w-4 h-4"
                    />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${
                        task.completed ? 'line-through text-slate-500' : 'text-slate-700 dark:text-slate-300'
                      }`}>
                        {task.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        Project Task
                      </p>
                    </div>
                    <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
                      {task.completed ? 'Done' : task.priority}
                    </Badge>
                  </div>
                ))
              )}

              {/* Excel Import */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <Button variant="outline" className="w-full text-sm">
                  <FileText className="w-4 h-4 mr-2 text-green-600" />
                  Import from Excel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
