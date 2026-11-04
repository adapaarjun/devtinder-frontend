
import PolicyLayout, { PolicySection } from "../components/PolicyLayout";

const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy">

      <PolicySection title="1. Introduction">
        <p>
          DevTinder respects your privacy. This policy explains
          how we collect, use and protect your information.
        </p>
      </PolicySection>

      <PolicySection title="2. Information We Collect">
        <ul className="list-disc space-y-2 pl-6">
          <li>Name and email address.</li>
          <li>Profile information and photographs.</li>
          <li>Skills and interests.</li>
          <li>Connection requests and platform activity.</li>
          <li>Device and browser information.</li>
          <li>Payment and transaction references.</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. How We Use Your Information">
        <ul className="list-disc space-y-2 pl-6">
          <li>Create and manage user accounts.</li>
          <li>Display profiles and facilitate connections.</li>
          <li>Improve platform functionality.</li>
          <li>Process premium purchases.</li>
          <li>Provide customer support.</li>
          <li>Maintain platform security.</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Payment Information">
        <p>
          Payments are processed through our payment provider,
          such as Razorpay. Payment processing is subject to
          the provider's applicable terms and privacy policy.
        </p>
        <p>
          Our actual handling and storage of payment information
          will be described here.
        </p>
      </PolicySection>

      <PolicySection title="5. Sharing of Information">
        <p>
          Information may be shared with service providers
          supporting our platform or where disclosure is
          required by applicable law.
        </p>
      </PolicySection>

      <PolicySection title="6. Data Security">
        <p>
          We use appropriate security measures to protect
          user information. However, no online system can
          guarantee complete security.
        </p>
      </PolicySection>

      <PolicySection title="7. Data Retention">
        <p>
          We retain information for as long as necessary
          to provide our services and meet applicable
          legal requirements.
        </p>
      </PolicySection>

      <PolicySection title="8. Account Deletion">
        <p>
          Users may request account deletion by contacting
          our support team. Explain the actual deletion
          process and any applicable data retention here.
        </p>
      </PolicySection>

      <PolicySection title="9. Policy Updates">
        <p>
          We may update this policy when our data practices
          change. Updated information will be published here.
        </p>
      </PolicySection>

      <PolicySection title="10. Contact">
        <p>Email: YOUR_SUPPORT_EMAIL@example.com</p>
      </PolicySection>

    </PolicyLayout>
  );
};

export default PrivacyPolicy;
