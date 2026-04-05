import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supplies for beginners",
  description:
    "Intro to yarn, crochet hooks, and a few optional tools—written for someone shopping for the first time.",
};

export default function SuppliesPage() {
  return (
    <article className="space-y-6 text-base leading-relaxed text-stone-700">
      <h1 className="text-3xl font-bold tracking-tight text-stone-900">
        Supplies for beginners
      </h1>
      <p className="text-lg text-stone-700">
        You only need two essentials to try crochet:{" "}
        <strong className="font-semibold text-stone-900">yarn</strong> and a{" "}
        <strong className="font-semibold text-stone-900">crochet hook</strong>.
        Everything else is optional quality of life. This page explains what
        those words mean before you stand in a craft aisle feeling overwhelmed.
      </p>

      <h2 className="mt-10 scroll-mt-24 text-xl font-semibold text-stone-900">
        Yarn
      </h2>
      <p>
        Yarn is the string you crochet with. It comes in different thicknesses
        (often called{" "}
        <strong className="font-semibold text-stone-900">weight</strong>),
        fibers (acrylic, cotton, wool, blends), and colors. For your first
        practice swatch, choose a smooth, light-colored{" "}
        <strong className="font-semibold text-stone-900">medium-weight</strong>{" "}
        yarn (labels often say “worsted” or “medium 4”). Light colors make it
        easier to see each stitch while you learn.
      </p>

      <h2 className="mt-10 scroll-mt-24 text-xl font-semibold text-stone-900">
        Crochet hook
      </h2>
      <p>
        A crochet hook has a handle and a small hooked tip that catches yarn and
        pulls it through loops. Hooks are sized to match yarn—thicker yarn needs
        a larger hook. Yarn labels usually suggest a hook size range; pick one
        in the middle of that range to start.
      </p>

      <h2 className="mt-10 scroll-mt-24 text-xl font-semibold text-stone-900">
        Helpful but optional
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong className="font-semibold text-stone-900">Scissors</strong> for
          snipping yarn cleanly
        </li>
        <li>
          <strong className="font-semibold text-stone-900">Tapestry needle</strong>{" "}
          (a blunt tip) for weaving in loose ends
        </li>
        <li>
          <strong className="font-semibold text-stone-900">Stitch markers</strong>{" "}
          if a pattern tells you to mark a spot
        </li>
        <li>
          <strong className="font-semibold text-stone-900">Measuring tape</strong>{" "}
          when you care about size (hats, garments)
        </li>
      </ul>

      <p className="mt-8 rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-600">
        Ready for concepts? Read{" "}
        <Link
          href="/how-projects-work"
          className="font-medium text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          How projects work
        </Link>{" "}
        to see how stitches and rows turn string into fabric.
      </p>
    </article>
  );
}
