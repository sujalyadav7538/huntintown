export const metadata = {
  title: "Find Local Services, Professionals & Businesses | HuntInTown",

  description:
    "Post what you need on HuntInTown and discover local professionals, freelancers, businesses, suppliers and skilled individuals who can help with your requirement.",

  keywords: [
    "HuntInTown",
    "Hunt In Town",
    "HuntInTown services",
    "Hunt In Town services",
    "find local services",
    "find local professionals",
    "find professionals near me",
    "local service providers",
    "service providers near me",
    "find businesses near me",
    "find local businesses",
    "post a requirement",
    "post service requirement",
    "post a job requirement",
    "find someone for a job",
    "hire local professionals",
    "hire freelancers",
    "find freelancers near me",
    "local freelancers",
    "find skilled professionals",
    "find skilled workers",
    "home services near me",
    "repair services near me",
    "plumber near me",
    "electrician near me",
    "cleaning services near me",
    "local business services",
    "professional services near me",
    "local suppliers",
    "find local suppliers",
    "find vendors near me",
    "find tutors near me",
    "find designers near me",
    "find developers near me",
    "find consultants near me",
    "local service marketplace",
    "find the right professional",
  ],

  alternates: {
    canonical: "/hunter",
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

  openGraph: {
    type: "website",
    title: "Find Local Services, Professionals & Businesses | HuntInTown",
    description:
      "Post your requirement on HuntInTown and connect directly with local professionals, freelancers, businesses, suppliers and skilled individuals who can help.",
    url: "/hunter",
    siteName: "HuntInTown",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Find Local Services, Professionals & Businesses | HuntInTown",
    description:
      "Post what you need and discover local professionals, businesses, freelancers and suppliers on HuntInTown.",
  },

  category: "Business",
};

export default function HunterLayout({ children }) {
  return children;
}