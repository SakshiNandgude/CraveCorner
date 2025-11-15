import React, { useEffect, useState } from "react";

function Menu() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Vegetarian");
  const [loading, setLoading] = useState(true);

  // Fetch all menu items from backend
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/menu");
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching menu:", error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // Filter based on selected category
  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Menu</h1>

      {/* Category Buttons */}
      <div style={{ marginBottom: "20px" }}>
        {["Vegetarian", "Non-Veg", "Mixed", "Chef's Special"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              margin: "10px",
              padding: "10px 15px",
              backgroundColor:
                selectedCategory === cat ? "#c0392b" : "#eee",
              color: selectedCategory === cat ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading Message */}
      {loading && <p>Loading menu items...</p>}

      {/* Display Filtered Menu Items */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px"
        }}
      >
        {!loading &&
          filteredItems.map((dish) => (
            <div
              key={dish.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "10px"
              }}
            >
              <img
                src={`/images/${dish.image}`}
                alt={dish.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p style={{ fontWeight: "bold" }}>${dish.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Menu;
