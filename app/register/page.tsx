"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegister(e: any) {
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, name, password }),
    });

    const data = await res.json();

    if (!data.success) {
      setError(data.error);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Account created! You can login now.");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-900 via-black to-black shadow-2xl border border-purple-600/30 w-full max-w-md">
        
        <h1 className="text-4xl mb-6 text-center font-bold text-purple-300">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-black border border-purple-700 text-purple-200"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-black border border-purple-700 text-purple-200"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-black border border-purple-700 text-purple-200"
            required
          />

          <button
            type="submit"
            className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold text-white transition"
          >
            Create Account
          </button>

          {error && (
            <p className="text-red-500 text-center font-semibold">{error}</p>
          )}

          {success && (
            <p className="text-green-400 text-center font-semibold">{success}</p>
          )}
        </form>

        <p className="text-center text-purple-300 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-purple-400 hover:text-purple-200">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
