"use client";

import { useState, useEffect, useCallback } from "react";
import {
  FiMapPin,
  FiClock,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiMessageCircle,
  FiTag,
} from "react-icons/fi";

const posts = [
  {
    id: "REQ-2319",
    title: "Need Cinematic Wedding Video Editor",
    desc: "Looking for a skilled editor for 3 wedding reels + 1 full highlight film. Raw footage ready on Drive.",
    category: "Video Editing",
    budget: "₹18,000 – ₹25,000",
    location: "Noida, Sector 78",
    postedAt: "13 min ago",
    responses: 11,
    verified: true,
    urgent: true,
  },
  {
    id: "REQ-2320",
    title: "Need React Developer for MVP Sprint",
    desc: "Building a local marketplace MVP. Need someone experienced in React + Tailwind for a focused 2-week sprint.",
    category: "Web Development",
    budget: "₹45,000 fixed",
    location: "Bengaluru (Remote)",
    postedAt: "27 min ago",
    responses: 7,
    verified: true,
    urgent: false,
  },
  {
    id: "REQ-2321",
    title: "Interior Designer for 2BHK Flat",
    desc: "Complete design for living room, modular kitchen, and 2 bedrooms. Prefer a modern minimal aesthetic.",
    category: "Interior Design",
    budget: "₹1.8L – ₹2.4L",
    location: "Pune, Baner",
    postedAt: "41 min ago",
    responses: 15,
    verified: true,
    urgent: false,
  },
  {
    id: "REQ-2322",
    title: "CA for GST & Monthly Compliance",
    desc: "Small e-commerce business. Need monthly GST filing and quarterly compliance support. Long-term preferred.",
    category: "Finance & Legal",
    budget: "₹4,000/month",
    location: "Delhi, Rohini",
    postedAt: "1 h ago",
    responses: 9,
    verified: false,
    urgent: true,
  },
];

export default function PreviewCarousel() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((next) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(next);
      setAnimating(false);
    }, 220);
  }, [animating]);

  const prev = () => go((index - 1 + posts.length) % posts.length);
  const next = () => go((index + 1) % posts.length);

  // auto-advance
  useEffect(() => {
    const t = setTimeout(next, 4500);
    return () => clearTimeout(t);
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  const post = posts[index];

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-4">
      <div className="max-w-4xl mx-auto">

        {/* card */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-gray-800 bg-[#0d0d0d] overflow-hidden">

          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-red-600/5 via-transparent to-transparent pointer-events-none" />

          {/* header strip */}
          <div className="relative z-10 flex items-center justify-between border-b border-gray-800 px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <p className="text-xs sm:text-sm text-gray-400 truncate">
                Live demand feed
                <span className="hidden sm:inline text-gray-600"> · updating now</span>
              </p>
            </div>
            <span className="text-xs text-gray-600 shrink-0">{index + 1} / {posts.length}</span>
          </div>

          {/* body */}
          <div
            className={`relative z-10 p-5 sm:p-7 md:p-8 transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"}`}
          >
            {/* badges row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500 border border-gray-700 rounded-full px-2.5 py-1">
                {post.id}
              </span>
              {post.urgent && (
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-red-300 bg-red-500/10 border border-red-500/30 rounded-full px-2.5 py-1">
                  Urgent
                </span>
              )}
              {post.verified && (
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-green-300 bg-green-500/10 border border-green-500/30 rounded-full px-2.5 py-1">
                  <FiCheckCircle className="w-3 h-3 shrink-0" /> Verified
                </span>
              )}
            </div>

            {/* title */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug text-white">
              {post.title}
            </h3>

            {/* description */}
            <p className="mt-2 sm:mt-3 text-gray-400 text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
              {post.desc}
            </p>

            {/* meta grid */}
            <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[
                { icon: <FiTag className="w-3.5 h-3.5" />, label: "Category", val: post.category },
                { icon: null, label: "Budget", val: post.budget },
                { icon: <FiMapPin className="w-3.5 h-3.5" />, label: "Location", val: post.location },
                { icon: <FiClock className="w-3.5 h-3.5" />, label: "Posted", val: post.postedAt },
              ].map((m) => (
                <div key={m.label} className="rounded-xl border border-gray-800 bg-[#111] px-3 py-2.5">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500 flex items-center gap-1">
                    {m.icon}{m.label}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-200 mt-1 truncate">{m.val}</p>
                </div>
              ))}
            </div>

            {/* footer row */}
            <div className="mt-5 sm:mt-7 flex flex-col xs:flex-row sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-[#141414] border border-gray-800 px-3 py-2 rounded-lg">
                <FiMessageCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>
                  <span className="font-semibold text-white">{post.responses}</span> providers responded
                </span>
              </div>
              <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-xs sm:text-sm font-semibold transition shrink-0">
                Offer Help
              </button>
            </div>
          </div>

          {/* prev / next */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black border border-gray-700 flex items-center justify-center text-white transition z-20"
          >
            <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black border border-gray-700 flex items-center justify-center text-white transition z-20"
          >
            <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* dot indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {posts.map((p, i) => (
            <button
              key={p.id}
              aria-label={`Go to ${p.id}`}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-7 bg-red-500" : "w-2 bg-gray-700 hover:bg-gray-500"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
