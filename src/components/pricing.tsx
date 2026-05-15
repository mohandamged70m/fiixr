import { createTranslator } from "@/i18n/server";

export default async function Pricing({ locale }: { locale: string }) {
  const t = createTranslator(locale, "pricing");

  const plans = [
    {
      name: t("freeName"),
      price: "0",
      tagline: t("freeTagline"),
      features: [
        "100 error explanations per month",
        "Web app access",
        "Root cause + plain-English explanation",
        "Step-by-step fix with code snippets",
        "10 languages supported",
        "No credit card required",
      ],
      cta: t("freeCta"),
      dark: false,
    },
    {
      name: t("proName"),
      price: "12",
      tagline: t("proTagline"),
      features: [
        "Unlimited error explanations",
        "Everything in Free",
        "All 30+ languages",
        "CLI access — pipe errors from terminal",
        "VS Code extension",
        "Error history and search",
        "Priority support",
      ],
      cta: t("proCta"),
      dark: true,
    },
    {
      name: t("teamName"),
      price: "39",
      tagline: t("teamTagline"),
      features: [
        "Everything in Pro",
        "Up to 10 seats",
        "Shared error library across the team",
        "Team analytics dashboard",
        "Dedicated support",
      ],
      cta: t("teamCta"),
      dark: false,
    },
  ];

  return (
    <section id="pricing" className="bg-warm py-18 md:py-20 dark:bg-dark-bg">
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

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.dark
                  ? "relative flex flex-col rounded-2xl border border-zinc-800 bg-dark-bg p-8 text-white"
                  : "relative flex flex-col rounded-2xl border border-zinc-200/60 bg-white p-8"
              }
            >
              {plan.dark && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 font-mono text-xs font-medium tracking-wide text-white">
                  Most popular
                </span>
              )}

              <span className="font-mono text-xs tracking-widest text-zinc-400">
                {plan.name}
              </span>

              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className={
                    plan.dark
                      ? "font-serif text-4xl tracking-tight text-white"
                      : "font-serif text-4xl tracking-tight"
                  }
                >
                  ${plan.price}
                </span>
                {plan.price !== "0" && (
                  <span
                    className={
                      plan.dark ? "text-sm text-zinc-400" : "text-sm text-zinc-400"
                    }
                  >
                    {t("perMonth")}
                  </span>
                )}
              </div>

              <p
                className={
                  plan.dark ? "mt-2 text-sm text-zinc-400" : "mt-2 text-sm text-zinc-400"
                }
              >
                {plan.tagline}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg viewBox="0 0 12 12" fill="currentColor" className="h-3 w-3">
                        <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </span>
                    <span className={plan.dark ? "text-zinc-300" : "text-zinc-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={
                  plan.dark
                    ? "mt-8 inline-flex h-11 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
                    : "mt-8 inline-flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
