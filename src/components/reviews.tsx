import { createTranslator } from "@/i18n/server";

const reviewColors = ["#7c3aed", "#0d9488", "#e11d48", "#2563eb"];

export default async function Reviews({ locale }: { locale: string }) {
  const t = createTranslator(locale, "reviews");

  const reviews = [
    {
      quote: t("r1Quote"),
      name: t("r1Name"),
      role: t("r1Role"),
    },
    {
      quote: t("r2Quote"),
      name: t("r2Name"),
      role: t("r2Role"),
    },
    {
      quote: t("r3Quote"),
      name: t("r3Name"),
      role: t("r3Role"),
    },
    {
      quote: t("r4Quote"),
      name: t("r4Name"),
      role: t("r4Role"),
    },
  ];

  return (
    <section id="reviews" className="bg-warm py-18 md:py-20 dark:bg-dark-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="font-mono text-xs tracking-widest text-zinc-400">
            {t("badge")}
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl dark:text-white">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-200/60 bg-white p-7 dark:border-zinc-700 dark:bg-white/[0.03]"
            >
              <p className="font-serif text-base italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: reviewColors[i] }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    {r.name}
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
