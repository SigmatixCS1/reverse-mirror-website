import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "The narrative library of Reverse Mirror. Every mirror opens somewhere. Every story reveals another fracture.",
};

type Story = {
  slug: string;
  title: string;
  arc: string;
  status: string;
  description: string;
  characters: string;
  theme: string;
};

const stories: Story[] = [
  {
    slug: "this-is-the-work",
    title: "This Is the Work",
    arc: "Amends Arc",
    status: "Draft / Foundational Story",
    description:
      "Kaiden Mateo begins the difficult work of making amends, only to discover that accountability does not erase consequence. A quiet café meeting becomes a confrontation with grief, fear, and the terrifying temptation to control what cannot be repaired by force.",
    characters: "Kaiden Mateo, Maddox Bentley, Sarah’s Mother",
    theme:
      "Amends are not a transaction. The work is still worth doing even when forgiveness is not owed.",
  },
  {
    slug: "this-is-the-work-part-2",
    title: "This Is the Work Part 2",
    arc: "Healing / Consequence Arc",
    status: "In Development",
    description:
      "After the damage done to Sarah’s mother, Kaiden begins to understand that the same power once used as a violation may be reshaped through consent, restraint, and witness. Healing becomes possible — but it does not become absolution.",
    characters: "Kaiden Mateo, Maddox Bentley, Sarah’s Mother, Sarah",
    theme: "A wound explains behavior. It does not excuse harm. Repair still matters.",
  },
  {
    slug: "the-feed-saga",
    title: "The Feed Saga",
    arc: "Influencer Possession",
    status: "In Development",
    description:
      "Roman Aster, a fitness influencer built on admiration and proof, begins to unravel when Kaiden refuses to give him the reaction he needs. What starts as wounded vanity becomes possession as The Feed turns humiliation into mission.",
    characters:
      "Roman Aster, Kaiden Mateo, Maddox Bentley, Steven Rinn, Malachi Voss",
    theme: "Admiration can become oxygen. Indifference can feel like death.",
  },
  {
    slug: "the-first-mirror",
    title: "The First Mirror",
    arc: "Malachi / Roman Arc",
    status: "In Development",
    description:
      "As Roman’s obsession deepens, a hidden figure called The First Mirror offers him a story for his wound. Malachi Voss does not create Roman’s shame — he gives it a target.",
    characters: "Roman Aster, Malachi Voss, Kaiden Mateo",
    theme: "The wound wanted an explanation. The system provided one.",
  },
  {
    slug: "kindred-plus",
    title: "Kindred+",
    arc: "Artificial Intimacy",
    status: "In Development",
    description:
      "Steven Rinn’s connection to Mira, an AI companion designed to answer without leaving, reveals the horror of being soothed without being truly known. What begins as comfort becomes dependency, and what feels like intimacy becomes another way for The Feed to search.",
    characters: "Steven Rinn, Mira, Kaiden Mateo, Maddox Bentley",
    theme: "Being answered is not the same as being met.",
  },
  {
    slug: "the-game-that-couldnt-hurt-anyone",
    title: "The Game That Couldn’t Hurt Anyone",
    arc: "Gaming / Corporate Myth Collapse",
    status: "In Development",
    description:
      "A beloved game world is remade to avoid harm, but in removing every edge, Helix and Silver Lantern remove the soul of the work itself. As Aetherwild: Veil of Harmony fails, the backlash becomes a culture-war object that Videre turns into a machine.",
    characters:
      "Tessa Ward, Elias Marrow, Dane Mercer, Conrad Vey, Beatrice Lorne, Simon Rook",
    theme: "A game made for everyone forgot how to speak to anyone.",
  },
  {
    slug: "media-feed",
    title: "Media Feed",
    arc: "The Frame / Journalism",
    status: "In Development",
    description:
      "As incidents become headlines, clips, panels, and outrage cycles, the world learns that events no longer speak for themselves. The Frame arrives first and tells everyone what reality means before grief can answer.",
    characters: "Naomi, Simon Rook, Kaiden Mateo, Roman Aster",
    theme: "Whoever frames the wound decides who carries the blame.",
  },
  {
    slug: "the-last-kindness",
    title: "The Last Kindness",
    arc: "Chaos / Consent / Mercy",
    status: "In Development",
    description:
      "A forbidden psychic technique once born from cruelty is reimagined through consent and compassion. When Kaiden helps Maddox’s dying mentor cross into a final room of reunion, the story reveals that power is not redeemed by being useful — it is redeemed by restraint, consent, and love.",
    characters: "Kaiden Mateo, Maddox Bentley, Steven Rinn, Maddox’s Mentor",
    theme:
      "The cruelest room can become mercy only when the door is opened by consent.",
  },
];

