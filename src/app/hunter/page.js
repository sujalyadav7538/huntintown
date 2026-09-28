/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  FiArrowRight,
  FiSearch,
  FiTarget,
  FiMessageCircle,
  FiUserCheck,
  FiBriefcase,
  FiTool,
  FiCode,
  FiBookOpen,
  FiPenTool,
  FiTruck,
  FiZap,
  FiCheckCircle,
  FiUsers,
  FiMapPin,
  FiShield,
  FiStar,
} from "react-icons/fi";

import bg1 from "../../../public/bg3.jpeg";
import EarlyAccessForm from "../../components/EarlyAccessForm";
import SocialMediaFooter from "@/components/Footer";

const hunterTypes = [
  {
    title: "Home & Repair",
    icon: <FiTool />,
    desc: "Find trusted people for repairs, maintenance, installation and home services.",
  },
  {
    title: "Professionals",
    icon: <FiBriefcase />,
    desc: "Find the right experts for legal, financial, business and professional needs.",
  },
  {
    title: "Freelancers",
    icon: <FiCode />,
    desc: "Find developers, marketers, designers and other skilled freelancers.",
  },
  {
    title: "Creative Services",
    icon: <FiPenTool />,
    desc: "Find photographers, editors, writers, designers and creative specialists.",
  },
  {
    title: "Education & Skills",
    icon: <FiBookOpen />,
    desc: "Find tutors, trainers, coaches and people who can help you learn.",
  },
  {
    title: "Businesses & Suppliers",
    icon: <FiTruck />,
    desc: "Find local businesses, vendors, suppliers and products that match your need.",
  },
];

const opportunities = [
  {
    title: "Home & Repair Services",
    icon: <FiTool />,
    desc: "Plumbing, electrical work, repairs, cleaning, installation and more.",
  },
  {
    title: "Professional Services",
    icon: <FiBriefcase />,
    desc: "Consultants, accountants, legal professionals and business experts.",
  },
  {
    title: "Creative & Design",
    icon: <FiPenTool />,
    desc: "Designers, photographers, editors, writers and creative specialists.",
  },
  {
    title: "Freelance & Digital",
    icon: <FiCode />,
    desc: "Developers, marketers and digital specialists for your next requirement.",
  },
  {
    title: "Education & Tutoring",
    icon: <FiBookOpen />,
    desc: "Tutors, trainers, coaches and experts who can help you learn.",
  },
  {
    title: "Business & Supply",
    icon: <FiTruck />,
    desc: "Suppliers, vendors, local businesses and products for your requirements.",
  },
];

const benefits = [
  {
    title: "Multiple Options",
    icon: <FiSearch />,
    desc: "Get responses from different people instead of settling for the first option you find.",
  },
  {
    title: "Relevant Responses",
    icon: <FiTarget />,
    desc: "People respond specifically to your requirement, so you can compare what fits.",
  },
  {
    title: "Explain What You Need",
    icon: <FiStar />,
    desc: "Share your requirement, preferences, budget, location and expectations clearly.",
  },
  {
    title: "Direct Connections",
    icon: <FiMessageCircle />,
    desc: "Connect directly with people who respond to your requirement.",
  },
  {
    title: "Trusted Profiles",
    icon: <FiShield />,
    desc: "Use profiles, ratings and information to understand who you are connecting with.",
  },
  {
    title: "Zero Commission",
    icon: <FiCheckCircle />,
    desc: "Post your requirement and connect without paying a commission to HuntInTown.",
  },
];

const timeline = [
  {
    number: "01",
    icon: <FiSearch />,
    title: "You Have a Need",
    desc: "You need a service, skill, product, professional, or solution.",
  },
  {
    number: "02",
    icon: <FiTarget />,
    title: "You Post It",
    desc: "Tell HuntInTown what you need, where you need it, and what matters to you.",
  },
  {
    number: "03",
    icon: <FiMessageCircle />,
    title: "People Respond",
    desc: "Relevant people, professionals and businesses can respond to your requirement.",
  },
  {
    number: "04",
    icon: <FiUserCheck />,
    title: "You Choose",
    desc: "Review your options, connect directly, and choose the match that works for you.",
  },
];

const howItWorks = [
  {
    number: "01",
    icon: <FiSearch />,
    title: "Post What You Need",
    desc: "Describe your requirement clearly so the right people understand exactly what you are looking for.",
  },
  {
    number: "02",
    icon: <FiTarget />,
    title: "Review Responses",
    desc: "See people and businesses responding to your requirement with their experience, approach and offer.",
  },
  {
    number: "03",
    icon: <FiMessageCircle />,
    title: "Connect Directly",
    desc: "Choose the response that fits your need and connect directly to take it forward.",
  },
];

