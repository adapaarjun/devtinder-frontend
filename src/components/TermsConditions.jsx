
import PolicyLayout, { PolicySection } from "../components/PolicyLayout";

const TermsConditions = () => {
  return (
    <PolicyLayout title="Terms & Conditions">

      <PolicySection title="1. Acceptance of Terms">
        <p>
          By accessing or using DevTinder, you agree to
          these Terms & Conditions.
        </p>
      </PolicySection>

      <PolicySection title="2. Eligibility">
        <p>
          Users must be at least 18 years old to use DevTinder.
          By registering, you confirm that you meet this requirement.
        </p>
      </PolicySection>

      <PolicySection title="3. User Accounts">
        <ul className="list-disc space-y-2 pl-6">
          <li>Provide accurate registration information.</li>
          <li>Keep login credentials secure.</li>
          <li>Do not impersonate other individuals.</li>
          <li>Do not use accounts for fraudulent activities.</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. User Conduct">
        <p>Users must not:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Harass or abuse other users.</li>
          <li>Upload illegal or harmful content.</li>
          <li>Engage in scams or fraudulent activities.</li>
          <li>Attempt unauthorised access to accounts.</li>
          <li>Misuse or disrupt the platform.</li>
        </ul>
      </PolicySection>

      <PolicySection title="5. Premium Membership">
        <p>
          Certain features may require payment. Applicable
          pricing and membership duration will be displayed
          before purchase.
        </p>
      </PolicySection>

      <PolicySection title="6. Account Suspension">
        <p>
          We may suspend or restrict accounts that violate
          these terms or applicable laws.
        </p>
      </PolicySection>

      <PolicySection title="7. User Content">
        <p>
          Users are responsible for the content they upload
          and must have the necessary rights to share it.
        </p>
      </PolicySection>

      <PolicySection title="8. Service Availability">
        <p>
          We aim to maintain service availability but cannot
          guarantee uninterrupted access.
        </p>
      </PolicySection>

      <PolicySection title="9. Changes to Terms">
        <p>
          Updated terms will be published on this page.
        </p>
      </PolicySection>

      <PolicySection title="10. Contact">
        <p>Email: nagarjunababuadapa@gmail.com</p>
      </PolicySection>

    </PolicyLayout>
  );
};

export default TermsConditions;
