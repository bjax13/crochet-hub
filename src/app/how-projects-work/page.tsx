import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How projects work",
  description:
    "High-level ideas: stitches, rows, tension, and reading fabric—no interactive trainer, just orientation.",
};

export default function HowProjectsWorkPage() {
  return (
    <article className="space-y-6 text-base leading-relaxed text-stone-700">
      <h1 className="text-3xl font-bold tracking-tight text-stone-900">
        How projects work
      </h1>
      <p className="text-lg text-stone-700">
        Patterns and videos zoom in on finger movements. Before you go there, it
        helps to know the big picture: crochet builds fabric by adding stitches
        in rows or rounds, and your personal{" "}
        <strong className="font-semibold text-stone-900">tension</strong>{" "}
        changes how tight or drapey the result feels.
      </p>

      <h2 className="mt-10 scroll-mt-24 text-xl font-semibold text-stone-900">
        Stitches are the building blocks
      </h2>
      <p>
        Each stitch is a loop (or set of loops) anchored into the row below.
        Names like “single crochet” or “double crochet” (US terms used on this
        site) describe how tall that stitch is and how many times you wrap the
        yarn before finishing it. You do not need to memorize them yet—just know
        they are repeatable units, like bricks.
      </p>

      <h2 className="mt-10 scroll-mt-24 text-xl font-semibold text-stone-900">
        Rows and rounds
      </h2>
      <p>
        Flat pieces often grow in{" "}
        <strong className="font-semibold text-stone-900">rows</strong>: you work
        from one edge to the other, turn, and come back. Hats, baskets, and many
        toys grow in{" "}
        <strong className="font-semibold text-stone-900">rounds</strong> around a
        center ring, spiraling or joining each round—patterns will tell you
        which shape you are making.
      </p>

      <h2 className="mt-10 scroll-mt-24 text-xl font-semibold text-stone-900">
        Tension
      </h2>
      <p>
        <strong className="font-semibold text-stone-900">Tension</strong> is how
        firmly you pull the yarn as you work. Tighter tension makes smaller,
        stiffer fabric; looser tension makes drapier fabric. Two people following
        the same pattern can get different sizes because tension differs.
        Beginners often tighten up when concentrating—that is normal.
      </p>

      <h2 className="mt-10 scroll-mt-24 text-xl font-semibold text-stone-900">
        “Reading” your fabric
      </h2>
      <p>
        With practice, you learn to see where each stitch sits: the little “V”
        shapes along the top of a row, the posts below, and where a round begins.
        That skill helps you count stitches, spot mistakes, and place shaping.
        For now, it is enough to know that fabric has a visible structure you
        can learn to recognize.
      </p>

      <p className="mt-8 rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-600">
        New to the word “crochet” itself? Start with{" "}
        <Link
          href="/what-is-crochet"
          className="font-medium text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          What is crochet?
        </Link>
        .
      </p>
    </article>
  );
}
