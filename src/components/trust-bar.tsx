export default function TrustBar() {
  const stats = [
    { value: "2.4M", label: "Errors explained" },
    { value: "94%", label: "First-fix success" },
    { value: "14s", label: "Average time to fix" },
  ];

  return (
    <section className="border-b border-zinc-200/60 bg-light-warm py-14">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl tracking-tight md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
