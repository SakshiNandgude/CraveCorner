const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

// Database Connect
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cravecorner"
});

db.connect(err => {
  if (err) console.log("DB NOT Connected");
  else console.log("DB Connected");
});

// Fetch items by category
app.get("/api/menu/:category", (req, res) => {
  const cat = req.params.category;

  db.query("SELECT * FROM menu_items WHERE category = ?", [cat], (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
