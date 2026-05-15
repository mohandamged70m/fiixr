"use client";

import { IntlProvider } from "use-intl/react";
import type { ReactNode } from "react";

export default function I18nProvider({
  locale,
  messages,
  timeZone,
  children,
}: {
  locale: string;
  messages: Record<string, unknown>;
  timeZone?: string;
  children: ReactNode;
}) {
  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
      onError={() => {}}
    >
      {children}
    </IntlProvider>
  );
}
