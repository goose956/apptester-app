import React, { useState } from 'react';

// Simple Router Component
function Router() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Navigation Header */}
      <header style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        color: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>AppTester - vibeflo.io</h1>
          <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { key: 'home', label: 'Home' },
              { key: 'dashboard', label: 'Dashboard' },
              { key: 'projects', label: 'Projects' },
              { key: 'analytics', label: 'Analytics' },
              { key: 'contact', label: 'Contact' }
            ].map(page => (
              <button 
                key={page.key}
                onClick={() => navigate(page.key)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: currentPage === page.key ? 'rgba(255,255,255,0.2)' : 'transparent',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: currentPage === page.key ? 'bold' : 'normal'
                }}
              >
                {page.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'dashboard' && <DashboardPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'analytics' && <AnalyticsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
    </div>
  );
}

// Home Page Component
function HomePage() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        borderRadius: '12px',
        marginBottom: '3rem'
      }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.875rem',
          marginBottom: '1.5rem'
        }}>
          🚀 Code • Build • Deploy
        </div>
        
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          margin: '0 0 1rem 0',
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Welcome to vibeflo.io
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#64748b',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          From idea to your first customer on one platform. Build, market, and manage your projects with AI-powered tools.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}>
            Start Building Now
          </button>
          
          <button 
            onClick={() => setClickCount(clickCount + 1)}
            style={{
              padding: '1rem 2rem',
              background: 'white',
              color: '#3b82f6',
              border: '2px solid #3b82f6',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Interactive Test ({clickCount})
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: '#1e293b' }}>
          Platform Features
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>
              AI-Powered Development
            </h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Build applications with intelligent code generation and automated deployment workflows.
            </p>
          </div>
          
          <div style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>
              Analytics & Insights
            </h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Track project performance and user engagement with comprehensive analytics dashboard.
            </p>
          </div>
          
          <div style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>
              One-Click Deployment
            </h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Deploy your applications instantly to production with automated CI/CD pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section style={{
        padding: '2rem',
        backgroundColor: '#dcfce7',
        borderRadius: '12px',
        border: '1px solid #bbf7d0'
      }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#166534' }}>
          ✅ Application Status
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>✅ React Frontend Active</div>
          <div>✅ TypeScript Support</div>
          <div>✅ State Management</div>
          <div>✅ Client-side Routing</div>
          <div>✅ Interactive Components</div>
          <div>✅ Production Ready</div>
        </div>
      </section>
    </div>
  );
}

