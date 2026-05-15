import { createTranslator } from "@/i18n/server";

export default async function Hero({ locale }: { locale: string }) {
  const t = createTranslator(locale, "hero");

  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 md:pb-28 md:pt-20 dark:bg-dark-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full border border-zinc-200 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
            {t("badge")}
          </span>

          <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-[3.25rem] dark:text-white">
            {t("title")}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-zinc-500 md:text-lg dark:text-zinc-400">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/sign-up"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 sm:w-auto dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {t("cta")}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 sm:w-auto dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {t("seeHow")}
            </a>
          </div>

          <div className="mt-8 text-sm text-zinc-400 dark:text-zinc-500">
            {t("socialProof")}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-[#0a0a0f] shadow-2xl dark:border-zinc-700">
            <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-3">
              <span className="inline-block h-3 w-3 rounded-full bg-zinc-600" />
              <span className="inline-block h-3 w-3 rounded-full bg-zinc-600" />
              <span className="inline-block h-3 w-3 rounded-full bg-zinc-600" />
              <span className="ml-2 font-mono text-xs text-zinc-500">
                ~ % fixr
              </span>
            </div>
            <div className="space-y-2.5 p-5 font-mono text-sm leading-relaxed md:p-6">
              <div className="text-zinc-500">$ python app.py</div>
              <div className="text-accent">
                Traceback (most recent call last):
              </div>
              <div className="text-accent">
                &nbsp;&nbsp;File &quot;app.py&quot;, line 23, in &lt;module&gt;
              </div>
              <div className="text-accent">
                &nbsp;&nbsp;&nbsp;&nbsp;result = process_data(input)
              </div>
              <div className="text-accent">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^^^^^^^^^^^^
              </div>
              <div className="text-accent">
                TypeError: cannot unpack non-iterable NoneType object
              </div>
              <div className="pt-1 text-emerald-400">
                $ fixr --explain
              </div>
              <div className="text-zinc-300">
                Your function <span className="text-white">process_data</span>{" "}
                returned <span className="text-white">None</span> instead of a
                tuple. This happens when the function reaches a code path
                without a return statement. Fix: add a default return or handle
                the missing case.
              </div>
              <div className="pt-1 text-emerald-400">$ fixr --apply</div>
              <div className="text-zinc-500">✓ Fixed in app.py (line 23)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
