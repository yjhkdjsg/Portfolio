import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sneha Gusain's Portfolio",
  description: "Welcome to Sneha Gusain's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-[#49009c] to-[#05000e] overflow-x-hidden`}
        data-gptw=""
        suppressHydrationWarning
      >
        {/* Grid Background */}
        <div className="fixed inset-0 bg-[
          radial-gradient(circle_at_1rem_1rem,rgba(255,255,255,0.05)_1px,transparent_1px),
          radial-gradient(circle_at_3rem_3rem,rgba(255,255,255,0.08)_1px,transparent_1px)
        ] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Brighter Pink Glow Spot (larger and slightly higher) */}
        <div className="absolute top-10 left-[60%] w-[400px] h-[400px] rounded-full bg-[#f854b4] opacity-60 blur-[160px] pointer-events-none z-0" />

        {/* Brighter Blue Glow Spot (smaller and lower than pink) */}
        <div className="absolute top-40 left-[45%] w-[250px] h-[250px] rounded-full bg-[#66b3ff] opacity-60 blur-[140px] pointer-events-none z-0" />

        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
