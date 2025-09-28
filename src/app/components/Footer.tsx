// components/Footer.tsx
import Link from "next/link";

const navLeft = [
  { label: "Willie’s Boat Adventures", href: "/" },
  { label: "Our Game", href: "/our-game" },
  { label: "About Us", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Community", href: "/community" },
];

const navRight = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Code of Conduct", href: "/code-of-conduct" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white">
      <div className="w-11/12 max-w-6xl mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-90">
          <ul className="flex flex-wrap items-center gap-6">
            {navLeft.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:opacity-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap items-center gap-6">
            {navRight.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:opacity-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
