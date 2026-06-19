import type { ReactNode } from "react";

type OccultFrameProps = {
  children: ReactNode;
  className?: string;
};

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function OccultFrame({ children, className }: OccultFrameProps) {
  return (
    <div className={cx("relative isolate", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-[1.5rem] bg-[radial-gradient(circle_at_center,rgba(120,20,20,0.28),rgba(0,0,0,0)_70%)] opacity-65 blur-2xl"
      />
      <div className="relative rounded-[1.1rem] bg-gradient-to-br from-red-950/80 via-black to-red-900/70 p-[1.5px] shadow-[0_0_0_1px_rgba(127,24,32,0.25),0_24px_50px_rgba(0,0,0,0.45)]">
        <div className="relative rounded-[calc(1.1rem-1.5px)] border border-red-900/40 bg-black/70 ring-1 ring-inset ring-white/5 shadow-[inset_0_0_50px_rgba(120,20,20,0.12)] backdrop-blur-sm">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-2 left-2 text-xs text-[#d7a862]/45"
          >
            ✦
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-2 right-2 text-xs text-[#d7a862]/40"
          >
            ⟡
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-2 text-xs text-[#d7a862]/40"
          >
            ◇
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-2 bottom-2 text-xs text-[#d7a862]/45"
          >
            ✦
          </span>
          <div className="relative">{children}</div>
        </div>
      </div>
    </div>
  );
}
