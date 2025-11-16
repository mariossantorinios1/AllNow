"use client";
import { useState } from "react";

export default function Upscaler() {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<string>("");

  const upscale = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("https://api.deepai.org/api/torch-srgan", {
      method: "POST",
      headers: {
        "api-key": "quickstart-QUdJIGlzIGNvbWluZy4uLi4K", // free public key
      },
      body: formData,
    });

    const data = await res.json();

    if (!data.output_url) {
      alert("Error upscaling image");
      return;
    }

    setResult(data.output_url);
  };

  return (
    <main style={{ padding: 24, background: "#000", minHeight: "100vh", color: "#fff" }}>
      <h1 style={{ textAlign: "center" }}>AI Image Upscaler</h1>
      <p style={{ textAlign: "center", opacity: 0.7 }}>
        Upload an image to enhance it instantly (HD upscaling ×4).
      </p>

      <div style={{ maxWidth: 600, margin: "30px auto", background: "#111", padding: 20, borderRadius: 12 }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          style={{ width: "100%", padding: 12, borderRadius: 8, background: "#000", color: "#fff" }}
        />

        <button
          onClick={upscale}
          style={{
            marginTop: 15,
            padding: "10px 16px",
            borderRadius: 8,
            background: "#0070f3",
            border: "none",
            color: "#fff",
            width: "100%",
          }}
        >
          Enhance Image
        </button>

        {result && (
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <img
              src={result}
              alt="Upscaled"
              style={{ maxWidth: "100%", borderRadius: 12, marginBottom: 15 }}
            />

            <a
              href={result}
              download="upscaled.png"
              style={{
                display: "inline-block",
                padding: "10px 16px",
                background: "#0f0",
                color: "#000",
                borderRadius: 8,
                fontWeight: "bold",
              }}
            >
              Download HD
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
