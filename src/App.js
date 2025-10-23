import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home includes all scrollable sections */}
        <Route path="/" element={<Home />} />
        {/* Menu is a separate page */}
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
