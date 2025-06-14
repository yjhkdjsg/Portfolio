"use client";
import React from "react";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/20 bg-transparent py-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30 blur-sm"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, #a084ff33 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 flex items-center gap-2">
        <FaCode className="text-white text-lg animate-pulse" />
        <span className="text-white text-base font-mono tracking-wide">
          Designed by Sneha Gusain
        </span>
      </div>
      <div className="relative z-10 mt-2 text-xs text-neutral-400 font-mono">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;