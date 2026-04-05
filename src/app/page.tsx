import Link from "next/link";

const topics = [
  {
    href: "/what-is-crochet",
    title: "What is crochet?",
    blurb:
      "A plain-language intro: what “crochet” means, how it differs from knitting, and why people love it.",
  },
  {
    href: "/supplies",
    title: "Supplies for beginners",
    blurb:
      "Yarn, hooks, and a few helpful extras—what they are and what you actually need first.",
  },
  {
    href: "/how-projects-work",
    title: "How projects work",
    blurb:
      "Stitches, rows, tension, and reading your fabric—big ideas without a single pattern to decode.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section
        aria-labelledby="hero-heading"
        className="rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50 to-white px-6 py-10 shadow-sm sm:px-10 sm:py-12"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">
          Beginner crochet guide
        </p>
        <h1
          id="hero-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl"
        >
          Learn crochet from zero—no jargon required
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-700">
          Crochet Hub is a simple, free mini guide for people who are curious
          about crochet but do not know the vocabulary yet. Start with what it
          is, what to buy, and how fabric is built—then explore deeper pages when
          you are ready.
        </p>
        <p className="mt-4 text-sm text-stone-600">
          No account, no payment, and no pattern library—just clear explanations
          you can read in order.
        </p>
      </section>

      <section aria-labelledby="topics-heading" className="space-y-6">
        <div>
          <h2
            id="topics-heading"
            className="text-2xl font-semibold text-stone-900"
          >
            Start here
          </h2>
          <p className="mt-2 text-stone-600">
            Pick a topic—each page is one click from the header, too.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-1">
          {topics.map(({ href, title, blurb }) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-amber-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                <span className="text-lg font-semibold text-amber-900">
                  {title}
                </span>
                <p className="mt-2 text-stone-600">{blurb}</p>
                <span className="mt-3 inline-block text-sm font-medium text-amber-800">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
