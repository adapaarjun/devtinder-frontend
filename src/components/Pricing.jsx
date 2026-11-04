
import PolicyLayout, { PolicySection } from "./PolicyLayout";

const Pricing = () => {
  const premiumFeatures = [
    "Increased daily connection requests",
    "Advanced developer profile filters",
    "Additional profile visibility",
    "See who liked your profile",
  ];

  return (
    <PolicyLayout title="Premium Membership & Pricing">
      <PolicySection title="DevTinder Premium">
        <p>
          DevTinder offers optional premium features for developers
          who want access to additional networking functionality.
          Basic features remain available for free.
        </p>
      </PolicySection>

      <div className="rounded-2xl border border-base-300 p-6 md:p-9">
        <h2 className="text-2xl font-bold">
          DevTinder Premium
        </h2>

        <div className="my-4">
          <span className="text-4xl font-bold text-primary">
            ₹99
          </span>
          <span className="text-base-content/60">
            / month
          </span>
        </div>

        <p className="text-base-content/70">
          Monthly subscription with access to premium features.
        </p>

        <div className="divider"></div>

        <h3 className="mb-4 text-lg font-semibold">
          Premium Benefits
        </h3>

        <ul className="space-y-3">
          {premiumFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-success">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <PolicySection title="Payment Information">
        <p>
          Payments are processed securely through our authorised
          payment gateway. The applicable subscription amount will
          be displayed before completing the purchase.
        </p>
        <p>
          The premium subscription is priced at ₹99 per month.
          Any applicable taxes will be displayed during checkout.
        </p>
      </PolicySection>

      <PolicySection title="Subscription & Cancellation">
        <p>
          Users can choose whether to purchase the optional
          premium membership. Users may cancel their subscription
          according to the cancellation terms displayed at checkout.
        </p>
      </PolicySection>

      <PolicySection title="Refund Policy">
        <p>
          Please review our Refund Policy and Terms & Conditions
          before purchasing a premium membership.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
};

export default Pricing;
