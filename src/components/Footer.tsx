import Link from 'next/link';

const footerLinks = [
  { name: 'Purpose',    href: '/purpose'    },
  { name: 'Heritage',   href: '/heritage'   },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Operations', href: '/operations' },
  { name: 'Contact',    href: '/contact'    },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.05] bg-[#080a09]">

      {/* Main footer body */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-14">

          {/* Brand column */}
          <div className="space-y-6">
            <div className="font-heading text-sm font-bold tracking-[0.35em] text-[#f0f4f1]">
              DUNROSS
            </div>
            <p className="text-xs text-[#8a9691] leading-loose max-w-xs">
              A family investment office providing disciplined capital stewardship and strategic
              investment oversight across Scotland.
            </p>
            <div className="pt-2 space-y-1">
              <p className="text-[10px] text-[#5a6460] leading-loose">
                Titanium 1, King's Inch Place<br />
                Renfrew, PA4 8WF — Scotland
              </p>
            </div>
          </div>

          {/* Navigation column */}
          <div className="space-y-6">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-semibold text-[#5a9e7e]">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#8a9691] hover:text-[#f0f4f1] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="space-y-6">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-semibold text-[#5a9e7e]">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@dunross.co"
                className="block text-xs text-[#8a9691] hover:text-[#f0f4f1] transition-colors duration-300 underline decoration-[#5a9e7e]/25 underline-offset-4"
              >
                info@dunross.co
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-footer bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-[9px] uppercase tracking-[0.25em] font-medium text-[#5a6460]">
            <span>© 2026 Dunross Investments Limited. All rights reserved.</span>
          </div>

          <div className="flex gap-6 text-[9px] uppercase tracking-[0.25em] font-medium text-[#5a6460]">
            <Link href="/privacy" className="hover:text-[#f0f4f1] transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#f0f4f1] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#f0f4f1] transition-colors duration-300">
              Terms
            </Link>
          </div>

        </div>
      </div>

      {/* Attribution */}
      <div className="border-t border-white/[0.04] py-4 text-center">
        <p className="text-sm text-[#5a6460]">
          Website developed by <a href="https://marketing-company.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#5a9e7e] hover:text-[#f0f4f1] transition-colors duration-300 underline underline-offset-2">Marketing Company</a>
        </p>
      </div>

    </footer>
  );
}
