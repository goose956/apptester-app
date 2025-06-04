import React, { useState } from "react";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import AboutPage from "./pages/about";
import { Button } from "./components/ui/button";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch(currentPage) {
      case "home": return <HomePage />;
      case "dashboard": return <DashboardPage />;
      case "about": return <AboutPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">APPTESTER</h1>
              </div>
              <div className="ml-6 flex space-x-8">
                <Button
                  variant={currentPage === "home" ? "default" : "ghost"}
                  onClick={() => setCurrentPage("home")}
                  className="px-3 py-2"
                >
                  Home
                </Button>
                <Button
                  variant={currentPage === "dashboard" ? "default" : "ghost"}
                  onClick={() => setCurrentPage("dashboard")}
                  className="px-3 py-2"
                >
                  Dashboard
                </Button>
                <Button
                  variant={currentPage === "about" ? "default" : "ghost"}
                  onClick={() => setCurrentPage("about")}
                  className="px-3 py-2"
                >
                  About
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
