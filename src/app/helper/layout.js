export const metadata = {
  title: "Find Local Jobs, Freelance Gigs & Business Leads | HuntInTown",

  description:
    "Find local jobs, freelance projects, service leads and business opportunities on HuntInTown. Connect directly with people and businesses looking for your skills, services or products.",

  keywords: [
    "HuntInTown",
    "Hunt In Town",
    "HuntInTown opportunities",
    "Hunt In Town opportunities",
    "find local work",
    "find work near me",
    "local jobs",
    "local job opportunities",
    "freelance jobs",
    "freelance gigs",
    "freelance opportunities",
    "freelance projects",
    "local freelance projects",
    "find freelance clients",
    "find clients near me",
    "local business leads",
    "business leads",
    "service leads",
    "local service leads",
    "customer requirements",
    "service requirements",
    "local projects",
    "contract work",
    "skilled work",
    "work opportunities near me",
    "gigs near me",
    "local work opportunities",
    "professional opportunities",
    "local supplier opportunities",
    "vendor leads",
    "find customers locally",
    "connect with local customers",
  ],

  alternates: {
    canonical: "/helper",
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
    title: "Find Local Jobs, Freelance Gigs & Business Leads | HuntInTown",
    description:
      "Discover local work, freelance projects, service leads and business opportunities. Connect directly with people and businesses looking for what you offer.",
    url: "/helper",
    siteName: "HuntInTown",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Find Local Jobs, Freelance Gigs & Business Leads | HuntInTown",
    description:
      "Find local work, freelance projects, service leads and business opportunities on HuntInTown.",
  },

  category: "Business",
};

export default function HelperLayout({ children }) {
  return children;
}
