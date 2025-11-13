import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import BookTable from "./pages/BookTable"; // ✅ added this import
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        <Route path="/menu" element={<Menu />} />
        
        <Route path="/book-table" element={<BookTable />} />
      </Routes>
    </Router>
  );
}

export default App;
