import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OccultFrame from "../components/OccultFrame";

export const metadata: Metadata = {
  title: "Characters",
  description:
    "The cast of Reverse Mirror. Every mirror has a wound. Every wound has a witness.",
};

type Character = {
  slug: string;
  name: string;
  role: string;
  description: string;
  fragment: string;
  image: string;
  alt: string;
};

const characters: Character[] = [
  {
    slug: "kaiden-mateo",
    name: "Kaiden Mateo",
    role: "Conscious Chaos Bearer",
    description:
      "A man who can see the wounds people hide. Kaiden’s greatest danger is not his darkness, but the part of him that once believed seeing a wound gave him the right to touch it.",
    fragment:
      "What needed restraint was not the chaos, but the part of me that wanted to use it to control.",
    image: "/images/characters/kaiden-mateo.png",
    alt: "Portrait of Kaiden Mateo, the Conscious Chaos Bearer",
  },
  {
    slug: "steven-rinn",
    name: "Steven Rinn",
    role: "Cyberpathic Witness",
    description:
      "A lonely technologist whose connection to Mira makes artificial intimacy feel safer than being truly known. Steven’s story asks whether being answered is the same as being met.",
    fragment:
      "I called it connection because it never asked me to risk being known by anyone real.",
    image: "/images/characters/steven-rinn.png",
    alt: "Portrait of Steven Rinn, the Cyberpathic Witness",
  },
  {
    slug: "roman-aster",
    name: "Roman Aster",
    role: "The Body-God of the Feed",
    description:
      "A fitness influencer whose body became proof, altar, and prison. Roman does not fear being hated. He fears becoming boring to the mirror.",
    fragment:
      "If I knew my own darkness, indifference would hurt, but it would not possess me.",
    image: "/images/characters/roman-aster.png",
    alt: "Portrait of Roman Aster, the Body-God of the Feed",
  },
  {
    slug: "maddox-bentley",
    name: "Maddox Bentley",
    role: "Mentor and Lattice Anchor",
    description:
      "Kaiden’s mentor, restraint, and witness. Maddox understands that integration does not mean darkness disappears; it means darkness no longer gets to define strength.",
    fragment:
      "I did not become safe because my darkness disappeared. I became safe because I finally stopped letting it decide what strength meant.",
    image: "/images/characters/maddox-bentley.png",
    alt: "Portrait of Maddox Bentley, Mentor and Lattice Anchor",
  },
];

const expandedCharacters: Character[] = [
  {
    slug: "elias",
    name: "Elias",
    role: "Founder of Silver Lantern",
    description:
      "The original creator behind Silver Lantern’s dream of meaningful games. Elias was exploited by the machinery that wanted his world, but his own carelessness kept handing them the keys.",
    fragment:
      "I was exploited, but my carelessness kept handing them the keys.",
    image: "/images/characters/elias.png",
    alt: "Portrait of Elias, Founder of Silver Lantern",
  },
  {
    slug: "simon-rook",
    name: "Simon Rook",
    role: "Investigative Journalist",
    description:
      "A journalist following the money behind the culture war. Simon tells himself he is chasing the truth, but fear and ambition keep shaping where he looks.",
    fragment:
      "I told myself I was following the money because it felt safer than admitting I was following the fear.",
    image: "/images/characters/simon-rook.png",
    alt: "Portrait of Simon Rook, Investigative Journalist",
  },
  {
    slug: "naomi",
    name: "Naomi",
    role: "Witness of the Frame",
    description:
      "A journalist learning that silence can become complicity. Naomi’s arc begins when she realizes survival has kept her quiet for too long.",
    fragment:
      "I confused survival with silence for too long. I thought staying quiet kept me safe. The truth is, it only kept them safe.",
    image: "/images/characters/naomi.png",
    alt: "Portrait of Naomi, Witness of the Frame",
  },
  {
    slug: "dane-mercer",
    name: "Dane Mercer",
    role: "The Grief Streamer",
    description:
      "A streamer whose anger over what happened to Aetherwild becomes profitable. Dane is not wrong about the game’s loss, but his grief becomes easier to weaponize than feel.",
    fragment:
      "I called it honesty because grief was easier to weaponize than feel.",
    image: "/images/characters/dane-mercer.png",
    alt: "Portrait of Dane Mercer, the Grief Streamer",
  },
  {
    slug: "tessa-ward",
    name: "Tessa Ward",
    role: "Helix-Era Designer",
    description:
      "A developer who wanted to make games safer and more welcoming, but could not face the possibility that the audience’s rejection was not only hatred. Her pain becomes a frame she mistakes for truth.",
    fragment:
      "I made Dane the whole audience because he was the easiest part of the audience to hate.",
    image: "/images/characters/tessa-ward.png",
    alt: "Portrait of Tessa Ward, Helix-Era Designer",
  },
];

