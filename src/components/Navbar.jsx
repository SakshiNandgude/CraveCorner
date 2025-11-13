import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleBookTable = () => {
    navigate("/book-table");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container-fluid">
        <RouterLink className="navbar-brand fw-bold" to="/">
          CraveCorner <span style={{ color: "red" }}>.</span>
        </RouterLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav m-auto">
            {isHome ? (
              <>
                <ScrollLink className="nav-link" to="home" smooth duration={600}>
                  Home
                </ScrollLink>
                <ScrollLink className="nav-link" to="about" smooth duration={600}>
                  About
                </ScrollLink>
                <RouterLink className="nav-link" to="/menu">
                  Menu
                </RouterLink>
                <ScrollLink className="nav-link" to="event" smooth duration={600}>
                  Event
                </ScrollLink>
                <ScrollLink className="nav-link" to="contact" smooth duration={600}>
                  Contact
                </ScrollLink>
              </>
            ) : (
              <>
                <RouterLink className="nav-link" to="/">
                  Home
                </RouterLink>
                <RouterLink className="nav-link" to="/menu">
                  Menu
                </RouterLink>
                <RouterLink className="nav-link" to="/#contact">
                  Contact
                </RouterLink>
              </>
            )}
          </div>

          <div>
            <button onClick={handleBookTable} className="btn btn-danger">
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
