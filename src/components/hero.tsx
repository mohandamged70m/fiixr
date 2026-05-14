export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full border border-zinc-200 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-500">
            Now in public beta
          </span>

          <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-[3.25rem]">
            Stop losing hours to errors you don&apos;t{" "}
            <span className="italic">understand</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-zinc-500 md:text-lg">
            Fixr uses AI to instantly explain and fix errors in any language.
            Terminal, IDE, or CI — paste the error, get the fix. In seconds, not{" "}
            <span className="italic">hours</span>.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 sm:w-auto"
            >
              Get early access
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 sm:w-auto"
            >
              See how it works
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-zinc-400">
            <div className="flex -space-x-2">
              {["#7c3aed", "#0d9488", "#e11d48", "#2563eb"].map(
                (color, i) => (
                  <div
                    key={i}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white ring-2 ring-white/50"
                    style={{ backgroundColor: color }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ),
              )}
            </div>
            <span className="text-zinc-400">
              Loved by developers at{" "}
              <span className="font-medium text-zinc-600">1,200+</span> teams
            </span>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-[#0a0a0f] shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-3">
              <span className="inline-block h-3 w-3 rounded-full bg-zinc-600" />
              <span className="inline-block h-3 w-3 rounded-full bg-zinc-600" />
              <span className="inline-block h-3 w-3 rounded-full bg-zinc-600" />
              <span className="ml-2 font-mono text-xs text-zinc-500">
                ~ % fixr
              </span>
            </div>
            <div className="space-y-2.5 p-5 font-mono text-sm leading-relaxed md:p-6">
              <div className="text-zinc-500">$ python app.py</div>
              <div className="text-accent">
                Traceback (most recent call last):
              </div>
              <div className="text-accent">
                &nbsp;&nbsp;File &quot;app.py&quot;, line 23, in &lt;module&gt;
              </div>
              <div className="text-accent">
                &nbsp;&nbsp;&nbsp;&nbsp;result = process_data(input)
              </div>
              <div className="text-accent">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^^^^^^^^^^^^
              </div>
              <div className="text-accent">
                TypeError: cannot unpack non-iterable NoneType object
              </div>
              <div className="pt-1 text-emerald-400">
                $ fixr --explain
              </div>
              <div className="text-zinc-300">
                Your function <span className="text-white">process_data</span>{" "}
                returned <span className="text-white">None</span> instead of a
                tuple. This happens when the function reaches a code path
                without a return statement. Fix: add a default return or handle
                the missing case.
              </div>
              <div className="pt-1 text-emerald-400">$ fixr --apply</div>
              <div className="text-zinc-500">✓ Fixed in app.py (line 23)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
