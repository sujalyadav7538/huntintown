"use client";
import { useState } from "react";
import { FiArrowRight, FiCheck, FiMail, FiZap } from "react-icons/fi";
import Link from "next/link";

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
  { label: "Can't find trusted people", icon: "🔍" },
  { label: "Too expensive services", icon: "💸" },
  { label: "No reliable platform", icon: "📱" },
  { label: "Low quality providers", icon: "⚠️" },
  { label: "No pricing transparency", icon: "🤷" },
];

export default function EarlyAccessForm({ className = "", variant = "form" }) {
  const [email, setEmail] = useState("");
  const [selectedIntent, setSelectedIntent] = useState([]);
  const [selectedPain, setSelectedPain] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggle = (value, setState, state) =>
    setState(state.includes(value) ? state.filter((i) => i !== value) : [...state, value]);

  async function handleSubmit(e) {
    e.preventDefault();
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
  }

  /* ── SUCCESS STATE ── */
  if (submitted) {
    return (
      <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#060f06] border border-green-500/25 px-7 sm:px-10 py-10 sm:py-14 text-center ${className}`}>
        {/* glows */}
        <div className="absolute inset-0 bg-linear-to-b from-green-500/8 to-transparent pointer-events-none" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-40 bg-green-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* animated check ring */}
          <div className="w-18 h-18 mx-auto mb-6 rounded-full bg-green-500/12 border border-green-500/30 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.12)]">
            <div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center">
              <FiCheck className="w-6 h-6 text-green-400" strokeWidth={3} />
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            You&apos;re in!
          </h3>
          <p className="mt-1.5 text-green-400 font-semibold text-sm sm:text-base">
            Waitlist spot secured
          </p>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
            We&apos;ll notify you the moment HuntIn<span className="text-red-500">Town</span> launches.
            Your feedback directly shapes what we build.
          </p>

          {/* selected tags recap */}
          {selectedIntent.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {selectedIntent.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-red-500/10 border border-red-500/20 text-red-400 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-7 pt-6 border-t border-gray-800/60">
            <p className="text-xs text-gray-700">
              No spam, ever &nbsp;&middot;&nbsp; HuntIn
              <span className="text-red-500">Town</span> Early Access
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ── CTA VARIANT (home page) ── */
  if (variant === "cta") {
    return (
      <div className={className}>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm bg-red-600 hover:bg-red-700 transition-all hover:scale-[1.02] active:scale-[0.98] text-white"
        >
          Explore our vision &amp; get early access <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  /* ── FULL FORM (default) ── */
  return (
    <div className={`bg-[#0d0d0d] border border-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden ${className}`}>

      {/* header strip */}
      <div className="px-6 sm:px-8 md:px-10 pt-7 sm:pt-9 pb-5 border-b border-gray-800/60 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/15 flex items-center justify-center shrink-0">
          <FiZap className="w-4 h-4 text-red-400" />
        </div>
        <div>
          <h3 className="font-bold text-base sm:text-lg leading-tight">
            Help Shape HuntIn<span className="text-red-500">Town</span>
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Takes 30 seconds &nbsp;&middot;&nbsp; Your answers shape what we build
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-6 sm:px-8 md:px-10 py-7 sm:py-9 space-y-8 sm:space-y-10">

        {/* STEP 01 — intent */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
            <span className="text-red-500">01</span>&nbsp;·&nbsp;What will you use it for?
            <span className="text-gray-700 font-normal normal-case tracking-normal">(pick all that apply)</span>
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {intentOptions.map((item) => {
              const active = selectedIntent.includes(item);
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => toggle(item, setSelectedIntent, selectedIntent)}
                  className={`px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-medium transition-all duration-150 ${
                    active
                      ? "bg-red-600 border-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.3)]"
                      : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white bg-transparent"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 02 — pain points */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
            <span className="text-red-500">02</span>&nbsp;·&nbsp;Biggest challenge you face?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {painPoints.map(({ label, icon }) => {
              const active = selectedPain.includes(label);
              return (
                <button
                  type="button"
                  key={label}
                  onClick={() => toggle(label, setSelectedPain, selectedPain)}
                  className={`flex items-center gap-3 text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-150 ${
                    active
                      ? "bg-red-600/10 border-red-500/50 text-white"
                      : "border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 bg-[#111111]"
                  }`}
                >
                  <span className="text-base shrink-0">{icon}</span>
                  <span className="flex-1">{label}</span>
                  {active && (
                    <FiCheck className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 03 — email */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
            <span className="text-red-500">03</span>&nbsp;·&nbsp;Get early access
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full pl-11 pr-10 py-4 rounded-xl bg-[#1a1a1a] border border-gray-800 text-white placeholder-gray-600 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 hover:border-gray-600 transition-all disabled:opacity-60 text-sm"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </div>
            <button
              type="submit"
              disabled={!email || loading}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-red-600 hover:bg-red-700 disabled:bg-red-600/40 disabled:cursor-not-allowed transition-all active:scale-[0.98] text-white whitespace-nowrap"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  Join Waitlist <FiArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
          {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
          <p className="text-xs text-gray-700 mt-3">No spam, ever. We only send launch updates.</p>
        </div>

      </form>
    </div>
  );
}
