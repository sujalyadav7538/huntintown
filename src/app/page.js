/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useRef } from "react";
import bg1 from "../../public/bg3.jpeg";
import {
  FiBriefcase,
  FiUsers,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowRight,
  FiSearch,
  FiMessageSquare,
  FiStar,
} from "react-icons/fi";
import PreviewCarousel from "@/components/PreviewCorousal";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Got a Need? Post It.",
    desc: "Need a service, professional, supplier, worker, or something specific? Just tell us what you're looking for. It takes seconds.",
    icon: <FiBriefcase className="w-6 h-6 text-red-400" />,
  },
  {
    num: "02",
    title: "Let the Right People Find You",
    desc: "People and businesses who can actually help can respond to your requirement. No endless searching or random calls.",
    icon: <FiMessageSquare className="w-6 h-6 text-red-400" />,
  },
  {
    num: "03",
    title: "Compare. Connect. Choose.",
    desc: "Check profiles, compare your options, chat directly, and pick whoever works best for you. Your choice, your call.",
    icon: <FiStar className="w-6 h-6 text-red-400" />,
  },
];

const features = [
  {
    title: "Post What You Need",
    description:
      "From a plumber to a freelancer, supplier, tutor, or specialist — if you need it, post it.",
    icon: <FiBriefcase className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Get Multiple Options",
    description:
      "Why settle for the first option? Get responses from different people and businesses.",
    icon: <FiUsers className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Find Your Match",
    description:
      "Discover people who actually fit your requirement instead of wasting time searching everywhere.",
    icon: <FiTrendingUp className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Check Before You Connect",
    description:
      "See profiles, ratings, skills, and other details before deciding who to connect with.",
    icon: <FiCheckCircle className="w-6 h-6 text-red-500" />,
  },
];

export default function Home() {
  const ctaRef = useRef(null);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-130 sm:h-[58vh] sm:min-h-125 flex items-center justify-center overflow-hidden">
        <Link href="/" aria-label="HuntInTown home">
          <Image
            src={bg1}
            alt="HuntInTown"
            fill
            className="object-cover opacity-25"
            priority
          />
        </Link>

        <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 bg-linear-to-t from-black to-transparent z-10" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-red-600/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-20 max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">
          {/* <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6 animate-slide-in-left">
            🚀 Coming Soon — Get In Early
          </span> */}

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight animate-slide-in-left">
            Be Picky
          </h1>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight animate-slide-in-left">
            Don't Settle. <span className="text-red-500">Hunt Better.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto animate-slide-in-left-delay px-2 sm:px-0">
            Someone, Somewhere, Needs What You Do.
          </p>
          <p className="mt-8 text-gray-400 text-[14px] max-w-xl mx-auto animate-slide-in-left-delay px-2 sm:px-0 font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3 sm:px-4 py-1.5 rounded-full animate-slide-in-left">
            Be Among the First. Be a HuntInTown Founding Member
          </p>

          <div className="mt-4 flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-in-left-delay">
            <button
              onClick={() =>
                ctaRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-red-600 hover:bg-red-700 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] "
            >
              Get Early Access
              <FiArrowRight className="w-4 h-4" />
            </button>

            {/* <button
              onClick={() =>
                ctaRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-gray-700 hover:border-gray-500 rounded-xl font-semibold text-sm text-gray-300 transition-all"
            >
              <FiSearch className="w-4 h-4" />
              Join the Waitlist
            </button> */}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="px-4 sm:px-6 md:px-12 lg:px-20 py-14 sm:py-20 md:py-24 bg-[#050505]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
              It's That Simple
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold">
              Need Something? <span className="text-red-500">Hunt It.</span>
            </h2>

            <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              No endless searching. No settling. Just post, connect, and choose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-8 left-[calc(100%+1px)] w-full h-px bg-linear-to-r from-gray-800 to-transparent z-0" />
                )}

                <div className="relative z-10 bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6 sm:p-7 md:p-8 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-none">
                      {step.num}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE POSTS ── */}
      {/* <section className="py-10 sm:py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-8 sm:mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
            People Are Hunting
          </span>

          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-bold">
            See What People Need
          </h2>

          <p className="mt-2 text-gray-500 text-sm">
            Real needs. Real people. Real opportunities.
          </p>
        </div>

        <PreviewCarousel />
      </section> */}

      {/* ── FEATURES ── */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-14 sm:py-16 md:py-20 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
              Why HuntInTown
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold">
              Search Less. <span className="text-red-500">Connect More.</span>
            </h2>

            <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Everything you need to find the right people without the usual
              hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-5 sm:p-6 hover:border-red-500/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(239,68,68,0.06)] transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-500/10 flex items-center justify-center mb-3 sm:mb-4">
                  {f.icon}
                </div>

                <h3 className="font-semibold text-base mb-2">{f.title}</h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-14 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4 sm:mb-5">
            <div className="flex -space-x-2 sm:-space-x-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-black overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt="HuntInTown member"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red-600 border-2 border-black flex items-center justify-center text-[10px] sm:text-xs font-bold">
                +100
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm">
            <span className="text-white font-semibold">100+ people</span> are
            already waiting to hunt smarter.
          </p>

          <blockquote className="mt-8 sm:mt-10 text-gray-300 text-base sm:text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            "Why spend hours searching when you can just say what you need and
            let the right people find you?"
          </blockquote>

          <p className="mt-3 text-gray-600 text-sm">
            — The HuntIn<span className="text-red-500">Town</span> idea
          </p>
        </div>
      </section>

      {/* ── EARLY ACCESS CTA ── */}
      <section
        ref={ctaRef}
        className="px-4 sm:px-6 md:px-12 lg:px-20 py-14 sm:py-20 md:py-24 bg-[#050505]"
      >
        <div className="relative max-w-3xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-red-600/15 via-[#0d0d0d] to-[#0a0a0a] border border-gray-800 rounded-2xl sm:rounded-3xl" />

          <div className="absolute -top-16 -right-16 w-72 h-72 bg-red-600/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-red-900/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 p-7 sm:p-10 md:p-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full">
              Get In Early
            </span>

            <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Stop Searching.
              <br />
              <span className="text-red-500">Start Hunting.</span>
            </h2>

            <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
              Be one of the first on HuntInTown. Get early access, founding
              perks, and a chance to shape what we build next.
            </p>

            <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
              <EarlyAccessForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center">
          <h3 className="text-2xl font-extrabold">
            HuntIn<span className="text-red-500">Town</span>
          </h3>

          <p className="text-gray-500 mt-2 text-sm">
            Need it? <span className="text-gray-400">Hunt it.</span>
          </p>

          <p className="text-gray-700 text-xs mt-4">
            © 2026 HuntIn<span className="text-red-500">Town</span>. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
