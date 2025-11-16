"use client";
import { useState } from "react";

export default function ChatUI() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Γεια σου! Πώς μπορώ να σε βοηθήσω σήμερα;" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);

    // Temporary AI reply (later we connect real AI API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Αυτό είναι ένα προσωρινό AI response. Σύντομα θα μπει κανονικό AI API.",
        },
      ]);
    }, 600);

    setInput("");
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        background: "#f8f8f8",
        borderRadius: "16px",
      }}
    >
      <h2
        style={{
          fontSize: "30px",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        Chat Assistant
      </h2>

      <div
        style={{
          height: "400px",
          overflowY: "auto",
          padding: "15px",
          background: "white",
          borderRadius: "12px",
          border: "1px solid #ddd",
          marginBottom: "20px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: "12px",
              textAlign: msg.role === "user" ? "right" : "left",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "12px 16px",
                borderRadius: "12px",
                background: msg.role === "user" ? "#0070f3" : "#e5e5e5",
                color: msg.role === "user" ? "white" : "black",
                maxWidth: "70%",
              }}
            >
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Γράψε το μήνυμά σου..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "12px 20px",
            background: "#0070f3",
            color: "white",
            borderRadius: "10px",
            border: "none",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
