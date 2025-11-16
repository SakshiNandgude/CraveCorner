import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import BookTable from "./pages/BookTable";
import CategoryMenu from "./pages/Categorymenu";

import AdminMenu from "./pages/AdminMenu";
import AdminBookings from "./pages/AdminBookings";
import UserHome from "./pages/UserHome"; // ✅ YOU FORGOT THIS IMPORT

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* USER SIDE ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:category" element={<CategoryMenu />} />
        
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/user" element={<UserHome />} />  {/* USER HOME PAGE */}

        {/* ADMIN SIDE ROUTES */}
        <Route path="/admin/menu" element={<AdminMenu />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
      </Routes>
    </Router>
  );
}

export default App;
