"use client";

import { useTranslations } from "use-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-zinc-200/60 bg-white py-8 dark:border-zinc-800 dark:bg-dark-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-1.5">
          <span className="font-serif text-lg leading-none tracking-tight">
            fixr
          </span>
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
        </div>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#features" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("features")}
          </a>
          <a href="#how-it-works" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("howItWorks")}
          </a>
          <a href="#reviews" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("reviews")}
          </a>
          <a href="#pricing" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("pricing")}
          </a>
          <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("privacy")}
          </a>
        </div>
      </div>
    </footer>
  );
}
