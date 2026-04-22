import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { neighborhoods } from '@/lib/neighborhoods';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative min-h-[88vh] flex items-end pb-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.45] contrast-[1.15] scale-[1.03]"
            style={{ backgroundImage: "url('/hero.jpg')" }}
          />
          <div className="absolute inset-0 hero-overlay" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10">
            <p className="reveal text-[10px] uppercase tracking-[0.45em] font-medium text-[#5a9e7e] mb-8">
              Dunross Investments Limited
            </p>
            <h1 className="reveal-d1 font-heading text-3xl md:text-5xl lg:text-6xl font-light italic leading-[1.2] text-[#f0f4f1] max-w-3xl mb-10">
              "We commit to the long term, building lasting value through trust, diligence, and shared respect."
            </h1>
            <p className="reveal-d2 text-[#8a9691] font-heading italic text-base md:text-lg">
              — John Dunn, Chairman &amp; Founder
            </p>
          </div>
        </section>

        {/* ── The Firm ──────────────────────────────────────────── */}
        <section className="py-28 md:py-36 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-24">

              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-[#5a9e7e]">
                  The Firm
                </span>
                <span className="rule mt-4" />
              </div>

              <div className="space-y-7">
                <p className="font-heading text-2xl md:text-3xl font-light leading-relaxed text-[#f0f4f1]">
                  Dunross Investments Limited is a disciplined custodian of capital, specialising in{' '}
                  <em className="text-[#5a9e7e] not-italic font-medium">
                    Commercial Project Management &amp; Surveying
                  </em>{' '}
                  across Scotland.
                </p>
                <p className="text-[#8a9691] text-base md:text-lg leading-loose font-light">
                  Rooted in Scottish heritage and dedicated to the enduring stewardship of our partners
                  and communities, our approach transcends mere financial returns. We believe that true
                  prestige is built on unwavering principles, patience, and a profound respect for the
                  legacy we create.
                </p>
                <p className="text-[#8a9691] text-base leading-loose font-light">
                  From the Georgian terraces of Edinburgh's New Town to the regenerated waterfront at
                  Leith, we bring precision, accountability, and deep local knowledge to every engagement.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Practice Areas ────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 md:px-10 bg-[#0e1310]">
          <div className="max-w-5xl mx-auto">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-[#5a9e7e]">
                Our Practice
              </span>
              <p className="text-[#5a6460] text-xs max-w-xs text-right hidden md:block">
                Three pillars of sustained, disciplined excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">

              <div className="bg-[#0e1310] p-10 md:p-12 space-y-5 group hover:bg-[#131a16] transition-colors duration-500">
                <div className="w-8 h-px bg-[#5a9e7e] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-heading text-xl text-[#f0f4f1] italic font-light">
                  Our Purpose
                </h3>
                <p className="text-[#8a9691] text-sm leading-relaxed">
                  Discover the principles and the people that drive our commitment to enduring, responsible value creation.
                </p>
                <Link
                  href="/purpose"
                  className="inline-block text-[9px] uppercase tracking-[0.3em] font-semibold text-[#5a9e7e] group-hover:text-[#f0f4f1] transition-colors duration-300"
                >
                  Explore
                </Link>
              </div>

              <div className="bg-[#0e1310] p-10 md:p-12 space-y-5 group hover:bg-[#131a16] transition-colors duration-500">
                <div className="w-8 h-px bg-[#5a9e7e] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-heading text-xl text-[#f0f4f1] italic font-light">
                  Our Heritage
                </h3>
                <p className="text-[#8a9691] text-sm leading-relaxed">
                  Deeply rooted in Scotland, we operate with enduring respect for community, environment, and built heritage.
                </p>
                <Link
                  href="/heritage"
                  className="inline-block text-[9px] uppercase tracking-[0.3em] font-semibold text-[#5a9e7e] group-hover:text-[#f0f4f1] transition-colors duration-300"
                >
                  Explore
                </Link>
              </div>

              <div className="bg-[#0e1310] p-10 md:p-12 space-y-5 group hover:bg-[#131a16] transition-colors duration-500">
                <div className="w-8 h-px bg-[#5a9e7e] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-heading text-xl text-[#f0f4f1] italic font-light">
                  Our Operations
                </h3>
                <p className="text-[#8a9691] text-sm leading-relaxed">
                  A disciplined portfolio spanning premium property, strategic services, and precision manufacturing.
                </p>
                <Link
                  href="/operations"
                  className="inline-block text-[9px] uppercase tracking-[0.3em] font-semibold text-[#5a9e7e] group-hover:text-[#f0f4f1] transition-colors duration-300"
                >
                  Explore
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── Areas We Serve ────────────────────────────────────── */}
        <section className="py-28 md:py-36 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">

            <div className="mb-16">
              <span className="text-[10px] uppercase tracking-[0.45em] font-semibold text-[#5a9e7e]">
                Areas We Serve
              </span>
              <span className="rule mt-4" />
              <p className="text-[#8a9691] text-sm leading-relaxed max-w-lg">
                Serving Edinburgh's most distinguished neighbourhoods with the precision and accountability
                that enduring properties demand.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {neighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${n.slug}`}
                  className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#5a6460] hover:text-[#f0f4f1] transition-colors duration-300 border border-white/[0.05] hover:border-white/10 py-5 px-3 text-center leading-relaxed"
                >
                  {n.name}
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ── Contact CTA ───────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 md:px-10 bg-[#0e1310] border-t border-white/[0.04]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="space-y-4 max-w-lg">
              <h2 className="font-heading text-2xl md:text-3xl italic font-light text-[#f0f4f1] leading-snug">
                Speak with our team
              </h2>
              <p className="text-[#8a9691] text-sm leading-relaxed">
                We welcome enquiries from property owners, developers, and institutional partners
                seeking specialist commercial project management and surveying expertise across Scotland.
              </p>
            </div>
            <a
              href="mailto:info@dunross.co"
              className="shrink-0 inline-flex items-center gap-3 border border-[#5a9e7e]/40 hover:border-[#5a9e7e] text-[#5a9e7e] hover:text-[#f0f4f1] hover:bg-[#5a9e7e]/10 px-8 py-4 text-[10px] uppercase tracking-[0.35em] font-semibold transition-all duration-500"
            >
              Get in touch
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
