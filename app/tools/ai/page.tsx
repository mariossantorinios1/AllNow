"use client";

import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    const responseMessage = {
      role: "assistant",
      content: "⚠️ Dummy AI Response (backend not connected)",
    };

    setMessages((prev) => [...prev, responseMessage]);
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">AI Chat</h1>

      <div className="w-full max-w-2xl bg-gray-900 p-4 rounded-lg h-[500px] overflow-y-auto border border-gray-700">
        {messages.map((m, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-bold">{m.role === "user" ? "You:" : "AI:"}</p>
            <p>{m.content}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl flex mt-4">
        <input
          className="flex-1 p-3 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 px-6 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}
