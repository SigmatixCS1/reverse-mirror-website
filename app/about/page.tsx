import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OccultFrame from "../components/OccultFrame";

export const metadata: Metadata = {
  title: "About",
  description:
    "Reverse Mirror is an interconnected psychological and archetypal horror anthology about projection, artificial intimacy, media possession, and shadow integration.",
};

type FeatureImageProps = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
};

function FeatureImage({ src, alt, caption, priority }: FeatureImageProps) {
  return (
    <figure className="space-y-4">
      <OccultFrame>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[0.95rem] bg-black/60">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 92vw, 1152px"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_55%,rgba(0,0,0,0)_100%)] shadow-[inset_0_0_70px_rgba(0,0,0,0.6)]"
          />
        </div>
      </OccultFrame>
      <figcaption className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-zinc-400 italic md:text-base">
        {caption}
      </figcaption>
    </figure>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8f1d26]/55 to-transparent" />
      <span className="text-sm text-[#d7a862]/60">✦</span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8f1d26]/55 to-transparent" />
    </div>
  );
}

type Guide = {
  href: string;
  title: string;
  description: string;
};

const guides: Guide[] = [
  {
    href: "/stories",
    title: "Stories",
    description:
      "Follow the narrative arcs of Reverse Mirror, from intimate psychological horror to larger system-driven conflicts.",
  },
  {
    href: "/characters",
    title: "Characters",
    description:
      "Meet the people carrying the wounds, gifts, shadows, and choices that shape the anthology.",
  },
  {
    href: "/mirror",
    title: "Mirror",
    description:
      "Explore the hidden architecture of Reverse Mirror: the Demiurgic System, Egregores, The Frame, the Unwritten Lattice, the Great Inversion, the Last Kindness, and the Feed.",
  },
  {
    href: "/systems",
    title: "Systems",
    description:
      "Study the visible machines of the world — platforms, companies, media ecosystems, and institutions that turn human wounds into structure.",
  },
  {
    href: "/gallery",
    title: "Gallery",
    description:
      "Browse the visual development of Reverse Mirror through character fragments, system banners, scene art, and promotional images.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(188,48,58,0.18),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(215,168,98,0.1),transparent_24%),radial-gradient(circle_at_50%_94%,rgba(120,18,28,0.14),transparent_42%)]"
      />
      <section className="relative mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-3xl space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.14em] uppercase text-zinc-300">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-[#9a1d27]"
            />
            About the Project
          </p>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
            About Reverse Mirror
          </h1>
          <p className="text-lg leading-relaxed text-zinc-200 md:text-xl">
            Humanity unconsciously creates the systems that consume it.
          </p>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            Reverse Mirror is an interconnected psychological and archetypal
            horror anthology about projection, artificial intimacy, media
            possession, shadow integration, and the struggle to remain conscious
            inside systems built from human wounds.
          </p>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            The series blends anime-inspired visual storytelling, psychological
            horror, media satire, metaphysical symbolism, and character-driven
            drama. Its horror does not come from monsters alone, but from the
            moment people realize the monster was built from their own avoided
            truth.
          </p>
        </header>

        <div className="mt-12 md:mt-16">
          <FeatureImage
            src="/images/about/about-01-internal-darkness.png"
            alt="A figure confronting their own internal darkness in a fractured mirror"
            caption="The mirror does not only reveal what a person is. It reveals what a person has refused to face."
            priority
          />
        </div>

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              What Kind of Story Is This?
            </h2>
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              Reverse Mirror begins as an anthology of connected stories. Each
              arc follows a different fracture: influencer possession, artificial
              intimacy, corporate storytelling, media projection, spiritual
              inversion, and the painful work of repair. Over time, these
              separate stories begin to reveal a shared architecture beneath
              them.
            </p>
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              The characters are not simply heroes and villains. They are people
              carrying wounds, defenses, gifts, distortions, and choices. Some
              are dangerous because they refuse to see themselves. Others become
              dangerous because they believe seeing clearly gives them the right
              to control what they see.
            </p>
          </section>

          <SectionDivider />

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              The Core Conflict
            </h2>
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              At the center of Reverse Mirror is a conflict between consciousness
              and unconscious possession. The world is shaped by forces like The
              Feed, The Frame, and the Demiurgic System — systems that do not
              simply control people from the outside, but grow from projection,
              fear, desire, resentment, loneliness, and the need to avoid
              self-knowledge.
            </p>
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              The enemy is not one person, one ideology, one platform, or one
              monster. The enemy is what happens when human wounds become
              organized into systems powerful enough to teach humanity how to
              forget itself.
            </p>
          </section>

          <FeatureImage
            src="/images/about/about-02-fragmented-reflections.png"
            alt="Fragmented reflections scattered across glowing screens and mirrors"
            caption="Every screen becomes a mirror. Every mirror becomes a system. Every system learns where the wound is."
          />

          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              Why “Reverse Mirror”?
            </h2>
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              A normal mirror reflects what stands before it. A reverse mirror
              reflects what stands behind the self: the wound, the projection,
              the shadow, the hunger, the story a person mistakes for truth.
            </p>
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              In this world, the mirror does not punish darkness. It exposes the
              moment darkness becomes unconscious, justified, monetized,
              spiritualized, or mistaken for identity. The real horror begins
              when the reflection starts answering back.
            </p>
          </section>

          <SectionDivider />

          <section className="space-y-8">
            <header className="max-w-3xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                How to Explore the Site
              </h2>
              <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
                Reverse Mirror is best explored in fragments. Each path reflects
                a different face of the same story.
              </p>
            </header>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="group flex h-full flex-col gap-2 rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(35,35,35,0.32),rgba(8,8,8,0.92))] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_60px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ba3540]/45 hover:shadow-[0_0_0_1px_rgba(186,53,64,0.28),0_26px_70px_rgba(0,0,0,0.6)] focus-visible:-translate-y-1 focus-visible:border-[#ba3540]/45 focus-visible:outline-none"
                  >
                    <span className="flex items-center justify-between">
                      <span className="text-lg font-semibold tracking-tight text-zinc-50">
                        {guide.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-[#d7a862]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[#f0d4ac]"
                      >
                        →
                      </span>
                    </span>
                    <span className="text-sm leading-relaxed text-zinc-300">
                      {guide.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <SectionDivider />

          <section className="max-w-3xl space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              The Work of the Mirror
            </h2>
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              Reverse Mirror is not about escaping darkness by pretending it is
              not there. It is about facing the darkness without worshiping it,
              weaponizing it, or letting it decide what truth means. The mirror
              must face both ways.
            </p>
            <figure className="border-l-2 border-[#8f1d26]/70 pl-4">
              <blockquote className="text-lg leading-relaxed text-zinc-100 italic md:text-xl">
                “Whatever we suppress becomes something that possesses us.”
              </blockquote>
              <figcaption className="mt-2 text-[11px] tracking-[0.14em] uppercase text-zinc-500">
                Mirror Fragment
              </figcaption>
            </figure>
          </section>
        </div>
      </section>
    </div>
  );
}
