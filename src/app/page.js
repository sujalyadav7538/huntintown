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

import bg1 from "../../public/bg3.jpeg";
import EarlyAccessForm from "../components/EarlyAccessForm";

const hunterTypes = [
  {
    title: "Freelancers",
    icon: <FiCode />,
    desc: "Find projects and people looking for your skills.",
  },
  {
    title: "Professionals",
    icon: <FiBriefcase />,
    desc: "Discover requirements where your expertise can make a difference.",
  },
  {
    title: "Local Businesses",
    icon: <FiMapPin />,
    desc: "Find nearby customers actively looking for what you offer.",
  },
  {
    title: "Service Experts",
    icon: <FiTool />,
    desc: "Connect with people who already need your service.",
  },
  {
    title: "Skilled Individuals",
    icon: <FiStar />,
    desc: "Turn your skills and experience into real opportunities.",
  },
  {
    title: "Suppliers",
    icon: <FiTruck />,
    desc: "Discover businesses and people looking for products or supplies.",
  },
];

const opportunities = [
  {
    title: "Home Services",
    icon: <FiTool />,
    desc: "Plumbing, electrical, repairs, cleaning, installation and more.",
  },
  {
    title: "Professional Services",
    icon: <FiBriefcase />,
    desc: "Consultants, accountants, legal professionals and business experts.",
  },
  {
    title: "Creative Services",
    icon: <FiPenTool />,
    desc: "Designers, photographers, editors, writers and creative specialists.",
  },
  {
    title: "Education & Skills",
    icon: <FiBookOpen />,
    desc: "Tutors, trainers, coaches and people looking to learn.",
  },
  {
    title: "Business & Supply",
    icon: <FiTruck />,
    desc: "Suppliers, vendors, products and business requirements.",
  },
  {
    title: "Freelance & Digital",
    icon: <FiCode />,
    desc: "Developers, marketers, remote specialists and digital freelancers.",
  },
];

const benefits = [
  {
    title: "Real Requirements",
    icon: <FiSearch />,
    desc: "Discover people who are actively looking for something you can provide.",
  },
  {
    title: "Better-Fit Opportunities",
    icon: <FiTarget />,
    desc: "Spend less time chasing random leads and more time on relevant opportunities.",
  },
  {
    title: "Show Your Fit",
    icon: <FiStar />,
    desc: "Respond with your experience, skills, availability and approach.",
  },
  {
    title: "Direct Connections",
    icon: <FiMessageCircle />,
    desc: "Connect directly with the person behind the requirement.",
  },
  {
    title: "Trusted Network",
    icon: <FiShield />,
    desc: "Build credibility through your profile, work and community interactions.",
  },
  {
    title: "Zero Commission",
    icon: <FiCheckCircle />,
    desc: "Hunt for opportunities without paying a commission to HuntInTown.",
  },
];

const timeline = [
  {
    number: "01",
    icon: <FiSearch />,
    title: "A Need Appears",
    desc: "Someone posts what they need — a service, skill, product, professional, or solution.",
  },
  {
    number: "02",
    icon: <FiTarget />,
    title: "You Hunt",
    desc: "You discover requirements that match what you offer, where you offer it.",
  },
  {
    number: "03",
    icon: <FiMessageCircle />,
    title: "You Respond",
    desc: "Show your experience, skills, availability, and why you're the right fit.",
  },
  {
    number: "04",
    icon: <FiUserCheck />,
    title: "You Connect",
    desc: "Get chosen, start the conversation, and take the opportunity forward.",
  },
];

