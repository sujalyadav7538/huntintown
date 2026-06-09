"use client";

import React, { useState } from "react";
import name from "../../public/name.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" bg-[#0d0d0d]  font-semibold fixed w-full z-50 shadow-lg">
      <div className="flex items-center justify-between px-6 md:px-5 py-4">
        {/* Logo Section */}
        <section className="flex items-center gap-2">
          <Image src={name} alt="Name" className="w-35 h-8" />
       
        </section>

        {/* Desktop Navigation Links */}
        <section className="hidden md:flex flex-row gap-8 text-md font-medium text-white ">
          <Link href="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <Link href="/#how-it-works" className="hover:text-red-500 transition-colors">
            How it works
          </Link>
          <Link href="/about" className="hover:text-red-500 transition-colors">
            About
          </Link>
        </section>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-[#0d0d0d] border-t border-gray-800 absolute w-full  z-50">
          <div className="flex flex-col gap-4 text-sm font-medium text-white pt-4 items-center">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              How it works
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-500 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
