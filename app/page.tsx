"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
  loading: () => <div>Loading 3D...</div>,
});

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading 3D...</div>}>
      <Scene />
    </Suspense>
  );
}
