
import { Link } from "react-router-dom";

const PolicyLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">

      <div className="mx-auto max-w-4xl rounded-2xl bg-base-100 p-6 shadow-md md:p-10">

        {/* Back to Home */}
        <Link
          to="/"
          className="link link-primary text-sm font-medium"
        >
          ← Back to DevTinder
        </Link>

        {/* Page Title */}
        <h1 className="mt-6 text-3xl font-bold">
          {title}
        </h1>

        {/* Last Updated */}
        <p className="mt-2 mb-8 text-sm opacity-60">
          Last updated: 4 November 2026
        </p>

        {/* Page Content */}
        <div className="space-y-6 text-base leading-7">
          {children}
        </div>

      </div>

    </div>
  );
};

// Reusable section component
export const PolicySection = ({ title, children }) => {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">
        {title}
      </h2>

      <div className="space-y-2 opacity-80">
        {children}
      </div>
    </section>
  );
};

export default PolicyLayout;
