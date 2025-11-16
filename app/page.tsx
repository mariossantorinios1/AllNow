export const dynamic = "force-dynamic";
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Scene />
      </Suspense>
    </main>
  );
}
