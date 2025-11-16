"use client";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #4c8cff, #002bff)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "42px", fontWeight: "900", marginBottom: "10px" }}>
        EverythingNow
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.9 }}>
        Όλα σε ένα μέρος. Εργαλεία – Υπηρεσίες – Online Δυνατότητες.
      </p>
    </header>
  );
}
