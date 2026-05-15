import { createTranslator } from "@/i18n/server";

export default async function TrustBar({ locale }: { locale: string }) {
  const t = createTranslator(locale, "trustBar");

  const stats = [
    { value: "100", label: t("item1"), desc: t("item1Desc") },
    { value: "14", label: t("item2"), desc: t("item2Desc") },
    { value: "30+", label: t("item3"), desc: t("item3Desc") },
  ];

  return (
    <section className="border-b border-zinc-200/60 bg-light-warm py-14 dark:border-zinc-800 dark:bg-dark-bg">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl tracking-tight md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                {stat.label}
              </div>
              <div className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
