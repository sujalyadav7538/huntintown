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
  title: "HuntInTown",
  icon: "/logo.jpeg",
  description:
    "HuntInTown helps people post a requirement once and hear from verified local professionals, businesses, and service providers.",
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
