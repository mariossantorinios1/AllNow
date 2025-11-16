"use client";
import { useState } from "react";

export default function YouTubeDownloader() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(
        `https://api.vevioz.com/api/button/mp3?url=${encodeURIComponent(url)}`
      );

      setResult(res.url);
    } catch (err) {
      setResult("ERROR");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">YouTube Downloader</h1>

      <input
        className="w-full p-3 rounded bg-gray-900 border border-gray-700"
        placeholder="Paste YouTube link here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-blue-600 rounded"
      >
        {loading ? "Loading..." : "Download"}
      </button>

      {result && result !== "ERROR" && (
        <a
          href={result}
          className="block mt-6 text-blue-400 underline"
          target="_blank"
        >
          Click here to download
        </a>
      )}

      {result === "ERROR" && (
        <p className="mt-6 text-red-400">Failed. Try another YouTube link.</p>
      )}
    </div>
  );
}
