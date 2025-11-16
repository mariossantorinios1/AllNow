"use client";
import { useState } from "react";

export default function AIImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setImage("");

    try {
      const res = await fetch("https://lexica.art/api/v1/search?q=" + prompt);
      const data = await res.json();

      if (data.images && data.images.length > 0) {
        setImage(data.images[0].src);
      } else {
        setImage("ERROR");
      }
    } catch (e) {
      setImage("ERROR");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Image Generator</h1>

      <input
        className="w-full p-3 rounded bg-gray-900 border border-gray-700"
        placeholder="Describe the image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateImage}
        className="mt-4 px-4 py-2 bg-purple-600 rounded"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {image && image !== "ERROR" && (
        <div className="mt-6">
          <img src={image} className="rounded" />
        </div>
      )}

      {image === "ERROR" && (
        <p className="mt-6 text-red-400">Failed to generate. Try another prompt.</p>
      )}
    </div>
  );
}
