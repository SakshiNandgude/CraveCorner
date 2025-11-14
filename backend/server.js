// Import dependencies
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Create app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // default XAMPP MySQL user
  password: "",        // leave empty unless you set a password
  database: "cravecorner",  // your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database: cravecorner");
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("CraveCorner backend is running...");
});

// POST API to insert booking data
app.post("/api/bookings", (req, res) => {
  const { name, email, phone, date, time, guests, menu, specialRequest } = req.body;

  const sql = `
    INSERT INTO bookings 
    (customer_name, email, phone, res_date, res_time, guests, menu_selection, special_request)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, phone, date, time, guests, menu, specialRequest],
    (err, result) => {
      if (err) {
        console.error("❌ Error inserting data:", err);
        res.status(500).json({ error: "Database error" });
      } else {
        console.log("✅ New booking inserted:", result.insertId);
        res.status(200).json({ message: "Booking successful" });
      }
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
