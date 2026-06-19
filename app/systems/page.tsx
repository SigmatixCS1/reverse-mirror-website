import type { Metadata } from "next";
import OccultFrame from "../components/OccultFrame";
import SystemImage from "../components/system-image";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Videre — the Reverse Mirror platform where outrage becomes identity, reaction becomes reach, and every opinion is shaped into a tribe.",
};

type StreamHost = {
  slug: string;
  host: string;
  show: string;
  category: string;
  description: string;
  mirrorFunction: string;
  image: string;
  alt: string;
};

const streamNetwork: StreamHost[] = [
  {
    slug: "marlowe-knox",
    host: "Marlowe Knox",
    show: "The Civic Guillotine",
    category: "Politics / Campus Conflict",
    description:
      "Marlowe Knox turns political anxiety into theater. His show packages campus protests, institutional language, and social movements into clean outrage narratives for audiences who want certainty more than complexity.",
    mirrorFunction:
      "He gives viewers the feeling of being the only adults in a room full of children.",
    image: "/images/systems/videre/marlowe-knox-civic-guillotine.png",
    alt: "Marlowe Knox, host of The Civic Guillotine",
  },
  {
    slug: "brielle-saint-nika-graves",
    host: "Brielle Saint & Nika Graves",
    show: "Cloud Siren",
    category: "Celebrity / Creator Culture / Intimacy Economy",
    description:
      "Cloud Siren is a glossy takedown show where Brielle’s fire and Nika’s ice turn scandal, luxury intimacy, creator worship, and parasocial hunger into spectacle. One humiliates the lie. The other explains why the lie sold.",
    mirrorFunction:
      "They turn exposure into entertainment and make judgment feel like protection.",
    image: "/images/systems/videre/cloud-siren-brielle-nika.png",
    alt: "Brielle Saint and Nika Graves, hosts of Cloud Siren",
  },
  {
    slug: "jax-orion",
    host: "Jax Orion",
    show: "The Iron Mirror",
    category: "Masculinity / Self-Optimization",
    description:
      "Jax Orion turns male insecurity into performance discipline. His broadcasts frame loneliness, rejection, and shame as failures of strength, then sell the cure as domination, supplementation, and audience-approved toughness.",
    mirrorFunction: "He teaches wounded men to mistake contempt for confidence.",
    image: "/images/systems/videre/jax-orion-iron-mirror.png",
    alt: "Jax Orion, host of The Iron Mirror",
  },
  {
    slug: "sable-monroe",
    host: "Sable Monroe",
    show: "Sacred Offense",
    category: "Religion / Moral Panic",
    description:
      "Sable Monroe speaks with velvet calm and sharpened judgment. Sacred Offense turns moral concern into ritualized condemnation, using spiritual language to make disgust feel holy.",
    mirrorFunction:
      "She gives the audience permission to call their revulsion righteousness.",
    image: "/images/systems/videre/sable-monroe-sacred-offense.png",
    alt: "Sable Monroe, host of Sacred Offense",
  },
  {
    slug: "malik-cross",
    host: "Malik Cross",
    show: "The Receipt Room",
    category: "Film / Cancellation / Industry Scandal",
    description:
      "Malik Cross performs outrage as evidence. The Receipt Room collects scandals, contradictions, apologies, firings, and old clips until the audience feels less like viewers and more like prosecutors.",
    mirrorFunction:
      "He turns hypocrisy into a weapon that never has to become self-examination.",
    image: "/images/systems/videre/malik-cross-receipt-room.png",
    alt: "Malik Cross, host of The Receipt Room",
  },
  {
    slug: "cassian-kade",
    host: "Cassian Kade",
    show: "Final Cut Heresy",
    category: "Entertainment / Film Criticism",
    description:
      "Cassian Kade is calmer than the other Videre hosts, which makes him feel more credible. Final Cut Heresy dissects entertainment culture with cool contempt, framing mass-market conformity as proof that taste itself has been captured.",
    mirrorFunction: "He makes alienation feel intelligent.",
    image: "/images/systems/videre/cassian-kade-final-cut-heresy.png",
    alt: "Cassian Kade, host of Final Cut Heresy",
  },
  {
    slug: "dane-mercer",
    host: "Dane Mercer",
    show: "Dead Cartridge",
    category: "Gaming / Legacy Fandom",
    description:
      "Dane Mercer mourns the death of beloved games so loudly that grief becomes an industry. Dead Cartridge begins with real criticism, then turns wounded fandom into ritualized contempt.",
    mirrorFunction:
      "He was right about the corpse. That was how the Feed taught him to feed on the funeral.",
    image: "/images/systems/videre/dane-mercer-dead-cartridge.png",
    alt: "Dane Mercer, host of Dead Cartridge",
  },
];