export default function HuntOpportunities() {
  const ctaRef = useRef(null);

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[78vh] flex items-center px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <Image
          src={bg1}
          alt=""
          fill
          priority
          className="object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight animate-slide-in-left">
            Be Picky
          </h1>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Don&apos;t Settle
            <br />
            <span className="text-red-500">Hunt Better</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Someone, somewhere, can help with what you need.
          </p>

          <p className="mt-8 text-gray-400 text-[10px] lg:text-[14px] max-w-xl mx-auto px-2 sm:px-0 font-semibold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 py-1.5 rounded-full animate-slide-in-left-delay">
            Be Among the First. Be a HuntInTown Founding Member
          </p>

          <button
            onClick={scrollToCTA}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Start Hunting
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-[#050505]">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#101010] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div data-reveal className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
              A Different Way to Find What You Need
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Stop Searching Everywhere.
              <br />
              <span className="text-red-500">Hunt for the Right Match</span>
            </h2>

            <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              The traditional way makes you search through endless options.
              HuntInTown starts with your requirement and helps you discover
              relevant matches.
            </p>
          </div>

          <div className="relative mt-12 sm:mt-14">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="relative grid grid-cols-4">
                <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-gray-700" />

                {timeline.map((item, index) => (
                  <div
                    key={item.number}
                    data-reveal
                    data-reveal-delay={(index % 4) + 1}
                    className="relative text-center"
                  >
                    <div className="relative z-20 mx-auto w-10 h-10 rounded-full bg-[#0b0b0b] border border-red-500/70 flex items-center justify-center text-red-400">
                      <span className="text-sm">{item.icon}</span>
                    </div>

                    <div className="mt-5 px-4">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-gray-700" />

              <div className="relative space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.number}
                    data-reveal
                    data-reveal-delay={(index % 4) + 1}
                    className="relative flex items-start gap-5"
                  >
                    <div className="relative z-20 shrink-0 w-10 h-10 rounded-full bg-[#0b0b0b] border border-red-500/70 flex items-center justify-center text-red-400">
                      <span className="text-sm">{item.icon}</span>
                    </div>

                    <div className="pt-1 pr-2">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal className="mt-10 text-center">
            <p className="text-sm sm:text-base text-gray-300">
              You don&apos;t need endless options.
              <span className="text-white font-semibold">
                {" "}
                You need the right options for your requirement.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* WHAT CAN YOU HUNT */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-[#101010]">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#181818] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div data-reveal className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
              What Can You Hunt?
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Everyone Has Something They Need.
            </h2>

            <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
              Whatever you need, you can hunt for it. Whether it is a service,
              professional, product, skill, or local business, put your
              requirement out there and discover relevant options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hunterTypes.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                data-reveal-delay={(index % 3) + 1}
                className="group p-5 rounded-xl border border-gray-800 bg-[#0b0b0b] hover:border-red-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-lg">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>

                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-[#181818] scroll-mt-24"
        id="how-it-works"
      >
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#202020] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
              How Hunting Works
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Hunt <span className="text-red-500"> The</span> Hunter's
            </h2>

            <p className="mt-3 text-gray-300 text-sm sm:text-base">
              No complicated process. Put your requirement out there and
              discover people who can help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {howItWorks.map((item, index) => (
              <div
                key={item.number}
                data-reveal
                data-reveal-delay={index + 1}
                className="relative p-6 rounded-xl border border-gray-800 bg-[#0b0b0b] group hover:border-red-500/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-lg transition-transform group-hover:scale-110">
                  {item.icon}
                </div>

                <span className="block mt-5 text-xs font-bold text-red-400">
                  {item.number}
                </span>

                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>

                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-[#202020] scroll-mt-24"
        id="hunt-opportunities"
      >
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#242424] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div data-reveal className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
              Hunt Across Categories
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Hunt For What You Need.
            </h2>

            <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
              Your requirements aren&apos;t limited to one category. Hunt for
              services, professionals, products, skills and businesses that
              match what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {opportunities.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                data-reveal-delay={(index % 3) + 1}
                className="group p-5 rounded-xl border border-gray-800 bg-[#0b0b0b] hover:border-red-500/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-lg transition-transform group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>

                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HUNTINTOWN */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-[#242424]">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#282828] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
              Why HuntInTown?
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Stop Searching Everywhere.
              <br />
              <span className="text-red-500">
                Put Your Requirement Out There.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                data-reveal-delay={(index % 3) + 1}
                className="p-5 rounded-xl border border-gray-800 bg-[#0b0b0b] hover:border-red-500/40 transition-colors"
              >
                <div className="text-red-400 text-xl">{item.icon}</div>

                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>

                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG MESSAGE */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20 bg-[#282828]">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#242424] pointer-events-none" />

        <div
          data-reveal
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            The Hunt
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Stop asking
            <br />
            <span className="text-gray-400">
              &quot;Where do I find the right person?&quot;
            </span>
          </h2>

          <div className="my-6 flex justify-center">
            <div className="w-11 h-11 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center text-red-500 animate-pulse">
              <FiArrowRight className="rotate-90 w-5 h-5" />
            </div>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Start asking
            <br />
            <span className="text-red-500">
              &quot;Let's begin the hunt&quot;
            </span>
          </h3>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-16 sm:pb-20 bg-[#242424]">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#181818] pointer-events-none" />

        <div
          data-reveal
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <div className="flex justify-center -space-x-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="w-10 h-10 rounded-full border-2 border-[#242424] bg-[#111] flex items-center justify-center text-red-400"
              >
                <FiUserCheck className="w-4 h-4" />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-400">
            <FiUsers className="w-4 h-4 text-red-400" />
            Already part of the early HuntInTown community
          </div>

          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
            100+ early hunters are getting ready to hunt for what they need.
          </h2>

          <p className="mt-3 text-gray-300 text-sm sm:text-base">
            Your next match could already be out there.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-10 bg-[#181818]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.06),transparent_55%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT */}
            <div data-reveal className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                <FiZap className="w-3.5 h-3.5" />
                Your Hunt Starts Here
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Don&apos;t Settle
                <br />
                <span className="text-red-500">Hunt Better</span>
              </h2>

              <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-gray-300 text-sm sm:text-base leading-relaxed">
                Post what you need. Discover relevant responses. Connect
                directly.
              </p>

              <div className="mt-5 flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-500">
                <FiCheckCircle className="w-3.5 h-3.5 text-green-500" />
                Free to join
                <span>•</span>
                <span>No commission</span>
                <span>•</span>
                <span>No obligation</span>
              </div>
            </div>

            {/* RIGHT */}
            <div
              data-reveal
              data-reveal-delay="2"
              className="w-full max-w-md mx-auto lg:ml-auto"
            >
              <EarlyAccessForm mode="requirement" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SocialMediaFooter />
    </main>
  );
}
