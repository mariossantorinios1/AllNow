"use client";
import { useState } from "react";
import Ads from "../../components/Ads";

export default function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (v: string) => {
    if (v === "C") return setValue("");
    if (v === "=") {
      try {
        // Evaluate the result safely
        const result = Function(`return (${value})`)();
        setValue(String(result));
      } catch {
        setValue("Error");
      }
      return;
    }
    setValue(value + v);
  };

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+",
    "C"
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <Ads />

      <h1 className="text-3xl font-bold text-center mb-6">Calculator</h1>

      <div className="max-w-sm mx-auto bg-gray-900 p-5 rounded-xl border border-gray-700">
        <input
          value={value}
          readOnly
          className="w-full p-3 mb-4 text-xl bg-black text-white rounded border border-gray-600"
        />

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((b) => (
            <button
              key={b}
              onClick={() => handleClick(b)}
              className="p-4 bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-700 transition text-lg"
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
