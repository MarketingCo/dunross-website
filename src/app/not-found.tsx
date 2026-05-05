import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Dunross Investments Limited',
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080a09] text-[#f0f4f1]">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-10 py-24">
        <h1 className="font-heading text-7xl md:text-9xl font-light italic leading-none text-[#f0f4f1]">
          404
        </h1>
        <p className="mt-8 font-heading text-xl md:text-2xl italic font-light text-[#8a9691]">
          Page Not Found
        </p>
        <p className="mt-4 text-[#5a6460] text-sm md:text-base max-w-md text-center leading-relaxed">
          The page you're looking for might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 border border-[#5a9e7e]/40 hover:border-[#5a9e7e] text-[#5a9e7e] hover:text-[#f0f4f1] hover:bg-[#5a9e7e]/10 px-8 py-4 text-[10px] uppercase tracking-[0.35em] font-semibold transition-all duration-500"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
