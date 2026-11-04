
import PolicyLayout, { PolicySection } from "../components/PolicyLayout";

const ContactUs = () => {
  return (
    <PolicyLayout title="Contact Us">

      <PolicySection title="We're Here to Help">
        <p>
          Have questions or need assistance with your DevTinder
          account? Our support team is available to help.
        </p>
      </PolicySection>

      <PolicySection title="Customer Support">
        <p>
          Email: nagarjunababuadapa@gmail.com
        </p>
        <p>
          Support hours: 09:00 A.M - 8:00 P.M.(MONDAY - FRIDAY)
        </p>
      </PolicySection>

      <PolicySection title="Payment Support">
        <p>
          For payment-related issues, please provide your
          registered email address and payment reference.
        </p>
        <p>
          Never share your card number, CVV or OTP.
        </p>
      </PolicySection>

      <PolicySection title="Account Assistance">
        <p>
          Contact us for assistance with account access,
          profile updates, connection requests or account deletion.
        </p>
      </PolicySection>

    </PolicyLayout>
  );
};

export default ContactUs;
