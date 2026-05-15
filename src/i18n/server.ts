import "server-only";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

const messagesMap = { en, ar } as const;

function getNs(locale: string, namespace: string) {
  const msgs = messagesMap[locale as keyof typeof messagesMap] ?? messagesMap.en;
  return (msgs as Record<string, unknown>)[namespace] ?? {};
}

function splitRich(
  str: string,
  tags: Record<string, (chunks: React.ReactNode) => React.ReactNode>
): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = str;

  while (remaining.length > 0) {
    const varMatch = remaining.match(/\{(\w+)\}/);
    const tagMatch = remaining.match(/<(\w+)>([\s\S]*?)<\/\1>/);

    let match: RegExpMatchArray | null = null;
    let isTag = false;

    if (varMatch && tagMatch) {
      if (varMatch.index! <= tagMatch.index!) {
        match = varMatch;
      } else {
        match = tagMatch;
        isTag = true;
      }
    } else if (varMatch) {
      match = varMatch;
    } else if (tagMatch) {
      match = tagMatch;
      isTag = true;
    }

    if (!match) {
      parts.push(remaining);
      break;
    }

    if (match.index! > 0) {
      parts.push(remaining.slice(0, match.index));
    }

    const fn = tags[match[1]];
    if (isTag) {
      parts.push(fn ? fn(match[2]) : match[2]);
    } else {
      parts.push(fn ? fn(match[1]) : `{${match[1]}}`);
    }
    remaining = remaining.slice(match.index! + match[0].length);
  }

  return parts.length === 1 ? parts[0] : parts;
}

export interface Translator {
  (key: string): string;
  rich: (
    key: string,
    tags: Record<string, (chunks: React.ReactNode) => React.ReactNode>
  ) => React.ReactNode;
}

export function createTranslator(locale: string, namespace: string): Translator {
  const ns = getNs(locale, namespace) as Record<string, string>;

  const t = (key: string): string => {
    return ns[key] ?? key;
  };

  t.rich = (
    key: string,
    tags: Record<string, (chunks: React.ReactNode) => React.ReactNode>
  ): React.ReactNode => {
    const val = ns[key];
    if (val === undefined || val === null) return key;
    return splitRich(String(val), tags);
  };

  return t;
}
