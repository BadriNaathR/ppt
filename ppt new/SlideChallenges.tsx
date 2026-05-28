import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code2, 
  Brain, 
  GitFork, 
  Network,
  AlertTriangle,
  Flame,
  ZapOff,
  Radio
} from "lucide-react";
import { SlideProps } from "../types";

// 1. Interactive Centerpiece: "AI Cognitive Risk Reactor"
interface CenterpieceProps {
  activeId: number;
}

const AICognitiveRiskCenterpiece = ({ activeId }: CenterpieceProps) => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center pointer-events-none">
      {/* Outer Rotating Warning Tech Rings */}
      <motion.div
        className="absolute inset-0 border border-red-500/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[92%] h-[92%] border border-dashed border-rose-500/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[75%] h-[75%] border border-dotted border-amber-500/20 rounded-full"
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      />

      {/* Burning Core Concept Chamber */}
      <div className="absolute w-28 h-28 md:w-32 md:h-32 bg-[#050507] rounded-full border border-red-500/30 flex flex-col items-center justify-center p-4 text-center shadow-[0_0_50px_rgba(239,68,68,0.15)] z-20">
        <motion.div
          className="absolute inset-2 border border-red-500/20 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        />
        
        {/* Dynamic Warning Orb */}
        <div className="relative w-12 h-12 flex items-center justify-center mb-1">
          <motion.div
            className="absolute inset-0 border-2 border-red-500/40 rounded-full"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-1.5 border border-amber-400/30 rounded-full"
            animate={{
              rotateX: [360, 0],
              rotateZ: [0, 360],
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-amber-500 shadow-[0_0_15px_rgba(239,68,68,0.85)] z-10" />
        </div>
        
        <span className="text-[9px] font-mono tracking-[0.25em] text-red-400 font-bold uppercase leading-none">VULNERABLE</span>
        <span className="text-[10px] text-white font-medium tracking-wide mt-1 leading-none uppercase">SDLC CHAOS</span>
      </div>

      {/* Cybernetic Radial Threat Lines */}
      <svg className="absolute inset-0 w-full h-full z-0 overflow-visible">
        {/* Laser grids representing core alignments */}
        <circle cx="50%" cy="50%" r="90" fill="none" stroke="rgba(239, 68, 68, 0.05)" strokeWidth="1" />
        
        {/* Top Left Connection (Almost-Right Code) */}
        <line
          x1="50%" y1="50%" x2="15%" y2="15%"
          stroke={activeId === 0 ? "rgba(239, 68, 68, 0.55)" : "rgba(255, 255, 255, 0.05)"}
          strokeWidth={activeId === 0 ? "2" : "1"}
          className="transition-all duration-500"
        />
        {/* Bottom Left Connection (Review Overload) */}
        <line
          x1="50%" y1="50%" x2="15%" y2="85%"
          stroke={activeId === 1 ? "rgba(6, 182, 212, 0.55)" : "rgba(255, 255, 255, 0.05)"}
          strokeWidth={activeId === 1 ? "2" : "1"}
          className="transition-all duration-500"
        />
        {/* Top Right Connection (Architectural Drift) */}
        <line
          x1="50%" y1="50%" x2="85%" y2="15%"
          stroke={activeId === 2 ? "rgba(99, 102, 241, 0.55)" : "rgba(255, 255, 255, 0.05)"}
          strokeWidth={activeId === 2 ? "2" : "1"}
          className="transition-all duration-500"
        />
        {/* Bottom Right Connection (Comprehension Debt) */}
        <line
          x1="50%" y1="50%" x2="85%" y2="85%"
          stroke={activeId === 3 ? "rgba(168, 85, 247, 0.55)" : "rgba(255, 255, 255, 0.05)"}
          strokeWidth={activeId === 3 ? "2" : "1"}
          className="transition-all duration-500"
        />

        {/* Floating threat laser signal particle */}
        {activeId !== -1 && (
          <motion.circle
            r="4.5"
            fill={
              activeId === 0 ? "#ef4444" :
              activeId === 1 ? "#22d3ee" :
              activeId === 2 ? "#818cf8" :
              "#c084fc"
            }
            animate={{
              cx: activeId === 0 || activeId === 1 ? ["50%", "15%"] : ["50%", "85%"],
              cy: activeId === 0 || activeId === 2 ? ["50%", "15%"] : ["50%", "85%"],
            }}
            transition={{ repeat: Infinity, duration: 1.3, ease: "easeIn" }}
            style={{ 
              boxShadow: activeId === 0 ? "0 0 10px rgba(239,68,68,0.8)" : "0 0 10px rgba(34,211,238,0.8)"
            }}
          />
        )}
      </svg>

      {/* HUD diagnostic logs centered on active threat */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <AnimatePresence>
          {activeId === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-950/80 border border-red-500/40 text-red-400 text-[9px] font-mono px-2 py-0.5 rounded-full"
            >
              THREAT_LEVEL: SEVERE
            </motion.div>
          )}
          {activeId === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-[9px] font-mono px-2 py-0.5 rounded-full"
            >
              OVERFLOW: 88% STRAIN
            </motion.div>
          )}
          {activeId === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 bg-indigo-950/80 border border-indigo-500/40 text-indigo-400 text-[9px] font-mono px-2 py-0.5 rounded-full rotate-90"
            >
              MACRO_DRIFT: HIGH
            </motion.div>
          )}
          {activeId === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-1/2 -left-8 -translate-y-1/2 bg-purple-950/80 border border-purple-500/40 text-purple-400 text-[9px] font-mono px-2 py-0.5 rounded-full -rotate-90"
            >
              LOGIC_DEBT: HAZARD
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function SlideChallenges({ isActive }: SlideProps) {
  if (!isActive) return null;

  const [activeCard, setActiveCard] = useState<number>(0);
  const cycleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // The 4 distinct enterprise warning cards
  const challenges = [
    {
      id: 0,
      title: "Almost-Right Code",
      desc: "AI-generated code may appear plausible but contain subtle bugs, ignore best practices, or fail to align with project architecture.",
      icon: Code2,
      stat: "SYNTAX INTEGRITY",
      metric: "EDGECASE FAIL",
      color: "from-red-500/10 to-rose-600/20",
      borderColor: "border-red-500/20 hover:border-red-400/40",
      accent: "text-red-400",
      glowBg: "bg-red-500/5",
      visualizer: () => (
        <div className="flex items-center justify-between h-6 w-full text-[10px] font-mono text-red-400 bg-red-950/30 px-2.5 py-1 rounded border border-red-500/15">
          <div className="flex items-center space-x-1.5">
            <motion.span 
              className="w-1.5 h-1.5 rounded-full bg-red-500"
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <span>BUG_DETECTED: LINE 42</span>
          </div>
          <span className="text-red-500 font-bold uppercase">CRITICAL</span>
        </div>
      )
    },
    {
      id: 1,
      title: "Review Overload",
      desc: "Massive, continuous pull requests escalate cognitive strain, delaying delivery pipelines and burning out reviewer capacity.",
      icon: Network,
      stat: "COGNITIVE SPEEDOMETER",
      metric: "STRAIN HIGH",
      color: "from-cyan-500/10 to-teal-500/20",
      borderColor: "border-cyan-500/20 hover:border-cyan-400/40",
      accent: "text-cyan-400",
      glowBg: "bg-cyan-500/5",
      visualizer: () => (
        <div className="flex flex-col space-y-1 w-full justify-center">
          <div className="flex items-center justify-between text-[9px] font-mono text-cyan-400">
            <span>QUEUE BACKLOG: 48 PRs</span>
            <span className="animate-pulse text-cyan-400 font-bold">OVERLOADED</span>
          </div>
          <div className="flex space-x-1">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="h-1.5 flex-grow rounded-sm bg-cyan-600"
                animate={{
                  height: i >= 5 ? [6, 11, 6] : [6, 6, 6],
                  backgroundColor: i >= 5 ? ["#06b6d4", "#ec4899", "#06b6d4"] : "#0891b2"
                }}
                transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Architectural Drift",
      desc: "AI engines often generate locally streamlined files while silently deviating from macro enterprise designs and system patterns.",
      icon: GitFork,
      stat: "BASELINE CONVERGENCE",
      metric: "DRIFT DETECTED",
      color: "from-indigo-500/10 to-blue-500/20",
      borderColor: "border-indigo-500/20 hover:border-indigo-400/40",
      accent: "text-indigo-400",
      glowBg: "bg-indigo-500/5",
      visualizer: () => (
        <div className="relative w-full h-6 flex items-center justify-between overflow-hidden">
          <span className="text-[10px] font-mono text-indigo-400">SPLAY_RULINGS: DIVERGED</span>
          <svg className="w-24 h-4 overflow-visible">
            <line x1="0" y1="8" x2="90" y2="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="2 2" />
            <motion.path
              d="M 0 8 Q 45 4, 90 0"
              fill="none"
              stroke="#818cf8"
              strokeWidth="1.5"
              animate={{ d: ["M 0 8 Q 45 8, 90 8", "M 0 8 Q 45 1.5, 90 -4", "M 0 8 Q 45 8, 90 8"] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      title: "Comprehension Debt",
      desc: "Teams merge sophisticated model suggestions without complete comprehension of logical flow, dependencies, or edge stability.",
      icon: Brain,
      stat: "COMPREHENSION THREADS",
      metric: "DEBT ACCUMULATING",
      color: "from-purple-500/10 to-pink-500/20",
      borderColor: "border-purple-500/20 hover:border-purple-400/40",
      accent: "text-purple-400",
      glowBg: "bg-purple-500/5",
      visualizer: () => (
        <div className="flex items-center justify-between w-full h-6 px-1">
          <span className="text-[9px] font-mono text-purple-400">UNRESOLVED BLOCKS:</span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-purple-500"
                animate={{
                  scale: [1, 1.45, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.2 }}
                style={{ filter: "drop-shadow(0 0 4px rgba(168,85,247,0.5))" }}
              />
            ))}
          </div>
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
      
      {/* Background Warning Tones and Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[140px] mix-blend-screen animate-pulse" style={{ animationDuration: "18s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-rose-950/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: "24s" }} />
        <div className="grid-bg absolute inset-0 opacity-15 pointer-events-none" />
      </div>

      {/* Corporate Metadata HUD Line */}
      <div className="absolute top-10 right-12 text-[11px] font-mono tracking-[0.25em] text-gray-500/40 font-semibold border-r border-red-500/20 pr-2 pointer-events-none hidden sm:block">
        GLOBAL RISK INDEXED
      </div>

      {/* Centered Symmetric Header */}
      <div className="relative z-10 text-center mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-white max-w-4xl mx-auto leading-tight"
        >
          Current Challenges in <br />
          <span className="font-semibold bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: "7s" }}>
            AI-Driven SDLC
          </span>
        </motion.h1>
      </div>

      {/* Symmetric 3-Column Layout Matching Slide 5 */}
      <div className="relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-between gap-6 my-6 min-h-[360px] max-w-7xl mx-auto w-full">
        
        {/* LEFT COLUMN: Challenges Card 0 & 1 */}
        <div className="w-full lg:w-[35%] flex flex-col gap-4">
          {challenges.slice(0, 2).map((item) => {
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
                    ? `border-red-400/40 ${item.glowBg} shadow-[0_8px_32px_rgba(239,68,68,0.12)] scale-[1.03]` 
                    : "border-white/[0.03] bg-[#060608]/90 hover:bg-[#0c0c0f]/90"
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: item.id * 0.15 }}
              >
                {/* Header Info */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-gray-500 font-semibold uppercase">
                    {item.stat}
                  </span>
                  <span className={`text-xs font-mono font-bold ${item.accent}`}>
                    {item.metric}
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className={`p-2 rounded-xl bg-black border ${isSelected ? `border-red-400/30` : `border-white/[0.05]`} flex-shrink-0 transition-all duration-500`}>
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

                {/* Lower Dynamic Diagnostic Widget */}
                <div className="mt-4 pt-3 border-t border-white/[0.03]">
                  <DynamicVisualizer />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CENTER COLUMN: Symmetric Animated Risk Centerpiece (30%) */}
        <div className="hidden lg:flex w-[30%] justify-center items-center h-full">
          <AICognitiveRiskCenterpiece activeId={activeCard} />
        </div>

        {/* RIGHT COLUMN: Challenges Card 2 & 3 */}
        <div className="w-full lg:w-[35%] flex flex-col gap-4">
          {challenges.slice(2, 4).map((item) => {
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
                    ? `border-red-400/40 ${item.glowBg} shadow-[0_8px_32px_rgba(239,68,68,0.12)] scale-[1.03]` 
                    : "border-white/[0.03] bg-[#060608]/90 hover:bg-[#0c0c0f]/90"
                }`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: item.id * 0.15 }}
              >
                {/* Header Info */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-gray-500 font-semibold uppercase">
                    {item.stat}
                  </span>
                  <span className={`text-xs font-mono font-bold ${item.accent}`}>
                    {item.metric}
                  </span>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className={`p-2 rounded-xl bg-black border ${isSelected ? `border-red-400/30` : `border-white/[0.05]`} flex-shrink-0 transition-all duration-500`}>
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

                {/* Lower Dynamic Diagnostic Widget */}
                <div className="mt-4 pt-3 border-t border-white/[0.03]">
                  <DynamicVisualizer />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Decorative Minimal Spacer to guarantee symmetry and balance */}
      <div className="h-4 w-full pointer-events-none" />

    </div>
  );
}
