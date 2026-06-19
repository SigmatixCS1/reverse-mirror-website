"use client";

import Image from "next/image";
import { useState } from "react";

type SystemImageProps = {
  src: string;
  alt: string;
  /** Optional labels shown in the fallback placeholder. */
  host?: string;
  show?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Renders a `next/image` that fills its (relative) parent. If the image is
 * missing or fails to load, it swaps to a dark placeholder showing the host
 * and show title so the page never breaks.
 */
export default function SystemImage({
  src,
  alt,
  host,
  show,
  sizes,
  priority,
  className,
}: SystemImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-[linear-gradient(150deg,rgba(40,12,14,0.9),rgba(6,6,7,0.96))] p-4 text-center"
      >
        <span
          aria-hidden="true"
          className="mb-1 text-base text-[#d7a862]/50"
        >
          ✦
        </span>
        {host ? (
          <p className="text-sm font-semibold tracking-tight text-zinc-200">
            {host}
          </p>
        ) : null}
        {show ? (
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#d7a862]/80">
            {show}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
