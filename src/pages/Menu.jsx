import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate(); // <-- add this
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { name: "Vegetarian", image: "https://cdn-icons-png.flaticon.com/512/415/415744.png" },
    { name: "Non-Veg", image: "https://cdn-icons-png.flaticon.com/512/1046/1046751.png" },
    { name: "Mixed", image: "https://cdn-icons-png.flaticon.com/512/706/706164.png" },
    { name: "Chef's Special", image: "https://cdn-icons-png.flaticon.com/512/1046/1046772.png" },
  ];

  const handleCategoryClick = (catName) => {
    setSelectedCategory(catName); // optional: still highlight selected
    navigate(`/menu/${catName}`); // <-- navigate to Categorymenu
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#333",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)} // <-- updated
            style={{
              width: "260px",
              padding: "30px",
              borderRadius: "25px",
              cursor: "pointer",
              background: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border:
                selectedCategory === cat.name
                  ? "2px solid #ff4c4c"
                  : "1px solid rgba(0,0,0,0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0px 15px 25px rgba(0,0,0,0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.15)";
            }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              style={{
                width: "200px",
                height: "200px",
                marginBottom: "20px",
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p
              style={{
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <h3
          style={{
            marginTop: "50px",
            fontSize: "26px",
          }}
        >
          You selected: <span style={{ color: "#ff4c4c" }}>{selectedCategory}</span>
        </h3>
      )}
    </div>
  );
}

export default Menu;
