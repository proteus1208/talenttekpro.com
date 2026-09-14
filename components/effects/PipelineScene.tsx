"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
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

function canCreateWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return false;

    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = dbg
      ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) || "")
      : "";
    const vendor = dbg
      ? String(gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) || "")
      : "";
    const blob = `${renderer} ${vendor}`.toLowerCase();

    // VMware / SVGA / software GL often probes OK then fails on real contexts.
    if (
      blob.includes("vmware") ||
      blob.includes("svga") ||
      blob.includes("llvmpipe") ||
      blob.includes("softpipe")
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

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

function Node({
  position,
  color,
  accent = false,
}: {
  position: [number, number, number];
  color: string;
  accent?: boolean;
}) {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current || !accent) return;
    const t = clock.getElapsedTime();
    mesh.current.scale.setScalar(1 + Math.sin(t * 2.4) * 0.1);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh ref={mesh} position={position} castShadow>
        <icosahedronGeometry args={[accent ? 0.42 : 0.32, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={accent ? "#2EC4B6" : "#1a3040"}
          emissiveIntensity={accent ? 0.85 : 0.15}
          roughness={0.25}
          metalness={0.55}
        />
      </mesh>
      {accent ? (
        <mesh position={position}>
          <sphereGeometry args={[0.62, 24, 24]} />
          <meshBasicMaterial color="#2EC4B6" transparent opacity={0.12} />
        </mesh>
      ) : null}
    </Float>
  );
}

function Beam({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const geo = useMemo(() => {
    const a = new THREE.Vector3(...start);
    const b = new THREE.Vector3(...end);
    const dir = new THREE.Vector3().subVectors(b, a);
    const len = dir.length();
    const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
    const quat = new THREE.Quaternion();
    quat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    return { mid, len, quat };
  }, [start, end]);

  return (
    <mesh position={geo.mid} quaternion={geo.quat}>
      <cylinderGeometry args={[0.028, 0.028, geo.len, 12]} />
      <meshStandardMaterial
        color="#2EC4B6"
        emissive="#2EC4B6"
        emissiveIntensity={0.6}
        roughness={0.3}
        metalness={0.4}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function PipelineWorld({
  mouse,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const group = useRef<Group>(null);
  const nodes: [number, number, number][] = useMemo(
    () => [
      [-1.85, -0.15, 0.2],
      [0, 0.55, 0.05],
      [1.85, -0.1, -0.15],
    ],
    [],
  );

  useFrame((_state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.22;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y * 0.25,
      0.06,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      mouse.current.x * 0.18,
      0.06,
    );
  });

  return (
    <group ref={group}>
      <Float speed={0.8} floatIntensity={0.2} rotationIntensity={0.1}>
        <RoundedBox args={[4.6, 2.4, 0.12]} radius={0.08} position={[0, 0.1, -0.7]}>
          <meshStandardMaterial
            color="#15202B"
            roughness={0.55}
            metalness={0.35}
            transparent
            opacity={0.55}
          />
        </RoundedBox>
      </Float>

      <Beam start={nodes[0]} end={nodes[1]} />
      <Beam start={nodes[1]} end={nodes[2]} />

      <Node position={nodes[0]} color="#E8EEF2" />
      <Node position={nodes[1]} color="#2EC4B6" accent />
      <Node position={nodes[2]} color="#E8EEF2" />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, 0]} receiveShadow>
        <circleGeometry args={[3.2, 48]} />
        <meshStandardMaterial color="#0B1218" roughness={0.9} metalness={0.1} />
      </mesh>
    </group>
  );
}

/** CSS/SVG faux-3D pipeline — used when WebGL is unavailable (e.g. VMware). */
function CssPipeline3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className="relative h-72 w-full overflow-hidden rounded-sm border border-border bg-ink md:h-[22rem]"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
        setTilt({ x: y, y: x });
      }}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,196,182,0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="relative h-[70%] w-[88%] max-w-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-x-[8%] top-[42%] h-px origin-left animate-[pipeline-draw_2.4s_ease-out_forwards]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #2EC4B6 20%, #2EC4B6 80%, transparent)",
              boxShadow: "0 0 18px rgba(46,196,182,0.55)",
              transform: "translateZ(20px) rotate(-8deg)",
            }}
          />

          {[
            { left: "8%", label: "talent", accent: false, delay: "0s" },
            { left: "46%", label: "match", accent: true, delay: "0.25s" },
            { left: "84%", label: "ship", accent: false, delay: "0.5s" },
          ].map((n) => (
            <div
              key={n.label}
              className="absolute top-[28%] -translate-x-1/2"
              style={{
                left: n.left,
                transform: `translateZ(${n.accent ? 56 : 36}px)`,
                animation: `pipeline-float 3.2s ease-in-out ${n.delay} infinite`,
              }}
            >
              <div
                className={
                  n.accent
                    ? "size-14 rounded-full bg-teal shadow-[0_0_28px_rgba(46,196,182,0.65)] ring-4 ring-teal/25 md:size-16"
                    : "size-11 rounded-full bg-text/90 shadow-[0_12px_28px_rgba(0,0,0,0.45)] ring-2 ring-white/10 md:size-12"
                }
              />
              <p className="mt-3 text-center font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                {n.label}
              </p>
            </div>
          ))}

          <div
            className="absolute inset-x-[12%] bottom-[12%] h-24 rounded-[50%] bg-slate/80 blur-md"
            style={{ transform: "translateZ(0) rotateX(70deg)" }}
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

function WebGLPipeline() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className="h-72 w-full overflow-hidden rounded-sm border border-border bg-ink md:h-[22rem]"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      }}
    >
      <Canvas
        camera={{ position: [0, 1.1, 5.2], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "default",
          failIfMajorPerformanceCaveat: false,
        }}
        shadows={false}
        onCreated={({ gl }) => {
          gl.setClearColor("#0B1218", 1);
        }}
      >
        <color attach="background" args={["#0B1218"]} />
        <fog attach="fog" args={["#0B1218", 6, 14]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 6, 3]} intensity={1.2} color="#F2F5F7" />
        <pointLight position={[-3, 2, 2]} intensity={1} color="#2EC4B6" />
        <pointLight position={[3, -1, 1]} intensity={0.45} color="#E07A3D" />
        <PipelineWorld mouse={mouse} />
      </Canvas>
    </div>
  );
}

export function PipelineScene() {
  const [mode, setMode] = useState<"loading" | "webgl" | "css">("loading");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !canCreateWebGL()) {
      setMode("css");
      return;
    }
    setMode("webgl");
  }, []);

  if (mode === "loading") {
    return (
      <div className="h-72 w-full animate-pulse rounded-sm border border-border bg-surface md:h-[22rem]" />
    );
  }

  if (mode === "css") {
    return <CssPipeline3D />;
  }

  return (
    <WebGLErrorBoundary fallback={<CssPipeline3D />}>
      <WebGLPipeline />
    </WebGLErrorBoundary>
  );
}
