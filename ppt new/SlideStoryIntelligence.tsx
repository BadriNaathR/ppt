import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { SlideProps } from "../types";
import {
  FileText, BookOpen, Users, ClipboardList,
  GitBranch, Layers, Cpu, ScrollText,
  ListChecks, Map, BarChart2,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type ChipDef = { label: string; icon: React.ElementType; color: string; border: string; bg: string };
type NodeDef  = {
  id: string; label: string; sub: string; accent: string; isBrd: boolean;
  inputs: ChipDef[];   // ALL inputs shown on the node (including "from Ax" ones)
  output: ChipDef;
};

// ─── Exact data from image ────────────────────────────────────────────────────
const NODES: NodeDef[] = [
  {
    id: "brd", label: "BRD Origin", sub: "Document Source", accent: "#f59e0b", isBrd: true,
    inputs: [
      { label: "High Level User Requirements", icon: FileText,   color: "#fbbf24", border: "#f59e0b50", bg: "#451a0318" },
      { label: "Online Search -> Knowledge Document", icon: FileText,   color: "#fbbf24", border: "#f59e0b50", bg: "#451a0318" },
      { label: "BRD Template",  icon: ScrollText, color: "#fb923c", border: "#f9731650", bg: "#431a0318" },
    ],
    output: { label: "BRD / BRS Documents", icon: ScrollText, color: "#6ee7b7", border: "#34d39950", bg: "#06402018" },
  },
  {
    id: "a1", label: "A1 · Requirements Streamliner", sub: "Req Extraction", accent: "#a78bfa", isBrd: false,
    inputs: [
      { label: "BRD / BRS Documents", icon: ScrollText, color: "#6ee7b7", border: "#34d39950", bg: "#06402018" },
    ],
    output: { label: "Requirement Specifications", icon: ListChecks, color: "#c4b5fd", border: "#a78bfa50", bg: "#2e1a6518" },
  },
  {
    id: "a2", label: "A2 · Process Diagram Generator", sub: "Flowchart Generation", accent: "#60a5fa", isBrd: false,
    inputs: [
      { label: "Wireframes",    icon: Layers,   color: "#93c5fd", border: "#60a5fa50", bg: "#1e3a5f18" },
      { label: "MoMs (if any)", icon: FileText, color: "#7dd3fc", border: "#38bdf850", bg: "#0c4a6e18" },
    ],
    output: { label: "Process Diagram (Flowchart)", icon: GitBranch, color: "#93c5fd", border: "#60a5fa50", bg: "#1e3a5f18" },
  },
  {
    id: "a3", label: "A3 · User Journey Decoder", sub: "Journey Mapping", accent: "#22d3ee", isBrd: false,
    inputs: [
      { label: "Process Diagram (from A2)",    icon: GitBranch, color: "#93c5fd", border: "#60a5fa50", bg: "#1e3a5f18" },
      { label: "Other Flow Representations",   icon: Map,       color: "#67e8f9", border: "#22d3ee50", bg: "#0e4f5518" },
    ],
    output: { label: "Decoded User Journey", icon: Users, color: "#67e8f9", border: "#22d3ee50", bg: "#0e4f5518" },
  },
  {
    id: "a4", label: "A4 · User Story Analyzer", sub: "Story Analysis", accent: "#2dd4bf", isBrd: false,
    inputs: [
      { label: "Requirement Specs (from A1)",  icon: ListChecks, color: "#c4b5fd", border: "#a78bfa50", bg: "#2e1a6518" },
      { label: "Process Diagram (from A2)",    icon: GitBranch,  color: "#93c5fd", border: "#60a5fa50", bg: "#1e3a5f18" },
      { label: "Decoded User Journey (from A3)", icon: Users,    color: "#67e8f9", border: "#22d3ee50", bg: "#0e4f5518" },
      { label: "MoMs / Notes",                 icon: FileText,   color: "#5eead4", border: "#2dd4bf50", bg: "#0d3d3818" },
    ],
    output: { label: "User Story Analysis", icon: BarChart2, color: "#5eead4", border: "#2dd4bf50", bg: "#0d3d3818" },
  },
  {
    id: "a5", label: "A5 · User Story Creator", sub: "Story Generation", accent: "#818cf8", isBrd: false,
    inputs: [
      { label: "Requirement Specs (from A1)",    icon: ListChecks, color: "#c4b5fd", border: "#a78bfa50", bg: "#2e1a6518" },
      { label: "Process Diagram (from A2)",      icon: GitBranch,  color: "#93c5fd", border: "#60a5fa50", bg: "#1e3a5f18" },
      { label: "Decoded User Journey (from A3)", icon: Users,      color: "#67e8f9", border: "#22d3ee50", bg: "#0e4f5518" },
      { label: "User Story Analysis (from A4)",  icon: BarChart2,  color: "#5eead4", border: "#2dd4bf50", bg: "#0d3d3818" },
      { label: "Additional Instructions",        icon: BookOpen,   color: "#a5b4fc", border: "#818cf850", bg: "#1e1b4b18" },
    ],
    output: { label: "User Stories", icon: ClipboardList, color: "#a5b4fc", border: "#818cf850", bg: "#1e1b4b18" },
  },
];

// ─── Which source outputs to highlight when a node is active ─────────────────
// key = nodeId, value = list of nodeIds whose OUTPUT should glow
const HIGHLIGHT_SOURCES: Record<string, string[]> = {
  brd: [],
  a1:  ["brd"],
  a2:  ["a1"],
  a3:  ["a2"],
  a4:  ["a1", "a2", "a3"],
  a5:  ["a1", "a2", "a3", "a4"],
};

// ─── Canvas ───────────────────────────────────────────────────────────────────
const CW = 1150;
const CH = 540;
const NW = 175;
const NH = 80;

const POS: Record<string, { x: number; y: number }> = {
  brd: { x: 80,  y: 100 },
  a1:  { x: 310, y: 100 },
  a2:  { x: 620, y: 100 },
  a3:  { x: 930, y: 100 },
  a4:  { x: 430, y: 440 },
  a5:  { x: 730, y: 440 },
};

// ─── Edges (skeleton always visible) ─────────────────────────────────────────
const ALL_EDGES = [
  { from: "brd", to: "a1" },
  { from: "a1",  to: "a2" },
  { from: "a2",  to: "a3" },
  { from: "a1",  to: "a4" },
  { from: "a2",  to: "a4" },
  { from: "a3",  to: "a4" },
  { from: "a1",  to: "a5" },
  { from: "a2",  to: "a5" },
  { from: "a3",  to: "a5" },
  { from: "a4",  to: "a5" },
];

// Auto-cycle: one edge at a time
const STEPS = [
  { nodeId: "brd", edgeTo: "a1"  },
  { nodeId: "a1",  edgeTo: "a2"  },
  { nodeId: "a2",  edgeTo: "a3"  },
  { nodeId: "a3",  edgeTo: "a4"  },
  { nodeId: "a4",  edgeTo: "a5"  },
  { nodeId: "a5",  edgeTo: ""    },
];

// ─── Anchor helpers ───────────────────────────────────────────────────────────
function inputCount(id: string) { return NODES.find(n => n.id === id)!.inputs.length; }
function cardInputH(id: string) { const c = inputCount(id); return c > 0 ? c * 32 + 16 : 0; }

function outputAnchor(id: string) {
  const pos = POS[id];
  const ih  = cardInputH(id);
  // bottom of output chip
  return { x: pos.x, y: pos.y - NH / 2 - ih - 4 + ih + NH + 4 + 20 };
}
function inputAnchor(id: string) {
  const pos = POS[id];
  const ih  = cardInputH(id);
  return { x: pos.x, y: pos.y - NH / 2 - ih - 4 };
}

function buildPath(fromId: string, toId: string) {
  const f  = outputAnchor(fromId);
  const t  = inputAnchor(toId);
  const dx = t.x - f.x;
  const dy = t.y - f.y;
  let cp1x = f.x + dx * 0.3, cp1y = f.y + Math.abs(dy) * 0.5 + 30;
  let cp2x = t.x - dx * 0.3, cp2y = t.y - Math.abs(dy) * 0.5 - 30;
  // horizontal edges: arc upward
  if (Math.abs(dy) < 60) { cp1y = f.y - 60; cp2y = t.y - 60; }
  const d = `M ${f.x} ${f.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${t.x} ${t.y}`;
  // midpoint t=0.5
  const tt = 0.5;
  const mx = (1-tt)**3*f.x + 3*(1-tt)**2*tt*cp1x + 3*(1-tt)*tt**2*cp2x + tt**3*t.x;
  const my = (1-tt)**3*f.y + 3*(1-tt)**2*tt*cp1y + 3*(1-tt)*tt**2*cp2y + tt**3*t.y;
  // tangent at t=0.5 to compute perpendicular offset for label
  return { d };
}

// ─── Chip ─────────────────────────────────────────────────────────────────────
function Chip({ label, icon: Icon, color, border, bg, dim }: ChipDef & { dim: boolean }) {
  return (
    <motion.div
      animate={{ opacity: dim ? 0.22 : 1 }}
      transition={{ duration: 0.25 }}
      className="flex items-center gap-2 px-3 py-[6px] rounded-xl"
      style={{
        border: `1px solid ${dim ? "rgba(255,255,255,0.08)" : border}`,
        background: dim ? "rgba(255,255,255,0.02)" : bg,
        boxShadow: dim ? "none" : `0 0 8px ${color}28`,
        minWidth: 0,
      }}
    >
      <Icon style={{ color: dim ? "rgba(255,255,255,0.2)" : color, width: 11, height: 11, flexShrink: 0 }} />
      <span
        className="text-[9px] font-mono leading-tight"
        style={{ color: dim ? "rgba(255,255,255,0.25)" : color, wordBreak: "break-word", whiteSpace: "normal" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

// ─── Node Card ────────────────────────────────────────────────────────────────
function NodeCard({ node, activeId, highlightedSources, onHover }: {
  node: NodeDef;
  activeId: string;
  highlightedSources: string[];
  onHover: (id: string | null) => void;
}) {
  const pos        = POS[node.id];
  const ih         = cardInputH(node.id);
  const cardTop    = pos.y - NH / 2 - ih - 4;
  const isActive   = node.id === activeId;
  const isSrcGlow  = highlightedSources.includes(node.id);
  const dim        = !isActive && !isSrcGlow;

  return (
    <div
      className="absolute"
      style={{ left: pos.x - NW / 2, top: cardTop, width: NW, zIndex: isActive ? 20 : 10 }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Input chips */}
      {node.inputs.length > 0 && (
        <div className="flex flex-col gap-[3px] mb-2">
          {node.inputs.map((inp, i) => (
            <Chip key={i} {...inp} dim={dim} />
          ))}
        </div>
      )}

      {/* Agent pill */}
      <motion.div
        animate={{
          scale: isActive ? 1.06 : isSrcGlow ? 1.02 : 1,
          boxShadow: isActive
            ? `0 0 30px ${node.accent}65`
            : isSrcGlow
            ? `0 0 14px ${node.accent}35`
            : "0 0 0px transparent",
          opacity: dim ? 0.3 : 1,
        }}
        transition={{ duration: 0.25 }}
        className="relative flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-2xl border"
        style={{
          borderColor: isActive ? `${node.accent}70` : isSrcGlow ? `${node.accent}40` : "rgba(255,255,255,0.07)",
          background:  isActive ? `${node.accent}1c` : isSrcGlow ? `${node.accent}0c` : "rgba(255,255,255,0.02)",
        }}
      >
        {isActive && (
          <motion.div className="absolute rounded-2xl border border-dashed"
            style={{ inset: -7, borderColor: `${node.accent}38` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
        )}

        <div className="p-1.5 rounded-lg border" style={
          isActive
            ? { borderColor: `${node.accent}55`, background: `${node.accent}22` }
            : { borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }
        }>
          {node.isBrd
            ? <ScrollText style={{ width: 14, height: 14, color: isActive ? node.accent : isSrcGlow ? node.accent : "rgba(255,255,255,0.2)" }} />
            : <Cpu        style={{ width: 14, height: 14, color: isActive ? node.accent : isSrcGlow ? node.accent : "rgba(255,255,255,0.2)" }} />
          }
        </div>

        <div className="text-center px-1">
          <p className="font-semibold font-display leading-tight text-[10px]"
            style={{ color: isActive ? node.accent : isSrcGlow ? node.accent : "rgba(255,255,255,0.3)" }}>
            {node.label}
          </p>
          <p className="text-[7px] font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.18)" }}>{node.sub}</p>
        </div>

        {isActive && (
          <motion.div className="absolute rounded-full"
            style={{ width: 6, height: 6, background: node.accent, bottom: -3, left: "50%", transform: "translateX(-50%)" }}
            animate={{ scale: [1, 2.2, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        )}
      </motion.div>

      {/* Output chip */}
      <div className="mt-[6px]">
        <Chip {...node.output} dim={dim} />
      </div>
    </div>
  );
}

// ─── SVG ─────────────────────────────────────────────────────────────────────
function PipelineSVG({ activeId, liveEdge, highlightedSources }: {
  activeId: string;
  liveEdge: { from: string; to: string } | null;
  highlightedSources: string[];
}) {
  const nodeMap = Object.fromEntries(NODES.map(n => [n.id, n]));

  return (
    <svg className="absolute inset-0 pointer-events-none" width={CW} height={CH} style={{ overflow: "visible" }}>
      <defs>
        {ALL_EDGES.map(e => {
          const key    = `${e.from}-${e.to}`;
          const isLive = liveEdge?.from === e.from && liveEdge?.to === e.to;
          const isSrc  = highlightedSources.includes(e.from) && (e.to === activeId || highlightedSources.includes(e.to));
          return (
            <linearGradient key={key} id={`g-${key}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor={nodeMap[e.from].accent} stopOpacity={isLive ? 0.9 : isSrc ? 0.5 : 0.08} />
              <stop offset="100%" stopColor={nodeMap[e.to].accent}   stopOpacity={isLive ? 0.9 : isSrc ? 0.5 : 0.08} />
            </linearGradient>
          );
        })}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {ALL_EDGES.map(e => {
        const key    = `${e.from}-${e.to}`;
        const isLive = liveEdge?.from === e.from && liveEdge?.to === e.to;
        const isSrc  = highlightedSources.includes(e.from) && e.to === activeId;
        const { d } = buildPath(e.from, e.to);
        const src = nodeMap[e.from];

        return (
          <g key={key}>
            <path d={d} fill="none"
              stroke={`url(#g-${key})`}
              strokeWidth={isLive ? 2 : isSrc ? 1.4 : 0.7}
              strokeDasharray={isLive || isSrc ? "none" : "3 6"}
              strokeLinecap="round"
            />

            {/* Traveling particle on live edge */}
            {isLive && (
              <motion.circle r={4} fill={src.accent} filter="url(#glow)"
                style={{ offsetPath: `path("${d}")` } as any}
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            {/* Slower ambient particle on highlighted source edges */}
            {isSrc && !isLive && (
              <motion.circle r={2.5} fill={src.accent} filter="url(#glow)"
                style={{ offsetPath: `path("${d}")` } as any}
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              />
            )}

            {/* Edge label removed */}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Main Slide ───────────────────────────────────────────────────────────────
export default function SlideStoryIntelligence({ isActive }: SlideProps) {
  if (!isActive) return null;

  const [stepIdx,   setStepIdx]   = useState(0);
  const [showEdge,  setShowEdge]  = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (hoveredId !== null) return;
    const t1 = setTimeout(() => { if (STEPS[stepIdx].edgeTo) setShowEdge(true); }, 1500);
    const t2 = setTimeout(() => { setShowEdge(false); setStepIdx(p => (p + 1) % STEPS.length); }, 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [stepIdx, hoveredId]);

  useEffect(() => { if (hoveredId === null) setShowEdge(false); }, [hoveredId]);

  const handleHover = useCallback((id: string | null) => setHoveredId(id), []);

  const activeId         = hoveredId ?? STEPS[stepIdx].nodeId;
  const highlightSources = HIGHLIGHT_SOURCES[activeId] ?? [];
  const nextId           = hoveredId ? "" : (showEdge ? STEPS[stepIdx].edgeTo : "");
  const liveEdge         = nextId ? { from: activeId, to: nextId } : null;

  return (
    <div className="relative w-full h-full flex flex-col px-8 py-6 select-none bg-gradient-to-b from-[#030303] via-[#07070d] to-[#030303] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/8 rounded-full blur-[180px]" />
        <div className="grid-bg absolute inset-0 opacity-[0.06]" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-3 flex-shrink-0">
        <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="flex items-center space-x-2 mb-1.5">
          <span className="h-[1px] w-7 bg-gradient-to-r from-violet-500 to-transparent" />
          
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-4xl font-display font-light tracking-tight text-white">
          <span className="font-semibold bg-gradient-to-r from-white via-violet-100 to-violet-400 bg-clip-text text-transparent">
            Requirements, User Story And Design Framework
          </span>
        </motion.h1>
      </div>

      {/* Canvas */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="relative" style={{ width: CW, height: CH }}>
          <PipelineSVG activeId={activeId} liveEdge={liveEdge} highlightedSources={highlightSources} />
          {NODES.map(node => (
            <NodeCard
              key={node.id} node={node}
              activeId={activeId}
              highlightedSources={highlightSources}
              onHover={handleHover}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-center gap-2 mt-1 flex-shrink-0">
        {STEPS.map((s, i) => (
          <motion.div key={s.nodeId}
            animate={{ width: stepIdx === i && !hoveredId ? 20 : 5, opacity: stepIdx === i && !hoveredId ? 1 : 0.2 }}
            transition={{ duration: 0.25 }}
            className="h-[2px] rounded-full"
            style={{ background: NODES.find(n => n.id === s.nodeId)!.accent }}
          />
        ))}
        <span className="text-[8px] font-mono text-white/15 ml-2 tracking-widest uppercase">
          {hoveredId
            ? `${NODES.find(n => n.id === hoveredId)?.label} · Hover`
            : showEdge
            ? `${NODES.find(n => n.id === activeId)?.output.label} · Flowing →`
            : `${NODES.find(n => n.id === activeId)?.label} · Processing`}
        </span>
      </div>
    </div>
  );
}
