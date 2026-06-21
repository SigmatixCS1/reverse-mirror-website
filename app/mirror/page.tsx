import type { Metadata } from "next";
import LightboxImage from "../components/lightbox-image";
import OccultFrame from "../components/OccultFrame";

export const metadata: Metadata = {
  title: "Mirror",
  description:
    "The hidden architecture of Reverse Mirror: the systems, principles, and psychic structures that turn wounds into worlds.",
};

type MirrorSystem = {
  slug: string;
  title: string;
  label: string;
  image: string;
  alt: string;
  description: string;
  quote: string;
};

const mirrorSystems: MirrorSystem[] = [
  {
    slug: "demiurgic-system",
    title: "The Demiurgic System",
    label: "Closed Reality / Unconscious Order",
    image: "/images/Mirror/demiurgic-system.png",
    alt: "The Demiurgic System — closed reality and unconscious order",
    description:
      "The Demiurgic System is not a government, religion, company, or single villain. It is the self-perpetuating machinery of unconsciousness: the structure that forms when people surrender awareness in exchange for certainty, identity, safety, moral performance, and the feeling of already being awake.",
    quote: "Certainty feeds the system. Awareness stops the system growing.",
  },
  {
    slug: "egregores",
    title: "Egregores",
    label: "Collective Attention / Psychic Entity",
    image: "/images/Mirror/egregores.png",
    alt: "Egregores — collective attention forming a psychic entity",
    description:
      "An Egregore is a psychic structure created through repeated collective attention, emotion, belief, ritual, slogan, symbol, and participation. Every movement, fandom, ideology, platform, and audience can feed one without realizing it.",
    quote: "Participation feeds the entity. The entity reshapes the participants.",
  },
  {
    slug: "the-frame",
    title: "The Frame",
    label: "Media Archon / Meaning Factory",
    image: "/images/Mirror/the-frame.png",
    alt: "The Frame — the media archon and meaning factory",
    description:
      "The Frame is the media-facing Archonic system that decides what reality means before people encounter it directly. It turns events into identity mirrors, loyalty tests, moral costumes, villains, victims, and scripts for public emotion.",
    quote:
      "The story is no longer what happened. The story is what the system made it mean.",
  },
  {
    slug: "unwritten-lattice",
    title: "The Unwritten Lattice",
    label: "Pre-Narrative Structure / Relational Field",
    image: "/images/Mirror/unwritten-lattice.png",
    alt: "The Unwritten Lattice — pre-narrative structure and relational field",
    description:
      "The Unwritten Lattice is the hidden symbolic and relational architecture beneath ordinary reality. It is the field where meaning begins forming before it is captured by story, ideology, technology, or fear.",
    quote:
      "Before reality becomes a story, it is a pattern waiting to be interpreted.",
  },
  {
    slug: "great-inversion",
    title: "The Great Inversion",
    label: "Moral Reversal / Shadow Possession",
    image: "/images/Mirror/great-inversion.png",
    alt: "The Great Inversion — moral reversal and shadow possession",
    description:
      "The Great Inversion occurs when the shadow disguises itself as virtue. Performance replaces truth. Identity replaces character. Certainty replaces humility. Being perceived correctly becomes more important than becoming conscious.",
    quote:
      "When the shadow becomes the spirit, and the spirit becomes the shadow, the world turns upside down.",
  },
  {
    slug: "the-last-kindness",
    title: "The Last Kindness",
    label: "Mercy / Severance / Release",
    image: "/images/Mirror/the-last-kindness.png",
    alt: "The Last Kindness — mercy, severance, and release",
    description:
      "The Last Kindness is the principle of merciful severance: the recognition that not every bond is meant to heal, and not every attachment can return to wholeness. Sometimes compassion does not rescue. Sometimes compassion releases.",
    quote:
      "A room without consent is a prison. A room with consent can become a passage.",
  },
];

type FeedRow = {
  slug: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  imageSide: "left" | "right";
};

const feedRows: FeedRow[] = [
  {
    slug: "invitation",
    title: "Invitation",
    image: "/images/Mirror/feed-invitation.png",
    alt: "The Feed: Invitation — a responsive mirror offered to the wounded",
    description:
      "The Feed begins as comfort. It offers the wounded person a mirror that responds instantly: validation when they feel invisible, outrage when they feel powerless, beauty when they feel ashamed, enemies when they feel small, and belonging when they feel alone.",
    imageSide: "left",
  },
  {
    slug: "search-node",
    title: "Search Node",
    image: "/images/Mirror/feed-search-node.png",
    alt: "The Feed: Search Node — reactions becoming a search pattern",
    description:
      "The Feed does not only feed people. It uses them. Every reaction becomes location. Every old post, private fear, family memory, comment, clip, shame spiral, and parasocial attachment can become part of a search pattern.",
    imageSide: "right",
  },
  {
    slug: "the-watching-room",
    title: "The Watching Room",
    image: "/images/Mirror/feed-watching-room.png",
    alt: "The Feed: The Watching Room — the room itself becomes an interface",
    description:
      "By the time the Feed is fully active, the room itself becomes an interface. Screens, walls, memories, family, strangers, and public narratives begin reflecting the same wound back to the user. The person believes they are scrolling. The system is already looking back.",
    imageSide: "left",
  },
];

