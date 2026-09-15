/** Soft / virtualized GPUs that break Three.js / Spline. */
export function canCreateWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true }) ||
      canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true }) ||
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

    if (
      blob.includes("vmware") ||
      blob.includes("svga") ||
      blob.includes("llvmpipe") ||
      blob.includes("softpipe") ||
      blob.includes("swiftshader") ||
      blob.includes("virtualbox")
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}
