import { createTranslator } from "@/i18n/server";

export default async function HowItWorks({ locale }: { locale: string }) {
  const t = createTranslator(locale, "howItWorks");

  const steps = [
    {
      num: "01",
      title: t("s1Title"),
      body: t("s1Body"),
    },
    {
      num: "02",
      title: t("s2Title"),
      body: t("s2Body"),
    },
    {
      num: "03",
      title: t("s3Title"),
      body: t("s3Body"),
    },
  ];

  return (
    <section id="how-it-works" className="bg-dark-bg py-18 md:py-20 dark:bg-dark-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="font-mono text-xs tracking-widest text-zinc-500">
            {t("badge")}
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group rounded-2xl border border-zinc-800 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.06]"
            >
              <div className="mb-4">
                <span className="font-mono text-xs text-accent">
                  {step.num}
                </span>
              </div>
              <h3 className="font-serif text-xl leading-snug tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-zinc-400">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
