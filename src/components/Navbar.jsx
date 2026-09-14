"use client";

import React, { useState } from "react";
import name from "../../public/name.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d] font-semibold shadow-lg">
      <div className="flex items-center justify-between px-6 md:px-5 py-4">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <Image
            src={name}
            alt="HuntInTown"
            className="w-35 h-8 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <section className="hidden md:flex items-center gap-8 text-md font-medium text-white">
          <Link
            href="/"
            className="hover:text-red-500 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/#how-it-works"
            className="hover:text-red-500 transition-colors"
          >
            How it works
          </Link>

    

          <Link
            href="/about"
            className="hover:text-red-500 transition-colors"
          >
            About Us
          </Link>
        </section>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white text-xl cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0d0d0d] border-t border-gray-800 shadow-lg">
          <div className="flex flex-col items-center gap-5 px-6 py-6 text-sm font-medium text-white">
            <Link
              href="/"
              onClick={closeMenu}
              className="hover:text-red-500 transition-colors"
            >
              Home
            </Link>

         
            <Link
              href="/#hunt-opportunities"
              onClick={closeMenu}
              className="hover:text-red-500 transition-colors"
            >
              Hunt Opportunities
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="hover:text-red-500 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;