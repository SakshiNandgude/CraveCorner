import React, { useState } from "react";

const categoriesList = [
  {
    id: "vegetarian",
    name: "Vegetarian",
    // Unsplash image with query params (auto=format to avoid needing headers)
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "nonveg",
    name: "Non-Veg",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f28c24a4b?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "mixed",
    name: "Mixed",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "special",
    name: "Chef's Special",
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60"
  }
];

// small local placeholder (data URL) so you don't need a file
const placeholder =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>
      <rect width='100%' height='100%' fill='#f0f0f0'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#bbb' font-size='18'>Image not available</text>
    </svg>`
  );

export default function MenuCategories() {
  const [selected, setSelected] = useState("");

  // onError handler for <img> elements
  const handleImgError = (e, cat) => {
    console.warn(`Image failed to load for category "${cat.name}" — switching to placeholder.`, e?.nativeEvent?.message || "");
    e.target.src = placeholder;
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2 style={{ marginBottom: 18 }}>Select Menu Category</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap"
        }}
      >
        {categoriesList.map((cat) => (
          <div
            key={cat.id}
            role="button"
            onClick={() => setSelected(cat.id)}
            style={{
              cursor: "pointer",
              width: 220,
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: selected === cat.id ? "0 6px 18px rgba(0,0,0,0.18)" : "0 2px 8px rgba(0,0,0,0.08)",
              border: selected === cat.id ? "2px solid #ff9800" : "1px solid #eee",
              transition: "transform .12s, box-shadow .12s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ height: 140, width: "100%", background: "#ccc" }}>
              <img
                src={cat.image}
                alt={cat.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => handleImgError(e, cat)}
              />
            </div>

            <div style={{ padding: 12, background: "#fff" }}>
              <div style={{ fontWeight: 600, marginBottom: 6 }}>{cat.name}</div>
              <div style={{ fontSize: 13, color: "#666" }}>{selected === cat.id ? "Selected" : "Click to view"}</div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div style={{ marginTop: 22 }}>
          <strong>You selected:</strong> {categoriesList.find(c => c.id === selected)?.name}
        </div>
      )}
    </div>
  );
}
