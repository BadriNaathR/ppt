import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, 
  LayoutGrid, 
  Cpu, 
  UserCheck, 
  History, 
  Compass,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Orbit
} from "lucide-react";
import { SlideProps } from "../types";

export default function SlidePrinciples({ isActive }: SlideProps) {
  if (!isActive) return null;

  const [activeIndex, setActiveIndex] = useState(0);

  const principles = [
    {
      id: "clarity",
      num: "01",
      title: "Requirement Clarity",
      orbitLabel: "Clarity",
      desc: "Define clear, detailed specifications aligned with user needs.",
      accent: "text-cyan-400",
      bgAccent: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      glowColor: "rgba(34, 211, 238, 0.45)",
      icon: FileText,
      orbitalDelay: 0,
      orbitRadius: "r-[140px]"
    },
    {
      id: "decomposition",
      num: "02",
      title: "Modular Decomposition",
      orbitLabel: "Decomposition",
      desc: "Break large requirements into smaller, reviewable units to reduce hallucinations and improve validation.",
      accent: "text-blue-400",
      bgAccent: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      glowColor: "rgba(59, 130, 246, 0.45)",
      icon: LayoutGrid,
      orbitalDelay: 1.5,
      orbitRadius: "r-[180px]"
    },
    {
      id: "productivity",
      num: "03",
      title: "AI-Augmented Productivity",
      orbitLabel: "Productivity",
      desc: "Use AI to accelerate delivery, not to bypass critical SDLC steps.",
      accent: "text-purple-400",
      bgAccent: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      gradient: "from-purple-400 via-pink-500 to-indigo-600",
      glowColor: "rgba(168, 85, 247, 0.45)",
      icon: Cpu,
      orbitalDelay: 3.0,
      orbitRadius: "r-[220px]"
    },
    {
      id: "delivery",
      num: "04",
      title: "Human-Controlled Delivery",
      orbitLabel: "Delivery",
      desc: "Ensure human oversight from user requirements through production deployment.",
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      glowColor: "rgba(16, 185, 129, 0.45)",
      icon: UserCheck,
      orbitalDelay: 4.5,
      orbitRadius: "r-[260px]"
    },
    {
      id: "traceability",
      num: "05",
      title: "End-to-End Traceability",
      orbitLabel: "Traceability",
      desc: "Maintain traceability from requirements to design, code, testing, and release.",
      accent: "text-amber-400",
      bgAccent: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      gradient: "from-amber-400 via-orange-500 to-red-600",
      glowColor: "rgba(245, 158, 11, 0.45)",
      icon: History,
      orbitalDelay: 6.0,
      orbitRadius: "r-[300px]"
    }
  ];

  const selectPrinciple = (index: number) => {
    setActiveIndex(index);
  };

  const activePr = principles[activeIndex];
  const ActiveIcon = activePr.icon;

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-10 md:p-14 lg:p-16 select-none bg-black overflow-hidden">
      
      {/* BACKGROUND CINEMATICS: Slow Floating Space Dust */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="grid-bg absolute inset-0 opacity-[0.06]" />
        
        {/* Slow pulsating background gas glows matched to active category */}
        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div 
            className="w-[1000px] h-[1000px] rounded-full blur-[180px] transition-all duration-1000"
            style={{ 
              background: `radial-gradient(circle, ${activePr.glowColor} 0%, rgba(0,0,0,0) 70%)` 
            }}
          />
        </motion.div>

        {/* Cinematic horizontal lens flares */}
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent blur-sm" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-sm" />
      </div>

      {/* Slide Navigation Header */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extralight tracking-tight text-white max-w-3xl leading-[1.05]"
          >
            Core <span className="font-semibold bg-gradient-to-r from-white via-cyan-400 to-cyan-400 bg-clip-text text-transparent">Governance Principles</span>
          </motion.h1>
        </div>
      </div>

      {/* CINEMATIC INTERACTIVE VISUAL CORE */}
      <div className="relative z-10 w-full flex-grow flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-14 my-auto">
        
        {/* LEFT COLUMN: Ultra-Clean Floating HUD Display (The focused principle) */}
        <div className="w-full lg:w-[48%] flex flex-col justify-center text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 20, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Futuristic Cinematic Index Indicator */}
              <div className="flex items-center space-x-4 select-none">
                <div className="relative">
                  {/* Outer spinning dash circle for micro-tech aesthetic */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="absolute inset-[-6px] border border-dashed border-cyan-400/30 rounded-full pointer-events-none"
                  />
                  <div className={`w-14 h-14 rounded-lg border ${activePr.borderColor} bg-white/[0.02]/80 backdrop-blur-xl flex items-center justify-center font-mono text-2xl font-extrabold tracking-tight ${activePr.accent} shadow-[0_0_20px_rgba(34,211,238,0.2)]`}>
                    {activePr.num}
                  </div>
                </div>
              </div>

              {/* Title & Description with beautiful high-end typography */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white tracking-tight leading-none">
                  {activePr.title}
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-300/95 font-light leading-relaxed max-w-xl">
                  {activePr.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Holographic Orbit Orrery (Cosmic orbital engine) */}
        <div className="w-full lg:w-[48%] h-[320px] sm:h-[380px] md:h-[440px] flex items-center justify-center relative">
          
          {/* Circular Hologram Canvas Grid */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Pulsing circular orbit paths */}
            <div className="absolute w-[220px] h-[220px] rounded-full border border-white/[0.03] flex items-center justify-center animate-pulse" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-white/[0.02]" />
            <div className="absolute w-[380px] h-[380px] rounded-full border border-white/[0.01]" />
          </div>

          {/* RADIANT STELLAR SYSTEM CORE */}
          <motion.div 
            className="absolute z-20 flex items-center justify-center cursor-pointer"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          >
            {/* Core Glow Flares */}
            <div className="absolute w-20 h-20 rounded-full bg-white/5 blur-xl group-hover:bg-white/10 transition-all duration-1000" />
            
            {/* Symmetrical Stellar vector graphics inside core representing alignment */}
            <div className="w-16 h-16 rounded-full border border-white/10 background-blur-xl bg-black/40 flex items-center justify-center relative z-20">
              <Orbit className="w-6 h-6 text-white/40 animate-spin" style={{ animationDuration: "20s" }} />
              
              {/* Spinning orbiting dots */}
              <div className="absolute inset-1.5 border border-dashed border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: "6s" }} />
            </div>
          </motion.div>

          {/* Interactive Cinematic Symmetrical Nodes orbiting the Stella core */}
          {principles.map((pr, idx) => {
            const IsNodeSelected = activeIndex === idx;
            const IconComponent = pr.icon;

            // Compute spatial node coordinates systematically for circular alignment with increased radius for larger nodes
            const angle = (idx * (360 / principles.length) - 90) * (Math.PI / 180);
            const radius = 150; // increased radius for spacious visualization of larger nodes
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={pr.id}
                className="absolute z-30 transition-all duration-700"
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              >
                {/* Node structure container */}
                <div className="relative group flex flex-col items-center justify-center">
                  
                  {/* Outer Orbit Path connector line from Core to active node */}
                  {IsNodeSelected && (
                    <motion.div 
                      layoutId="laserLeash"
                      className="absolute h-[1px] bg-gradient-to-r from-cyan-400/40 to-transparent pointer-events-none z-0 origin-left"
                      style={{ 
                        transform: `rotate(${angle * (180 / Math.PI) + 180}deg)`, 
                        width: `${radius}px`,
                        left: "50%"
                      }}
                    />
                  )}

                  {/* Node trigger action blob with increased size */}
                  <motion.div
                    onClick={() => selectPrinciple(idx)}
                    onMouseEnter={() => selectPrinciple(idx)}
                    whileHover={{ scale: 1.12 }}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 border-2 ${
                      IsNodeSelected 
                        ? `bg-[#030712] ${pr.borderColor} border-cyan-400 shadow-[0_0_35px_${pr.glowColor}] text-cyan-400` 
                        : "bg-black/95 border-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:scale-105"
                    }`}
                  >
                    {/* Ring highlight animation looping inside active node */}
                    {IsNodeSelected && (
                      <motion.div 
                        className="absolute inset-[-4px] rounded-full border border-cyan-400/50"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                      />
                    )}

                    {/* Increased icon size for elegant representation */}
                    <IconComponent className="w-7 h-7 md:w-9 md:h-9 transition-transform duration-300 group-hover:rotate-6" />
                  </motion.div>

                  {/* Permanently visible Elegant Title Label under each orbit icon */}
                  <div className={`absolute -bottom-10 md:-bottom-12 tracking-wide text-center w-28 md:w-36 text-[9px] md:text-[11px] font-mono leading-tight transition-all duration-300 ${
                    IsNodeSelected 
                      ? "text-cyan-400 font-bold scale-105" 
                      : "text-gray-400 group-hover:text-white"
                  }`}>
                    {pr.title}
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* Cinematic Slide Action / Protocol Footer */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-white/5 pt-5 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center space-x-3.5"
        >
          <div className="p-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 animate-pulse">
            <Compass className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#00f0ff] font-bold">
            Alignment Governance Standard
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-right"
        >
          <p className="text-xs md:text-sm font-display font-light text-gray-400">
            “System integrity starts with <span className="font-semibold text-white">verifiable parameters</span>. True velocity guarantees alignment at scale.”
          </p>
        </motion.div>
      </div>

    </div>
  );
}
