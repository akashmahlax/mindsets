import React from "react";
import Head from "next/head";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | MindSets</title>
        <meta name="description" content="MindSets Privacy Policy. Learn how we collect, use, and protect your personal data in our mental health application." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-12 font-sans text-gray-800 bg-white min-h-screen">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-md p-8 text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-blue-100 text-base">Last Updated: June 28, 2025</p>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Welcome to MindSets</h2>
          <p className="text-gray-700 mb-2">MindSets (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the MindSets mobile application and website (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, and protect your information when you use our Service.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-700 font-medium">By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
          </div>
        </section>

        {/* Information Collection */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
            Information We Collect
          </h2>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 space-y-2">
            <h3 className="font-semibold text-gray-800">Personal Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Name, email address, and profile photo</li>
              <li>Session and chat history with counsellors</li>
              <li>Device and usage data for analytics and security</li>
              <li>Payment data (processed securely by third parties)</li>
            </ul>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
            Data Retention Periods
          </h2>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <p className="text-gray-700 mb-4">We retain different types of information for specific periods:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-700 uppercase tracking-wider">Data Type</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700 uppercase tracking-wider">Retention Period</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700 uppercase tracking-wider">Reason</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">Account Information</td>
                    <td className="px-4 py-3 text-gray-600">5 years after last activity</td>
                    <td className="px-4 py-3 text-gray-600">User convenience and legal requirements</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">Health Session Data</td>
                    <td className="px-4 py-3 text-gray-600">7 years after last session</td>
                    <td className="px-4 py-3 text-gray-600">Medical record retention laws</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">Payment Records</td>
                    <td className="px-4 py-3 text-gray-600">10 years</td>
                    <td className="px-4 py-3 text-gray-600">Financial regulations</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">Technical Logs</td>
                    <td className="px-4 py-3 text-gray-600">1 year</td>
                    <td className="px-4 py-3 text-gray-600">Security monitoring</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">Note: Data may be retained longer when required by law or for legitimate business purposes.</p>
          </div>
        </section>

        {/* International Transfers */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
            International Data Transfers
          </h2>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <p className="text-gray-700 mb-3">As a global service, your information may be processed in countries outside your residence, including the United States and other jurisdictions. These countries may have different data protection laws than your own.</p>
            <p className="text-gray-700">We implement appropriate safeguards to protect your data during international transfers.</p>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
            Data Security
          </h2>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>End-to-end encryption for all communications</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication protocols</li>
              <li>Data minimization and pseudonymization where possible</li>
            </ul>
            <p className="text-xs text-gray-500 mt-4 italic">While we strive to protect your data, no security system is impenetrable. We cannot guarantee absolute security.</p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
            Your Data Protection Rights
          </h2>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Access, correct, or delete your personal data</li>
              <li>Restrict or object to certain processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-700 mt-2">To exercise your rights, contact us at <a href="mailto:privacy@mindsets.app" className="text-blue-600 underline">privacy@mindsets.app</a> or use the <a href="/request-delete" className="text-blue-600 underline">Request Deletion page</a>.</p>
          </div>
        </section>

        {/* Children&apos;s Privacy */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
            Children&apos;s Privacy
          </h2>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <p className="text-gray-700 mb-2">MindSets is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us for removal.</p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">7</span>
            Changes to This Policy
          </h2>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <p className="text-gray-700">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Please review periodically.</p>
          </div>
        </section>

        {/* Contact Us */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
            <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">8</span>
            Contact Us
          </h2>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <p className="text-gray-700 mb-2">If you have questions or requests regarding your privacy or this policy, contact us at: <a href="mailto:privacy@mindsets.app" className="text-blue-600 underline">privacy@mindsets.app</a></p>
          </div>
        </section>
      </main>
    </>
  );
}
