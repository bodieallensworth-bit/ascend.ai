import Link from "next/link";

export default function FacialPage() {
  const sections = [
    {
      title: "Debloating",
      points: [
        "Hydration + sodium balance (don’t crash diet).",
        "Sleep and stress are huge for facial puffiness.",
        "Track what causes inflammation (dairy, late meals, alcohol).",
      ],
    },
    {
      title: "Skincare Routine",
      points: [
        "Cleanser (gentle), moisturizer, SPF — daily.",
        "Add actives slowly (retinoid / niacinamide).",
        "Consistency beats expensive products.",
      ],
    },
    {
      title: "Grooming & Jawline Basics",
      points: [
        "Facial hair shape can create a stronger jaw illusion.",
        "Neckline clean-up is a cheat code.",
        "Low body-fat helps, but don’t chase extremes.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
          ← Back home
        </Link>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Facial</h1>
        <p className="mt-2 max-w-prose text-zinc-300">
          Clear skin, less puffiness, and clean grooming. Boring basics done consistently.
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
                  We’ll add your skincare/debloat products with photos + buy links here.
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}