"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiSearch,
  FiEdit2,
  FiMessageSquare,
  FiBookmark,
  FiUser,
  FiSettings,
  FiLogOut,
  FiMapPin,
  FiTrendingUp,
  FiAlertCircle,
  FiStar,
} from "react-icons/fi";
import Sidebar from "@/components/Sidebar";
import RequirementCard from "@/components/explore/RequirementCard";

const navItems = [
  { icon: FiHome, label: "Home", href: "/" },
  { icon: FiSearch, label: "Explore", href: "/explore" },
  { icon: FiEdit2, label: "Post Requirement", href: "/post" },
  { icon: FiMessageSquare, label: "Messages", href: "/messages" },
  { icon: FiBookmark, label: "Saved", href: "/saved" },
  { icon: FiUser, label: "My Profile", href: "/profile" },
  { icon: FiSettings, label: "Settings", href: "/settings" },
];

const filters = [
  { label: "All", icon: null },
  { label: "Nearby", icon: FiMapPin },
  { label: "Trending", icon: FiTrendingUp },
  { label: "Urgent", icon: FiAlertCircle },
  { label: "Premium", icon: FiStar },
];

const requirements = [
  {
    id: 1,
    initials: "RS",
    name: "Rohit Sharma",
    location: "Noida, Sector 62",
    time: "2h ago",
    badge: "Urgent",
    title: "Need custom sofa 🛋️",
    description:
      "Looking for a modern L-shape sofa under ₹15,000. Need it within 5 days.",
    tags: ["Home & Living", "Budget: ₹15,000", "5 Days"],
    responses: 12,
  },
  {
    id: 2,
    initials: "AV",
    name: "Anjali Verma",
    location: "Gurugram, Sector 21",
    time: "4h ago",
    badge: null,
    title: "Looking for tutor for Maths",
    description: "For class 11th CBSE. Need experienced tutor for long term.",
    tags: ["Education", "Budget: Negotiable", "Long Term"],
    responses: 8,
  },
  {
    id: 3,
    initials: "VM",
    name: "Vivek Malhotra",
    location: "Noida, Sector 50",
    time: "6h ago",
    badge: null,
    title: "Need interior designer",
    description: "2BHK interior design with modular kitchen.",
    tags: ["Interior", "Budget: ₹2,00,000", "2 Months"],
    responses: 15,
  },
  {
    id: 4,
    initials: "PK",
    name: "Priya Kapoor",
    location: "Delhi, Dwarka",
    time: "8h ago",
    badge: "Urgent",
    title: "Need a plumber urgently 🔧",
    description: "Pipe burst in bathroom. Need immediate assistance today.",
    tags: ["Home Repair", "Budget: ₹2,000", "Today"],
    responses: 5,
  },
  {
    id: 5,
    initials: "SK",
    name: "Suresh Kumar",
    location: "Faridabad, Sector 15",
    time: "10h ago",
    badge: null,
    title: "Looking for yoga instructor 🧘",
    description:
      "Need a certified yoga instructor for morning sessions at home.",
    tags: ["Fitness", "Budget: ₹5,000/month", "Ongoing"],
    responses: 3,
  },
];

export default function ExplorePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState(false);

  const filteredRequirements =
    activeFilter === "All"
      ? requirements
      : requirements.filter((r) =>
          activeFilter === "Urgent" ? r.badge === "Urgent" : true,
        );

  return (
    <div className="flex h-screen bg-[#0a0a0a]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        className="
    flex-1
    bg-[#0a0a0a]
    overflow-y-auto
    transition-all
    duration-300
    ml-20 lg:ml-30
  "
      >
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />

            <input
              type="text"
              placeholder="Search requirements, people, services..."
              className="
          w-full
          bg-[#1a1a1a]
          border
          border-gray-800
          rounded-full
          pl-11
          pr-4
          py-3
          text-sm
          text-white
          placeholder:text-gray-500
          focus:outline-none
          focus:border-red-500/50
          transition-colors
        "
            />
          </div>

          {/* Filters */}
          <div
            className="
    flex
    gap-2
    mb-6
    overflow-x-auto
    lg:overflow-visible
    lg:flex-wrap
    pb-2
    scrollbar-hide
    -mx-4
    px-4
    lg:mx-0
    lg:px-0
    flex-wrap
  "
          >
            {filters.map(({ label, icon: Icon }) => {
              const isActive = activeFilter === label;

              return (
                <button
                  key={label}
                  onClick={() => setActiveFilter(label)}
                  className={`
          flex
          items-center
          gap-1.5
          px-3
          sm:px-4
          py-2
          rounded-full
          text-xs
          sm:text-sm
          whitespace-nowrap
          transition-all
          ${
            isActive
              ? "bg-white text-black"
              : "bg-[#1a1a1a] text-gray-400 border border-gray-800 hover:text-white"
          }
        `}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {label}
                </button>
              );
            })}
          </div>

          {/* Feed */}
          <div className="space-y-4  grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRequirements.map((req) => (
              <RequirementCard
                key={req.id}
                initials={req.initials}
                name={req.name}
                location={req.location}
                time={req.time}
                badge={req.badge}
                title={req.title}
                description={req.description}
                tags={req.tags}
                responses={req.responses}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
