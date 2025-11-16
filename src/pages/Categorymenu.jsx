import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import menuData from "../MenuData";

const CategoryMenu = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const filteredItems = menuData.filter(
    item => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div style={{ padding: "120px 20px", minHeight: "100vh", backgroundColor: "#f8f8f8", textAlign: "center" }}>
      
      {/* Simple back arrow */}
      <div
        onClick={() => navigate("/menu")}
        style={{
          fontSize: "24px",
          cursor: "pointer",
          marginBottom: "20px",
          display: "inline-block"
        }}
        title="Back to Categories"
      >
        ←
      </div>

      <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>{category} Menu</h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {filteredItems.length === 0 ? (
          <p>No items found</p>
        ) : (
          filteredItems.map(item => (
            <div key={item.id} style={{
              width: "250px",
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}>
              <img src={item.image} alt={item.name} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "10px" }} />
              <h3 style={{ fontSize: "20px", margin: "10px 0" }}>{item.name}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>{item.description}</p>
              <p style={{ fontWeight: "700", marginTop: "10px" }}>${item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryMenu;
