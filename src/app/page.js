// /* eslint-disable react/no-unescaped-entities */
// import Button from "@/components/Button";
// import Image from "next/image";
// import logo from "../../public/logo.jpeg";
// import Hero from "@/components/landing/Hero";
// import ProcessSection from "@/components/landing/ProcessSection";
// import TrustedUsers from "@/components/landing/TrustedUsers";
// import KeyFeatures from "@/components/landing/KeyFeatures";
// import SuccessStories from "@/components/landing/SuccessStories";

// export default function Home() {
//   return (
//     <main className="bg-black text-white">
//       <Hero />
//       <div className="border mb-12 opacity-15 rounded-full w-[97%] m-auto" />{" "}
//       {/* Spacer between sections */}
//       <ProcessSection />
//       <TrustedUsers />
//       <div className="border mb-8 opacity-15 rounded-full w-[97%] m-auto" />{" "}
//       {/* Spacer between sections */}
//       <KeyFeatures />
//       <div className="border mb-12 opacity-15 rounded-full w-[97%] m-auto" />{" "}
//       {/* Spacer between sections */}
//       <SuccessStories />
//       {/* <Footer />  */}
//     </main>
//   );
// }
import Image from "next/image";
import logo from "../../public/logo.jpeg";

export default function Home() {
  const features = [
    {
      title: "Post Your Requirement",
      description:
        "Tell the community what you need and reach the right people instantly.",
    },
    {
      title: "Get Multiple Responses",
      description:
        "Receive offers and recommendations from local professionals.",
    },
    {
      title: "Compare & Choose",
      description:
        "Review responses and select the best fit for your requirement.",
    },
    {
      title: "Verified Connections",
      description:
        "Connect with trusted businesses and service providers.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* HERO */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src={logo}
              alt="HuntinTown"
              width={100}
              height={100}
              className="rounded-2xl"
              priority
            />
          </div>

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            🚀 Launching Soon
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Post Once.
            <br />
            Reach <span className="text-red-500">Many.</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            HuntinTown is building a local requirement marketplace where
            people can post what they need and receive responses from
            verified professionals, businesses, and service providers.
          </p>

          <div className="flex justify-center mt-10">
            <button
              disabled
              className="px-8 py-4 rounded-xl bg-red-600/50 cursor-not-allowed text-white font-medium"
            >
              Launching Soon
            </button>
          </div>
        </div>
      </section>

      {/* PREVIEW CARD */}
      <section className="px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden">
            <div className="border-b border-gray-800 p-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="p-8">
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800">
                <h3 className="font-bold text-xl mb-2">
                  Need Video Editor
                </h3>

                <p className="text-gray-400">
                  Looking for a skilled video editor for a short film project.
                </p>

                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs bg-[#252525] text-gray-300">
                    Video Editing
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs bg-[#252525] text-gray-300">
                    ₹20,000 - ₹30,000
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs bg-[#252525] text-gray-300">
                    New Delhi
                  </span>
                </div>

                <button className="mt-6 px-5 py-2 bg-red-600 rounded-lg text-sm">
                  Offer Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              How HuntinTown Works
            </h2>

            <p className="text-gray-400 mt-3">
              A simple way to connect requirements with solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#111111] border border-gray-800 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                </div>

                <h3 className="font-semibold text-lg">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-red-500">1</h3>
            <p className="text-gray-400 mt-2">Requirement Posted</p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-red-500">Many</h3>
            <p className="text-gray-400 mt-2">Responses Received</p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-red-500">Verified</h3>
            <p className="text-gray-400 mt-2">Local Professionals</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 md:p-14 text-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              🚀 Launching Soon
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              HuntinTown Is Coming Soon
            </h2>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We're working hard to launch a platform that makes finding
              local services and professionals easier than ever.
            </p>

            <button
              disabled
              className="mt-8 px-8 py-4 rounded-xl bg-red-600/50 cursor-not-allowed text-white"
            >
              Launching Soon
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <h3 className="text-2xl font-bold">
            Huntin<span className="text-red-500">Town</span>
          </h3>

          <p className="text-gray-500 mt-2">
            Post Once. Reach Many.
          </p>

          <p className="text-gray-600 text-sm mt-8">
            © 2026 HuntinTown. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}