import { notFound } from "next/navigation";
import I18nProvider from "@/components/i18n-provider";
import { DM_Serif_Display, DM_Sans, DM_Mono } from "next/font/google";
import enMessages from "@/messages/en.json";
import arMessages from "@/messages/ar.json";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400",
});

const locales = ["en", "ar"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const messages = locale === "ar" ? arMessages : enMessages;

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${dmSerif.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased">
        <I18nProvider locale={locale} messages={messages} timeZone="UTC">
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
