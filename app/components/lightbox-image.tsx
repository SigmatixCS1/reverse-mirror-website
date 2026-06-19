"use client";

import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "./image-lightbox";

type LightboxImageProps = {
  src: string;
  alt: string;
  /** Optional metadata used for the fallback placeholder and modal caption. */
  host?: string;
  show?: string;
  category?: string;
  sizes?: string;
  priority?: boolean;
  /** Object-fit class for the thumbnail. Defaults to `object-cover`. */
  imageClassName?: string;
};

/**
 * A clickable thumbnail that fills its (positioned) parent and opens a
 * full-screen {@link ImageLightbox} with an enlarged version of the image.
 *
 * If the image is missing or fails to load, a dark placeholder showing the
 * host/show is rendered instead so the page never breaks.
 */
export default function LightboxImage({
  src,
  alt,
  host,
  show,
  category,
  sizes,
  priority,
  imageClassName = "object-cover",
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);

  const triggerLabel = show
    ? `View larger image of ${show}`
    : `View larger image: ${alt}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={triggerLabel}
        aria-haspopup="dialog"
        className="group/lb absolute inset-0 cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d7a862]"
      >
        {failed ? (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-[linear-gradient(150deg,rgba(40,12,14,0.9),rgba(6,6,7,0.96))] p-4 text-center">
            <span aria-hidden="true" className="mb-1 text-base text-[#d7a862]/50">
              ✦
            </span>
            {host ? (
              <span className="text-sm font-semibold tracking-tight text-zinc-200">
                {host}
              </span>
            ) : null}
            {show ? (
              <span className="text-[11px] tracking-[0.14em] uppercase text-[#d7a862]/80">
                {show}
              </span>
            ) : null}
          </span>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            onError={() => setFailed(true)}
            className={`${imageClassName} transition duration-500 ease-out group-hover/lb:scale-[1.04] group-hover/lb:brightness-110`}
          />
        )}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_0_1px_rgba(186,53,64,0.55),inset_0_0_42px_rgba(186,53,64,0.28)] transition-opacity duration-300 group-hover/lb:opacity-100"
        />
      </button>

      <ImageLightbox
        open={open}
        onClose={() => setOpen(false)}
        src={src}
        alt={alt}
        host={host}
        show={show}
        category={category}
      />
    </>
  );
}
