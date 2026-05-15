import { createTranslator } from "@/i18n/server";

export default async function Features({ locale }: { locale: string }) {
  const t = createTranslator(locale, "features");

  const features = [
    {
      id: "01",
      title: t("f1Title"),
      desc: t("f1Body"),
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="16" r="12" />
          <path d="M16 10v6l4 4" />
        </svg>
      ),
    },
    {
      id: "02",
      title: t("f2Title"),
      desc: t("f2Body"),
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 26V6l18 10L8 26z" />
        </svg>
      ),
    },
    {
      id: "03",
      title: t("f3Title"),
      desc: t("f3Body"),
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="6" width="20" height="20" rx="3" />
          <path d="M12 16h8M16 12v8" />
        </svg>
      ),
    },
    {
      id: "04",
      title: t("f4Title"),
      desc: t("f4Body"),
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="9" width="20" height="14" rx="2" />
          <path d="M16 6v4M12 23v3M20 23v3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="product" className="bg-light-warm py-18 md:py-20 dark:bg-dark-bg">
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

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.id}
              className="rounded-2xl border border-zinc-200/80 bg-white p-8"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700">
                  {f.icon}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
