
import PolicyLayout, { PolicySection } from "../components/PolicyLayout";

const RefundPolicy = () => {
  return (
    <PolicyLayout title="Refund & Cancellation Policy">

      <PolicySection title="1. Overview">
        <p>
          This policy explains how refund and cancellation
          requests for DevTinder premium purchases are handled.
        </p>
      </PolicySection>

      <PolicySection title="2. Payment Confirmation">
        <p>
          Premium access is provided after successful
          payment confirmation. If an amount is debited
          but the purchase is not confirmed, contact support.
        </p>
      </PolicySection>

      <PolicySection title="3. Refund Eligibility">
        <p>
          Refund requests will be reviewed according to
          applicable laws and the circumstances of the transaction.
        </p>
        <p>
          Add your actual refund eligibility conditions here
          before publishing.
        </p>
      </PolicySection>

      <PolicySection title="4. Duplicate Payments">
        <p>
          If you are charged more than once for the same
          purchase, contact us with your transaction references.
        </p>
      </PolicySection>

      <PolicySection title="5. How to Request a Refund">
        <p>Please provide the following information:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Registered email address.</li>
          <li>Payment or order reference.</li>
          <li>Date of payment.</li>
          <li>Amount paid.</li>
          <li>Reason for your request.</li>
        </ul>

        <p className="mt-3">
          Email: YOUR_SUPPORT_EMAIL@example.com
        </p>
      </PolicySection>

      <PolicySection title="6. Refund Processing">
        <p>
          Approved refunds will be initiated through the
          relevant payment method. The time taken to receive
          the refund depends on the payment provider and bank.
        </p>
      </PolicySection>

      <PolicySection title="7. Contact">
        <p>Email: nagarjunababuadapa@gmail.com</p>
      </PolicySection>

    </PolicyLayout>
  );
};

export default RefundPolicy;
