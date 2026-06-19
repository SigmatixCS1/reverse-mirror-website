import Link from "next/link";
import OccultFrame from "./components/OccultFrame";
import HeroCarousel from "./components/hero-carousel";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(188,48,58,0.2),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(215,168,98,0.12),transparent_24%),radial-gradient(circle_at_50%_90%,rgba(120,18,28,0.15),transparent_38%)]"
      />
      <section className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:px-8 md:py-28">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.14em] uppercase text-zinc-300">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-[#9a1d27]"
            />
            Psychological Horror Anthology
          </p>
          <header className="space-y-5">
            <h1 className="text-5xl leading-[1.06] font-semibold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
              Reverse Mirror
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-xl">
              Humanity unconsciously creates the systems that consume it.
            </p>
          </header>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
            Reverse Mirror is an interconnected psychological and archetypal
            horror anthology about projection, artificial intimacy, media
            possession, shadow integration, and the struggle to remain conscious
            inside systems built from human wounds.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/stories"
              className="rounded-md border border-[#ba3540] bg-[#8f1d26] px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:bg-[#a02531] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a862]"
            >
              Enter the Stories
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-white/20 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-[#d7a862]/60 hover:text-[#f0d4ac] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7a862]"
            >
              Explore the World
            </Link>
          </div>
        </div>
        <aside
          aria-label="Visual motif panel"
          className="relative min-h-[320px] rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(35,35,35,0.35),rgba(8,8,8,0.9))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_70px_rgba(0,0,0,0.55)]"
        >
          <div className="absolute inset-5 rounded-xl border border-[#7f1820]/40" />
          <div className="absolute top-9 right-9 h-20 w-20 rotate-12 rounded-sm border border-[#d7a862]/35 bg-black/20" />
          <div className="absolute bottom-9 left-9 h-24 w-24 -rotate-6 rounded-sm border border-white/12 bg-black/20" />
          <OccultFrame className="relative z-10 h-full">
            <HeroCarousel />
          </OccultFrame>
        </aside>
      </section>
      <section className="relative border-t border-white/10 bg-black/35">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
          <article className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-100">
              Archetypal Conflict
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              Characters embody fractures between persona and shadow, power and
              conscience.
            </p>
          </article>
          <article className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-100">
              Media Possession
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              Stories track how intimacy and identity are rewritten by systems
              built to consume attention.
            </p>
          </article>
          <article className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-100">
              Shadow Integration
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              Horror emerges not from monsters alone, but from refusal to face
              what we create.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
