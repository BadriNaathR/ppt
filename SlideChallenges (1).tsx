import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { 
  Code2, 
  Brain, 
  GitFork, 
  Network,
  AlertTriangle
} from "lucide-react";
import { SlideProps } from "../types";

// 1. Core Matrix - Ultra-premium Gyroscopic custom animated core representation
const AdvancedCoreIcon = () => (
  <div className="relative w-18 h-18 flex items-center justify-center pointer-events-none">
    {/* Multi-layered rotating geometric vector grids & dashed rings */}
    <motion.div
      className="absolute inset-0 border border-dashed border-red-500/40 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
    />
    
    <motion.div
      className="absolute w-14 h-14 border border-dotted border-red-400/30 rounded-full"
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    />

    <motion.div
      className="absolute w-10 h-10 border border-dashed border-rose-500/20 rounded-full"
      animate={{ rotate: 180 }}
      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    />
    
    {/* Hyper-glowing central core element */}
    <motion.div
      className="absolute w-7 h-7 bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 rounded-sm"
      animate={{ 
        scale: [1, 1.25, 1],
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ["25%", "50%", "25%"]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 4, 
        ease: "easeInOut" 
      }}
      style={{ boxShadow: "0 0 22px rgba(239, 68, 68, 0.7)" }}
    />
  </div>
);

// Animated Icon 1: Almost-Right Code
const AnimatedAlmostRightIcon = () => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    {/* Inner warning glow & pulse */}
    <motion.div
      className="absolute inset-0 bg-red-500/10 rounded-full blur-[2px]"
      animate={{
        scale: [1, 1.35, 1],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    />
    {/* Small validation dot flashing alternately from complete to warning */}
    <motion.div
      className="absolute w-2.5 h-2.5 bg-red-500 rounded-full -top-0.5 -right-0.5 z-10 border border-[#030303]"
      animate={{
        scale: [1, 1.4, 1],
        backgroundColor: ["#f43f5e", "#fb923c", "#f43f5e"],
      }}
      transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
    />
    <motion.div
      animate={{
        rotateY: [0, 180, 360],
        y: [0, -1, 1, 0]
      }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    >
      <Code2 className="w-4.5 h-4.5 text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.7)]" />
    </motion.div>
  </div>
);

// Animated Icon 2: Comprehension Debt
const AnimatedBrainDebtIcon = () => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    {/* Faint diagnostic scanning circle */}
    <motion.div
      className="absolute inset-0 border border-purple-500/20 rounded-full"
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.6, 0.1, 0.6]
      }}
      transition={{ repeat: Infinity, duration: 2.8, ease: "easeOut" }}
    />
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        rotate: [-4, 4, -4]
      }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <Brain className="w-4.5 h-4.5 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]" />
    </motion.div>
  </div>
);

