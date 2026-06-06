/* eslint-disable react/no-unescaped-entities */
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
"use client";
import Image from "next/image";
import logo from "../../public/logo.jpeg";
import {
  FiVideo,
  FiMapPin,
  FiDollarSign,
  FiBriefcase,
  FiCheckCircle,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import PreviewCarousel from "@/components/PreviewCorousal";
import { useState } from "react";
import bg1 from "../../public/bg3.jpeg";

export default function Home() {
  const features = [
    {
      title: "Post Requirement",
      description: "Tell what you need in seconds and reach multiple people.",
      icon: <FiBriefcase className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Get Multiple Offers",
      description: "Receive responses from different verified providers.",
      icon: <FiUsers className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Smart Matching",
      description: "Find the right person based on your requirement.",
      icon: <FiTrendingUp className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Verified Users",
      description: "Connect only with trusted professionals.",
      icon: <FiCheckCircle className="w-6 h-6 text-red-500" />,
    },
  ];

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit() {
    console.log("Submitting email:", email);
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    setSubmitted(true);
    setEmail("");
  }

  return (
    <main className="min-h-screen bg-[#000000] text-white">
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src={bg1}
          alt="background"
          fill
          className="object-cover opacity-30"
          priority
        />

        {/* Bottom fade — melds into the black page background */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-in-left">
            Never Settle <br />
            For First <span className="text-red-500">Option.</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto animate-slide-in-left-delay">
            HuntinTown helps you post your requirement and receive multiple
            responses from verified local professionals and businesses.
          </p>
        </div>
      </section>

      <PreviewCarousel />

      {/* FEATURES */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold">How HuntinTown Works</h2>
          <p className="text-gray-400 mt-3">
            A simple way to connect requirements with solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-400 text-sm mt-3">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY + EARLY ACCESS CTA (MERGED) */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            {/* subtle glow background */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-red-600/20 via-transparent to-transparent" />

            <div className="relative z-10">
              {/* COMMUNITY BADGE */}
              <p className="text-red-500 text-sm font-medium mb-3">
                👥 100+ Early Community Members Already Joined
              </p>

              {/* MAIN TITLE */}
              <h2 className="text-4xl md:text-5xl font-bold">
                Join the First Wave of{" "}
                <span className="text-red-500">HuntinTown</span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                We’re building a real local network where people post
                requirements and get multiple responses from verified
                professionals.
                <br />
                Early users from our WhatsApp community are already inside.
              </p>

              {/* AVATAR STACK */}
              {/* AVATAR STACK */}
              <div className="flex justify-center mt-8">
                <div className="flex -space-x-3">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#111111] overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* +100 badge */}
                  <div className="w-10 h-10 rounded-full bg-red-600 border-2 border-[#111111] flex items-center justify-center text-xs font-bold text-white">
                    +100
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-xs mt-2">
                Active early community members
              </p>

              {/* EMAIL CTA */}
              {submitted ? (
                <div className="mt-10 max-w-xl mx-auto bg-[#1a1a1a] border border-green-600 rounded-2xl px-8 py-6 text-center">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3 className="text-xl font-bold text-green-400">
                    You're on the list!
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    Congratulations! We'll notify you as soon as HuntinTown
                    launches. Stay tuned!
                  </p>
                </div>
              ) : (
                <>
                  <div className="mt-10 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
                    {/* INPUT */}
                    <div className="relative flex-1">
                      <input
                        type="email"
                        placeholder="Enter your email for early access"
                        className={`w-full px-5 py-4 rounded-xl bg-[#1a1a1a] border text-white 
        transition-all duration-300 outline-none
        focus:border-red-500 focus:ring-2 focus:ring-red-500/20
        hover:border-gray-600
        ${submitted ? "opacity-60 cursor-not-allowed" : "border-gray-800"}
      `}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        disabled={submitted}
                      />

                      {/* subtle glow dot */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!email || submitted}
                      className={`relative px-6 py-4 rounded-xl font-medium transition-all duration-300
      flex items-center justify-center gap-2
      ${
        submitted
          ? "bg-green-600 cursor-not-allowed"
          : !email
            ? "bg-red-600/40 cursor-not-allowed"
            : "bg-red-600 hover:bg-red-700 active:scale-[0.98]"
      }
      text-white
    `}
                    >
                      {submitted ? (
                        <>
                          <span>Joined</span> <span>✓</span>
                        </>
                      ) : (
                        <>Get Early Access</>
                      )}
                    </button>
                  </div>

                  <p className="text-gray-500 text-sm mt-4">
                    No spam. Only launch updates.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <h3 className="text-2xl font-bold">
            Huntin<span className="text-red-500">Town</span>
          </h3>

          <p className="text-gray-500 mt-2">Never Settle For First Option</p>

          <p className="text-gray-600 text-sm mt-3">
            © 2026 HuntinTown. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