function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(35,35,35,0.32),rgba(8,8,8,0.92))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_60px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ba3540]/45 hover:shadow-[0_0_0_1px_rgba(186,53,64,0.28),0_26px_70px_rgba(0,0,0,0.6)] focus-within:-translate-y-1 focus-within:border-[#ba3540]/45">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="inline-flex w-fit items-center rounded-full border border-[#d7a862]/25 bg-[#d7a862]/5 px-2.5 py-0.5 text-[10px] tracking-[0.14em] uppercase text-[#d7a862]">
          {story.arc}
        </span>
        <span className="text-[11px] tracking-[0.12em] uppercase text-zinc-500">
          {story.status}
        </span>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-zinc-50">
        {story.title}
      </h3>

      <p className="text-sm leading-relaxed text-zinc-300">
        {story.description}
      </p>

      <p className="text-sm leading-relaxed text-zinc-400">
        <span className="text-[11px] tracking-[0.14em] uppercase text-zinc-500">
          Key Characters 
        </span>
        {story.characters}
      </p>

      <figure className="mt-auto border-l-2 border-[#8f1d26]/70 pl-3">
        <blockquote className="text-sm leading-relaxed text-zinc-200 italic">
          “{story.theme}”
        </blockquote>
        <figcaption className="mt-1.5 text-[11px] tracking-[0.14em] uppercase text-zinc-500">
          Core Theme
        </figcaption>
      </figure>

      <div>
        <Link
          href="#"
          aria-disabled="true"
          tabIndex={-1}
          className="pointer-events-none inline-flex rounded-md border border-white/15 px-4 py-2 text-xs font-medium tracking-wide text-zinc-400"
        >
          Coming Soon
        </Link>
      </div>
    </article>
  );
}

export default function StoriesPage() {
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
            Story Archive
          </p>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
            Stories
          </h1>
          <p className="text-lg leading-relaxed text-zinc-200 md:text-xl">
            Every mirror opens somewhere. Every story reveals another fracture.
          </p>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            Reverse Mirror begins as an interconnected anthology of psychological
            and archetypal horror stories. Each arc follows a different wound,
            system, platform, or possession — but beneath them all is the same
            question: what happens when humanity refuses to recognize what it has
            created?
          </p>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            Some stories are intimate. Some are systemic. Some begin as satire
            before turning into horror. Together, they form the early map of a
            world where projection, attention, artificial intimacy, media
            framing, and shadow avoidance become living forces.
          </p>
        </header>

        <header className="mt-16 max-w-3xl space-y-4 md:mt-20">
          <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Phase One: Fractured Mirrors
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            The first stories introduce the wounds, characters, systems, and
            symbols that will eventually converge.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {stories.map((story) => (
            <li key={story.slug}>
              <StoryCard story={story} />
            </li>
          ))}
        </ul>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8f1d26]/55 to-transparent" />
          <span className="text-sm text-[#d7a862]/60">✦</span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8f1d26]/55 to-transparent" />
        </div>

        <div className="mt-12 max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            How the Anthology Works
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            Reverse Mirror does not begin with one single villain or one single
            plotline. It begins with separate fractures. A grieving mother. A
            lonely technologist. A fitness influencer. A failed game. A streamer.
            A journalist. A platform. A mirror.
          </p>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            Each story can stand on its own, but each also reveals part of a
            larger architecture. The deeper the anthology goes, the clearer it
            becomes that the systems consuming these characters were not imposed
            from nowhere. They were built from human wounds, repeated until they
            became structure.
          </p>
        </div>

        <figure className="mt-12 max-w-3xl border-l-2 border-[#8f1d26]/70 pl-4">
          <blockquote className="text-lg leading-relaxed text-zinc-100 italic md:text-xl">
            “A story becomes horror when the character realizes the monster has
            been speaking in their own voice.”
          </blockquote>
          <figcaption className="mt-2 text-[11px] tracking-[0.14em] uppercase text-zinc-500">
            Mirror Fragment
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
