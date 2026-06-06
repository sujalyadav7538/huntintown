"use client";

import { useState } from "react";
import { FiVideo, FiDollarSign, FiMapPin, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function PreviewCarousel() {
  const [index, setIndex] = useState(0);

  const posts = [
    {
      title: "Need Video Editor",
      desc: "Looking for a skilled video editor for a short film project.",
      tags: ["Video Editing", "₹20K - ₹30K", "New Delhi"],
    },
    {
      title: "Need Graphic Designer",
      desc: "Need a creative designer for social media posters and branding.",
      tags: ["Design", "₹10K - ₹15K", "Remote"],
    },
    {
      title: "Need App Developer",
      desc: "Looking for a React Native developer for MVP development.",
      tags: ["Development", "₹50K Budget", "Hybrid"],
    },
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % posts.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const post = posts[index];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-5xl mx-auto">

        <div className="bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden relative">

          {/* top bar */}
          <div className="border-b border-gray-800 p-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* NAV BUTTONS */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black"
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black"
          >
            <FiChevronRight />
          </button>

          {/* CARD */}
          <div className="p-8 transition-all duration-300">

            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800">

              {/* Title */}
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <FiVideo className="text-red-500" />
                {post.title}
              </h3>

              <p className="text-gray-400">{post.desc}</p>

              {/* Tags */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-[#252525] text-gray-300"
                  >
                    {tag.includes("₹") ? (
                      <FiDollarSign className="w-3 h-3" />
                    ) : tag.toLowerCase().includes("new delhi") ? (
                      <FiMapPin className="w-3 h-3" />
                    ) : (
                      <FiVideo className="w-3 h-3" />
                    )}
                    {tag}
                  </span>
                ))}
              </div>

              <button className="mt-6 px-5 py-2 bg-red-600 rounded-lg text-sm hover:bg-red-700 transition">
                Offer Help
              </button>

            </div>

          </div>

        </div>

        {/* dots indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {posts.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? "bg-red-500 w-4" : "bg-gray-600"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}