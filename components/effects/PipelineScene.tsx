"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Component,
  useMemo,
  useRef,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";
import { canCreateWebGL } from "@/lib/webgl";

class WebGLErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.setState({ failed: true });
  }

  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

/** Dense orbital lattice — not three lonely spheres. */
function LatticeWorld({
  mouse,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const root = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const ringA = useRef<Mesh>(null);
  const ringB = useRef<Mesh>(null);
  const ringC = useRef<Mesh>(null);

  const points = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    const count = 48;
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;
      arr.push(
        new THREE.Vector3(
          Math.cos(theta) * radius * 1.85,
          y * 1.85,
          Math.sin(theta) * radius * 1.85,
        ),
      );
    }
    return arr;
  }, []);

  const lines = useMemo(() => {
    const segs: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < points.length; i++) {
      let nearest = -1;
      let dMin = Infinity;
      for (let j = 0; j < points.length; j++) {
        if (i === j) continue;
        const d = points[i].distanceTo(points[j]);
        if (d < dMin && d < 1.15) {
          dMin = d;
          nearest = j;
        }
      }
      if (nearest > i) segs.push([points[i], points[nearest]]);
    }
    return segs;
  }, [points]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (root.current) {
      root.current.rotation.y += delta * 0.28;
      root.current.rotation.x = THREE.MathUtils.lerp(
        root.current.rotation.x,
        mouse.current.y * 0.35,
        0.05,
      );
      root.current.rotation.z = THREE.MathUtils.lerp(
        root.current.rotation.z,
        mouse.current.x * 0.22,
        0.05,
      );
    }
    if (core.current) {
      core.current.rotation.x = t * 0.4;
      core.current.rotation.y = t * 0.55;
      core.current.scale.setScalar(1 + Math.sin(t * 2) * 0.04);
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.6;
    if (ringB.current) ringB.current.rotation.x = t * 0.45;
    if (ringC.current) ringC.current.rotation.y = -t * 0.5;
  });

  return (
    <group ref={root}>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color="#00D2FF"
          emissive="#0096FF"
          emissiveIntensity={1.1}
          metalness={0.7}
          roughness={0.18}
          wireframe
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color="#1E60FF"
          emissive="#1E60FF"
          emissiveIntensity={0.35}
          metalness={0.5}
          roughness={0.3}
          transparent
          opacity={0.55}
        />
      </mesh>

      <mesh ref={ringA} rotation={[Math.PI / 2.2, 0.2, 0]}>
        <torusGeometry args={[1.55, 0.018, 12, 96]} />
        <meshStandardMaterial
          color="#00D2FF"
          emissive="#00D2FF"
          emissiveIntensity={0.7}
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
      <mesh ref={ringB} rotation={[0.4, Math.PI / 3, 0.6]}>
        <torusGeometry args={[1.95, 0.014, 12, 96]} />
        <meshStandardMaterial
          color="#A8B5C2"
          emissive="#00D2FF"
          emissiveIntensity={0.25}
          metalness={0.5}
          roughness={0.35}
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh ref={ringC} rotation={[1.1, 0.5, -0.3]}>
        <torusGeometry args={[2.25, 0.01, 12, 120]} />
        <meshStandardMaterial
          color="#1E60FF"
          emissive="#1E60FF"
          emissiveIntensity={0.35}
          transparent
          opacity={0.55}
        />
      </mesh>

      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i % 7 === 0 ? 0.055 : 0.035, 10, 10]} />
          <meshStandardMaterial
            color={i % 7 === 0 ? "#00D2FF" : "#E8F7FF"}
            emissive={i % 7 === 0 ? "#00D2FF" : "#000000"}
            emissiveIntensity={i % 7 === 0 ? 0.8 : 0}
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      ))}

      {lines.map(([a, b], i) => {
        const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
        const dir = new THREE.Vector3().subVectors(b, a);
        const len = dir.length();
        const quat = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir.clone().normalize(),
        );
        return (
          <mesh key={`l-${i}`} position={mid} quaternion={quat}>
            <cylinderGeometry args={[0.006, 0.006, len, 4]} />
            <meshBasicMaterial color="#00D2FF" transparent opacity={0.35} />
          </mesh>
        );
      })}
    </group>
  );
}

