import React from "react";
import About from "./About";
import Event from "./Event";
import Contact from "./Contact";
import '../styles/Home.css';


function Home() {
  return (
    <>
      <section
        id="home"
        className="home-section d-flex align-items-center justify-content-center text-center text-white"
      >
        <div className="overlay"></div>
        <div className="content">
          <h1 className="display-3 fw-bold">Welcome to CraveCorner</h1>
          <p className="lead">Delicious food, cozy vibes, and memorable moments</p>
          <button className="btn btn-danger mt-3">Book a table</button>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="event">
        <Event />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
