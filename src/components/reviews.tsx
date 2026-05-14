const reviews = [
  {
    quote:
      "Fixr understood what our Rust code was trying to do and fixed a borrow checker issue in seconds. I've been fighting that error for two days.",
    initials: "AK",
    color: "#7c3aed",
    role: "Backend eng · Berlin",
    stars: 5,
  },
  {
    quote:
      "I plugged in a 200-line TypeScript error and Fixr gave me the root cause and fix before I finished my coffee. Unreal.",
    initials: "MR",
    color: "#0d9488",
    role: "Full-stack eng · Lisbon",
    stars: 5,
  },
  {
    quote:
      "Our CI pipeline has gone from 'debug for an hour' to 'fixr tells us exactly what's wrong.' Cut our rollout time in half.",
    initials: "CL",
    color: "#e11d48",
    role: "DevOps lead · Toronto",
    stars: 5,
  },
  {
    quote:
      "The explanations are so good I actually understand Python internals now. It's like having a senior dev sitting next to you.",
    initials: "SN",
    color: "#2563eb",
    role: "Junior dev · São Paulo",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-warm py-18 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="font-mono text-xs tracking-widest text-zinc-400">
            REVIEWS
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Loved by the developers who use it
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-200/60 bg-white p-7"
            >
              <div className="flex gap-1">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <span key={s} className="text-accent">
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M8 1.5l1.96 4.02 4.54.66-3.29 3.2.78 4.52L8 11.73l-4.08 2.17.78-4.52L1.5 6.18l4.54-.66L8 1.5z" />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="mt-3 font-serif text-base italic leading-relaxed text-zinc-700">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-700">
                    {r.initials}
                  </div>
                  <div className="text-xs text-zinc-400">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
