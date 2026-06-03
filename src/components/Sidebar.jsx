"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";


import {
  FiHome,
  FiSearch,
  FiEdit2,
  FiMessageSquare,
  FiBookmark,
  FiUser,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiChevronLeft,
} from "react-icons/fi";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: FiHome,
  },
  {
    label: "Explore",
    href: "/explore",
    icon: FiSearch,
  },
  {
    label: "Post Requirement",
    href: "/post",
    icon: FiEdit2,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: FiMessageSquare,
  },
  {
    label: "Saved",
    href: "/saved",
    icon: FiBookmark,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: FiUser,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: FiSettings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <aside
      className={`
        fixed
        left-0
        top-16
        bottom-0
        bg-[#111111]
        border-r
        border-gray-800
        transition-all
        duration-300
        z-40
        ${openSidebar ? "w-64" : "w-20"}
      `}
    >
      <div className="h-full flex flex-col p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          

          <button
            onClick={() => setOpenSidebar(!openSidebar)}
            className="
              p-2
              rounded-lg
              text-gray-400
              hover:text-white
              hover:bg-[#1a1a1a]
              transition-colors
              cursor-pointer
            "
          >
            {openSidebar ? (
              <FiChevronLeft size={18} />
            ) : (
              <FiMenu size={18} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex
                  items-center
                  gap-3
                  px-3
                  py-3
                  rounded-xl
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-red-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
                  }
                `}
              >
                <Icon className="w-5 h-5 shrink-0" />

                {openSidebar && (
                  <span className="text-sm font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Card */}
        {openSidebar && (
          <div className="mb-3 bg-[#1a1a1a] rounded-xl p-3 border border-gray-800">
            <p className="text-white text-sm font-medium">
              Sujal Yadav
            </p>

            <p className="text-gray-500 text-xs">
              Community Member
            </p>
          </div>
        )}

        {/* Logout */}
        <button
          className="
            flex
            items-center
            gap-3
            px-3
            py-3
            rounded-xl
            text-gray-400
            hover:text-white
            hover:bg-[#1a1a1a]
            transition-colors
            cursor-pointer
          "
        >
          <FiLogOut className="w-5 h-5 shrink-0" />

          {openSidebar && (
            <span className="text-sm font-medium">
              Logout
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}