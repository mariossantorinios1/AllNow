"use client";
import { useState } from "react";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password })
    });

    const data = await res.json();
    setMsg(data.error || data.message);
  };

  return (
    <main style={{ padding: 40, maxWidth: 450, margin: "0 auto", color: "#fff" }}>
      <h1 style={{ textAlign: "center" }}>Sign in</h1>

      <input
        placeholder="Email or Username"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        style={input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={input}
      />

      <button onClick={submit} style={button}>
        Login
      </button>

      {msg && <p style={{ marginTop: 20 }}>{msg}</p>}
    </main>
  );
}

const input = {
  width: "100%",
  padding: "12px 15px",
  borderRadius: 8,
  margin: "10px 0",
  border: "1px solid #333",
  background: "#111",
  color: "#fff"
};

const button = {
  width: "100%",
  padding: "12px 15px",
  borderRadius: 8,
  marginTop: 20,
  background: "#0070f3",
  border: "none",
  color: "#fff",
  fontWeight: "bold"
};
