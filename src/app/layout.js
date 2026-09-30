import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    default:
      "HuntInTown (Hunt In Town) | Find Local Services, Work & Opportunities",
    template: "%s | HuntInTown",
  },

  description:
    "HuntInTown helps you find what you need and discover who needs what you offer. Post requirements, find local services, jobs, freelance projects and business opportunities, and connect directly.",

  keywords: [
    "HuntInTown",
    "Hunt In Town",
    "HuntInTown app",
    "HuntInTown platform",
    "Hunt In Town platform",
    "local requirement platform",
    "post a requirement",
    "find what you need",
    "find local services",
    "find local professionals",
    "find local businesses",
    "local services marketplace",
    "local opportunity platform",
    "connect with local people",
    "connect with local businesses",
    "find services near me",
    "find professionals near me",
    "find businesses near me",
    "local service providers",
    "hire local professionals",
    "find freelancers near me",
    "find skilled workers near me",
    "local suppliers",
    "find local suppliers",
    "post service requirements",
    "find local work",
    "find work near me",
    "local jobs",
    "local job opportunities",
    "freelance opportunities",
    "freelance gigs",
    "freelance projects",
    "find freelance clients",
    "find clients near me",
    "business leads",
    "local business leads",
    "service leads",
    "local service leads",
    "customer requirements",
    "local projects",
    "contract work",
    "skilled work opportunities",
    "work opportunities near me",
    "services near me",
    "jobs near me",
    "freelance jobs near me",
    "business opportunities near me",
    "local work opportunities",
  ],

  authors: [
    {
      name: "HuntInTown",
      url: siteUrl,
    },
  ],

  creator: "HuntInTown",
  publisher: "HuntInTown",
  applicationName: "HuntInTown",

  category: "Business",

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
    title:
      "HuntInTown (Hunt In Town) | Find Local Services, Work & Opportunities",
    description:
      "Find local services, professionals, businesses, work, freelance projects and opportunities. Post what you need or discover people looking for what you offer.",
    locale: "en_IN",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "HuntInTown - Find Local Services, Work & Opportunities",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "HuntInTown (Hunt In Town) | Find Local Services, Work & Opportunities",
    description:
      "Find local services, work, freelance projects and business opportunities. Connect directly through HuntInTown.",
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
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "HuntInTown",
        alternateName: "Hunt In Town",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.jpeg`,
        },
        sameAs: [
          "https://instagram.com/huntintown",
          "https://linkedin.com/company/huntintown",
          "https://twitter.com/huntintown",
          "https://facebook.com/huntintown",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "HuntInTown",
        alternateName: "Hunt In Town",
        description:
          "A platform for finding local services and opportunities by connecting people who need something with people who can help.",
        url: siteUrl,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        name: "HuntInTown (Hunt In Town) | Find Local Services, Work & Opportunities",
        description:
          "Choose whether you need help or can help, then connect through HuntInTown with local services, professionals, businesses, freelancers, and opportunities.",
        url: siteUrl,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '2735923370143999');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Navbar />

        <section className="bg-[#0a0a0a] mt-16">{children}</section>
      </body>
    </html>
  );
}
