import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Link2, 
  Zap, 
  ShieldCheck, 
  Boxes, 
  CheckCircle, 
  Gauge, 
  Eye, 
  Compass,
  Activity,
  Network
} from "lucide-react";
import { SlideProps } from "../types";

// 1. Dynamic Centerpiece Graphic: Symmetrical "Living Graph Engine"
interface CenterpieceProps {
  activeId: number;
}

const LivingGraphCenterpiece = ({ activeId }: CenterpieceProps) => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center pointer-events-none">
      {/* External Circular Grids & Tech Rings */}
      <motion.div
        className="absolute inset-0 border border-emerald-500/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[90%] h-[90%] border border-dashed border-emerald-400/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[70%] h-[70%] border border-dotted border-emerald-500/15 rounded-full"
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />

      {/* Central Power Core */}
      <div className="absolute w-28 h-28 md:w-32 md:h-32 bg-[#050507] rounded-full border border-emerald-500/30 flex flex-col items-center justify-center p-4 text-center shadow-[0_0_50px_rgba(16,185,129,0.15)] z-20">
        <motion.div
          className="absolute inset-2 border border-emerald-500/20 rounded-full"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
        
        {/* Glowing Fusion Atom */}
        <div className="relative w-12 h-12 flex items-center justify-center mb-1">
          <motion.div
            className="absolute inset-0 border-2 border-emerald-500/40 rounded-full"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-1.5 border border-cyan-400/30 rounded-full"
            animate={{
              rotateX: [360, 0],
              rotateZ: [0, 360],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
        </div>
        
        <span className="text-[9px] font-mono tracking-[0.25em] text-emerald-400 font-bold uppercase leading-none">ALIGNED</span>
        <span className="text-[10px] text-white font-medium tracking-wide mt-1 leading-none uppercase">SDLC VALUE</span>
      </div>

      {/* Interactive Laser Vectors pointing toward the 4 quadrants */}
      <svg className="absolute inset-0 w-full h-full z-0 overflow-visible">
        <defs>
          <linearGradient id="linkPulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(52, 211, 153, 0.4)" />
            <stop offset="50%" stopColor="rgba(34, 211, 238, 0.6)" />
            <stop offset="100%" stopColor="rgba(52, 211, 153, 0.1)" />
          </linearGradient>
        </defs>

        {/* Circular Ring Path with active highlighting */}
        <circle cx="50%" cy="50%" r="90" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
        
        {/* Dynamic Connected Lines in 4 strategic diagonals representing the 4 Cards */}
        {/* Top Left (0: Trace Coverage) */}
        <line
          x1="50%" y1="50%" x2="15%" y2="15%"
          stroke={activeId === 0 ? "rgba(34, 211, 238, 0.5)" : "rgba(255, 255, 255, 0.05)"}
          strokeWidth={activeId === 0 ? "2" : "1"}
          className="transition-all duration-500"
        />
        {/* Bottom Left (1: Issue Resolution) */}
        <line
          x1="50%" y1="50%" x2="15%" y2="85%"
          stroke={activeId === 1 ? "rgba(52, 211, 153, 0.5)" : "rgba(255, 255, 255, 0.05)"}
          strokeWidth={activeId === 1 ? "2" : "1"}
          className="transition-all duration-500"
        />
        {/* Top Right (2: Governed Generation) */}
        <line
          x1="50%" y1="50%" x2="85%" y2="15%"
          stroke={activeId === 2 ? "rgba(244, 63, 94, 0.5)" : "rgba(255, 255, 255, 0.05)"}
          strokeWidth={activeId === 2 ? "2" : "1"}
          className="transition-all duration-500"
        />
        {/* Bottom Right (3: Auditable Artifacts) */}
        <line
          x1="50%" y1="50%" x2="85%" y2="85%"
          stroke={activeId === 3 ? "rgba(168, 85, 247, 0.5)" : "rgba(255, 255, 255, 0.05)"}
          strokeWidth={activeId === 3 ? "2" : "1"}
          className="transition-all duration-500"
        />

        {/* Active Laser Pulses */}
        {activeId !== -1 && (
          <motion.circle
            r="4"
            fill="#34d399"
            animate={{
              cx: activeId === 0 || activeId === 1 ? ["50%", "15%"] : ["50%", "85%"],
              cy: activeId === 0 || activeId === 2 ? ["50%", "15%"] : ["50%", "85%"],
            }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            style={{ boxShadow: "0 0 10px rgba(52,211,153,0.8)" }}
          />
        )}
      </svg>

      {/* Floating Orbital Node Details that light up based on Active Card */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Mini HUD widgets decorating the centerpiece */}
        <AnimatePresence>
          {activeId === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cyan-950/80 border border-cyan-400/40 text-cyan-400 text-[9px] font-mono px-2 py-0.5 rounded-full"
            >
              TRACE_CONNECTED: 100%
            </motion.div>
          )}
          {activeId === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-emerald-950/80 border border-emerald-400/40 text-emerald-400 text-[9px] font-mono px-2 py-0.5 rounded-full"
            >
              RESOLUTION: MTTR -92%
            </motion.div>
          )}
          {activeId === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 bg-rose-950/80 border border-rose-400/40 text-rose-400 text-[9px] font-mono px-2 py-0.5 rounded-full rotate-90"
            >
              UPSTREAM_RAILS: ACTV
            </motion.div>
          )}
          {activeId === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-1/2 -left-8 -translate-y-1/2 bg-purple-950/80 border border-purple-400/40 text-purple-400 text-[9px] font-mono px-2 py-0.5 rounded-full -rotate-90"
            >
              GRAPH_AUDIT: COMPLETE
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function SlideBenefits({ isActive }: SlideProps) {
  if (!isActive) return null;

  const [activeCard, setActiveCard] = useState<number>(0);
  const cycleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Define the 4 custom core enterprise benefits
  const outcomes = [
    {
      id: 0,
      title: "100% Trace Coverage",
      desc: "Every generated component remains linked to origin artifacts, guaranteeing precise structural alignment.",
      icon: Link2,
      stat: "TRACE COVERAGE",
      metric: "100%",
      color: "from-cyan-500/10 to-blue-500/20",
      borderColor: "border-cyan-500/20 hover:border-cyan-400/40",
      accent: "text-cyan-400",
      glowBg: "bg-cyan-500/5",
      // Micro-animation component for this card
      visualizer: () => (
        <div className="flex items-center space-x-1.5 h-6">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
          <span className="text-[10px] font-mono text-cyan-400/80">LINKED_TREE</span>
          <div className="flex-grow h-[1px] bg-cyan-500/20 relative">
            <motion.div
              className="absolute h-full w-[40%] bg-cyan-400 top-0 left-0"
              animate={{ left: ["0%", "60%", "0%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Faster Issue Resolution",
      desc: "Tracing replaces reverse engineering when production problems appear, drastically shortening MTTR pipelines.",
      icon: Zap,
      stat: "ISSUE RESOLUTION",
      metric: "IMMEDIATE",
      color: "from-emerald-500/10 to-teal-500/20",
      borderColor: "border-emerald-500/20 hover:border-emerald-400/40",
      accent: "text-emerald-400",
      glowBg: "bg-emerald-500/5",
      visualizer: () => (
        <div className="flex items-center justify-between h-6 w-full">
          <div className="flex space-x-1">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 md:w-1.5 h-3 bg-emerald-500/35 rounded-sm"
                animate={{
                  height: [6, 12, 6],
                  backgroundColor: ["#10b981", "#10b981", "#047857"]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
          <span className="text-[9px] font-mono text-emerald-400">MTTR: -92%</span>
        </div>
      )
    },
    {
      id: 2,
      title: "Governed Generation",
      desc: "Security policies, enterprise compliance, and system standards are programmatically applied directly upstream.",
      icon: ShieldCheck,
      stat: "GOVERNED ENGINE",
      metric: "ZERO LEAKS",
      color: "from-rose-500/10 to-red-500/20",
      borderColor: "border-rose-500/20 hover:border-rose-400/40",
      accent: "text-rose-400",
      glowBg: "bg-rose-500/5",
      visualizer: () => (
        <div className="flex items-center space-x-2 h-6">
          <div className="p-0.5 rounded bg-rose-950 border border-rose-500/30">
            <CheckCircle className="w-3 h-3 text-rose-400 animate-pulse" />
          </div>
          <span className="text-[10px] font-mono text-rose-400">SECURE_COMPILE_ACTIVE</span>
        </div>
      )
    },
    {
      id: 3,
      title: "Auditable Artifacts",
      desc: "Specs, DSLs, and structured code compose an evolving graph instead of disconnected output files.",
      icon: Boxes,
      stat: "LIVING LEDGER",
      metric: "REAL-TIME",
      color: "from-purple-500/10 to-indigo-500/20",
      borderColor: "border-purple-500/20 hover:border-purple-400/40",
      accent: "text-purple-400",
      glowBg: "bg-purple-500/5",
      visualizer: () => (
        <div className="relative w-full h-4 overflow-hidden rounded bg-purple-950/30 border border-purple-500/15 p-1 flex items-center">
          <motion.div
            className="h-1 bg-purple-400 rounded-full"
            animate={{
              width: ["20%", "92%", "20%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
          />
          <span className="absolute right-1 text-[8px] font-mono text-purple-300">INDEX: SYNC</span>
        </div>
      )
    }
  ];

  // Auto-cycle through the 4 outcome cards
  useEffect(() => {
    cycleIntervalRef.current = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 5500);

    return () => {
      if (cycleIntervalRef.current) clearInterval(cycleIntervalRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 md:p-16 select-none bg-gradient-to-b from-[#030303] via-[#09090b] to-[#030303] overflow-hidden">
      
      {/* Background Soft Glows and Grids */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-emerald-950/10 rounded-full blur-[140px] mix-blend-screen animate-pulse" style={{ animationDuration: "16s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-cyan-950/15 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: "22s" }} />
        <div className="grid-bg absolute inset-0 opacity-15 pointer-events-none" />
      </div>

      {/* Decorative HUD Details (Right Corner Top Outer Label) */}
      <div className="absolute top-10 right-12 text-[11px] font-mono tracking-[0.25em] text-gray-500/40 font-semibold border-r border-emerald-500/20 pr-2 pointer-events-none hidden sm:block">
        GLOBAL VALUE INDEXED
      </div>

      {/* Centered Large Header */}
      <div className="relative z-10 text-center mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-white max-w-4xl mx-auto leading-tight"
        >
          Outcomes of the <br />
          <span className="font-semibold bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: "7s" }}>
            FRAMEWORK
          </span>
        </motion.h1>
      </div>

      {/* Innovative 3-Column Pitch Area */}
      <div className="relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-between gap-6 my-6 min-h-[360px] max-w-7xl mx-auto w-full">
        
        {/* LEFT COLUMN: Outcome Card 1 & 2 */}
        <div className="w-full lg:w-[35%] flex flex-col gap-4">
          {outcomes.slice(0, 2).map((item) => {
            const isSelected = activeCard === item.id;
            const IconComponent = item.icon;
            const DynamicVisualizer = item.visualizer;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveCard(item.id)}
                onMouseEnter={() => {
                  if (cycleIntervalRef.current) clearInterval(cycleIntervalRef.current);
                  setActiveCard(item.id);
                }}
                className={`relative p-5 rounded-2xl border transition-all duration-500 cursor-pointer text-left ${
                  isSelected 
                    ? `border-emerald-400/40 ${item.glowBg} shadow-[0_8px_32px_rgba(52,211,153,0.12)] scale-[1.03]` 
                    : "border-white/[0.03] bg-[#060608]/90 hover:bg-[#0c0c0f]/90"
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: item.id * 0.15 }}
              >
                {/* Header Indicator */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-gray-500 font-semibold uppercase">
                    {item.stat}
                  </span>
                  <span className={`text-xs font-mono font-bold ${item.accent}`}>
                    {item.metric}
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className={`p-2 rounded-xl bg-black border ${isSelected ? `border-emerald-400/30` : `border-white/[0.05]`} flex-shrink-0 transition-all duration-500`}>
                    <IconComponent className={`w-4 h-4 ${isSelected ? item.accent : "text-gray-500"}`} />
                  </div>
                  <div className="space-y-1.5 flex-grow">
                    <h3 className="text-sm md:text-base font-bold text-white tracking-wide font-display">
                      {item.title}
                    </h3>
                    <p className="text-[11px] md:text-xs text-gray-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Lower Dynamic Micro-Widget inside the card */}
                <div className="mt-4 pt-3 border-t border-white/[0.03]">
                  <DynamicVisualizer />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CENTER COLUMN: Majestic Animated Quantum Link Core (30%) */}
        <div className="hidden lg:flex w-[30%] justify-center items-center h-full">
          <LivingGraphCenterpiece activeId={activeCard} />
        </div>

        {/* RIGHT COLUMN: Outcome Card 3 & 4 */}
        <div className="w-full lg:w-[35%] flex flex-col gap-4">
          {outcomes.slice(2, 4).map((item) => {
            const isSelected = activeCard === item.id;
            const IconComponent = item.icon;
            const DynamicVisualizer = item.visualizer;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveCard(item.id)}
                onMouseEnter={() => {
                  if (cycleIntervalRef.current) clearInterval(cycleIntervalRef.current);
                  setActiveCard(item.id);
                }}
                className={`relative p-5 rounded-2xl border transition-all duration-500 cursor-pointer text-left ${
                  isSelected 
                    ? `border-emerald-400/40 ${item.glowBg} shadow-[0_8px_32px_rgba(52,211,153,0.12)] scale-[1.03]` 
                    : "border-white/[0.03] bg-[#060608]/90 hover:bg-[#0c0c0f]/90"
                }`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: item.id * 0.15 }}
              >
                {/* Header Indicator */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-gray-500 font-semibold uppercase">
                    {item.stat}
                  </span>
                  <span className={`text-xs font-mono font-bold ${item.accent}`}>
                    {item.metric}
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className={`p-2 rounded-xl bg-black border ${isSelected ? `border-emerald-400/30` : `border-white/[0.05]`} flex-shrink-0 transition-all duration-500`}>
                    <IconComponent className={`w-4 h-4 ${isSelected ? item.accent : "text-gray-500"}`} />
                  </div>
                  <div className="space-y-1.5 flex-grow">
                    <h3 className="text-sm md:text-base font-bold text-white tracking-wide font-display">
                      {item.title}
                    </h3>
                    <p className="text-[11px] md:text-xs text-gray-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Lower Dynamic Micro-Widget inside the card */}
                <div className="mt-4 pt-3 border-t border-white/[0.03]">
                  <DynamicVisualizer />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Decorative Minimal Spacer to replace deleted quotes & footers */}
      <div className="h-4 w-full pointer-events-none" />

    </div>
  );
}
