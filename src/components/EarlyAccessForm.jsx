"use client";
import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function EarlyAccessForm({ className = "" }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className={`bg-[#0d1a0d] border border-green-600/30 rounded-2xl px-8 py-6 text-center ${className}`}>
        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
          <FiCheck className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-lg font-bold text-green-400">You&apos;re on the list!</h3>
        <p className="text-gray-400 mt-1 text-sm">
          We&apos;ll notify you the moment HuntinTown launches.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="email"
            required
            placeholder="Enter your email for early access"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="w-full px-5 py-4 rounded-xl bg-[#1a1a1a] border border-gray-800 text-white placeholder-gray-600 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 hover:border-gray-600 transition-all disabled:opacity-60"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        </div>
        <button
          type="submit"
          disabled={!email || loading}
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-red-600 hover:bg-red-700 disabled:bg-red-600/40 disabled:cursor-not-allowed transition-all active:scale-[0.98] text-white whitespace-nowrap"
        >
          {loading ? "Joining..." : <><span>Get Early Access</span><FiArrowRight className="w-4 h-4" /></>}
        </button>
      </form>
      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
    </div>
  );
}
