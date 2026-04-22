import Link from 'next/link';

const navLinks = [
  { name: 'Purpose',    href: '/purpose'    },
  { name: 'Heritage',   href: '/heritage'   },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Operations', href: '/operations' },
  { name: 'Contact',    href: '/contact'    },
];

export default function Navbar() {
  return (
    <header className="w-full px-6 md:px-10 py-10 flex justify-between items-center relative z-20">
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">

        <Link
          href="/"
          className="font-heading text-sm font-bold tracking-[0.35em] text-[#f0f4f1] hover:text-[#5a9e7e] transition-colors duration-500"
        >
          DUNROSS
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[9px] uppercase tracking-[0.3em] font-semibold text-[#8a9691] hover:text-[#f0f4f1] transition-colors duration-400 py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#5a9e7e] group-hover:w-full transition-all duration-500 ease-out" />
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-[#8a9691] hover:text-[#f0f4f1] transition-colors duration-300"
          aria-label="Open navigation menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h10" />
          </svg>
        </button>

      </div>
    </header>
  );
}
