import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HuntinTown",
  icon: "/logo.jpeg",
  description:
    "Discover and share the best local spots with HuntinTown - your ultimate guide to hidden gems in your city. Explore, review, and connect with fellow adventurers to uncover the coolest places around you.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} h-full antialiased`}
      
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <section className="bg-[#0a0a0a] mt-16">{children}</section>
      </body>
    </html>
  );
}
