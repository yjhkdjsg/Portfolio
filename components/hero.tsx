"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';
import Intro from "./ui/intro";
import Footer from "@/components/ui/footer";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values for scroll animations
  const rotateX = useTransform(scrollYProgress, [0, 0.6], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -100]);
  

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 flex items-center justify-center relative z-50 min-h-screen">
          {/* Glass container with scroll animations */}
          <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  style={{
    rotateX,
    opacity,
    scale,
    y,
    transformPerspective: 1200,
    transformStyle: "preserve-3d",
    borderWidth: "3px",
    borderStyle: "solid",
    borderImage: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent) 1"
  }}
  className="w-full max-w-7xl mx-auto p-8 lg:p-16 relative overflow-hidden rounded-3xl shadow-2xl 
             bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10"
>


            {/* Background gradient circles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
            </div>
            
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Intro />
                </motion.div>
                
                {/* Profile Image */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="ml-auto w-80 h-96 relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20"
                >
                  <Image
                    src="/ui/self.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

      <Footer />
    </div>
  );
}