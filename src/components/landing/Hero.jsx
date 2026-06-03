"use client";
import Button from "@/components/Button";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import { useRouter } from "next/navigation";

export default function Hero() {
  const navigate = useRouter();
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 px-6 md:px-12 lg:px-20  min-h-[calc(100vh-64px)]">
      {/* Info Section */}
      <section className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Post Once.
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-1">
          Reach <span className="text-red-500">Many</span>.
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-md lg:max-w-lg">
          HuntinTown is your local network where requirements meet real people
          and solutions happen.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Button
            text="Post Requirement"
            variant="contained"
            size="lg"
            onClick={() => {
              navigate.push("/post");
            }}
          />
          <Button text="Explore Community" variant="outline" size="lg" />
        </div>
      </section>

      {/* Image Section */}
      <section className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-xl">
        <Image
          src={logo}
          alt="Hero Image"
          width={400}
          height={300}
          className="rounded-xl shadow-2xl bg-none object-cover"
          priority
        />
      </section>
    </section>
  );
}
