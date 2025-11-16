"use client";

export const dynamic = "force-dynamic";

import NextDynamic from "next/dynamic";
import { Suspense } from "react";

const Scene = NextDynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading 3D...</div>}>
      <Scene />
    </Suspense>
  );
}
