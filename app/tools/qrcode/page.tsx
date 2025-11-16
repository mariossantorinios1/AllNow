"use client";
import { useState } from "react";
import Ads from "../../components/Ads";
import QRCode from "qrcode";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  const generateQR = async () => {
    if (!text.trim()) return;
    const url = await QRCode.toDataURL(text);
    setQr(url);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <Ads />

      <h1 className="text-3xl font-bold text-center mb-6">QR Code Generator</h1>

      <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-xl border border-gray-700">
        <input
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 mb-4 text-xl bg-black text-white rounded border border-gray-600"
        />

        <button
          onClick={generateQR}
          className="w-full p-3 mb-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl font-semibold transition"
        >
          Generate QR Code
        </button>

        {qr && (
          <div className="text-center">
            <img src={qr} alt="QR Code" className="mx-auto mb-4" />
            <a
              href={qr}
              download="qrcode.png"
              className="underline text-blue-400"
            >
              Download QR Code
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
