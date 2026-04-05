import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is crochet?",
  description:
    "A beginner-friendly explanation of crochet in everyday language—no assumed fiber-arts background.",
};

export default function WhatIsCrochetPage() {
  return (
    <article className="space-y-6 text-base leading-relaxed text-stone-700">
      <h1 className="text-3xl font-bold tracking-tight text-stone-900">
        What is crochet?
      </h1>
      <p className="text-lg text-stone-700">
        If you are brand new, think of crochet as a way to make fabric with one
        hook and a continuous piece of yarn. You form small loops—called{" "}
        <strong className="font-semibold text-stone-900">stitches</strong>—and
        connect them in rows so the fabric grows in the shape you choose.
      </p>

      <h2 className="mt-10 scroll-mt-24 text-xl font-semibold text-stone-900">
        The simplest mental model
      </h2>
      <p>
        You pull yarn through existing loops to make new loops. Repeat that idea
        thousands of times and you have a scarf, a blanket, a hat, or almost
        anything else people wear or use around the house.
      </p>

      <h2 className="mt-10 scroll-mt-24 text-xl font-semibold text-stone-900">
        Crochet vs knitting (the practical difference)
      </h2>
      <p>
        Knitting usually keeps many stitches live on two needles at once.
        Crochet usually works with one active stitch on the hook (with some fun
        exceptions later). That difference changes how the fabric feels, how fast
        projects go, and how you fix mistakes—neither is “better,” they are just
        different tools.
      </p>

      <h2 className="mt-10 scroll-mt-24 text-xl font-semibold text-stone-900">
        Why people crochet
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Portable projects you can tuck in a bag</li>
        <li>Relaxing, repetitive motion for many makers</li>
        <li>Room to customize colors, textures, and gifts</li>
        <li>
          A creative outlet that does not require a studio full of equipment
        </li>
      </ul>

      <p className="mt-8 rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-600">
        Next: skim{" "}
        <Link
          href="/supplies"
          className="font-medium text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Supplies for beginners
        </Link>{" "}
        so you know what to buy before you watch your first tutorial.
      </p>
    </article>
  );
}
