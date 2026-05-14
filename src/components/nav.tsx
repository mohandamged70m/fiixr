export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-1.5">
            <span className="font-serif text-2xl leading-none tracking-tight">
              fixr
            </span>
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-500 md:flex">
            <a href="#features" className="hover:text-zinc-900">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-zinc-900">
              How it works
            </a>
            <a href="#reviews" className="hover:text-zinc-900">
              Reviews
            </a>
            <a href="#pricing" className="hover:text-zinc-900">
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm font-medium text-zinc-500 hover:text-zinc-900 sm:inline"
          >
            Sign in
          </a>
          <a
            href="#"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Get early access
          </a>
        </div>
      </div>
    </header>
  );
}
