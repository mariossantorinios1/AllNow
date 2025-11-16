"use client";

import Link from "next/link";

const menuItems = [
  { title: "AI Chat", path: "/ai" },
  { title: "Image Tools", path: "/images" },
  { title: "Video Tools", path: "/videos" },
  { title: "Money Tools", path: "/money" },
  { title: "Social Tools", path: "/social" },
  { title: "Downloads", path: "/downloads" },
];

export default function MainMenu() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "20px",
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {menuItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          style={{
            background: "#f3f3f3",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "600",
            color: "#111",
            textDecoration: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
            transition: "0.2s",
          }}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
