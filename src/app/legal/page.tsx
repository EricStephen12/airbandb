export default function LegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12 border-b border-gray-200 dark:border-navy pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4">Legal & Privacy</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Last updated: April 10, 2026</p>
      </div>

      <div className="space-y-12 text-gray-800 dark:text-gray-300">
        
        <section>
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-4">1. Corporate Terms of Service</h2>
          <p className="mb-4 leading-relaxed">
            Welcome to LuxStay Corporate. By accessing or using our platform, you agree to be bound by these Corporate Terms of Service. Our services are designated for professional, business, and corporate use. 
          </p>
          <p className="leading-relaxed">
            All luxury properties listed on this platform must meet our internal standards, ensuring fast internet, secure premises, and amenities suitable for business stays.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-4">2. Realtor Agreements</h2>
          <p className="mb-4 leading-relaxed">
            Realtors acting as hosts must hold valid real estate licenses and ensure the accurate representation of property details. LuxStay Corporate reserves the right to review listings and remove properties that fail to maintain a 4.8+ rating.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-4">3. Privacy Policy</h2>
          <p className="mb-4 leading-relaxed">
            We handle corporate data with the highest level of security. Information collected during the booking process, including corporate entity details and executive profiles, is encrypted and strictly used for reservation management and platform improvement.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not sell personal or corporate data to third parties.</li>
            <li>Payment processing is handled via PCI-DSS compliant providers.</li>
            <li>You may request data deletion by contacting our privacy compliance team.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-4">4. Cancellation & Refunds</h2>
          <p className="leading-relaxed">
            Corporate bookings enjoy a flexible cancellation policy. Cancellations made 14 days prior to check-in will receive a full refund. Cancellations within 14 days may be subject to a 20% executive holding fee.
          </p>
        </section>

      </div>
    </div>
  );
}
