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

export const metadata: Metadata = {
  title: "Aarti Panchal",
  description:
    "Engineer at PES University, Bengaluru. C4GT 2026 fellow rebuilding India’s 104 health helpline UI. Founder of Khoj. Writes about NMR quantum computing and research agents.",
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
