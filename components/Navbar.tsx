"use client";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 border-b bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">EverythingNow</h1>

        <div className="flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}
