// app/about/page.tsx  (App Router)  — or pages/about.tsx (Pages Router)
export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#1d1d1d] text-white">
      {/* ---------- Hero image + Our Story ---------- */}
      <section className="w-11/12 max-w-5xl mx-auto py-12">
        <div className="grid place-items-center">
          <img
            src="/assets/Steamboat-Willie.gif"
            alt="Willie steering the steamboat"
            className="rounded-xl border border-[#faf5ed] w-full max-w-md aspect-[4/3] object-cover bg-black/30"
          />
        </div>

        <div className="mt-6 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>
          <p className="mt-3 opacity-90">
            We started off as a small community with the motivation to bridge entertainment
            and people together by bringing adventurous worlds to life.
          </p>
        </div>

        <hr className="mt-8 border-[#faf5ed]/80" />
      </section>

      {/* ---------- Our Values ---------- */}
      <section className="w-11/12 max-w-5xl mx-auto pb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center">Our Values</h3>

        <div className="relative mt-10 md:h-[540px]">
          {/* Top-left */}
          <ValueCard className="md:absolute md:left-0 md:top-2 max-w-sm">
            <h4 className="text-lg md:text-xl font-semibold">Connect Communities</h4>
            <p className="mt-2 text-sm opacity-90">
              We want to bring people together through our game, events, and adventures.
            </p>
          </ValueCard>

          {/* Mid-right */}
          <ValueCard className="md:absolute md:right-0 md:top-56 max-w-sm mt-8 md:mt-0">
            <h4 className="text-lg md:text-xl font-semibold">Foster Creativity</h4>
            <p className="mt-2 text-sm opacity-90">
              We encourage and are inspired by coming up with innovative ideas and providing
              a space for our team to have their creativity flow.
            </p>
          </ValueCard>

          {/* Bottom-left */}
          <ValueCard className="md:absolute md:left-0 md:bottom-0 max-w-sm mt-8 md:mt-0">
            <h4 className="text-lg md:text-xl font-semibold">Passion for Gaming</h4>
            <p className="mt-2 text-sm opacity-90">
              Bringing our passions for entertaining through our gaming experiences to the
              world is our leading motivation to continue creating for the community.
            </p>
          </ValueCard>

          {/* Dotted connector path (hidden on small screens) */}
          <svg
            className="pointer-events-none absolute inset-0 hidden md:block"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* top-left to mid-right */}
            <path
              d="M 450 90 C 520 120, 620 100, 640 250"
              fill="none"
              stroke="#faf5ed"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="10 30"
            />
            {/* mid area to bottom-left */}
            <path
              d="M 800 420 C 730 600, 550 500, 450 510"
              fill="none"
              stroke="#faf5ed"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="10 18"
            />
            </svg>
        </div>
      </section>
    </main>
  );
}

/* ---- Helper (kept in same file) ---- */
function ValueCard({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={
        "rounded-xl p-5 bg-[#1d1d1df2] ring-1 ring-[#faf5ed]/30 shadow " + className
      }
    >
      {children}
    </div>
  );
}
