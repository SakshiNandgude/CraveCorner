import React from "react";

const NonVegMenu = () => {
  const items = [
    { name: "Chicken Curry", price: "₹300" },
    { name: "Fish Fry", price: "₹350" },
    { name: "Mutton Biryani", price: "₹400" }
  ];

  return (
    <div style={{ padding: "120px 20px", textAlign: "center", backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>Non-Vegetarian Menu</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.name}
            style={{
              fontSize: "20px",
              margin: "15px 0",
              padding: "10px 20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              display: "inline-block",
              minWidth: "200px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NonVegMenu;