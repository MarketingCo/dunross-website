import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Maintenance Edinburgh: Complete Guide for Landlords | Dunross',
  description: 'Expert property maintenance services in Edinburgh. Proactive maintenance plans, emergency repairs, and compliance management for landlords and property managers.',
  keywords: 'property maintenance Edinburgh, landlord maintenance services, property repairs Edinburgh, building maintenance Lothians',
  openGraph: {
    title: 'Property Maintenance Edinburgh: Complete Guide for Landlords',
    description: 'Expert property maintenance services in Edinburgh. Proactive maintenance plans and compliance management.',
    type: 'article',
    publishedTime: '2026-05-10',
  },
};

export default function PropertyMaintenanceGuide() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Property Maintenance Edinburgh: The Complete Guide for Landlords and Property Managers
          </h1>
          <p className="text-lg text-gray-600">
            Why proactive maintenance saves money, prevents disputes, and keeps tenants satisfied across Edinburgh's rental market.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Edinburgh's rental market is fiercely competitive. With thousands of properties vying for quality tenants, 
            landlords who invest in regular property maintenance consistently achieve higher rents, lower void periods, 
            and fewer disputes. At Dunross, we've spent years managing properties across Edinburgh and the Lothians — 
            and the pattern is clear: proactive maintenance always beats reactive repairs.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            The True Cost of Deferred Maintenance
          </h2>
          <p>
            A leaking tap left for six months doesn't just waste water — it damages cabinets, encourages mould, 
            and can compromise floor structures. That £50 repair becomes a £2,000 replacement. Across a portfolio, 
            these deferred costs compound rapidly.
          </p>
          <p>
            Our data shows that landlords spending £800-£1,200 annually on proactive maintenance save 
            approximately £3,000-£5,000 on emergency repairs and major replacements over a five-year period. 
            The maths is unambiguous.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Essential Property Maintenance Services in Edinburgh
          </h2>
          <p>
            Edinburgh's climate — damp winters, driving rain from the east, and occasional freeze-thaw cycles — 
            demands specific maintenance disciplines:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Roof and gutter maintenance:</strong> Annual inspections prevent water ingress, the single most expensive property repair category.</li>
            <li><strong>Heating system servicing:</strong> Annual boiler services are legally required for rentals and prevent mid-winter failures.</li>
            <li><strong>Electrical safety checks:</strong> EICR certificates every five years, with portable appliance testing for furnished properties.</li>
            <li><strong>Damp and ventilation management:</strong> Edinburgh's humidity means extractor fans, trickle vents, and regular mould inspections are essential.</li>
            <li><strong>Decorating cycles:</strong> Interior refresh every 3-5 years, exterior painting every 5-7 years depending on exposure.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Seasonal Maintenance Calendar
          </h2>
          <p>
            Smart landlords run maintenance to a seasonal rhythm:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Spring:</strong> Gutter clearance, roof inspection, exterior paint touch-ups, garden restoration.</li>
            <li><strong>Summer:</strong> Full exterior decorating, window and door maintenance, heating system power-flushing during low-demand period.</li>
            <li><strong>Autumn:</strong> Boiler servicing, draught-proofing, radiator bleeding, leaf clearance from gutters and drains.</li>
            <li><strong>Winter:</strong> Emergency preparedness, pipe insulation checks, heating response protocols, regular interior inspections.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Compliance: The Non-Negotiables
          </h2>
          <p>
            Edinburgh landlords face stringent regulatory requirements. Failure to comply risks fines up to £50,000 
            and invalidation of insurance. Essential certificates include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>EICR (Electrical Installation Condition Report):</strong> Required every 5 years. Costs £150-£400 depending on property size.</li>
            <li><strong>Gas Safety Certificate:</strong> Annual, legally mandatory for any gas appliance. £60-£90.</li>
            <li><strong>EPC (Energy Performance Certificate):</strong> Required every 10 years. Minimum rating E for rentals.</li>
            <li><strong>Smoke and CO alarms:</strong> Mandatory in all Scottish rental properties. Tested monthly, maintained annually.</li>
            <li><strong>Legionella risk assessment:</strong> Required for all rental properties with water systems.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Choosing a Property Maintenance Partner
          </h2>
          <p>
            Not all maintenance contractors are equal. When selecting a partner for your Edinburgh property portfolio, verify:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Full public liability and employer's liability insurance (£5m minimum)</li>
            <li>Gas Safe registration for any heating work</li>
            <li>NICEIC certification for electrical work</li>
            <li>Transparent pricing with itemised quotes</li>
            <li>24/7 emergency response capability</li>
            <li>Digital reporting and certificate management</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Dunross Property Maintenance Services
          </h2>
          <p>
            We provide comprehensive property maintenance across Edinburgh and the Lothians, from single buy-to-let 
            properties to large portfolios. Our services include scheduled maintenance programmes, emergency repairs, 
            compliance management, and full refurbishment project delivery.
          </p>
          <p>
            Every client receives a dedicated property manager, digital reporting via our client portal, and 
            transparent pricing with no hidden charges. We understand that your property is an investment — 
            our job is to protect and enhance its value.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-10">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Protect Your Investment
            </h3>
            <p className="text-blue-800">
              Contact Dunross today for a free property maintenance assessment. We'll identify immediate priorities, 
              schedule compliance renewals, and build a proactive maintenance plan tailored to your portfolio.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
