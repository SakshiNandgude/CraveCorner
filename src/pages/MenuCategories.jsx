import React, { useState } from "react";

function MenuCategories() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    {
      name: "Vegetarian",
      image:
        "https://cdn-icons-png.flaticon.com/512/2909/2909763.png"
    },
    {
      name: "Non-Veg",
      image:
        "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
    },
    {
      name: "Mixed",
      image:
        "https://cdn-icons-png.flaticon.com/512/3093/3093012.png"
    },
    {
      name: "Chef's Special",
      image:
        "https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
    }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Our Menu</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "20px"
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            style={{
              cursor: "pointer",
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #ccc",
              width: "150px",
              background: selectedCategory === cat.name ? "#f8f8f8" : "white",
              transition: "0.3s",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              style={{ width: "90px", height: "90px" }}
            />
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>{cat.name}</p>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <h3 style={{ marginTop: "25px" }}>
          You selected: <span style={{ color: "green" }}>{selectedCategory}</span>
        </h3>
      )}
    </div>
  );
}

export default MenuCategories;
