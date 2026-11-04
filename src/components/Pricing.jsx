
import PolicyLayout, { PolicySection } from "../components/PolicyLayout";

const Pricing = () => {
  return (
    <PolicyLayout title="Premium Membership & Pricing">

      <PolicySection title="DevTinder Premium">
        <p>
          DevTinder offers optional premium features to users
          who want access to additional functionality.
        </p>
      </PolicySection>

      <div className="card border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body">

          <h2 className="card-title text-2xl">
            DevTinder Premium
          </h2>

          <p className="text-3xl font-bold text-primary">
            ₹[YOUR PRICE]
          </p>

          <p className="text-sm opacity-60">
            Specify whether this is a one-time payment
            or a membership with a defined duration.
          </p>

          <div className="divider"></div>

          <h3 className="font-semibold">Premium Benefits</h3>

          <ul className="list-disc space-y-2 pl-6">
            <li>[Premium feature 1]</li>
            <li>[Premium feature 2]</li>
            <li>[Premium feature 3]</li>
          </ul>

        </div>
      </div>

      <PolicySection title="Payment Information">
        <p>
          Payments are processed through our payment gateway.
          The applicable amount will be displayed before
          completing your purchase.
        </p>
      </PolicySection>

      <PolicySection title="Additional Information">
        <p>
          Please read our Terms & Conditions and Refund Policy
          before purchasing premium membership.
        </p>
      </PolicySection>

    </PolicyLayout>
  );
};

export default Pricing;
