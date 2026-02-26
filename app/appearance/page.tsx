import Link from "next/link";

export default function AppearancePage() {
  const sections = [
    {
      title: "Height Boosters",
      points: [
        "Choose the right lift height (start subtle).",
        "Match lift type to shoe style (sneaker vs dress).",
        "Comfort + posture matters more than max height.",
      ],
    },
    {
      title: "Shoulder Pad Polos",
      points: [
        "Subtle structure > obvious padding.",
        "Fit checklist: sleeve length, shoulder seam, chest width.",
        "Best colors: black, charcoal, navy, white.",
      ],
    },
    {
      title: "Posture & Proportions",
      points: [
        "Daily posture reset (2–3 mins).",
        "Neck/upper back mobility for cleaner silhouette.",
        "Clothing proportions: taper, hem length, collar structure.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
          ← Back home
        </Link>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Appearance</h1>
        <p className="mt-2 max-w-prose text-zinc-300">
          The “frame” upgrades: height, shoulders, posture, and style. Simple rules, clean execution.
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

              {/* Product area (we’ll fill this later) */}
              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/30 p-4">
                <p className="text-sm font-semibold">Products (coming soon)</p>
                <p className="mt-1 text-sm text-zinc-400">
                  When you have product photos + a buy link, we’ll add them here.
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}