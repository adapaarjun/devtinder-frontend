
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base-100">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-base-200">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-32">

          <div>
            <div className="badge badge-primary badge-outline mb-6 px-4 py-3">
              Built for Developers ❤️
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Find Your
              <span className="block text-primary">
                Dev Match.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-base-content/70">
              Discover developers, connect with like-minded people,
              share ideas and build meaningful connections.
              Your next great connection starts here.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/login"
                className="btn btn-primary btn-lg rounded-full px-8"
              >
                Get Started
                <span>→</span>
              </Link>

              <Link
                to="/login"
                className="btn btn-outline btn-lg rounded-full px-8"
              >
                Login
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-base-content/60">
              <span>✓ Create your profile</span>
              <span>✓ Discover developers</span>
              <span>✓ Build connections</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-2xl">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/50">
                    Discover developers
                  </p>
                  <h2 className="text-xl font-bold">
                    Your next connection
                  </h2>
                </div>

                <div className="badge badge-success badge-outline">
                  Online
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-base-300 p-8">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-primary text-7xl text-primary-content shadow-xl">
                  👨‍💻
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold">
                    Meet Developers
                  </h3>
                  <p className="mt-2 text-sm text-base-content/60">
                    Connect through shared interests and skills.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <span className="badge badge-primary badge-lg">React</span>
                <span className="badge badge-secondary badge-lg">Node.js</span>
                <span className="badge badge-accent badge-lg">MongoDB</span>
                <span className="badge badge-outline badge-lg">JavaScript</span>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <div className="btn btn-circle btn-outline btn-error btn-lg">
                  ✕
                </div>
                <div className="btn btn-circle btn-primary btn-lg">
                  ♥
                </div>
              </div>

            </div>

            <div className="absolute -right-4 -top-5 hidden rounded-xl bg-base-100 p-4 shadow-xl sm:block">
              <span className="text-2xl">🚀</span>
              <p className="text-xs font-semibold">Build Together</p>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-xl bg-base-100 p-4 shadow-xl sm:block">
              <span className="text-2xl">💡</span>
              <p className="text-xs font-semibold">Share Ideas</p>
            </div>

          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-primary">
            Why DevTinder?
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            More Than Just Networking
          </h2>

          <p className="mt-5 text-base-content/60">
            A place to discover people who share your passion
            for technology and development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="card-body">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                🔍
              </div>
              <h3 className="card-title text-xl">
                Discover Developers
              </h3>
              <p className="text-base-content/60">
                Explore developer profiles and find people
                with similar interests and technical skills.
              </p>
            </div>
          </div>

          <div className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="card-body">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-3xl">
                🤝
              </div>
              <h3 className="card-title text-xl">
                Build Connections
              </h3>
              <p className="text-base-content/60">
                Send connection requests and build relationships
                with people in the developer community.
              </p>
            </div>
          </div>

          <div className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="card-body">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-3xl">
                🚀
              </div>
              <h3 className="card-title text-xl">
                Grow Together
              </h3>
              <p className="text-base-content/60">
                Share knowledge, exchange ideas and discover
                opportunities to grow together.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="bg-base-200 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Getting Started Is Easy
            </h2>
            <p className="mt-4 text-base-content/60">
              Three simple steps to start building connections.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">

            {[
              {
                number: "01",
                icon: "👤",
                title: "Create Your Profile",
                description: "Showcase your skills, interests and developer experience."
              },
              {
                number: "02",
                icon: "🔎",
                title: "Discover People",
                description: "Explore profiles and discover developers you would like to connect with."
              },
              {
                number: "03",
                icon: "🤝",
                title: "Start Connecting",
                description: "Send connection requests and start meaningful conversations."
              }
            ].map((item) => (
              <div key={item.number} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-4xl text-primary-content shadow-lg">
                  {item.icon}
                </div>

                <p className="mt-6 text-sm font-bold tracking-widest text-primary">
                  STEP {item.number}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-base-content/60">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-primary px-6 py-16 text-center text-primary-content shadow-xl md:px-16">

          <h2 className="text-3xl font-extrabold md:text-5xl">
            Your Developer Community Awaits.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl opacity-80">
            Create your profile, discover developers and start
            building meaningful connections with DevTinder.
          </p>

          <Link
            to="/login"
            className="btn btn-neutral btn-lg mt-8 rounded-full px-10"
          >
            Join DevTinder Today →
          </Link>

        </div>
      </section>

    </div>
  );
};

export default LandingPage;
