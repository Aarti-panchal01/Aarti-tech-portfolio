import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Constellation } from "@/components/constellation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetmono",
  display: "swap",
});

const SITE = "https://aarti-tech-portfolio.vercel.app";
const DESCRIPTION =
  "Engineer at PES University, Bengaluru. C4GT DMP ’26 contributor rebuilding India’s 104 health helpline frontend from Angular 4 to 20. Founder of Khoj. Writes about production voice AI, government tech, and quantum hardware.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Aarti Panchal — Engineer",
    template: "%s | Aarti Panchal",
  },
  description: DESCRIPTION,
  authors: [{ name: "Aarti Panchal", url: SITE }],
  creator: "Aarti Panchal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Aarti Panchal",
    title: "Aarti Panchal — Engineer",
    description: DESCRIPTION,
    url: SITE,
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Aarti Panchal — C4GT DMP ’26 contributor, founder of Khoj, PESU AIML ’28",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarti Panchal — Engineer",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const themeInit = `try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <Constellation />
        {children}
      </body>
    </html>
  );
}
