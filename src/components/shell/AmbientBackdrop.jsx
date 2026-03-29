/**
 * Ambient layer: soft blobs + subtle animated line fields (not distracting).
 */
export default function AmbientBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#09090b]" />

      <div className="absolute inset-0 opacity-[0.35]">
        <div className="absolute -left-[20%] top-[10%] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-emerald-500 blur-[100px] animate-drift-a" />
        <div className="absolute -right-[15%] bottom-[5%] h-[min(65vw,480px)] w-[min(65vw,480px)] rounded-full bg-teal-600 blur-[110px] animate-drift-b" />
        <div className="absolute left-[25%] top-[40%] h-[min(50vw,320px)] w-[min(50vw,320px)] rounded-full bg-indigo-600 blur-[90px] animate-drift-c" />
      </div>

      {/* Animated structural lines */}
      <div className="absolute inset-0 opacity-[0.55] backdrop-diagonals" />
      <div className="absolute inset-0 opacity-[0.4] backdrop-lines" />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
