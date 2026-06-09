/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src={logo}
            alt="HuntinTown"
            width={70}
            height={70}
            className="rounded-2xl"
          />

          <h1 className="mt-4 text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-2 text-center">
            Sign in to continue exploring opportunities and connections.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8">
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="
                  w-full
                  bg-[#1a1a1a]
                  border
                  border-gray-800
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-red-500
                "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full
                  bg-[#1a1a1a]
                  border
                  border-gray-800
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-red-500
                "
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-400">
                <input
                  type="checkbox"
                  className="accent-red-600"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-sm text-red-500 hover:text-red-400"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full
                bg-red-600
                hover:bg-red-700
                transition-colors
                text-white
                font-medium
                py-3
                rounded-xl
                cursor-pointer
              "
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-800"></div>

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          {/* Google Login */}
          <button
            className="
              w-full
              border
              border-gray-800
              bg-[#1a1a1a]
              hover:bg-[#222]
              transition-colors
              text-white
              py-3
              rounded-xl
              font-medium
            "
          >
            Continue with Google
          </button>

          {/* Register */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-red-500 hover:text-red-400"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}