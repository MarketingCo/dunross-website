import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dunross Investments Limited",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#080a09] pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-3xl md:text-5xl font-light italic text-[#f0f4f1] mb-12">
          Privacy Policy
        </h1>

        <div className="space-y-10 text-[#8a9691] font-light text-sm leading-relaxed">
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#5a9e7e] mb-4">
              1. Who We Are
            </h2>
            <p>
              Dunross Investments Limited (“we”, “us”, or “our”) is a company registered in Scotland, operating as a family investment office providing capital stewardship and strategic investment services. Our registered office is at Titanium 1, King&apos;s Inch Place, Renfrew, PA4 8WF, Scotland. We are the data controller responsible for the personal information we collect.
            </p>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#5a9e7e] mb-4">
              2. What Data We Collect
            </h2>
            <p>
              We may collect and process the following categories of personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Identity and contact data</strong> — name, job title, organisation, email address, telephone number, and postal address.</li>
              <li><strong>Project and enquiry data</strong> — details of your property, project requirements, budget, and any correspondence.</li>
              <li><strong>Technical data</strong> — IP address, browser type and version, device information, and operating system.</li>
              <li><strong>Usage data</strong> — information about how you use our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#5a9e7e] mb-4">
              3. How We Use Cookies
            </h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience and analyse traffic on our website. The types of cookies we use include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Essential cookies</strong> — necessary for the website to function and cannot be switched off.</li>
              <li><strong>Performance cookies</strong> — help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Functional cookies</strong> — enable the website to provide enhanced functionality and personalisation.</li>
            </ul>
            <p className="mt-2">
              You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#5a9e7e] mb-4">
              4. How We Use Your Information
            </h2>
            <p>
              We will only use your personal data when the law allows us to. Common purposes include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To respond to enquiries and provide investment and asset management services.</li>
              <li>To fulfil our contractual obligations to you.</li>
              <li>To send you relevant updates, newsletters, or invitations (where you have consented).</li>
              <li>To improve our website, services, and client experience.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#5a9e7e] mb-4">
              5. Data Retention
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client and project records are retained for a minimum of six years in accordance with UK tax and company law.
            </p>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#5a9e7e] mb-4">
              6. Your Rights
            </h2>
            <p>
              Under UK data protection law, you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
              <li><strong>Rectification</strong> — request correction of any inaccurate or incomplete data.</li>
              <li><strong>Erasure</strong> — request deletion of your personal data where there is no overriding legal reason for us to retain it.</li>
              <li><strong>Restriction</strong> — request that we restrict the processing of your data.</li>
              <li><strong>Data portability</strong> — request transfer of your data to you or a third party.</li>
              <li><strong>Objection</strong> — object to our processing of your personal data based on legitimate interests.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#5a9e7e] mb-4">
              7. Contact Information
            </h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Email:</strong> info@dunross.co</li>
              <li><strong>Address:</strong> Dunross Investments Limited, Titanium 1, King&apos;s Inch Place, Renfrew, PA4 8WF, Scotland</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#5a9e7e] mb-4">
              8. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. We encourage you to review this page periodically for the latest information.
            </p>
          </section>

          <p className="text-[10px] text-[#5a6460] pt-10 border-t border-white/[0.04]">
            Last Updated: May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
