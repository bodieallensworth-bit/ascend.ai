import Link from "next/link";

export default function HairPage() {
  const sections = [
    {
      title: "Salt Spray (Volume)",
      points: [
        "Use on damp hair, blow-dry for best results.",
        "Less is more — avoid crispy texture.",
        "Pair with a good haircut.",
      ],
    },
    {
      title: "Clay / Paste (Shape)",
      points: [
        "Warm it up in hands first.",
        "Apply from back → front so it stays natural.",
        "Matte finish = more masculine look for most styles.",
      ],
    },
    {
      title: "Routine",
      points: [
        "Wash schedule based on your scalp (not trends).",
        "Conditioner on ends, not scalp (usually).",
        "Regular trims keep shape sharp.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
          ← Back home
        </Link>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Hair</h1>
        <p className="mt-2 max-w-prose text-zinc-300">
          Cut + styling routine + the right products. This is the fastest face upgrade for most guys.
        </p>

        <div className="mt-8 grid gap-4">
          {sections.map((s) => (
            <section key={s.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/30 p-4">
                <p className="text-sm font-semibold">Products (coming soon)</p>
                <p className="mt-1 text-sm text-zinc-400">
                  We’ll add your salt spray/clay products with photos + buy links here.
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}