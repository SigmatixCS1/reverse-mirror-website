"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SystemImage from "./system-image";

type LightboxImageProps = {
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
 * Renders a clickable thumbnail (reusing `SystemImage` so the fallback +
 * `fill` behavior matches the Systems page) that opens an accessible
 * click-to-enlarge modal/lightbox. The trigger fills its (relative) parent,
 * so callers control the framed container exactly like the Systems cards.
 *
 * Accessibility: the dialog uses `role="dialog"` + `aria-modal`, traps focus on
 * the close control, restores focus to the trigger on close, closes on Escape
 * or backdrop click, and locks body scroll while open.
 */
export default function LightboxImage({
  src,
  alt,
  host,
  show,
  sizes,
  priority,
  className,
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    // Capture the trigger so cleanup restores focus to the element that
    // opened the dialog (refs may change before cleanup runs).
    const triggerEl = triggerRef.current;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      // Only the close button is focusable inside the dialog, so keep Tab there.
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      // Restore focus to the trigger when the dialog closes.
      triggerEl?.focus();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Enlarge image: ${alt}`}
        className="group/zoom absolute inset-0 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a862] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <SystemImage
          src={src}
          alt={alt}
          host={host}
          show={show}
          sizes={sizes}
          priority={priority}
          className={className}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.2)_45%,rgba(0,0,0,0.04)_100%)]"
        />
        <span
          aria-hidden="true"
          className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d7a862]/40 bg-black/60 text-[#d7a862] opacity-80 backdrop-blur transition-all duration-300 group-hover/zoom:scale-110 group-hover/zoom:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </span>
      </button>

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
              <div
                aria-hidden="true"
                onClick={close}
                className="absolute inset-0 cursor-zoom-out bg-black/85 backdrop-blur-sm"
              />
              <div className="relative z-10 flex w-full max-w-5xl flex-col">
                <div className="relative h-[78vh] w-full overflow-hidden rounded-xl border border-[#7f1820]/45 bg-black/70 ring-1 ring-inset ring-[#d7a862]/15 shadow-[0_0_0_1px_rgba(186,53,64,0.28),0_30px_80px_rgba(0,0,0,0.7)]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="90vw"
                    className="object-contain"
                  />
                </div>
                <p
                  id={titleId}
                  className="mt-3 text-center text-sm leading-relaxed text-zinc-300"
                >
                  {alt}
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  aria-label="Close enlarged image"
                  className="absolute -top-3 -right-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d7a862]/40 bg-[#220b0d] text-lg text-zinc-100 shadow-lg transition-colors hover:border-[#d7a862]/70 hover:text-[#d9a85c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a862] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span aria-hidden="true">✕</span>
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
