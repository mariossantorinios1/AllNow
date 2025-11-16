"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="w-full h-screen">
      <Scene />
    </div>
  );
}
