"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  async function generateQR() {
    try {
      const url = await QRCode.toDataURL(text);
      setQrUrl(url);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6">QR Code Generator</h1>

      <input
        className="w-full max-w-md p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none"
        type="text"
        placeholder="Enter text or URL..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={generateQR}
        className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg"
      >
        Generate
      </button>

      {qrUrl && (
        <div className="mt-6">
          <img src={qrUrl} alt="Generated QR Code" className="rounded" />
        </div>
      )}
    </div>
  );
}
