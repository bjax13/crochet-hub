export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-8 text-center text-sm text-stone-600 sm:px-6">
        <p>
          Crochet Hub is a free beginner guide. Stitch names and spelling follow{" "}
          <span className="font-medium text-stone-800">US crochet terms</span>{" "}
          for now.
        </p>
        <p className="mt-2">© {year} Crochet Hub</p>
      </div>
    </footer>
  );
}
