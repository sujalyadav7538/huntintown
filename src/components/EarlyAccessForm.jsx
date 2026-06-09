"use client";
import { useState } from "react";
import {
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiMail,
} from "react-icons/fi";
import Link from "next/link";

const intentOptions = [
  { label: "Home Services", emoji: "🏠" },
  { label: "Freelancers", emoji: "💼" },
  { label: "Tutors", emoji: "📚" },
  { label: "Business Services", emoji: "🏢" },
  { label: "Designers", emoji: "🎨" },
  { label: "Developers", emoji: "💻" },
  { label: "Local Shops", emoji: "🛍️" },
  { label: "Other", emoji: "✨" },
];

const painPoints = [
  { label: "Can't find trusted people", icon: "🔍" },
  { label: "Too expensive services", icon: "💸" },
  { label: "No reliable platform", icon: "📱" },
  { label: "Low quality providers", icon: "⚠️" },
  { label: "No pricing transparency", icon: "🤷" },
];

const occupationOptions = [
  { label: "Student", emoji: "🎓" },
  { label: "Freelancer / Consultant", emoji: "💻" },
  { label: "Business Owner", emoji: "🏢" },
  { label: "Working Professional", emoji: "👔" },
  { label: "Homemaker", emoji: "🏡" },
  { label: "Other", emoji: "✨" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateEmail(val) {
  if (!val) return "Email is required";
  if (!EMAIL_RE.test(val)) return "Enter a valid email address";
  return "";
}

const STEPS = ["Use Case", "Challenge", "Occupation", "Get Access"];

export default function EarlyAccessForm({ className = "", variant = "form" }) {
  const [step, setStep] = useState(0);
  const [selectedIntent, setSelectedIntent] = useState([]);
  const [selectedPain, setSelectedPain] = useState([]);
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const toggle = (value, setState, state) =>
    setState(
      state.includes(value)
        ? state.filter((i) => i !== value)
        : [...state, value]
    );

  function handleEmailChange(val) {
    setEmail(val);
    if (emailTouched) setEmailError(validateEmail(val));
  }

  function handleEmailBlur() {
    setEmailTouched(true);
    setEmailError(validateEmail(email));
  }

  function next() {
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
    setServerError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setEmailTouched(true);
    const err = validateEmail(email);
    if (err) { setEmailError(err); return; }

    setLoading(true);
    setServerError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          intent: selectedIntent,
          painPoints: selectedPain,
          occupation,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSubmitted(true);
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  }

  /* ── SUCCESS ── */
  if (submitted) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-[#060f06] border border-green-500/25 px-8 py-12 text-center ${className}`}
      >
        <div className="absolute inset-0 bg-linear-to-b from-green-500/8 to-transparent pointer-events-none" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-36 bg-green-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center">
              <FiCheck className="w-5 h-5 text-green-400" strokeWidth={3} />
            </div>
          </div>
          <h3 className="text-2xl font-extrabold text-white">You&apos;re in!</h3>
          <p className="mt-1 text-green-400 font-semibold text-sm">
            Waitlist spot secured
          </p>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
            We&apos;ll notify you the moment HuntIn
            <span className="text-red-500">Town</span> launches. Your feedback
            directly shapes what we build.
          </p>

          {/* recap chips */}
          <div className="mt-5 flex flex-wrap gap-2 justify-center">
            {occupation && (
              <span className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                {occupation}
              </span>
            )}
            {selectedIntent.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-red-500/10 border border-red-500/20 text-red-400 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-7 text-xs text-gray-700">
            No spam, ever &nbsp;·&nbsp; HuntIn
            <span className="text-red-500">Town</span> Early Access
          </p>
        </div>
      </div>
    );
  }

  /* ── CTA VARIANT ── */
  if (variant === "cta") {
    return (
      <div className={className}>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm bg-red-600 hover:bg-red-700 transition-all hover:scale-[1.02] active:scale-[0.98] text-white"
        >
          Explore our vision &amp; get early access{" "}
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  /* ── FULL STEPPER FORM ── */
  return (
    <div
      className={`bg-[#0d0d0d] border border-gray-800 rounded-2xl overflow-hidden ${className}`}
    >
      {/* ── PROGRESS HEADER ── */}
      <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-gray-800/60">
        <div className="flex items-center justify-between mb-4">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors duration-300 ${
                  i < step
                    ? "bg-red-600 text-white"
                    : i === step
                    ? "bg-red-600/20 border border-red-500/60 text-red-400"
                    : "bg-gray-800 text-gray-600"
                }`}
              >
                {i < step ? <FiCheck className="w-3 h-3" /> : i + 1}
              </div>
              <span
                className={`text-xs font-medium hidden sm:block transition-colors duration-300 ${
                  i === step ? "text-white" : "text-gray-600"
                }`}
              >
                {label}
              </span>
              {i < STEPS.length - 1 && (
                <div className="flex-1 mx-2 sm:mx-3">
                  <div className="h-px bg-gray-800 relative">
                    <div
                      className="absolute inset-y-0 left-0 bg-red-600 transition-all duration-500"
                      style={{ width: i < step ? "100%" : "0%" }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
          Step {step + 1} of {STEPS.length}
        </p>
      </div>

      {/* ── STEP BODY ── */}
      <form onSubmit={handleSubmit}>
        <div className="px-6 sm:px-8 py-7 sm:py-8 min-h-65">

          {/* STEP 0 — Intent */}
          {step === 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                What will you use HuntIn<span className="text-red-500">Town</span> for?
              </h3>
              <p className="text-xs text-gray-500 mb-5">
                Select all that apply — helps us prioritise the right categories.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {intentOptions.map(({ label, emoji }) => {
                  const active = selectedIntent.includes(label);
                  return (
                    <button
                      type="button"
                      key={label}
                      onClick={() =>
                        toggle(label, setSelectedIntent, selectedIntent)
                      }
                      className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl border text-xs font-medium transition-all duration-150 ${
                        active
                          ? "bg-red-600/12 border-red-500/60 text-white shadow-[0_0_10px_rgba(220,38,38,0.15)]"
                          : "border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white bg-[#111]"
                      }`}
                    >
                      <span className="text-lg">{emoji}</span>
                      <span className="text-center leading-tight">{label}</span>
                      {active && (
                        <FiCheck className="w-3 h-3 text-red-400 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 1 — Pain points */}
          {step === 1 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                What&apos;s your biggest challenge?
              </h3>
              <p className="text-xs text-gray-500 mb-5">
                Be honest — this helps us solve real problems first.
              </p>
              <div className="flex flex-col gap-2.5">
                {painPoints.map(({ label, icon }) => {
                  const active = selectedPain.includes(label);
                  return (
                    <button
                      type="button"
                      key={label}
                      onClick={() =>
                        toggle(label, setSelectedPain, selectedPain)
                      }
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-150 ${
                        active
                          ? "bg-red-600/10 border-red-500/50 text-white"
                          : "border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 bg-[#111]"
                      }`}
                    >
                      <span className="text-base shrink-0">{icon}</span>
                      <span className="flex-1 text-left">{label}</span>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-150 ${
                          active
                            ? "bg-red-500 border-red-500"
                            : "border-gray-700"
                        }`}
                      >
                        {active && (
                          <FiCheck className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2 — Occupation */}
          {step === 2 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                What best describes you?
              </h3>
              <p className="text-xs text-gray-500 mb-5">
                Helps us personalise your experience on the platform.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {occupationOptions.map(({ label, emoji }) => {
                  const active = occupation === label;
                  return (
                    <button
                      type="button"
                      key={label}
                      onClick={() => setOccupation(active ? "" : label)}
                      className={`flex flex-col items-center gap-2 px-3 py-4 rounded-xl border text-xs font-medium transition-all duration-150 ${
                        active
                          ? "bg-blue-600/12 border-blue-500/60 text-white shadow-[0_0_10px_rgba(59,130,246,0.12)]"
                          : "border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white bg-[#111]"
                      }`}
                    >
                      <span className="text-xl">{emoji}</span>
                      <span className="text-center leading-tight">{label}</span>
                      {active && (
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                          <FiCheck className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3 — Email */}
          {step === 3 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Last step — secure your spot
              </h3>
              <p className="text-xs text-gray-500 mb-5">
                No spam, ever. We only send launch updates.
              </p>

              {/* summary chips */}
              {(selectedIntent.length > 0 || selectedPain.length > 0 || occupation) && (
                <div className="mb-5 p-3 rounded-xl bg-[#111] border border-gray-800/80">
                  <p className="text-xs text-gray-600 mb-2 uppercase tracking-widest">
                    Your answers
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {occupation && (
                      <span className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2.5 py-0.5 rounded-full">
                        {occupation}
                      </span>
                    )}
                    {selectedIntent.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-red-500/10 border border-red-500/20 text-red-400 px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                    {selectedPain.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-800 border border-gray-700 text-gray-400 px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* email input */}
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none z-10" />
                <input
                  type="text"
                  inputMode="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  onBlur={handleEmailBlur}
                  disabled={loading}
                  autoFocus
                  className={`w-full pl-11 pr-10 py-4 rounded-xl bg-[#1a1a1a] border text-white placeholder-gray-600 outline-none transition-all disabled:opacity-60 text-sm ${
                    emailTouched && emailError
                      ? "border-red-500/70 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : email && !emailError
                      ? "border-green-500/50 focus:border-green-500 focus:ring-2 focus:ring-green-500/10"
                      : "border-gray-800 hover:border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  }`}
                />
                {email && !emailError && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center">
                    <FiCheck className="w-3 h-3 text-green-400" strokeWidth={3} />
                  </div>
                )}
              </div>
              {emailTouched && emailError && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-500/20 flex items-center justify-center text-[10px] font-bold shrink-0">!</span>
                  {emailError}
                </p>
              )}
              {serverError && (
                <p className="text-red-400 text-xs mt-2">{serverError}</p>
              )}
            </div>
          )}

        </div>

        {/* ── FOOTER ACTIONS ── */}
        <div className="px-6 sm:px-8 pb-6 flex items-center gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={back}
              disabled={loading}
              className="flex items-center gap-1.5 px-4 py-3 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 text-sm font-medium transition-all disabled:opacity-40"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="ml-auto flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all active:scale-[0.98]"
            >
              Next <FiArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading || !email}
              className="ml-auto flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-red-600/40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all active:scale-[0.98]"
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
          )}
        </div>
      </form>
    </div>
  );
}
