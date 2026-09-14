"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import type { Mesh } from "three";

function PipelineNodes() {
  const matchRef = useRef<Mesh>(null);
  const points = useMemo(
    () =>
      [
        [-1.6, 0, 0],
        [0, 0.35, 0],
        [1.6, 0, 0],
      ] as [number, number, number][],
    [],
  );

  useFrame(({ clock }) => {
    if (matchRef.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 2.2) * 0.08;
      matchRef.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      <Line points={points} color="#2EC4B6" lineWidth={2} transparent opacity={0.85} />
      {points.map((p, i) => (
        <Float key={i} speed={1.2 + i * 0.2} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh position={p} ref={i === 1 ? matchRef : undefined}>
            <sphereGeometry args={[i === 1 ? 0.18 : 0.14, 24, 24]} />
            <meshStandardMaterial
              color={i === 1 ? "#2EC4B6" : "#F2F5F7"}
              emissive={i === 1 ? "#1A8F85" : "#000000"}
              emissiveIntensity={i === 1 ? 0.55 : 0}
              roughness={0.35}
              metalness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function StaticPipeline() {
  return (
    <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden>
      <path
        d="M40 60 H140 L180 40 H280"
        fill="none"
        stroke="#2EC4B6"
        strokeWidth="2"
        opacity="0.85"
      />
      <circle cx="40" cy="60" r="10" fill="#F2F5F7" />
      <circle cx="160" cy="48" r="12" fill="#2EC4B6" />
      <circle cx="280" cy="60" r="10" fill="#F2F5F7" />
      <text x="40" y="95" textAnchor="middle" fill="#6B7A8A" fontSize="10">
        talent
      </text>
      <text x="160" y="95" textAnchor="middle" fill="#6B7A8A" fontSize="10">
        match
      </text>
      <text x="280" y="95" textAnchor="middle" fill="#6B7A8A" fontSize="10">
        ship
      </text>
    </svg>
  );
}

export function PipelineScene() {
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!mounted || reduced) {
    return (
      <div className="h-56 w-full rounded-sm border border-border bg-surface p-4 md:h-64">
        <StaticPipeline />
      </div>
    );
  }

  return (
    <div className="h-56 w-full overflow-hidden rounded-sm border border-border bg-surface md:h-64">
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#1A2633"]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 2]} intensity={1.1} color="#F2F5F7" />
        <pointLight position={[0, 1, 2]} intensity={0.8} color="#2EC4B6" />
        <PipelineNodes />
      </Canvas>
    </div>
  );
}
