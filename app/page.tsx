"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "black",
      }}
    >
      {/* TITLE OVERLAY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
        style={{
          position: "absolute",
          top: "35%",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "4rem",
          fontWeight: "bold",
          zIndex: 10,
          textShadow: "0 0 20px #00f",
        }}
      >
        EVERYTHING NOW
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        style={{
          position: "absolute",
          top: "55%",
          width: "100%",
          textAlign: "center",
          color: "#aaa",
          fontSize: "1.4rem",
          zIndex: 10,
        }}
      >
        The Future of Social • AI • Streaming • Everything
      </motion.p>

      {/* 3D WORLD */}
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={1.3} />
        <Stars radius={80} depth={50} count={20000} factor={4} fade />

        <Float speed={4} rotationIntensity={0.8} floatIntensity={1.5}>
          <mesh>
            <icosahedronGeometry args={[2, 1]} />
            <meshStandardMaterial color="#0055ff" wireframe />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </main>
  );
}
