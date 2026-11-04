
import PolicyLayout, { PolicySection } from "../components/PolicyLayout";

const AboutUs = () => {
  return (
    <PolicyLayout title="About DevTinder">

      <PolicySection title="Welcome to DevTinder">
        <p>
          DevTinder is a platform designed to help developers
          discover, connect and interact with other people in
          the developer community.
        </p>
      </PolicySection>

      <PolicySection title="Our Mission">
        <p>
          Our mission is to make it easier for developers to
          discover people with similar interests, build meaningful
          connections and expand their networks.
        </p>
      </PolicySection>

      <PolicySection title="What We Offer">
        <ul className="list-disc space-y-2 pl-6">
          <li>Create and manage developer profiles.</li>
          <li>Discover other developers.</li>
          <li>Send and manage connection requests.</li>
          <li>Connect with other users.</li>
          <li>Access additional premium features.</li>
        </ul>
      </PolicySection>

      <PolicySection title="Our Commitment">
        <p>
          We aim to provide a user-friendly platform where
          developers can discover and build connections.
        </p>
      </PolicySection>

      <PolicySection title="Contact Us">
        <p>
          Email: nagarjunababuadapa@gmail.com
        </p>
      </PolicySection>

    </PolicyLayout>
  );
};

export default AboutUs;
