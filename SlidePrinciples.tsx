import React from "react";
import { motion } from "motion/react";
import { 
  FileText, 
  LayoutGrid, 
  Cpu, 
  UserCheck, 
  History, 
  Compass,
  Layers
} from "lucide-react";
import { SlideProps } from "../types";

export default function SlidePrinciples({ isActive }: SlideProps) {
  if (!isActive) return null;

  // Pentagon: 5 nodes equally spaced at 72° apart, starting from top (-90°)
  // radius 38% of container, center at 50%,50%
  const R = 38;
  const pentagonPositions = Array.from({ length: 5 }, (_, i) => {
    const angle = (Math.PI / 180) * (-90 + i * 72);
    return {
      left: `${50 + R * Math.cos(angle)}%`,
      top: `${50 + R * Math.sin(angle)}%`,
    };
  });

  const principles = [
    {
      title: "Requirement Clarity",
      desc: "Deterministic specs feed precise outputs",
      icon: FileText,
      color: "from-cyan-500/20 to-blue-600/30",
      borderColor: "border-cyan-500/30",
      delay: 0.1,
    },
    {
      title: "Modular Decomposition",
      desc: "Isolating contexts eliminates complexity limits",
      icon: LayoutGrid,
      color: "from-blue-500/20 to-indigo-600/30",
      borderColor: "border-blue-500/30",
      delay: 0.2,
    },
    {
      title: "AI-Augmented Productivity",
      desc: "Synergistic agent-driven code generation",
      icon: Cpu,
      color: "from-purple-500/20 to-cyan-600/30",
      borderColor: "border-purple-500/30",
      delay: 0.3,
    },
    {
      title: "Human-Controlled Delivery",
      desc: "Rigorous manual gates and final override power",
      icon: UserCheck,
      color: "from-emerald-500/20 to-teal-600/30",
      borderColor: "border-emerald-500/30",
      delay: 0.4,
    },
    {
      title: "End-to-End Traceability",
      desc: "Auditable lineage from requirements to builds",
      icon: History,
      color: "from-cyan-500/20 to-teal-600/30",
      borderColor: "border-cyan-500/30",
      delay: 0.5,
    },
  ].map((p, i) => {
    const pos = pentagonPositions[i];
    // nudge "Requirement Clarity" (idx 0) a bit higher
    if (i === 0) return { ...p, left: pos.left, top: `calc(${pos.top} - 9%)` };
    return { ...p, ...pos };
  });

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 md:p-16 select-none bg-gradient-to-b from-[#030303] via-[#09090d] to-[#030303] overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[140px] mix-blend-screen animate-pulse" style={{ animationDuration: "15s" }} />
        <div className="grid-bg absolute inset-0 opacity-25 pointer-events-none" />
        
        {/* Architectural floating Blueprint line elements */}
        <div className="absolute top-[20%] left-10 w-[90%] h-[1px] bg-cyan-500/5" />
        <div className="absolute bottom-[25%] left-10 w-[90%] h-[1px] bg-blue-500/5" />
        <div className="absolute left-[30%] top-10 w-[1px] h-[90%] bg-purple-500/5" />
        <div className="absolute right-[30%] top-10 w-[1px] h-[90%] bg-teal-500/5" />
      </div>

      {/* Header */}
      <div className="relative z-10 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center space-x-2"
        >
          <span className="h-[1px] w-8 bg-gradient-to-r from-cyan-500 to-transparent"></span>
          <span className="text-xs font-mono tracking-[0.3em] font-semibold text-cyan-400 uppercase">
            Phase 02 — Core Methodology
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-white max-w-4xl"
        >
          5 Core Principles for <span className="font-semibold bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">AI-Driven Development</span>
        </motion.h1>
      </div>

      {/* Pentagon Visualization */}
      <div className="relative w-full flex-grow flex items-center justify-center min-h-[360px] lg:min-h-[430px]">
        
        {/* Animated Laser Paths from Center to Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            </linearGradient>
            <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </radialGradient>
          </defs>

          {/* Central backing glow circle */}
          <circle cx="50%" cy="50%" r="120" fill="url(#radialGlow)" />
          
          {principles.map((pr, idx) => (
            <g key={idx}>
              <line
                x1="50%"
                y1="50%"
                x2={pr.left}
                y2={pr.top}
                stroke="rgba(6, 182, 212, 0.08)"
                strokeWidth="1.5"
              />
              <motion.line
                x1="50%"
                y1="50%"
                x2={pr.left}
                y2={pr.top}
                stroke="url(#laserGrad)"
                strokeWidth="2"
                initial={{ strokeDasharray: "15 45", strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -120 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
              />
            </g>
          ))}
        </svg>

        {/* Center AI Core Node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 flex flex-col items-center justify-center p-6 rounded-full border border-cyan-500/20 bg-black/90 w-36 h-36 md:w-40 md:h-40 text-center shadow-[0_0_60px_rgba(6,182,212,0.15)] group"
        >
          <div className="absolute inset-[-4px] rounded-full border border-cyan-500/10 animate-ping opacity-30" style={{ animationDuration: "3s" }} />
          <Layers className="w-7 h-7 text-cyan-400 mb-1.5 animate-pulse" />
          <span className="text-[9px] font-mono tracking-[0.2em] text-cyan-400 font-bold uppercase pointer-events-none">ENGINE SYSTEM</span>
          <span className="text-xs md:text-sm font-semibold text-white tracking-wide mt-1 font-display leading-tight pointer-events-none">Governed AI<br />Engineering</span>
        </motion.div>

        {/* 5 Principle Cards */}
        {principles.map((pr, idx) => {
          const PriorityIcon = pr.icon;
          return (
            <motion.div
              key={idx}
              className="absolute z-10 flex flex-col p-4 rounded-xl border border-white/[0.06] bg-[#0c0c0e]/85 backdrop-blur-md hover:bg-[#121215]/95 transition-all duration-300 w-52 md:w-56"
              style={{
                top: pr.top,
                left: pr.left,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: pr.delay, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(6,182,212,0.3)",
                boxShadow: "0 10px 30px -10px rgba(6,182,212,0.15)"
              }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${pr.color} border ${pr.borderColor} flex-shrink-0`}>
                  <PriorityIcon className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-white leading-snug tracking-wide font-display">{pr.title}</h3>
              </div>
              <p className="text-[11px] text-gray-400 leading-normal font-light">{pr.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Statement Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-white/[0.04] pt-6 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center space-x-3"
        >
          <div className="p-1 rounded bg-cyan-950/40 border border-cyan-500/20">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            Guiding Principles
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-right"
        >
          <p className="text-sm md:text-base font-display font-light text-gray-300">
            “Reliable AI delivery begins with <span className="font-medium text-white">structured engineering principles</span>.”
          </p>
        </motion.div>
      </div>
    </div>
  );
}
