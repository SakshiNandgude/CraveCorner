import React, { useState } from "react";

function MenuCategories() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Vegetarian",
    "Non-Veg",
    "Mixed",
    "Chef's Special"
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Select Menu Category</h2>

      <div style={styles.buttonContainer}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              ...styles.button,
              backgroundColor:
                selectedCategory === cat ? "#8B0000" : "#d3d3d3",
              color: selectedCategory === cat ? "white" : "black",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <p style={styles.selectedText}>
          You selected: <strong>{selectedCategory}</strong>
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
    fontFamily: "Poppins, sans-serif",
  },
  heading: {
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  button: {
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    transition: "0.3s",
  },
  selectedText: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#8B0000",
  },
};

export default MenuCategories;
