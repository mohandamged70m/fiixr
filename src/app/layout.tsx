import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fixr — AI that explains and fixes your errors",
  description:
    "Fixr uses AI to instantly explain and fix errors in any language. Paste, analyze, fix — in seconds, not hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Providers>{children}</Providers>
    </ClerkProvider>
  );
}
