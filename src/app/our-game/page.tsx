'use client';
export default function OurGame() {
  return (
    <div className="min-h-screen bg-[#1d1d1d] text-white">

      {/* ---------- Hero ---------- */}
      <section className="w-11/12 max-w-6xl mx-auto py-10 border-b border-[#faf5ed]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Your Journey Begins Here</h1>
            <p className="mt-4 text-sm md:text-base opacity-90">
              Explore a world of the past by sailing on a steamboat where you'll discover
              interesting areas, people, and objectives.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="bg-[#faeedc] text-black px-5 py-2 rounded-xl hover:bg-[#f0e1c6]">Buy now</button>
              <button className="bg-transparent border border-[#faeedc] text-white px-5 py-2 rounded-xl hover:bg-[#faeedc] hover:text-black">Learn more</button>
            </div>
          </div>
          <div className="justify-self-end w-full max-w-sm md:max-w-md">
            <img
              src="/assets/Steamboat-Willie.gif"
              alt="Steamboat Scene"
              className="rounded-xl shadow w-full aspect-[4/3] object-cover bg-black/30"
            />
          </div>
        </div>
      </section>

      {/* ---------- Our Game (centered blurb) ---------- */}
      <section className="w-11/12 max-w-4xl mx-auto py-10 text-center border-b border-[#faf5ed]">
        <h2 className="text-2xl md:text-3xl font-bold">Our Game</h2>
        <p className="mt-4 opacity-90">
          Travel the world on a steamboat to uncover areas of the past. You’ll learn stories,
          collect items, and encounter people along the way that will help you on your journey!
          Be wary of dangerous enemies and uncharted waters as you make your way to your destination.
        </p>
      </section>

      {/* ---------- Game Features with dotted path ---------- */}
      <section className="w-11/12 max-w-5xl mx-auto py-12 border-b border-[#faf5ed]">
        <h3 className="text-2xl md:text-3xl font-bold text-center">Game Features</h3>

        <div className="relative mt-10 md:h-[540px]">
          {/* Left card */}
          <FeatureCard className="md:absolute md:left-0 md:top-4 max-w-sm">
            <h4 className="text-lg md:text-xl font-semibold">Visit Striking Lands</h4>
            <p className="mt-2 text-sm opacity-90">
              Along your journey across the precarious rivers, wash ashore to discover remarkable
              lands with their own, unique challenges.
            </p>
          </FeatureCard>

          {/* Right card */}
          <FeatureCard className="md:absolute md:right-0 md:top-56 max-w-sm mt-8 md:mt-0">
            <h4 className="text-lg md:text-xl font-semibold">Meet New People</h4>
            <p className="mt-2 text-sm opacity-90">
              As you travel, you’ll encounter various people who can help guide you on your
              journey and even lend you a helping hand!
            </p>
          </FeatureCard>

          {/* Bottom-left card */}
          <FeatureCard className="md:absolute md:left-0 md:bottom-0 max-w-sm mt-8 md:mt-0">
            <h4 className="text-lg md:text-xl font-semibold">Unlock Tricky Challenges</h4>
            <p className="mt-2 text-sm opacity-90">
              Once you embark on your adventure, you’ll uncover various challenges and face
              difficult enemies that you’ll have to conquer to reach your destinations.
            </p>
          </FeatureCard>

          {/* Dotted connectors (hidden on small screens) */}
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

      {/* ---------- Featured News ---------- */}
      <section className="w-11/12 max-w-6xl mx-auto py-12 border-b border-[#faf5ed]">
        <h3 className="text-2xl md:text-3xl font-bold text-center">Featured News</h3>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <NewsCard title="New Rewards Update" />
          <NewsCard title="Local Play Now Available" />
          <NewsCard title="New Map Update" />
        </div>
      </section>

      {/* ---------- Join the adventure (form) ---------- */}
      <section className="w-11/12 max-w-4xl mx-auto py-12 border-b border-[#faf5ed]">
        <h3 className="text-2xl md:text-3xl font-bold text-center">Join the adventure</h3>
        <p className="mt-4 text-center opacity-90">
          Be part of the community and keep in touch with us through our newsletter! You’ll be the
          first to know any game updates, new features, and events coming up by subscribing.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <LabeledInput label="First Name*" name="firstName" />
          <LabeledInput label="Last Name*" name="lastName" />
          <div className="md:col-span-2">
            <LabeledInput label="Email*" name="email" type="email" />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button className="px-6 py-2 rounded-lg border border-[#faf5ed] hover:bg-[#faf5ed] hover:text-black">
              Subscribe
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

/* ----------------- Helpers (same file) ----------------- */

function FeatureCard({
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

function NewsCard({ title }: { title: string }) {
  // Map titles to their corresponding images
  const getImageSrc = (title: string) => {
    switch (title) {
      case "New Rewards Update":
        return "/assets/trophy.png";
      case "Local Play Now Available":
        return "/assets/domain.png";
      case "New Map Update":
        return "/assets/map.png";
      default:
        return "/assets/trophy.png"; // fallback
    }
  };

  return (
    <article className="rounded-2xl border border-[#faf5ed] p-4">
      <div className="aspect-[4/3] rounded-lg bg-white grid place-content-center mb-4">
        <img 
          src={getImageSrc(title)}
          alt={title}
          className="w-12 h-12 object-contain"
        />
      </div>
      <h4 className="font-medium">{title}</h4>
      <div className="mt-6">
        <a href="#" className="text-sm inline-flex items-center gap-2 opacity-90 hover:opacity-100">
          See more <span aria-hidden>▸</span>
        </a>
      </div>
    </article>
  );
}

function LabeledInput({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm">{label}</span>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-lg bg-transparent border border-[#faf5ed] px-3 py-2 outline-none focus:ring-2 focus:ring-[#faeedc]"
        placeholder=""
      />
    </label>
  );
}
