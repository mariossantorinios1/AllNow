"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function QRTool() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  async function generate() {
    if (!text.trim()) return;
    const url = await QRCode.toDataURL(text);
    setQr(url);
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">QR Code Generator</h1>

      <input
        className="w-full max-w-lg p-3 bg-gray-800 border border-gray-700 rounded mb-4"
        placeholder="Enter text or URL..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={generate}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
      >
        Generate
      </button>

      {qr && (
        <img
          src={qr}
          alt="QR Code"
          className="mt-6 w-64 h-64 border border-gray-700 p-2 rounded bg-white"
        />
      )}
    </div>
  );
}
