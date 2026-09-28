"use client";

import Link from "next/link";
import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/huntintown",
    icon: <FiInstagram />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/hunt-in-town",
    icon: <FiLinkedin />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/huntintown",
    icon: <FiTwitter />,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/huntintown",
    icon: <FiFacebook />,
  },
];

const footerLinks = [
//   { label: "Home", href: "/" },
  { label: "Post a Requirement", href: "/hunter" },
  { label: "Find Opportunities", href: "/helper" },
  { label: "About HuntInTown", href: "/about" },
];

export default function SocialMediaFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0b0b0b] px-5 py-12 text-white sm:px-8 sm:py-14 lg:px-12">
      <div className="pointer-events-none absolute -right-28 -top-32 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block text-2xl font-black tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b0b0b]"
            >
              Hunt<span className="text-red-500">In</span>Town
            </Link>

            <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
              A better way to find the people, skills, and services you need.
              Hunt where you&apos;re needed.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow HuntInTown on ${social.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Explore
            </p>
            <nav aria-label="Footer navigation" className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              The idea
            </p>
            <p className="mt-4 text-lg font-semibold leading-7 text-gray-200">
              Stop chasing attention.
              <br />
              <span className="text-red-400">Find actual demand.</span>
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              HuntInTown connects real requirements with the right people.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HuntInTown. All rights reserved.</p>
          <p>
            Also known as <span className="text-gray-300">Hunt In Town</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