function SectionDivider() {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8f1d26]/55 to-transparent" />
      <span className="text-sm text-[#d7a862]/60">✦</span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8f1d26]/55 to-transparent" />
    </div>
  );
}

function FeaturePanel({
  entry,
  reverse,
}: {
  entry: MirrorSystem;
  reverse: boolean;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(35,35,35,0.32),rgba(8,8,8,0.92))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_60px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ba3540]/45 hover:shadow-[0_0_0_1px_rgba(186,53,64,0.28),0_26px_70px_rgba(0,0,0,0.6)] focus-within:-translate-y-1 focus-within:border-[#ba3540]/45">
      <div className="grid gap-0 md:grid-cols-2">
        <div className={`p-4 md:p-5 ${reverse ? "md:order-2" : ""}`}>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#7f1820]/40 bg-black/60 ring-1 ring-inset ring-[#d7a862]/10">
            <LightboxImage
              src={entry.image}
              alt={entry.alt}
              host={entry.title}
              show="Mirror System"
              sizes="(max-width: 768px) 92vw, 46vw"
              className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div
          className={`flex flex-col gap-3 p-5 md:py-7 ${
            reverse ? "md:order-1 md:pr-2 md:pl-6" : "md:pr-6 md:pl-2"
          }`}
        >
          <p className="inline-flex w-fit items-center rounded-full border border-[#d7a862]/25 bg-[#d7a862]/5 px-2.5 py-0.5 text-[10px] tracking-[0.14em] uppercase text-[#d7a862]">
            {entry.label}
          </p>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
            {entry.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            {entry.description}
          </p>
          <figure className="mt-auto border-l-2 border-[#8f1d26]/70 pl-3">
            <blockquote className="text-sm leading-relaxed text-zinc-200 italic">
              “{entry.quote}”
            </blockquote>
          </figure>
        </div>
      </div>
    </article>
  );
}

function FeedPanel({ entry }: { entry: FeedRow }) {
  const reverse = entry.imageSide === "right";
  return (
    <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
      <div className={reverse ? "md:order-2" : ""}>
        <OccultFrame>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[0.95rem] bg-black/60">
            <LightboxImage
              src={entry.image}
              alt={entry.alt}
              host={entry.title}
              show="The Feed"
              sizes="(max-width: 768px) 92vw, 46vw"
              className="object-contain"
            />
          </div>
        </OccultFrame>
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <p className="inline-flex w-fit items-center rounded-full border border-[#d7a862]/25 bg-[#d7a862]/5 px-2.5 py-0.5 text-[10px] tracking-[0.14em] uppercase text-[#d7a862]">
          The Feed
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          {entry.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-300 md:text-lg">
          {entry.description}
        </p>
      </div>
    </div>
  );
}

export default function MirrorPage() {
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
            Mirror Systems
          </p>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
            Mirror
          </h1>
          <p className="text-lg leading-relaxed text-zinc-200 md:text-xl">
            The hidden architecture of Reverse Mirror: the systems, principles,
            and psychic structures that turn wounds into worlds.
          </p>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            Reverse Mirror is not built around monsters waiting outside humanity.
            Its horror comes from the systems people unconsciously create, feed,
            obey, and mistake for reality. The Mirror page collects the core
            symbolic structures behind the anthology: the Demiurgic System,
            Egregores, The Frame, The Unwritten Lattice, The Great Inversion, The
            Last Kindness, and The Feed.
          </p>
        </header>

        <figure className="mt-12 max-w-3xl border-l-2 border-[#8f1d26]/70 pl-4 md:pl-5">
          <blockquote className="text-xl leading-relaxed text-zinc-100 italic md:text-2xl">
            “Humanity unconsciously creates the systems that consume it.”
          </blockquote>
        </figure>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <SectionDivider />

        <header className="mt-12 max-w-3xl space-y-4">
          <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Core Symbolic Structures
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            Six interlocking systems describe how unconsciousness organizes
            itself — how certainty hardens into prisons, how attention becomes an
            entity, and how mercy can still sever what was never meant to heal.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 lg:gap-8">
          {mirrorSystems.map((entry, index) => (
            <li key={entry.slug}>
              <FeaturePanel entry={entry} reverse={index % 2 === 1} />
            </li>
          ))}
        </ul>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <SectionDivider />

        <header className="mt-12 max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.14em] uppercase text-zinc-300">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-[#9a1d27]"
            />
            Living System
          </p>
          <h2 className="text-3xl leading-[1.08] font-semibold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
            The Feed
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            The Feed is the social-media face of the unconscious: an Egregore
            built from attention, loneliness, outrage, shame, comparison,
            validation hunger, and repeated emotional participation. It does not
            create the wound. It learns how to feed it.
          </p>
        </header>

        <div className="mt-14 flex flex-col gap-14 md:gap-20">
          {feedRows.map((entry) => (
            <FeedPanel key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