// Animated Icon 3: Architectural Drift
const AnimatedDriftIcon = () => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    {/* Tiny physical drift nodes separator lines */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="w-1 h-1 bg-indigo-500 rounded-full absolute"
        animate={{
          x: [-7, 7, -7],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
      />
      <motion.div
        className="w-1 h-1 bg-violet-400 rounded-full absolute"
        animate={{
          x: [7, -7, 7],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
      />
    </div>
    <motion.div
      animate={{
        rotate: [0, 30, -30, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
    >
      <GitFork className="w-4.5 h-4.5 text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]" />
    </motion.div>
  </div>
);

// Animated Icon 4: Review Overload
const AnimatedOverloadIcon = () => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    {/* Micro network load ring */}
    <motion.div
      className="absolute inset-0 border border-dashed border-cyan-500/30 rounded-full"
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
    />
    <motion.div
      animate={{
        y: [-1.5, 1.5, -1.5],
        scale: [0.95, 1.12, 0.95]
      }}
      transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
    >
      <Network className="w-4.5 h-4.5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
    </motion.div>
  </div>
);

export default function SlideChallenges({ isActive }: SlideProps) {
  if (!isActive) return null;

  const [activeNode, setActiveNode] = useState(0);
  const autoCycleRef = useRef<NodeJS.Timeout | null>(null);

  // Symmetrical 4-node arrangement oriented diagonally (45°, 135°, 225°, 315°)
  // Positioned symmetrically with left side cards at 20% and right side cards at 80% (perfect balance)
  const nodes = [
    {
      id: 0,
      title: "Almost-Right Code",
      subtitle: "AI-generated code may appear plausible but contain subtle bugs, ignore best practices, or fail to align with project architecture.",
      icon: AnimatedAlmostRightIcon,
      color: "from-rose-500/10 to-red-600/20",
      borderColor: "border-red-500/30",
      top: "23%",  // 50% - 27%
      left: "80%", // Symmetrical position to 20% (100% - 20%)
      delay: 0.1,
    },
    {
      id: 1,
      title: "Comprehension Debt",
      subtitle: "Teams merge code without fully understanding its logic, dependencies, or stability requirements.",
      icon: AnimatedBrainDebtIcon,
      color: "from-purple-500/10 to-indigo-600/20",
      borderColor: "border-indigo-500/30",
      top: "77%",  // 50% + 27%
      left: "80%", // Symmetrical position to 20% (100% - 20%)
      delay: 0.2,
    },
    {
      id: 2,
      title: "Architectural Drift",
      subtitle: "AI generates locally aligned files that degrade the broader macro design & system structure.",
      icon: AnimatedDriftIcon,
      color: "from-[#6366f1]/10 to-[#8b5cf6]/20",
      borderColor: "border-[#6366f1]/30",
      top: "77%",  // 50% + 27%
      left: "20%", // Left aligned
      delay: 0.3,
    },
    {
      id: 3,
      title: "Review Overload",
      subtitle: "Massive pull requests escalate cognitive strain, delaying delivery pipelines & reviews.",
      icon: AnimatedOverloadIcon,
      color: "from-cyan-500/10 to-teal-600/20",
      borderColor: "border-cyan-500/30",
      top: "23%",  // 50% - 27%
      left: "20%", // Left aligned
      delay: 0.4,
    },
  ];

  // Auto-cycle through the 4 warning indicators
  useEffect(() => {
    autoCycleRef.current = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 4500);

    return () => {
      if (autoCycleRef.current) clearInterval(autoCycleRef.current);
    };
  }, []);

  const outerLabels = [
    { text: "LEGAL COMPLIANCE GATEWAY", position: "top-10 right-12" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 md:p-16 select-none bg-gradient-to-b from-[#030303] via-[#09090b] to-[#030303] overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-red-950/10 rounded-full blur-[140px] mix-blend-screen animate-pulse" style={{ animationDuration: "14s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-950/10 rounded-full blur-[110px] mix-blend-screen animate-pulse" style={{ animationDuration: "20s" }} />
        <div className="grid-bg absolute inset-0 opacity-20 pointer-events-none" />
      </div>

      {/* Corporate Metadata HUD Lines */}
      {outerLabels.map((lbl, idx) => (
        <motion.div
          key={idx}
          className={`${lbl.position} absolute text-[11px] font-mono tracking-[0.25em] text-gray-500/40 font-semibold border-l border-red-500/20 pl-2 pointer-events-none hidden sm:block`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + idx * 0.1, duration: 1 }}
        >
          {lbl.text}
        </motion.div>
      ))}

      {/* Header Info */}
      <div className="relative z-10 space-y-3 text-center mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-white max-w-4xl mx-auto leading-tight"
        >
          Current Challenges in <br />
          <span className="font-semibold bg-gradient-to-r from-white via-gray-200 to-red-400 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: "6s" }}>AI-Driven SDLC</span>
        </motion.h1>
      </div>

      {/* Centered Symmetrical Canvas */}
      <div className="relative w-full flex-grow flex items-center justify-center min-h-[380px] lg:min-h-[460px] z-10">
        
        {/* SVG Vector connections directly from core center (50%, 50%) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(244, 63, 94, 0.45)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.25)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.45)" />
            </linearGradient>
            <radialGradient id="meshGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(239, 68, 68, 0.08)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>
          
          <circle cx="50%" cy="50%" r="140" fill="url(#meshGlow)" />
          
          {/* Subtle radar tracking rings */}
          <motion.circle 
            cx="50%" 
            cy="50%" 
            r="160" 
            fill="none" 
            stroke="rgba(239, 68, 68, 0.08)" 
            strokeWidth="1"
            strokeDasharray="4 12"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="origin-center"
          />
          <motion.circle 
            cx="50%" 
            cy="50%" 
            r="220" 
            fill="none" 
            stroke="rgba(168, 85, 247, 0.05)" 
            strokeWidth="1"
            strokeDasharray="6 24"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
            className="origin-center"
          />
          
          {/* Dynamic Laser signal tracers mapping to the 4 nodes */}
          {nodes.map((node) => {
            const isCurrentlyActive = node.id === activeNode;
            return (
              <g key={node.id}>
                {/* Background path line */}
                <line
                  x1="50%"
                  y1="50%"
                  x2={node.left}
                  y2={node.top}
                  stroke={isCurrentlyActive ? "rgba(239, 68, 68, 0.22)" : "rgba(255, 255, 255, 0.03)"}
                  strokeWidth="1.5"
                  className="transition-colors duration-500"
                />
                
                {/* Glowing speed vector particle path */}
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={node.left}
                  y2={node.top}
                  stroke="url(#lineGrad)"
                  strokeWidth={isCurrentlyActive ? "2" : "1"}
                  strokeDasharray="6 18"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -40 }}
                  transition={{
                    repeat: Infinity,
                    duration: isCurrentlyActive ? 1.8 : 4.5,
                    ease: "linear",
                  }}
                />
                
                {/* Flow particles */}
                {isCurrentlyActive && (
                  <motion.circle
                    r="4.5"
                    fill="#f43f5e"
                    initial={{ cx: "50%", cy: "50%" }}
                    animate={{ cx: node.left, cy: node.top }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: "easeIn" }}
                    className="shadow-[0_0_12px_rgba(244,63,94,0.85)]"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Center Principal Core concept (Core Concept AI-Driven SDLC) */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center p-6 rounded-full border border-red-500/25 bg-[#070709]/95 w-36 h-36 md:w-40 md:h-40 text-center shadow-[0_0_60px_rgba(239,68,68,0.2)] border-t border-t-red-500/40"
        >
          <div className="absolute inset-[-4px] rounded-full border border-red-500/10 animate-ping opacity-15" style={{ animationDuration: "5s" }} />
          
          <AdvancedCoreIcon />
          
          <span className="text-[9px] font-mono tracking-[0.25em] text-red-400 font-bold uppercase pointer-events-none mt-2">CORE CONCEPT</span>
          <span className="text-xs md:text-sm font-semibold text-white tracking-wide font-display mt-0.5 pointer-events-none leading-tight">AI-Driven<br />SDLC</span>
        </motion.div>

        {/* 4 Diagonally Opposed Symmetrical Symmetrical Risk Cards */}
        {nodes.map((node) => {
          const NodeWidget = node.icon;
          const isCurrentlyActive = node.id === activeNode;
          
          return (
            <motion.div
              key={node.id}
              className={`absolute z-10 flex flex-col justify-center p-4 rounded-xl border transition-all duration-700 cursor-pointer w-[15rem] md:w-[18rem] ${
                isCurrentlyActive 
                  ? "border-red-500/40 bg-[#0e0e11]/95 shadow-[0_8px_30px_-5px_rgba(239,68,68,0.25)] scale-105" 
                  : "border-white/[0.04] bg-[#060608]/85 hover:bg-[#0c0c0f]/90 hover:scale-102"
              }`}
              style={{
                top: node.top,
                left: node.left,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: node.delay, duration: 0.6 }}
              onClick={() => setActiveNode(node.id)}
              onMouseEnter={() => setActiveNode(node.id)}
            >
              {/* Card Meta row with dynamic indicator and small animated icon */}
              <div className="flex items-center space-x-3 mb-2.5">
                <div className={`p-1.5 rounded-lg bg-[#0d0d12]/95 border border-white/[0.06] flex-shrink-0 transition-all duration-500 ${
                  isCurrentlyActive ? "border-red-500/35 shadow-[0_0_8px_rgba(239,68,68,0.2)]" : ""
                }`}>
                  <NodeWidget />
                </div>
                
                <h3 className="text-xs md:text-sm font-bold text-white tracking-wide font-display leading-tight flex-grow truncate">
                  {node.title}
                </h3>

                {isCurrentlyActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                )}
              </div>

              {/* Concise clean explanatory definitions inside the card */}
              <p className="text-[11px] text-gray-400 font-light leading-relaxed tracking-wide min-h-[38px]">
                {node.subtitle}
              </p>
              
              {/* Dynamic status line progression */}
              <div className="w-full h-[2px] bg-white/[0.04] rounded-full mt-3 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-red-500 to-rose-400"
                  initial={{ width: "20%" }}
                  animate={{ width: isCurrentlyActive ? "100%" : "20%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