function StreamPanel({ entry }: { entry: StreamHost }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(35,35,35,0.32),rgba(8,8,8,0.92))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_60px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ba3540]/45 hover:shadow-[0_0_0_1px_rgba(186,53,64,0.28),0_26px_70px_rgba(0,0,0,0.6)] focus-within:-translate-y-1 focus-within:border-[#ba3540]/45">
      <div className="grid gap-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="p-4 md:p-5">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#7f1820]/40 bg-black/50 ring-1 ring-inset ring-[#d7a862]/10">
            <SystemImage
              src={entry.image}
              alt={entry.alt}
              host={entry.host}
              show={entry.show}
              sizes="(max-width: 768px) 92vw, 42vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.2)_45%,rgba(0,0,0,0.04)_100%)]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 p-5 pt-1 md:py-6 md:pr-6 md:pl-2">
          <div className="space-y-1.5">
            <p className="inline-flex w-fit items-center rounded-full border border-[#d7a862]/25 bg-[#d7a862]/5 px-2.5 py-0.5 text-[10px] tracking-[0.14em] uppercase text-[#d7a862]">
              {entry.category}
            </p>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
              {entry.host}
            </h3>
            <p className="text-sm font-medium tracking-wide text-zinc-400">
              {entry.show}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-zinc-300">
            {entry.description}
          </p>

          <figure className="mt-auto border-l-2 border-[#8f1d26]/70 pl-3">
            <blockquote className="text-sm leading-relaxed text-zinc-200 italic">
              “{entry.mirrorFunction}”
            </blockquote>
            <figcaption className="mt-1.5 text-[11px] tracking-[0.14em] uppercase text-zinc-500">
              Mirror Function
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}

export default function SystemsPage() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(188,48,58,0.18),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(215,168,98,0.1),transparent_24%),radial-gradient(circle_at_50%_92%,rgba(120,18,28,0.14),transparent_40%)]"
      />
      <section className="relative mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <header className="max-w-3xl space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.14em] uppercase text-zinc-300">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-[#9a1d27]"
            />
            Platform System
          </p>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
            Videre
          </h1>
          <p className="text-lg leading-relaxed text-zinc-200 md:text-xl">
            The platform where outrage becomes identity, reaction becomes reach,
            and every opinion is shaped into a tribe.
          </p>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            Videre is the Reverse Mirror platform built around livestream
            commentary, debate spectacle, reaction culture, and identity-driven
            audience warfare. It does not care what side wins. It cares that
            every wound becomes content, every disagreement becomes performance,
            and every reaction teaches the system where to aim next.
          </p>
        </header>

        <div className="mt-12 md:mt-16">
          <OccultFrame>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[0.95rem] md:aspect-[21/9]">
              <SystemImage
                src="/images/systems/videre/videre-platform.png"
                alt="The Videre platform"
                show="Videre"
                priority
                sizes="(max-width: 768px) 92vw, 1152px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0)_100%)] shadow-[inset_0_0_70px_rgba(0,0,0,0.6)]"
              />
            </div>
          </OccultFrame>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-zinc-400 md:text-base">
            Videre’s public promise is voice, community, and influence. Its
            hidden function is emotional routing: turning reaction into location,
            identity into leverage, and outrage into a renewable resource.
          </p>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8f1d26]/55 to-transparent" />
          <span className="text-sm text-[#d7a862]/60">✦</span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8f1d26]/55 to-transparent" />
        </div>

        <header className="mt-12 max-w-3xl space-y-4">
          <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Videre Stream Network
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            Each host serves a different wound in the culture-war ecosystem. None
            of them are simply wrong. Each one carries a partial truth that
            becomes dangerous once the platform teaches it to perform.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 lg:gap-8">
          {streamNetwork.map((entry) => (
            <li key={entry.slug}>
              <StreamPanel entry={entry} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
