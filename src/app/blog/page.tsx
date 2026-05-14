import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Maintenance & Refurbishment Insights | Dunross',
  description: 'Expert guides on property maintenance, refurbishment, and building services in Edinburgh and the Lothians.',
  openGraph: {
    title: 'Property Maintenance & Refurbishment Insights | Dunross',
    description: 'Expert guides on property maintenance, refurbishment, and building services in Edinburgh and the Lothians.',
    type: 'website',
  },
};

const posts = [
  {
    slug: 'property-maintenance-edinburgh',
    title: 'Property Maintenance Edinburgh: The Complete Guide for Landlords and Property Managers',
    excerpt: 'Discover why proactive property maintenance saves money, prevents disputes, and keeps tenants satisfied across Edinburgh.',
    date: 'May 2026',
    readTime: '8 min read',
  },
  {
    slug: 'bathroom-refurbishment-cost-uk',
    title: 'Bathroom Refurbishment Cost UK: 2026 Pricing Guide for Edinburgh Homeowners',
    excerpt: 'Realistic costs for bathroom renovations in Edinburgh, from budget refreshes to luxury transformations.',
    date: 'May 2026',
    readTime: '7 min read',
  },
  {
    slug: 'kitchen-refurbishment-edinburgh',
    title: 'Kitchen Refurbishment Edinburgh: Design, Budget, and Builder Selection Guide',
    excerpt: 'How to plan a kitchen refurbishment that adds value to your Edinburgh property without breaking the bank.',
    date: 'May 2026',
    readTime: '9 min read',
  },
  {
    slug: 'landlord-certificates-edinburgh',
    title: 'Landlord Certificates Edinburgh: EICR, Gas Safety, and EPC Requirements Explained',
    excerpt: 'Stay compliant with Edinburgh landlord regulations. Essential certificates, renewal dates, and penalties explained.',
    date: 'May 2026',
    readTime: '6 min read',
  },
  {
    slug: 'property-refurbishment-company',
    title: 'How to Choose a Property Refurbishment Company in Edinburgh',
    excerpt: 'What to look for when selecting a refurbishment partner, from insurance and references to project management approach.',
    date: 'May 2026',
    readTime: '7 min read',
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Property Maintenance & Refurbishment Insights
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Expert guides from Dunross — Edinburgh's trusted property maintenance and refurbishment specialists.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
