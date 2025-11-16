"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "18px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#111",
        borderBottom: "1px solid #333",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link href="/" style={{ fontSize: "22px", fontWeight: "bold" }}>
        Everything<span style={{ color: "#0ff" }}>Now</span>
      </Link>

      <div style={{ display: "flex", gap: "22px", fontSize: "16px" }}>
        <Link href="/">Home</Link>
        <Link href="/social">Social Links</Link>
        <Link href="/ai">AI Assistant</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/videos">Videos</Link>
        <Link href="/news">News</Link>
      </div>
    </nav>
  );
}
