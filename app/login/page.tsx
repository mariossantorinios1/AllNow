"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim().length === 0) return;

    // Save login to localStorage
    localStorage.setItem("username", username);

    // Redirect to profile
    router.push("/profile");
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-3 rounded-lg bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 mb-4"
      />

      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-zinc-800"
      >
        Login
      </button>
    </div>
  );
}