// Dashboard Page Component
function DashboardPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Build React frontend', completed: true },
    { id: 2, text: 'Deploy to production', completed: true },
    { id: 3, text: 'Add analytics tracking', completed: false },
    { id: 4, text: 'Implement user feedback', completed: false }
  ]);
  
  const [newTask, setNewTask] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    setTasks([...tasks, {
      id: Date.now(),
      text: newTask,
      completed: false
    }]);
    setNewTask('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const stats = {
    activeProjects: 3,
    completedTasks: tasks.filter(t => t.completed).length,
    totalTasks: tasks.length,
    hoursToday: 6.5
  };

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#1e293b' }}>
        Project Dashboard
      </h2>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Active Projects</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', margin: 0 }}>{stats.activeProjects}</p>
        </div>
        
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Task Progress</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', margin: 0 }}>
            {stats.completedTasks}/{stats.totalTasks}
          </p>
        </div>
        
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Hours Today</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', margin: 0 }}>{stats.hoursToday}</p>
        </div>
      </div>

      {/* Task Management */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1e293b' }}>Task Management</h3>
        
        <form onSubmit={addTask} style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            style={{
              flex: 1,
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '1rem'
            }}
          />
          <button type="submit" style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Add Task
          </button>
        </form>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {tasks.map(task => (
            <div key={task.id} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: task.completed ? '#f0fdf4' : '#f8fafc',
              borderRadius: '6px',
              border: '1px solid #e2e8f0'
            }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={{ marginRight: '1rem' }}
              />
              <span style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#6b7280' : '#1e293b',
                flex: 1
              }}>
                {task.text}
              </span>
              <span style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: task.completed ? '#10b981' : '#f59e0b',
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.75rem'
              }}>
                {task.completed ? 'Done' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Projects Page Component
function ProjectsPage() {
  const [projects] = useState([
    {
      id: 1,
      name: 'E-commerce Platform',
      status: 'Active',
      progress: 75,
      tech: ['React', 'Node.js', 'MongoDB'],
      deployed: true
    },
    {
      id: 2,
      name: 'Analytics Dashboard',
      status: 'In Development',
      progress: 45,
      tech: ['TypeScript', 'PostgreSQL', 'Charts.js'],
      deployed: false
    },
    {
      id: 3,
      name: 'Mobile App Backend',
      status: 'Planning',
      progress: 15,
      tech: ['Express', 'JWT', 'Redis'],
      deployed: false
    }
  ]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#1e293b', margin: 0 }}>My Projects</h2>
        <button style={{
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          + New Project
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '1.5rem'
      }}>
        {projects.map(project => (
          <div key={project.id} style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>
                {project.name}
              </h3>
              <span style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: project.status === 'Active' ? '#10b981' : 
                                project.status === 'In Development' ? '#f59e0b' : '#64748b',
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.75rem'
              }}>
                {project.status}
              </span>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Progress</span>
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{project.progress}%</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#e2e8f0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${project.progress}%`,
                  height: '100%',
                  backgroundColor: '#3b82f6',
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Technologies:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map(tech => (
                  <span key={tech} style={{
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#f1f5f9',
                    color: '#475569',
                    borderRadius: '4px',
                    fontSize: '0.75rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{
                flex: 1,
                padding: '0.5rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                View Details
              </button>
              {project.deployed && (
                <button style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  🚀 Live
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Project Stats */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1e293b' }}>Project Overview</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', margin: 0 }}>{projects.length}</p>
            <p style={{ color: '#64748b', margin: 0 }}>Total Projects</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', margin: 0 }}>
              {projects.filter(p => p.deployed).length}
            </p>
            <p style={{ color: '#64748b', margin: 0 }}>Deployed</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', margin: 0 }}>
              {Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / projects.length)}%
            </p>
            <p style={{ color: '#64748b', margin: 0 }}>Avg Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Analytics Page Component
function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d');
  const [activeMetric, setActiveMetric] = useState('users');

  // Simulated analytics data
  const analyticsData = {
    users: {
      current: 1247,
      previous: 1156,
      growth: 7.9,
      chartData: [820, 932, 901, 934, 1290, 1330, 1320]
    },
    pageviews: {
      current: 8936,
      previous: 7892,
      growth: 13.2,
      chartData: [5400, 6200, 5900, 6800, 7100, 8200, 8900]
    },
    projects: {
      current: 156,
      previous: 142,
      growth: 9.9,
      chartData: [120, 125, 132, 138, 145, 151, 156]
    },
    revenue: {
      current: 12847,
      previous: 11234,
      growth: 14.4,
      chartData: [8900, 9200, 9800, 10400, 11200, 12100, 12847]
    }
  };

  const metrics = [
    { key: 'users', label: 'Active Users', icon: '👥', color: '#3b82f6' },
    { key: 'pageviews', label: 'Page Views', icon: '📊', color: '#10b981' },
    { key: 'projects', label: 'Projects Created', icon: '🚀', color: '#f59e0b' },
    { key: 'revenue', label: 'Revenue ($)', icon: '💰', color: '#8b5cf6' }
  ];

  const currentData = analyticsData[activeMetric as keyof typeof analyticsData];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#1e293b', margin: 0 }}>Analytics Dashboard</h2>
        <select 
          value={timeRange} 
          onChange={(e) => setTimeRange(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            backgroundColor: 'white'
          }}
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 3 months</option>
        </select>
      </div>

      {/* Metric Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {metrics.map(metric => {
          const data = analyticsData[metric.key as keyof typeof analyticsData];
          const isActive = activeMetric === metric.key;
          
          return (
            <div 
              key={metric.key}
              onClick={() => setActiveMetric(metric.key)}
              style={{
                padding: '1.5rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: isActive ? `0 4px 12px ${metric.color}20` : '0 2px 4px rgba(0,0,0,0.1)',
                border: isActive ? `2px solid ${metric.color}` : '1px solid #e2e8f0',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0 0 0.5rem 0' }}>{metric.label}</p>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: metric.color, margin: 0 }}>
                    {metric.key === 'revenue' ? `$${data.current.toLocaleString()}` : data.current.toLocaleString()}
                  </p>
                </div>
                <span style={{ fontSize: '1.5rem' }}>{metric.icon}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  padding: '0.25rem 0.5rem',
                  backgroundColor: data.growth > 0 ? '#dcfce7' : '#fee2e2',
                  color: data.growth > 0 ? '#166534' : '#dc2626',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>
                  {data.growth > 0 ? '+' : ''}{data.growth}%
                </span>
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>vs last period</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0',
        marginBottom: '2rem'
      }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1e293b' }}>
          {metrics.find(m => m.key === activeMetric)?.label} Trend
        </h3>
        
        {/* Simple Chart Visualization */}
        <div style={{ height: '200px', display: 'flex', alignItems: 'end', gap: '8px', padding: '1rem 0' }}>
          {currentData.chartData.map((value, index) => {
            const maxValue = Math.max(...currentData.chartData);
            const height = (value / maxValue) * 150;
            const color = metrics.find(m => m.key === activeMetric)?.color;
            
            return (
              <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '100%',
                  height: `${height}px`,
                  backgroundColor: color,
                  borderRadius: '4px 4px 0 0',
                  marginBottom: '0.5rem',
                  opacity: 0.8
                }}></div>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  Day {index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Performing Content */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1e293b' }}>Top Performing Pages</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { page: '/dashboard', views: 2847, growth: 12.3 },
            { page: '/projects', views: 1923, growth: 8.7 },
            { page: '/analytics', views: 1456, growth: 15.2 },
            { page: '/home', views: 1234, growth: 5.4 },
            { page: '/contact', views: 892, growth: -2.1 }
          ].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0'
            }}>
              <div>
                <p style={{ fontWeight: 'bold', color: '#1e293b', margin: 0 }}>{item.page}</p>
                <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>{item.views} views</p>
              </div>
              <span style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: item.growth > 0 ? '#dcfce7' : '#fee2e2',
                color: item.growth > 0 ? '#166534' : '#dc2626',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}>
                {item.growth > 0 ? '+' : ''}{item.growth}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#1e293b' }}>Contact Us</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
        {/* Contact Form */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1e293b' }}>Send us a message</h3>
          
          {submitted && (
            <div style={{
              padding: '1rem',
              backgroundColor: '#dcfce7',
              color: '#166534',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              border: '1px solid #bbf7d0'
            }}>
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: 'bold' }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: 'bold' }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: 'bold' }}>
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="feature">Feature Request</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: 'bold' }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button type="submit" style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '1rem'
            }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0',
            marginBottom: '2rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1e293b' }}>Get in touch</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  📧
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#1e293b' }}>Email</h4>
                  <p style={{ margin: 0, color: '#64748b' }}>support@vibeflo.io</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#10b981',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  💬
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#1e293b' }}>Live Chat</h4>
                  <p style={{ margin: 0, color: '#64748b' }}>Available 24/7</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#f59e0b',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  📱
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#1e293b' }}>Phone</h4>
                  <p style={{ margin: 0, color: '#64748b' }}>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1e293b' }}>Frequently Asked Questions</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  question: "How do I deploy my application?",
                  answer: "Use our one-click deployment feature from the dashboard."
                },
                {
                  question: "What technologies are supported?",
                  answer: "We support React, Node.js, Python, and many other frameworks."
                },
                {
                  question: "Is there a free tier available?",
                  answer: "Yes, we offer a generous free tier for getting started."
                },
                {
                  question: "How can I upgrade my plan?",
                  answer: "Visit your account settings to explore available upgrade options."
                }
              ].map((faq, index) => (
                <div key={index} style={{
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b', fontSize: '1rem' }}>{faq.question}</h4>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.875rem' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <Router />;
}

export default App;
