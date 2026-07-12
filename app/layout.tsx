import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