/** CSS multi-layer orbital lattice (default on VMware). */
function CssLattice3D() {
  const [tilt, setTilt] = useState({ x: -12, y: 18 });

  return (
    <div
      className="relative h-80 w-full overflow-hidden rounded-2xl border border-border bg-[#0A1F3D] md:h-[26rem]"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 28;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -22;
        setTilt({ x: y - 8, y: x + 10 });
      }}
      onPointerLeave={() => setTilt({ x: -12, y: 18 })}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, rgba(0,210,255,0.22), transparent 42%), radial-gradient(circle at 30% 70%, rgba(30,96,255,0.1), transparent 40%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center [perspective:1100px]">
        <div
          className="relative size-[min(72%,22rem)] transition-transform duration-200 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Slow spin wrapper */}
          <div
            className="absolute inset-0 animate-[lattice-spin_18s_linear_infinite]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Core */}
            <div
              className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/90 shadow-[0_0_40px_rgba(0,210,255,0.75)] md:size-20"
              style={{ transform: "translateZ(0px)" }}
            />
            <div
              className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/80 md:size-12"
              style={{ transform: "translateZ(12px)" }}
            />

            {/* Orbital rings */}
            <div
              className="absolute left-1/2 top-1/2 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/70 shadow-[0_0_20px_rgba(0,210,255,0.35)]"
              style={{ transform: "rotateX(72deg) translateZ(0)" }}
            />
            <div
              className="absolute left-1/2 top-1/2 size-[100%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-muted/40"
              style={{ transform: "rotateX(72deg) rotateZ(35deg) translateZ(8px)" }}
            />
            <div
              className="absolute left-1/2 top-1/2 size-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-royal/50"
              style={{ transform: "rotateY(65deg) rotateZ(-20deg)" }}
            />
            <div
              className="absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/40"
              style={{ transform: "rotateY(-55deg) rotateX(20deg)" }}
            />

            {/* Satellite nodes on a sphere */}
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i / 16) * Math.PI * 2;
              const elev = ((i % 5) - 2) * 18;
              const r = 42 + (i % 3) * 6;
              return (
                <div
                  key={i}
                  className={
                    i % 4 === 0
                      ? "absolute left-1/2 top-1/2 size-2.5 -ml-1.5 -mt-1.5 rounded-full bg-teal shadow-[0_0_12px_rgba(0,210,255,0.9)]"
                      : "absolute left-1/2 top-1/2 size-1.5 -ml-0.5 -mt-0.5 rounded-full bg-text/80"
                  }
                  style={{
                    transform: `rotateY(${(angle * 180) / Math.PI}deg) rotateX(${elev}deg) translateZ(${r}px)`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A1F3D] to-transparent" />
    </div>
  );
}

function WebGLLattice() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className="h-80 w-full overflow-hidden rounded-2xl border border-border bg-[#0A1F3D] md:h-[26rem]"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      }}
    >
      <Canvas
        camera={{ position: [0, 0.6, 5.8], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "default",
          failIfMajorPerformanceCaveat: true,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#051937", 1);
        }}
      >
        <color attach="background" args={["#051937"]} />
        <fog attach="fog" args={["#051937", 5.5, 12]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 5, 3]} intensity={1.3} color="#E8F7FF" />
        <pointLight position={[-2, 2, 3]} intensity={1.4} color="#00D2FF" />
        <pointLight position={[3, -1, 2]} intensity={0.55} color="#1E60FF" />
        <LatticeWorld mouse={mouse} />
      </Canvas>
    </div>
  );
}

export function PipelineScene() {
  // Default to CSS so we never attempt WebGL during SSR / first paint on weak GPUs.
  const [mode, setMode] = useState<"webgl" | "css">("css");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced && canCreateWebGL()) {
      setMode("webgl");
    }
  }, []);

  if (mode === "css") {
    return <CssLattice3D />;
  }

  return (
    <WebGLErrorBoundary fallback={<CssLattice3D />}>
      <WebGLLattice />
    </WebGLErrorBoundary>
  );
}
