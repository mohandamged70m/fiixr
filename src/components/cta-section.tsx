import { createTranslator } from "@/i18n/server";

export default async function CTASection({ locale }: { locale: string }) {
  const t = createTranslator(locale, "cta");

  return (
    <section className="bg-white py-20 md:py-24 dark:bg-dark-bg">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl dark:text-white">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
          {t("subtitle")}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 sm:w-auto dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {t("cta")}
          </a>
          <a
            href="#docs"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 sm:w-auto dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {t("secondary")}
          </a>
        </div>

        <p className="mt-4 text-sm text-zinc-400 dark:text-zinc-500">
          {t("microcopy")}
        </p>
      </div>
    </section>
  );
}
