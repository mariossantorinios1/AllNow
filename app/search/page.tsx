"use client";
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const popularSearches = [
    "AI Tools",
    "Make Money Online",
    "Crypto Prices",
    "Best Apps 2025",
    "Travel Deals",
    "Fitness Programs",
    "Recipes",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(to bottom, #000, #111)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>🔍 Search Everything</h1>
      <p style={{ opacity: 0.8, marginBottom: "30px" }}>
        Βρες οτιδήποτε στο EverythingNow — εργαλεία, πληροφορίες, links, προσφορές.
      </p>

      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type anything…"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        />
      </div>

      {query && (
        <div style={{ marginTop: "30px", opacity: 0.8 }}>
          <p>Searching for: <strong>{query}</strong></p>
        </div>
      )}

      <h2 style={{ fontSize: "26px", marginTop: "50px" }}>Popular Searches</h2>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {popularSearches.map((item) => (
          <button
            key={item}
            onClick={() => setQuery(item)}
            style={{
              padding: "12px",
              background: "#222",
              borderRadius: "10px",
              fontSize: "18px",
              color: "white",
              border: "1px solid #444",
              cursor: "pointer",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </main>
  );
}
