// app/community/page.tsx  (Next.js App Router) 
// or pages/community.tsx  (Pages Router)
export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#1d1d1d] text-white">
      {/* ---------- Hero section ---------- */}
      <section className="w-11/12 max-w-5xl mx-auto py-12 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Join Our Community</h1>
        <p className="mt-4 max-w-3xl mx-auto opacity-90">
          Connect with fellow adventurers, share your experiences, and stay up-to-date 
          with the latest news and events! Whether you’re looking for game updates, 
          sneak peeks, or a place to meet other fans — our community is ready to welcome you.
        </p>
      </section>

      <hr className="border-[#faf5ed]/80 w-11/12 max-w-5xl mx-auto" />

      {/* ---------- Socials & Community Values ---------- */}
      <section className="w-11/12 max-w-5xl mx-auto py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Stay Connected</h2>
        <p className="mt-3 text-center opacity-90 max-w-3xl mx-auto">
          Follow us across our platforms and become part of our growing community.
        </p>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-32 bg-[#1d1d1df2] ring-1 ring-[#faf5ed]/30 rounded-xl p-4 hover:bg-[#2a2a2a] transition"
          >
            <img src="/assets/twitter.svg" alt="Twitter" className="w-8 h-8 mb-2 filter brightness-0 invert" />
            <span className="text-sm font-medium">Twitter</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-32 bg-[#1d1d1df2] ring-1 ring-[#faf5ed]/30 rounded-xl p-4 hover:bg-[#2a2a2a] transition"
          >
            <img src="/assets/instagram.svg" alt="Instagram" className="w-8 h-8 mb-2 filter brightness-0 invert" />
            <span className="text-sm font-medium">Instagram</span>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-32 bg-[#1d1d1df2] ring-1 ring-[#faf5ed]/30 rounded-xl p-4 hover:bg-[#2a2a2a] transition"
          >
            <img src="/assets/discord.svg" alt="Discord" className="w-8 h-8 mb-2 filter brightness-0 invert" />
            <span className="text-sm font-medium">Discord</span>
          </a>
        </div>
      </section>

      <hr className="border-[#faf5ed]/80 w-11/12 max-w-5xl mx-auto" />
    </main>
  );
}

/* ---------- Helper component ---------- */
function CommunityCard({
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
