"use client";
import { useState } from "react";
import Ads from "../components/Ads";

export default function AIPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Γεια σου! Πώς μπορώ να σε βοηθήσω σήμερα;" },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", text: input },
      {
        role: "assistant",
        text:
          "🔥 *AI demo mode*: Σύντομα θα συνδεθώ με πραγματικό AI API για πλήρη λειτουργία!",
      },
    ];

    setMessages(newMessages);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <Ads />

      <h1 className="text-3xl font-bold text-center mb-5">
        EVERYTHING NOW — AI Assistant
      </h1>

      <div className="max-w-2xl mx-auto bg-gray-900 p-5 rounded-xl border border-gray-700">
        <div className="h-[400px] overflow-y-auto p-3 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg ${
                msg.role === "user"
                  ? "bg-blue-700 text-right"
                  : "bg-gray-700 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <input
            className="flex-1 p-3 bg-black border border-gray-600 rounded-lg"
            placeholder="Γράψε κάτι…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="px-5 bg-blue-600 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
