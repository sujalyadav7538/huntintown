"use client";

import { useState } from "react";

const intentOptions = [
  "Home Services",
  "Freelancers",
  "Tutors",
  "Business Services",
  "Designers",
  "Developers",
  "Local Shops",
  "Other",
];

const painPoints = [
  "Don't find trusted people",
  "Too expensive services",
  "No reliable platform",
  "Low quality providers",
  "No transparency in pricing",
];

export default function EarlyAccessInsights() {
  const [selectedIntent, setSelectedIntent] = useState([]);
  const [selectedPain, setSelectedPain] = useState([]);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggle = (value, setState, state) => {
    setState(
      state.includes(value)
        ? state.filter((i) => i !== value)
        : [...state, value]
    );
  };

  const handleSubmit = async () => {
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, intent: selectedIntent, painPoints: selectedPain }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0d1a0d] border border-green-600/30 rounded-2xl sm:rounded-3xl p-10 sm:p-14 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-400">You&apos;re on the list!</h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Thanks for sharing your insights. We&apos;ll reach out as soon as Huntin<span className="text-red-500">Town</span> launches.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
            Help us build better
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold">
            Help Shape HuntIn<span className="text-red-500">Town</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Tell us what you need so we can build the right platform for you.
          </p>
        </div>

        <div className="bg-[#0d0d0d] border border-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 space-y-8 sm:space-y-10">

          {/* INTENT */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              What will you use HuntIn<span className="text-red-500">Town</span> for?
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {intentOptions.map((item) => {
                const active = selectedIntent.includes(item);
                return (
                  <button
                    key={item}
                    onClick={() => toggle(item, setSelectedIntent, selectedIntent)}
                    className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm transition ${
                      active
                        ? "bg-red-600 border-red-600 text-white"
                        : "border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PAIN POINTS */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Biggest problem you face?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {painPoints.map((item) => {
                const active = selectedPain.includes(item);
                return (
                  <button
                    key={item}
                    onClick={() => toggle(item, setSelectedPain, selectedPain)}
                    className={`text-left px-4 py-3 rounded-xl border text-xs sm:text-sm transition ${
                      active
                        ? "bg-red-600 border-red-600 text-white"
                        : "border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 bg-[#111]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">
              Get Early Access
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 rounded-xl bg-[#111] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all text-sm sm:text-base"
              />
              <button
                onClick={handleSubmit}
                disabled={!email || loading}
                className="px-6 py-4 bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl font-semibold text-sm transition whitespace-nowrap"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </button>
            </div>
            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
          </div>

        </div>
      </div>
    </section>
  );
}
