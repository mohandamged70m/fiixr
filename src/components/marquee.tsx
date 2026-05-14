const items = [
  ["Python", "TypeError"],
  ["Rust", "borrow checker"],
  ["TypeScript", "union mismatch"],
  ["Go", "nil pointer"],
  ["React", "hook rule"],
  ["JavaScript", "undefined"],
  ["Java", "NullPointerException"],
  ["C++", "segfault"],
  ["Ruby", "NoMethodError"],
  ["Swift", "optional unwrap"],
  ["Kotlin", "null safety"],
  ["PHP", "TypeError"],
  ["C#", "NullReferenceException"],
  ["Zig", "alloc error"],
  ["Elixir", "match error"],
  ["Shell", "command not found"],
];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-b border-zinc-200/60 bg-white py-5">
      <div className="animate-marquee flex w-max gap-0">
        {[...items, ...items].map(([lang, error], i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-4 px-6 font-mono text-sm text-zinc-500"
          >
            <span className="text-zinc-800">{lang}</span>
            <span className="text-zinc-300">·</span>
            <span>{error}</span>
            <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
