"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ImageLightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  /** Optional caption fields shown beneath the enlarged image. */
  host?: string;
  show?: string;
  category?: string;
};

/**
 * Accessible, reusable full-screen image lightbox.
 *
 * - Dark translucent overlay; click outside the image to close.
 * - `Escape` closes; body scroll is locked while open.
 * - Focus moves to the close button on open and is restored on close.
 * - Image preserves aspect ratio and fits within ~90vw / ~85vh.
 */
export default function ImageLightbox({
  open,
  onClose,
  src,
  alt,
  host,
  show,
  category,
}: ImageLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const hasCaption = Boolean(host || show || category);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      />

      <div
        onClick={(event) => event.stopPropagation()}
        className="relative z-10 flex max-h-[92vh] w-auto max-w-[95vw] flex-col items-center"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close enlarged image"
          className="absolute -top-3 -right-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ba3540]/50 bg-black/85 text-lg leading-none text-zinc-200 shadow-[0_0_18px_rgba(186,53,64,0.4)] transition-colors hover:border-[#d7a862]/70 hover:text-[#f0d4ac] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a862]"
        >
          <span aria-hidden="true">✕</span>
        </button>

        <div className="rounded-2xl bg-gradient-to-br from-red-900/70 via-black to-red-900/60 p-[2px] shadow-[0_0_0_1px_rgba(136,30,36,0.45),0_0_60px_rgba(130,24,28,0.45),0_24px_70px_rgba(0,0,0,0.6)]">
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1000}
            sizes="90vw"
            className="h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-[calc(1rem-2px)] border border-red-800/40 object-contain"
          />
        </div>

        {hasCaption ? (
          <figcaption className="mt-4 max-w-[90vw] space-y-0.5 text-center">
            {host ? (
              <p className="text-base font-semibold tracking-tight text-zinc-100">
                {host}
              </p>
            ) : null}
            {show ? <p className="text-sm text-zinc-300">{show}</p> : null}
            {category ? (
              <p className="mt-1 text-[11px] tracking-[0.14em] uppercase text-[#d7a862]">
                {category}
              </p>
            ) : null}
          </figcaption>
        ) : null}
      </div>
    </div>
  );
}
