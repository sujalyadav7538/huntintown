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

const siteUrl = "https://huntintown.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HuntInTown | Post a Requirement, Get Local Verified Offers",
    template: "%s | HuntInTown",
  },
  description:
    "HuntInTown helps people post a requirement once and hear from verified local professionals, businesses, and service providers. Free to post, fast to connect.",
  keywords: [
    "HuntInTown",
    "Hunt In Town",
    "post a requirement",
    "local service providers",
    "verified professionals",
    "find local businesses",
    "connect with service providers",
    "local requirement marketplace",
  ],
  authors: [{ name: "HuntInTown" }],
  creator: "HuntInTown",
  publisher: "HuntInTown",
  applicationName: "HuntInTown",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "HuntInTown",
    title: "HuntInTown | Post a Requirement, Get Local Verified Offers",
    description:
      "Post a requirement once and hear from verified local professionals, businesses, and service providers near you.",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "HuntInTown",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HuntInTown | Post a Requirement, Get Local Verified Offers",
    description:
      "Post a requirement once and hear from verified local professionals, businesses, and service providers near you.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
