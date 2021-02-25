import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/sidebar/sidebar";
import Content from "./components/contenido/contenido";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
  );
};

export default App;
