"use client";

import { useTranslations } from "use-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-zinc-200/60 bg-white py-8 dark:border-zinc-800 dark:bg-dark-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
          <a href="/" className="flex items-center gap-1.5">
            <span className="font-serif text-lg leading-none tracking-tight">
              fixr
            </span>
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          </a>
          <a href="#product" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("product")}
          </a>
          <a href="#pricing" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("pricing")}
          </a>
          <a href="#docs" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("docs")}
          </a>
          <a href="#blog" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("blog")}
          </a>
          <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("privacy")}
          </a>
          <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("terms")}
          </a>
          <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("status")}
          </a>
        </div>
        <p className="text-xs text-zinc-400">
          &copy; 2026 Fixr. {t("tagline")}
        </p>
      </div>
    </footer>
  );
}
