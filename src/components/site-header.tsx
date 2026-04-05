import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-is-crochet", label: "What is crochet?" },
  { href: "/supplies", label: "Supplies" },
  { href: "/how-projects-work", label: "How projects work" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-amber-900 hover:text-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Crochet Hub
        </Link>

        <nav
          aria-label="Primary"
          className="hidden w-full flex-col gap-1 text-sm font-medium text-stone-700 md:flex md:w-auto md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-x-4 md:gap-y-2"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-2 py-1 hover:bg-stone-100 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              {label}
            </Link>
          ))}
        </nav>

        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-800 shadow-sm marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-2">
              Menu
              <span
                aria-hidden
                className="text-stone-500 transition group-open:rotate-180"
              >
                ▾
              </span>
            </span>
          </summary>
          <nav
            aria-label="Primary mobile"
            className="absolute right-0 z-20 mt-2 min-w-[12rem] rounded-lg border border-stone-200 bg-white py-2 shadow-lg"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-50 focus-visible:bg-stone-50 focus-visible:outline-none"
              >
                {label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
