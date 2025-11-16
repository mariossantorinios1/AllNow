"use client";
import { useState } from "react";

export default function BackgroundRemover() {
  const [image, setImage] = useState<File | null>(null);
  const [processed, setProcessed] = useState<string>("");

  const removeBg = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image_file", image);
    formData.append("size", "auto");

    const res = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": "free",
      },
      body: formData,
    });

    if (!res.ok) {
      alert("Error processing image");
      return;
    }

    const blob = await res.blob();
    setProcessed(URL.createObjectURL(blob));
  };

  return (
    <main style={{ padding: 24, background: "#000", minHeight: "100vh", color: "#fff" }}>
      <h1 style={{ textAlign: "center" }}>AI Background Remover</h1>
      <p style={{ textAlign: "center", opacity: 0.7 }}>
        Upload any photo and remove the background instantly.
      </p>

      <div style={{ maxWidth: 600, margin: "30px auto", background: "#111", padding: 20, borderRadius: 12 }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          style={{ width: "100%", padding: 12, borderRadius: 8, background: "#000", color: "#fff" }}
        />

        <button
          onClick={removeBg}
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
          Remove Background
        </button>

        {processed && (
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <img
              src={processed}
              alt="Processed"
              style={{ maxWidth: "100%", borderRadius: 12, marginBottom: 15 }}
            />

            <a
              href={processed}
              download="background_removed.png"
              style={{
                display: "inline-block",
                padding: "10px 16px",
                background: "#0f0",
                color: "#000",
                borderRadius: 8,
                fontWeight: "bold",
              }}
            >
              Download PNG
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
