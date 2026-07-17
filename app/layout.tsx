import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const englishFont = Inter({
  subsets: ["latin"],
  variable: "--font-english",
});

const hindiFont = Noto_Sans_Devanagari({
  weight: ["400", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-hindi",
});

export const metadata: Metadata = {
  title: "Ghar Aarogyam - Right Advice, The Path to Health",
  description: "AI-Driven Patient Support Program",
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${englishFont.variable} ${hindiFont.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

