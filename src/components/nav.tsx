"use client";

import { useTranslations, useLocale } from "use-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { useState, useEffect } from "react";

export default function Nav() {
  const t = useTranslations("nav");
  const localeLabels = useTranslations("locale");
  const { theme: currentTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLocale = () => {
    const next = currentLocale === "en" ? "ar" : "en";
    const path = pathname.replace(/^\/[a-z]{2}/, `/${next}`);
    router.replace(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/95 backdrop-blur-sm dark:border-zinc-800 dark:bg-dark-bg/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-1.5">
            <span className="font-serif text-2xl leading-none tracking-tight">
              fixr
            </span>
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-500 md:flex dark:text-zinc-400">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-zinc-200">
              {t("features")}
            </a>
            <a href="#how-it-works" className="hover:text-zinc-900 dark:hover:text-zinc-200">
              {t("howItWorks")}
            </a>
            <a href="#reviews" className="hover:text-zinc-900 dark:hover:text-zinc-200">
              {t("reviews")}
            </a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-zinc-200">
              {t("pricing")}
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onPress={toggleLocale}
            className="min-w-0 px-2 text-sm text-zinc-500"
          >
            {currentLocale === "en" ? localeLabels("ar") : localeLabels("en")}
          </Button>

          {mounted && (
            <Button
              variant="ghost"
              size="sm"
              isIconOnly
              onPress={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="text-zinc-500"
            >
              {currentTheme === "dark" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </Button>
          )}

          <a
            href="/sign-in"
            className="hidden text-sm font-medium text-zinc-500 hover:text-zinc-900 sm:inline dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            {t("signIn")}
          </a>
          <a
            href="/sign-up"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {t("getEarlyAccess")}
          </a>
        </div>
      </div>
    </header>
  );
}
