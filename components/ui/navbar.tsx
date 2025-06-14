"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Raleway } from "next/font/google";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "./button";
import { motion } from "framer-motion";
import { IconType } from 'react-icons';

const raleway = Raleway({ subsets: ["latin"] });

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Link 
      href={href} 
      className="text-white/90 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
    </Link>
  </motion.div>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: IconType }) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/90 hover:text-white transition-colors relative group"
    >
      <Icon className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
    </a>
  </motion.div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-4 w-[60%] left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 rounded-full ${
        scrolled
          ? "bg-black/30 backdrop-blur-lg border border-white/20 shadow-lg"
          : "bg-black/20 backdrop-blur-sm border border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Portfolio Name */}
          <div className={`${raleway.className} text-xl font-bold text-white cursor-pointer`}>
              Sneha Gusain
          </div>

          {/* Middle - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/experience">Skills</NavLink>
            <NavLink href="/experience">Experience</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </div>

          {/* Right - Social Links and Resume Button */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                href="/resume.pdf"
                className="hidden md:flex"
              >
                Resume
              </Button>
            </motion.div>
            <SocialIcon href="mailto:snehag2864@gmail.com?subject=Hello" icon={FaEnvelope} />
            <SocialIcon href="https://github.com/yjhkdjsg" icon={FaGithub} />
            <SocialIcon href="https://linkedin.com/in/snehagusain7" icon={FaLinkedin} />
          </div>
        </div>
      </div>
    </nav>
  );
}