const howItWorks = [
  {
    number: "01",
    icon: <FiSearch />,
    title: "Find a Requirement",
    desc: "Search through real requirements posted by people and businesses looking for something specific.",
  },
  {
    number: "02",
    icon: <FiTarget />,
    title: "Show Your Fit",
    desc: "Tell them about your skills, experience, service, product, availability or approach.",
  },
  {
    number: "03",
    icon: <FiMessageCircle />,
    title: "Connect Directly",
    desc: "If your response is selected, connect directly and discuss the opportunity.",
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
            Someone, somewhere, is already looking for what you do.
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
          {/* Heading */}
          <div data-reveal className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
              A Different Way to Find Opportunities
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Don&apos;t Wait to Be Found.
              <br />
              <span className="text-red-500">Hunt for Hunger</span>
            </h2>

            <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              The traditional way starts with you trying to get noticed.
              HuntInTown starts with someone already looking for what you do.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-12 sm:mt-14">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="relative grid grid-cols-4">
                {/* Horizontal line */}
                <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-gray-700" />

                {timeline.map((item, index) => (
                  <div
                    key={item.number}
                    data-reveal
                    data-reveal-delay={(index % 4) + 1}
                    className="relative text-center"
                  >
                    {/* Icon */}
                    <div className="relative z-20 mx-auto w-10 h-10 rounded-full bg-[#0b0b0b] border border-red-500/70 flex items-center justify-center text-red-400">
                      <span className="text-sm">{item.icon}</span>
                    </div>

                    {/* Content */}
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
              {/* Vertical line */}
              <div className="absolute left-5 top-5 bottom-5 w-px bg-gray-700" />

              <div className="relative space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.number}
                    data-reveal
                    data-reveal-delay={(index % 4) + 1}
                    className="relative flex items-start gap-5"
                  >
                    {/* Icon */}
                    <div className="relative z-20 shrink-0 w-10 h-10 rounded-full bg-[#0b0b0b] border border-red-500/70 flex items-center justify-center text-red-400">
                      <span className="text-sm">{item.icon}</span>
                    </div>

                    {/* Content */}
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

          {/* Bottom Message */}
          <div data-reveal className="mt-10 text-center">
            <p className="text-sm sm:text-base text-gray-300">
              You don&apos;t need everyone.
              <span className="text-white font-semibold">
                {" "}
                You need the people who need what you do.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* WHO CAN HUNT */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-[#101010]">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#181818] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div data-reveal className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
              Who Can Hunt?
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Everyone Can Hunt.
            </h2>

            <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
              What you do is what you hunt with. Whether you are an individual,
              professional, freelancer, or business, there are people looking
              for what you offer.
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
        className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-[#181818]"
        id="how-it-works"
      >
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#202020] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
              How Hunting Works
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Find. Respond. Connect.
            </h2>

            <p className="mt-3 text-gray-300 text-sm sm:text-base">
              No complicated process. Find a relevant requirement and make your
              move.
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

      {/* OPPORTUNITIES */}
      <section
        className="relative overflow-hidden px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-[#202020]"
        id="hunt-opportunities"
      >
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#242424] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div data-reveal className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
              Hunt Across Categories
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Go Where the Demand Is.
            </h2>

            <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
              Opportunities aren&apos;t limited to one kind of work. Hunt for
              requirements that match what you know, make, sell or do.
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
              Stop Chasing Attention.
              <br />
              <span className="text-red-500">Find Actual Demand.</span>
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
            The Shift
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Stop asking
            <br />
            <span className="text-gray-400">
              &quot;Where are the customers?&quot;
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
            <span className="text-red-500">&quot;Where am I needed?&quot;</span>
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
            100+ early hunters are getting ready to hunt.
          </h2>

          <p className="mt-3 text-gray-300 text-sm sm:text-base">
            Your next opportunity could already be waiting for you.
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
                Dont't Settle
                <br />
                <span className="text-red-500">Hunt Better</span>
              </h2>

              <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-gray-300 text-sm sm:text-base leading-relaxed">
                Find people looking for what you do. Respond when the
                opportunity fits. Connect directly.
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
              <EarlyAccessForm mode="opportunity" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-5 sm:px-8 lg:px-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded"
          >
            Hunt<span className="text-red-500">In</span>Town
          </Link>

          <p className="text-xs sm:text-sm text-gray-400">
            Hunt where you&apos;re needed.
          </p>
        </div>
      </footer>
    </main>
  );
}
