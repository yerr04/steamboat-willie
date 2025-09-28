// app/buy/page.tsx (or wherever you keep pages/components)
export default function BuyGame() {
  return (
    <div className="min-h-screen bg-[#1d1d1d] text-white">
      {/* ---------- Main ---------- */}
      <main className="w-11/12 max-w-5xl mx-auto pb-12">
        {/* Title + meta row */}
        <section className="pt-4">
          <h1 className="text-2xl md:text-3xl font-bold">Available Now</h1>

          <div className="mt-1 text-xs md:text-sm opacity-90">
            <div className="font-medium">Willie’s Boat Adventures</div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
              <span>Steamboat Studios</span>
              <span className="opacity-60">|</span>
              <span>Action &amp; Adventure</span>
              <span className="opacity-60">|</span>
              <span>Single player, Controller Support</span>
            </div>
          </div>

          {/* Controls row */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label className="sr-only" htmlFor="platform">Choose platform</label>
            <select
              id="platform"
              className="bg-transparent border border-[#faf5ed] rounded-md px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-[#faeedc]"
              defaultValue="Steam"
            >
              <option className="bg-[#1d1d1d]" value="Steam">Steam</option>
              <option className="bg-[#1d1d1d]" value="Epic">Epic Games</option>
              <option className="bg-[#1d1d1d]" value="Switch">Nintendo Switch</option>
              <option className="bg-[#1d1d1d]" value="PS5">PlayStation 5</option>
              <option className="bg-[#1d1d1d]" value="Xbox">Xbox</option>
            </select>

            <button
              className="ml-1 bg-[#faeedc] text-black px-5 py-2 rounded-lg text-sm hover:bg-[#f0e1c6]"
              aria-label="Buy Willie’s Boat Adventures"
            >
              Buy now
            </button>
          </div>

          {/* Key art */}
          <div className="mt-6 grid place-items-center">
            <img
              src="/assets/Steamboat-Willie.gif"
              alt="Willie steering the steamboat"
              className="rounded-xl border border-[#faf5ed] w-full max-w-md aspect-[4/3] object-cover bg-black/30"
            />
          </div>

          {/* Description */}
          <p className="mt-8 max-w-3xl mx-auto text-center opacity-90">
            Travel the world on a steamboat to uncover areas of the past. You’ll learn stories,
            collect items, and encounter people along the way that will help you along your
            journey! Be wary of dangerous enemies and uncharted waters as you make your way
            to your destination.
          </p>
        </section>

        {/* Feature blurbs (simple list, no connectors on the Buy page) */}
        <section className="mt-10 space-y-6">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Visit Striking Lands</h2>
            <p className="mt-1 text-sm opacity-90 max-w-3xl">
              Along your journey across the precarious rivers, wash ashore to discover remarkable
              lands with their own, unique challenges.
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Meet New People</h2>
            <p className="mt-1 text-sm opacity-90 max-w-3xl">
              As you travel, you’ll encounter various people who can help guide you on your
              journey and even lend you a helping hand!
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Unlock Tricky Challenges</h2>
            <p className="mt-1 text-sm opacity-90 max-w-3xl">
              Once you embark on your adventure, you’ll uncover various challenges and face
              difficult enemies that you’ll have to conquer to reach your destinations.
            </p>
          </div>

          <hr className="mt-8 border-[#faf5ed]" />
        </section>

        {/* Specs row */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <Spec label="Released" value="September 2026" />
          <Spec label="Developer" value="Steamboat Studios" />
          <Spec label="Rating"
            value={<img src="/assets/ESRB.png" alt="Rated E" className="h-8" />}
          />
        </section>
      </main>
    </div>
  );
}

/* ----------------- Small helper ----------------- */

function Spec({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="opacity-70">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}