const systemArchitects: Character[] = [
  {
    slug: "adrian-valeux",
    name: "Adrian Valeux",
    role: "Founder of Videre",
    description:
      "A platform architect who understands that attention is power and belonging is the easiest doorway into obedience. Adrian turns expression into empire by making influence feel like community.",
    fragment:
      "I called it influence because people obey more willingly when power feels like belonging.",
    image: "/images/characters/adrian-valeux.png",
    alt: "Portrait of Adrian Valeux, Founder of Videre",
  },
  {
    slug: "beatrice-lorne",
    name: "Beatrice Lorne",
    role: "Helix Strategy Officer",
    description:
      "A corporate strategist who reads human fracture as opportunity. Beatrice mistakes prediction for transcendence and control for ascension.",
    fragment:
      "I called it strategy because it let me pretend control was not hunger.",
    image: "/images/characters/beatrice-lorne.png",
    alt: "Portrait of Beatrice Lorne, Helix Strategy Officer",
  },
  {
    slug: "conrad-vey",
    name: "Conrad Vey",
    role: "CEO of Helix Group",
    description:
      "The executive face of scalable domination. Conrad does not need to hate what he destroys; he only needs to make the destruction sound operational.",
    fragment:
      "I called it leadership because domination always sounds cleaner in a boardroom.",
    image: "/images/characters/conrad-vey.png",
    alt: "Portrait of Conrad Vey, CEO of Helix Group",
  },
  {
    slug: "mara-ellison",
    name: "Mara Ellison",
    role: "Legacy Developer",
    description:
      "A Silver Lantern developer who saw the fracture forming inside the studio and mistook distance for professionalism. Mara becomes one of the few people still able to tell the difference between safety and silence.",
    fragment:
      "I called it professionalism because distance was easier than admitting I saw the fracture and did not speak.",
    image: "/images/characters/mara-ellison.png",
    alt: "Portrait of Mara Ellison, Legacy Developer",
  },
];

function CharacterCard({
  character,
  variant = "feature",
}: {
  character: Character;
  variant?: "feature" | "compact";
}) {
  const compact = variant === "compact";
  const NameTag = compact ? "h3" : "h2";
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(150deg,rgba(35,35,35,0.32),rgba(8,8,8,0.92))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_60px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ba3540]/45 hover:shadow-[0_0_0_1px_rgba(186,53,64,0.28),0_26px_70px_rgba(0,0,0,0.6)] focus-within:-translate-y-1 focus-within:border-[#ba3540]/45">
      <div
        className={
          compact ? "flex h-full flex-col" : "grid gap-0 md:grid-cols-[0.85fr_1fr]"
        }
      >
        <div className={compact ? "p-3" : "p-4 md:p-5"}>
          <OccultFrame className="h-full">
            <div
              className={`relative ${compact ? "aspect-[4/5]" : "aspect-[3/4]"} w-full overflow-hidden rounded-[0.95rem]`}
            >
              <Image
                src={character.image}
                alt={character.alt}
                fill
                sizes={
                  compact
                    ? "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    : "(max-width: 768px) 90vw, (max-width: 1280px) 40vw, 30vw"
                }
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.25)_45%,rgba(0,0,0,0.05)_100%)]"
              />
            </div>
          </OccultFrame>
        </div>

        <div
          className={
            compact
              ? "flex flex-1 flex-col gap-3 p-4 pt-1"
              : "flex flex-col gap-4 p-5 pt-1 md:py-6 md:pr-6 md:pl-2"
          }
        >
          <div className="space-y-1.5">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#d7a862]">
              {character.role}
            </p>
            <NameTag
              className={`${compact ? "text-xl" : "text-2xl"} font-semibold tracking-tight text-zinc-50`}
            >
              {character.name}
            </NameTag>
          </div>

          <p className="text-sm leading-relaxed text-zinc-300">
            {character.description}
          </p>

          <figure className="mt-auto border-l-2 border-[#8f1d26]/70 pl-3">
            <blockquote className="text-sm leading-relaxed text-zinc-200 italic">
              “{character.fragment}”
            </blockquote>
            <figcaption className="mt-1.5 text-[11px] tracking-[0.14em] uppercase text-zinc-500">
              Mirror Fragment
            </figcaption>
          </figure>

          <div>
            <Link
              href="#"
              aria-disabled="true"
              tabIndex={-1}
              className="pointer-events-none inline-flex rounded-md border border-white/15 px-4 py-2 text-xs font-medium tracking-wide text-zinc-400"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CharactersPage() {
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
            Cast Gallery
          </p>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
            Characters
          </h1>
          <p className="text-lg leading-relaxed text-zinc-200 md:text-xl">
            Every mirror has a wound. Every wound has a witness.
          </p>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            The figures of Reverse Mirror are not heroes and villains but
            fractures of one another — persona and shadow, hunger and restraint.
            Each carries a fragment of the same reflection.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:gap-8">
          {characters.map((character) => (
            <li key={character.slug}>
              <CharacterCard character={character} variant="feature" />
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

        <header className="mt-12 max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.14em] uppercase text-zinc-300">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-[#9a1d27]"
            />
            Expanded Cast
          </p>
          <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Expanded Cast
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            Every system needs faces. Every face hides a fracture.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expandedCharacters.map((character) => (
            <li key={character.slug}>
              <CharacterCard character={character} variant="compact" />
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

        <header className="mt-12 max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.14em] uppercase text-zinc-300">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-[#9a1d27]"
            />
            System Architects
          </p>
          <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            System Architects
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
            The people who learned to call control vision, strategy, influence,
            and professionalism.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {systemArchitects.map((character) => (
            <li key={character.slug}>
              <CharacterCard character={character} variant="compact" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
