"use client";
import Link from "next/link";
import Ads from "../components/Ads";

export default function ToolsPage() {
  const tools = [
    { name: "AI Assistant", link: "/ai" },
    { name: "Calculator", link: "/tools/calculator" },
    { name: "QR Generator", link: "/tools/qr" },
    { name: "Password Generator", link: "/tools/password" },
    { name: "Unit Converter", link: "/tools/converter" },
    { name: "Currency Converter", link: "/tools/currency" },
    { name: "Text Tools", link: "/tools/texttools" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <Ads />

      <h1 className="text-3xl font-bold text-center mb-6">
        EVERYTHING NOW — Tools Hub
      </h1>

      <p className="text-center text-gray-300 mb-6">
        Εργαλεία για καθημερινή χρήση — όλα σε ένα μέρος.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {tools.map((tool) => (
          <Link
            key={tool.link}
            href={tool.link}
            className="p-5 bg-gray-900 border border-gray-700 rounded-xl text-center hover:bg-gray-700 transition"
          >
            {tool.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
