import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [todos, setTodos] = useState([
    { id: 1, text: "Deploy React app", completed: false },
    { id: 2, text: "Test functionality", completed: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const HomePage = () => (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">APPTESTER</h1>
      <p className="text-lg mb-6">React Application Deployment Demo</p>
      <div className="bg-green-100 p-4 rounded-lg">
        <p className="text-green-800">✅ React app deployed successfully</p>
        <p className="text-green-800">✅ Interactive features working</p>
      </div>
    </div>
  );

  const TodoPage = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Add Task</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter task..."
              className="flex-1 px-3 py-2 border rounded"
            />
            <Button onClick={addTodo}>Add</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Tasks ({todos.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center gap-2 p-2 border-b">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.text}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const AboutPage = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="mb-4">This is a React application deployment test.</p>
          <ul className="space-y-2">
            <li>✅ React 18 with TypeScript</li>
            <li>✅ Tailwind CSS styling</li>
            <li>✅ Interactive components</li>
            <li>✅ State management</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case "home": return <HomePage />;
      case "todos": return <TodoPage />;
      case "about": return <AboutPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <nav className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex gap-4">
            <Button 
              variant={currentPage === "home" ? "default" : "outline"}
              onClick={() => setCurrentPage("home")}
            >
              Home
            </Button>
            <Button 
              variant={currentPage === "todos" ? "default" : "outline"}
              onClick={() => setCurrentPage("todos")}
            >
              Todos
            </Button>
            <Button 
              variant={currentPage === "about" ? "default" : "outline"}
              onClick={() => setCurrentPage("about")}
            >
              About
            </Button>
          </div>
        </nav>
        
        <main className="bg-white p-6 rounded-lg shadow">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
