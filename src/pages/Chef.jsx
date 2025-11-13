import React from "react";
import "../styles/Chef.css";

function Chef() {
  return (
    <div className="chef-section">
      <h2 className="chef-title">Our Expert Chefs</h2>
      <div className="chef-container">
        <div className="chef-card">
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80"
            alt="Chef 1"
            className="chef-image"
          />
          <h3>Chef Marco Rossi</h3>
          <p>Master of Italian Cuisine</p>
        </div>

        <div className="chef-card">
          <img
            src="https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=600&q=80"
            alt="Chef 2"
            className="chef-image"
          />
          <h3>Chef Aisha Khan</h3>
          <p>Pastry & Dessert Specialist</p>
        </div>

        <div className="chef-card">
          <img
            src="https://images.unsplash.com/photo-1529692236671-f1dc28a584b0?auto=format&fit=crop&w=600&q=80"
            alt="Chef 3"
            className="chef-image"
          />
          <h3>Chef Kenji Tanaka</h3>
          <p>Asian Fusion Expert</p>
        </div>
      </div>
    </div>
  );
}

export default Chef;
