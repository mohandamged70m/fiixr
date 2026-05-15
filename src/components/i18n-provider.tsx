"use client";

import { IntlProvider } from "use-intl/react";
import type { ReactNode } from "react";

export default function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Record<string, unknown>;
  children: ReactNode;
}) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
