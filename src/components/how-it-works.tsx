const steps = [
  {
    num: "01",
    label: "paste",
    title: "Paste your error",
    accent: "error",
    desc: "Paste the error into the Fixr web app. It automatically detects the language, framework, and root cause — no configuration needed. (CLI &amp; IDE paste coming soon.)",
    outcome: "You know exactly what went wrong.",
  },
  {
    num: "02",
    label: "analyze",
    title: "AI analysis",
    accent: "analyzes",
    desc: "Fixr traces the error through your stack, identifies the failing code path, and explains the root cause in plain language — not compiler jargon.",
    outcome: "You understand why it broke.",
  },
  {
    num: "03",
    label: "fix",
    title: "Instant fix",
    accent: "fix",
    desc: "Get a working, context-aware fix you can apply with one click. Fixr edits the right file at the right line — or generates a patch you can review first.",
    outcome: "You didn't lose the afternoon to Stack Overflow.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-dark-bg py-18 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="font-mono text-xs tracking-widest text-zinc-500">
            HOW IT WORKS
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl">
            Three seconds. Three steps.
          </h2>
          <p className="mt-3 text-sm font-light leading-relaxed text-zinc-400">
            From error to fix faster than your first Google search.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group rounded-2xl border border-zinc-800 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.06]"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  {step.num}
                </span>
                <span className="font-mono text-xs tracking-wide text-zinc-600">
                  / {step.label}
                </span>
              </div>
              <h3 className="font-serif text-xl leading-snug tracking-tight text-white">
                {step.title.replace(step.accent, "")}
                <span className="text-accent"> {step.accent}</span>
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-zinc-400">
                {step.desc}
              </p>
              <p className="mt-4 text-sm font-medium text-zinc-300">
                {step.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
