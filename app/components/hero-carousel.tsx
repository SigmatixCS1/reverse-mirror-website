"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroSlide = {
  src: string;
  title: string;
  caption: string;
  link?: string;
  imagePosition?: string;
};

const slides: HeroSlide[] = [
  {
    src: "/images/hero/demiurgic-system.png",
    title: "The Demiurgic System",
    caption: "The self-perpetuating machinery of unconsciousness.",
    link: "/mythology",
  },
  {
    src: "/images/hero/media-projection.png",
    title: "Media Projection",
    caption:
      "The story is no longer what happened. The story is what can be packaged around it.",
    link: "/mythology",
  },
  {
    src: "/images/hero/ai-loss-of-self.png",
    title: "AI and the Loss of Self",
    caption: "Being answered is not the same as being met.",
    link: "/stories",
    imagePosition: "center 70%",
  },
];

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, prefersReducedMotion]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <div
      className="relative z-10 h-full min-h-[320px] overflow-hidden rounded-[0.95rem] bg-black/40 sm:min-h-[360px] md:min-h-[420px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured visual narratives"
    >
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 ${prefersReducedMotion ? "" : "transition-opacity duration-700"} ${
              index === activeSlide ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover"
              style={{ objectPosition: slide.imagePosition ?? "center" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.36)_48%,rgba(0,0,0,0.12)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <p className="text-[11px] tracking-[0.14em] uppercase text-[#d7a862]">
                Featured Fragment
              </p>
              <h2 className="mt-1 text-xl font-semibold leading-tight text-zinc-100 sm:text-2xl">
                {slide.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                {slide.caption}
              </p>
              {slide.link ? (
                <Link
                  href={slide.link}
                  className="mt-3 inline-flex rounded-md border border-[#ba3540] bg-[#8f1d26]/90 px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-100 transition-colors hover:bg-[#a02531] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a862]"
                >
                  Explore
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 px-2.5 py-2 text-sm text-zinc-100 transition-colors hover:border-[#d7a862]/70 hover:text-[#f0d4ac] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a862]"
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={goToNext}
        className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 px-2.5 py-2 text-sm text-zinc-100 transition-colors hover:border-[#d7a862]/70 hover:text-[#f0d4ac] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a862]"
      >
        ›
      </button>

      <div className="absolute right-0 bottom-2 left-0 z-20 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-current={index === activeSlide ? "true" : "false"}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full border transition-colors ${
              index === activeSlide
                ? "border-[#d7a862] bg-[#d7a862]"
                : "border-white/45 bg-white/10 hover:border-[#d7a862]/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
