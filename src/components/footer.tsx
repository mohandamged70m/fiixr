export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-lg leading-none tracking-tight">
            fixr
          </span>
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        </div>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#features" className="hover:text-zinc-600">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-zinc-600">
            How it works
          </a>
          <a href="#reviews" className="hover:text-zinc-600">
            Reviews
          </a>
          <a href="#pricing" className="hover:text-zinc-600">
            Pricing
          </a>
          <a href="#" className="hover:text-zinc-600">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
