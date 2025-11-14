import React, { useState } from "react";
import "../styles/BookTable.css";

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    menu: "",
    specialRequest: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("🎉 Your table has been successfully booked!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "",
          menu: "",
          specialRequest: "",
        });
      } else {
        alert("❌ Something went wrong while booking your table. Please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Unable to connect to the server. Make sure the backend is running!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booktable-container">
      <div className="booktable-card">
        <h2 className="booktable-title">Reserve Your Table</h2>
        <p className="booktable-subtitle">
          Experience fine dining with CraveCorner’s signature menu.
        </p>

        <form onSubmit={handleSubmit} className="booktable-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group half">
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Number of Guests</label>
            <input
              type="number"
              name="guests"
              placeholder="2"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Menu Preference</label>
            <select
              name="menu"
              value={formData.menu}
              onChange={handleChange}
              required
            >
              <option value="">Select Menu</option>
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Vegetarian</option>
              <option value="mixed">Mixed</option>
              <option value="special">Chef’s Special</option>
            </select>
          </div>

          <div className="form-group">
            <label>Special Requests</label>
            <textarea
              name="specialRequest"
              placeholder="Any allergies, occasion, or seating preferences?"
              value={formData.specialRequest}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Booking..." : "Book Table"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
