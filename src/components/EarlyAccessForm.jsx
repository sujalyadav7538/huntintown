"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck, FiChevronDown, FiMail } from "react-icons/fi";

const SERVICES = [
  "Home & Repair Services",
  "Professional Services",
  "Creative & Design Services",
  "Freelance & Digital Services",
  "Education & Tutoring",
  "Business & Consulting",
  "Products & Supplies",
  "Other",
];

export default function EarlyAccessForm({
  className = "",
  mode = "opportunity",
}) {
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          mode,
          intent: service ? [service] : [],
          painPoints: [],
          occupation: "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border border-green-500/20 bg-[#0b110b] p-8 text-center ${className}`}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
          <FiCheck className="h-5 w-5 text-green-400" />
        </div>

        <h3 className="mt-4 text-xl font-bold text-white">
          You&apos;re in!
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-gray-400">
          We&apos;ll let you know when relevant opportunities start appearing
          on HuntIn<span className="text-red-500">Town</span>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-gray-800 bg-[#0b0b0b] p-5 sm:p-6 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white">
          Tell us what you can offer
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-gray-400">
          We&apos;ll help you discover people looking for exactly what you do.
        </p>
      </div>

      <div className="space-y-5">
        {/* SERVICE */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            What would you like to offer?
          </label>

          <p className="mb-3 text-xs text-gray-500">
            Tell us what you can help people with.
          </p>

          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full appearance-none rounded-xl border border-gray-800 bg-[#151515] px-4 py-3.5 pr-10 text-sm text-white outline-none transition-colors hover:border-gray-700 focus:border-red-500"
            >
              <option value="">Select your service</option>

              {SERVICES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Where can we reach you?
          </label>

          <p className="mb-3 text-xs text-gray-500">
            Enter your email to get early access when opportunities go live.
          </p>

          <div className="relative">
            <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-xl border border-gray-800 bg-[#151515] py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-600 outline-none transition-colors hover:border-gray-700 focus:border-red-500"
            />
          </div>
        </div>

        {serverError && (
          <p className="text-xs text-red-400">{serverError}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Joining...
            </>
          ) : (
            <>
              Start Hunting
              <FiArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-center text-[11px] text-gray-600">
        Free to join. No commission. No spam.
      </p>
    </form>
  );
}