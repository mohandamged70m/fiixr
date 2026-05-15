const items = [
  ["Python", "TypeError"],
  ["JavaScript", "ReferenceError"],
  ["TypeScript", "TS2322"],
  ["Rust", "borrow checker"],
  ["Go", "nil pointer"],
  ["React", "hook errors"],
  ["Java", "NullPointerException"],
  ["SQL", "syntax errors"],
  ["CSS", "layout bugs"],
  ["Ruby", "NoMethodError"],
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
