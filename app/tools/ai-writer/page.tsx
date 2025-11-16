"use client";
import { useState } from "react";

export default function AIWriter() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("https://api.pee.chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: text }],
        }),
      });

      const data = await res.json();
      setResult(data.choices?.[0]?.message?.content || "Error");
    } catch (error) {
      setResult("Error");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Writer</h1>

      <textarea
        className="w-full p-3 rounded bg-gray-900 border border-gray-700 h-32"
        placeholder="Type anything..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={generate}
        className="mt-4 px-4 py-2 bg-blue-600 rounded"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-800 rounded">
          {result}
        </div>
      )}
    </div>
  );
}
