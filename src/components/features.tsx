const features = [
  {
    id: "01",
    title: "Deep AI analysis",
    desc: "Not just stack trace formatting. Fixr understands your code, your runtime, and your stack to give you the exact root cause — with a working fix.",
    tall: true,
    ring: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="16" cy="16" r="12" />
        <path d="M16 10v6l4 4" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Works with your stack",
    desc: "Python, Rust, TypeScript, Go, Java — and 40+ languages. Fixr understands frameworks, package managers, and runtimes.",
    ring: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="6" y="6" width="20" height="20" rx="3" />
        <path d="M12 16h8M16 12v8" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Your tools, zero friction",
    desc: "Starts in the browser with a full-featured web app. CLI and IDE extensions coming soon — so Fixr fits your workflow, not the other way around.",
    ring: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 26V6l18 10L8 26z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Learn while you fix",
    desc: "Every fix comes with a plain-English explanation. Over time, you'll write better code because you actually understand the mistakes.",
    ring: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M16 4l4 12h12l-10 8 4 12-10-8-10 8 4-12L4 16h12l4-12z" />
      </svg>
    ),
  },
];

import { getTranslations } from "next-intl/server";

export default async function Features() {
  const t = await getTranslations("features");

  return (
    <section id="features" className="bg-light-warm py-18 md:py-20 dark:bg-dark-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="font-mono text-xs tracking-widest text-zinc-400">
            {t("badge")}
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl dark:text-white">
            {t("title")}
          </h2>
          <p className="mt-3 text-sm font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:grid-rows-[auto_auto]">
          {features.map((f) => (
            <div
              key={f.id}
              className={
                f.tall
                  ? "col-span-1 row-span-2 flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-8 md:col-span-2"
                  : "rounded-2xl border border-zinc-200/80 bg-white p-8"
              }
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700">
                  {f.ring}
                </div>
                <span className="font-mono text-xs text-zinc-300">
                  {f.id}
                </span>
              </div>
              <h3 className="font-serif text-xl leading-snug tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-zinc-500">
                {f.desc}
              </p>

              {f.tall && (
                <div className="mt-6 space-y-4">
                  <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-zinc-400">
                        app/main.py:42
                      </span>
                      <span className="font-mono font-medium text-emerald-600">
                        94% confident
                      </span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-zinc-200">
                      <div className="h-2 w-[94%] rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-[#0a0a0f] p-4 font-mono text-xs leading-relaxed">
                    <div className="text-zinc-500">
                      {"//"} AI analysis
                    </div>
                    <div className="mt-1.5 text-zinc-300">
                      The variable{" "}
                      <span className="text-white">result</span> is{" "}
                      <span className="text-white">None</span> because
                    </div>
                    <div className="text-zinc-300">
                      <span className="text-accent">fetch_data()</span>{" "}
                      raises on empty input.
                    </div>
                    <div className="mt-2 text-emerald-400">
                      {"//"} Suggested fix
                    </div>
                    <div className="mt-1 text-zinc-300">
                      Add a guard clause before the return statement.
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

            <div className="rounded-2xl border border-zinc-200/80 bg-white p-8">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-8 w-8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="6" y="6" width="20" height="20" rx="3" />
                  <path d="M12 16h8M16 12v8" />
                </svg>
              </div>
              <span className="font-mono text-xs text-zinc-300">03</span>
            </div>
            <h3 className="font-serif text-xl leading-snug tracking-tight">
              Your tools, zero friction
            </h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-zinc-500">
              Starts in the browser with a full-featured web app. CLI and IDE
              extensions coming soon — so Fixr fits your workflow, not the other
              way around.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-900 bg-zinc-900 px-3 py-1 font-mono text-xs text-white">
                Web app
              </span>
              {["VS Code", "Terminal", "JetBrains", "GitHub", "Slack"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-xs text-zinc-400"
                  >
                    {tool}
                    <span className="ml-1 text-[10px] text-zinc-400">
                      (soon)
                    </span>
                  </span>
                ),
              )}
            </div>
            <div className="mt-4 rounded-lg border border-zinc-100 bg-zinc-50/50 px-4 py-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-mono font-medium text-zinc-600">
                  fixr.app
                </span>
                <span className="text-zinc-400">· Live now</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-8">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-8 w-8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M16 4l4 12h12l-10 8 4 12-10-8-10 8 4-12L4 16h12l4-12z" />
                </svg>
              </div>
              <span className="font-mono text-xs text-zinc-300">04</span>
            </div>
            <h3 className="font-serif text-xl leading-snug tracking-tight">
              Learn while you fix
            </h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-zinc-500">
              Every fix comes with a plain-English explanation. Over time,
              you&apos;ll write better code because you actually understand the
              mistakes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
