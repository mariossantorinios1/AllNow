"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "15px 25px",
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div>
        <Link href="/" style={{ fontSize: "22px", fontWeight: "bold" }}>
          EverythingNow
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          gap: "25px",
          fontSize: "18px",
          alignItems: "center",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/tools">Tools</Link>
      </div>
    </nav>
  );
}
