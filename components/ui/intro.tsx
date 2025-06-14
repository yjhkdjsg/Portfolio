"use client";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Intro() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPos({ x, y, visible: true });
  };

  const handleMouseLeave = () => {
    setHoverPos((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="space-y-3 overflow-y-auto">
      <div className="space-y-1">
        <p className="text-gray-600 text-2xl font-light">
          Hey, <span className="font-semibold text-gray-800">Sneha Gusain</span> here!
        </p>
        
        <h1 className="text-7xl lg:text-8xl font-bold leading-tight">
          <span className="text-gray-800">A </span>
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Creative & FUN
          </span>
        </h1>
        
        <h2 className="text-4xl lg:text-5xl font-light text-gray-700 mt-2">
          User Experience Designer
        </h2>
      </div>
      
      <div className="space-y-3">
        <p className="text-gray-600 text-2xl leading-relaxed max-w-lg">
          I am a <span className="text-purple-600 font-medium italic">curious</span> mind who tends to ask multiple 
          questions before coming to a conclusion, which 
          helps me get to the <span className="text-purple-600 font-medium italic">root cause</span> of the problem to 
          design better solutions
        </p>
      </div>
      <button
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden bg-[#3f1e70] cursor-pointer backdrop-blur-md border border-[#61478d] rounded-full px-8 py-4 text-white font-medium hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
      >
        <span
          className={`absolute w-32 h-32 bg-white/30 blur-2xl rounded-full pointer-events-none transition-all duration-500 ease-out transform ${
            hoverPos.visible ? "opacity-100 scale-100" : "opacity-0 scale-40"
          }`}
          style={{
            top: hoverPos.y - 64,
            left: hoverPos.x - 64,
          }}
        />
        <span className="relative z-10 flex items-center gap-3">
          Get in touch
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </button>
    </div>
  );
}
