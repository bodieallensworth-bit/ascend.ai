export default function Home() {
  const categories = [
    {
      title: "Appearance",
      subtitle: "Height boosters, shoulder polos, posture, style.",
      items: ["Height Boosters", "Shoulder Pad Polos", "Posture Fix", "Style Basics"],
    },
    {
      title: "Facial",
      subtitle: "Debloat, skincare, grooming, jawline basics.",
      items: ["Debloating", "Skincare Routine", "Grooming Kit", "Jawline Basics"],
    },
    {
      title: "Hair",
      subtitle: "Salt spray, clay, texture, hairline support.",
      items: ["Salt Spray", "Clay / Paste", "Texture Routine", "Hairline Care"],
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-zinc-100/10 ring-1 ring-zinc-700/50" />
            <span className="font-semibold tracking-tight">ascend.ai</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="hover:text-zinc-100" href="#appearance">
              Appearance
            </a>
            <a className="hover:text-zinc-100" href="#facial">
              Facial
            </a>
            <a className="hover:text-zinc-100" href="#hair">
              Hair
            </a>
            <a className="hover:text-zinc-100" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#start"
              className="rounded-xl bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-950 hover:bg-white"
            >
              Start Here
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                Build your looksmax plan
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Upgrade Your Appearance.
                <span className="block text-zinc-300">Simple, practical, product-backed.</span>
              </h1>

              <p className="mt-4 max-w-prose text-zinc-300">
                Ascend.ai is a clean hub for height, shoulder width, facial improvement, and hair styling —
                organized into straightforward playbooks.
              </p>

              <div className="mt-6 flex flex-wrap gap-3" id="start">
                <a
                  href="#appearance"
                  className="rounded-xl bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-white"
                >
                  Explore Categories
                </a>
                <a
                  href="#faq"
                  className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-2.5 text-sm font-semibold text-zinc-100 hover:bg-zinc-900/60"
                >
                  How it works
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-400">
                <span className="rounded-full border border-zinc-800 px-3 py-1">No fluff</span>
                <span className="rounded-full border border-zinc-800 px-3 py-1">Actionable routines</span>
                <span className="rounded-full border border-zinc-800 px-3 py-1">Products & guides</span>
              </div>
            </div>

            {/* Preview Card */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Quick Start</p>
                <span className="text-xs text-zinc-400">~2 min</span>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { title: "Pick a goal", desc: "Height, shoulders, face, or hair." },
                  { title: "Follow a routine", desc: "Step-by-step checklist." },
                  { title: "Track progress", desc: "Weekly changes you can see." },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4"
                  >
                    <p className="text-sm font-semibold">{x.title}</p>
                    <p className="mt-1 text-sm text-zinc-300">{x.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/30 p-4">
                <p className="text-xs font-semibold text-zinc-300">Next: add your product links</p>
                <p className="mt-1 text-xs text-zinc-400">
                  We’ll wire these sections to real pages + links next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">Core Categories</h2>
        <p className="mt-2 max-w-prose text-zinc-300">
          Start with the category that gives you the highest ROI. Keep it simple and consistent.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {categories.map((c) => (
            <a
              key={c.title}
              href={`#${c.title.toLowerCase()}`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 hover:bg-zinc-900/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold">{c.title}</p>
                  <p className="mt-1 text-sm text-zinc-300">{c.subtitle}</p>
                </div>
                <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300 group-hover:text-zinc-100">
                  Open →
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {c.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-400/80" />
                    {i}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>

      {/* Detail Sections */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        {[
          {
            id: "appearance",
            title: "Appearance",
            desc: "Shoulder width + height are the fastest “visual upgrades” when done right.",
            bullets: ["Shoulder pad polos (subtle)", "Height boosters (shoe inserts)", "Posture & proportions"],
          },
          {
            id: "facial",
            title: "Facial",
            desc: "The boring basics win: hydration, skin barrier, grooming consistency.",
            bullets: ["Debloating basics", "Simple skincare routine", "Beard/clean shave plan"],
          },
          {
            id: "hair",
            title: "Hair",
            desc: "A good cut + texture products can change your whole face.",
            bullets: ["Salt spray for volume", "Clay/paste for shape", "Routine for consistency"],
          },
        ].map((s) => (
          <div
            key={s.id}
            id={s.id}
            className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-prose text-zinc-300">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <button className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white">
                  View Guide
                </button>
                <button className="rounded-xl border border-zinc-800 bg-zinc-950/30 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-900/60">
                  Product List
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Is this medical advice?",
              a: "No. This is general grooming / style information. Anything health-related should be checked with a professional.",
            },
            {
              q: "Do I need to buy a bunch of products?",
              a: "No. Start with the basics, then add products only if they solve a specific problem.",
            },
            {
              q: "How often will this update?",
              a: "As you add guides and product pages. Vercel auto-deploys whenever you push to GitHub.",
            },
            {
              q: "What’s next after this page?",
              a: "We’ll create dedicated pages for each category + add real product links and a clean layout.",
            },
          ].map((x) => (
            <div key={x.q} className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5">
              <p className="text-sm font-semibold">{x.q}</p>
              <p className="mt-2 text-sm text-zinc-300">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ascend.ai — built on Next.js</p>
          <div className="flex gap-4">
            <a className="hover:text-zinc-200" href="#appearance">
              Appearance
            </a>
            <a className="hover:text-zinc-200" href="#facial">
              Facial
            </a>
            <a className="hover:text-zinc-200" href="#hair">
              Hair
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}