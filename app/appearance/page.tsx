import Image from "next/image";
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
            <section
              key={s.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6"
            >
              <h2 className="text-xl font-semibold">{s.title}</h2>

              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {s.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Product area */}
              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/30 p-4">
                <p className="text-sm font-semibold">Products</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2 md:items-center">
                  <Image
                    src="/images/shoulder-polo.jpg"
                    alt="Shoulder Pad Polo"
                    width={700}
                    height={520}
                    className="w-full rounded-xl border border-zinc-800 object-cover"
                    priority
                  />

                  <div>
                    <p className="text-sm text-zinc-300">
                      Featured: <span className="font-semibold text-zinc-100">Shoulder Pad Polo</span>
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">
                      Clean structure, subtle lift, looks natural on-body. We’ll swap this for your
                      real product + link when it’s ready.
                    </p>

                    <a
                      href="#"
                      className="mt-4 inline-block rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white"
                    >
                      Buy Now
                    </a>

                    <p className="mt-2 text-xs text-zinc-500">
                      (Replace this button with your real checkout link later.)
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}