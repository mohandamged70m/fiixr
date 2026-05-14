export default function CTASection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
          Stop losing hours to errors you don&apos;t{" "}
          <span className="italic">understand</span>
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 sm:w-auto"
          >
            Get early access
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 sm:w-auto"
          >
            See how it works
          </a>
        </div>

        <p className="mt-4 text-sm text-zinc-400">
          Free forever <span className="mx-2">·</span> No credit card{" "}
          <span className="mx-2">·</span> 2-minute setup
        </p>
      </div>
    </section>
  );
}
