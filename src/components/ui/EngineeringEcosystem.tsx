"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5,
  SiTailwindcss, SiVite, SiNodedotjs, SiExpress, SiFastapi,
  SiPython, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiGooglegemini, SiScikitlearn, SiPandas, SiNumpy, SiJupyter,
  SiGit, SiGithub, SiDocker, SiPostman, SiLinux,
  SiNginx, SiKubernetes, SiLeetcode, SiCodechef,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties; color?: string }>> = {
  React: SiReact, 'Next.js': SiNextdotjs, TypeScript: SiTypescript,
  JavaScript: SiJavascript, HTML5: SiHtml5, Tailwind: SiTailwindcss,
  Vite: SiVite, 'Node.js': SiNodedotjs, Express: SiExpress,
  FastAPI: SiFastapi, Python: SiPython, MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql, MySQL: SiMysql, Redis: SiRedis,
  Gemini: SiGooglegemini, 'Scikit-Learn': SiScikitlearn, Pandas: SiPandas,
  NumPy: SiNumpy, Jupyter: SiJupyter, Git: SiGit, GitHub: SiGithub,
  Docker: SiDocker, Postman: SiPostman, Linux: SiLinux,
  Nginx: SiNginx, Kubernetes: SiKubernetes, LeetCode: SiLeetcode,
  CodeChef: SiCodechef, AWS: FaAws,
};

// Original brand colors (softened)
const COLORS: Record<string, string> = {
  React: '#61DAFB', 'Next.js': '#FFFFFF', TypeScript: '#3178C6',
  'Node.js': '#339933', Python: '#3776AB', Docker: '#2496ED',
  Git: '#F05032', GitHub: '#FFFFFF', FastAPI: '#009688',
  MongoDB: '#47A248', PostgreSQL: '#4169E1', Gemini: '#8E75B2',
  Redis: '#DC382D', AWS: '#FF9900', Postman: '#FF6C37',
  Vite: '#646CFF', Tailwind: '#06B6D4', JavaScript: '#F7DF1E',
  'Scikit-Learn': '#F7931E', Pandas: '#150458', NumPy: '#013243',
  Jupyter: '#F37626', Nginx: '#009639', Kubernetes: '#326CE5',
  Linux: '#FCC624', LeetCode: '#FFA116', CodeChef: '#5B4638'
};

interface TechNode {
  name: string;
  x: number; // 0-100 vw
  y: number; // 0-100 vh
  driftX: number; // px
  driftY: number; // px
  driftDur: number; // seconds (20s to 60s)
  size: 'sm' | 'md' | 'lg';
  layer: 2 | 3; // 2=near, 3=far
  opacityMult: number; // specific opacity multiplier for page focus
  scrollRatio: number; // parallax scroll ratio
}

// ─── Core Layout (Ecosystem Constellation) ──────────────────────────────────
// LEFT: React, Node.js, Git, Python, Docker
// RIGHT: AWS, MongoDB, PostgreSQL, FastAPI, Gemini, Redis
// TOP: TypeScript, Next.js
// BOTTOM: Docker (use on LEFT), GitHub, Postman
const ECOSYSTEM_BASE: TechNode[] = [
  // TOP
  { name: 'TypeScript', x: 35, y: 12, driftX: 15, driftY: 20, driftDur: 45, size: 'sm', layer: 3, opacityMult: 1, scrollRatio: 0.1 },
  { name: 'Next.js', x: 65, y: 15, driftX: 20, driftY: 15, driftDur: 35, size: 'lg', layer: 2, opacityMult: 1, scrollRatio: 0.3 },
  // LEFT
  { name: 'React', x: 12, y: 25, driftX: 25, driftY: 20, driftDur: 40, size: 'lg', layer: 2, opacityMult: 1, scrollRatio: 0.25 },
  { name: 'Node.js', x: 8, y: 45, driftX: 20, driftY: 25, driftDur: 50, size: 'md', layer: 3, opacityMult: 1, scrollRatio: 0.15 },
  { name: 'Git', x: 15, y: 65, driftX: 15, driftY: 20, driftDur: 55, size: 'sm', layer: 3, opacityMult: 1, scrollRatio: 0.1 },
  { name: 'Python', x: 10, y: 80, driftX: 20, driftY: 15, driftDur: 42, size: 'lg', layer: 2, opacityMult: 1, scrollRatio: 0.3 },
  { name: 'Docker', x: 22, y: 88, driftX: 25, driftY: 25, driftDur: 48, size: 'md', layer: 2, opacityMult: 1, scrollRatio: 0.35 },
  // RIGHT
  { name: 'AWS', x: 85, y: 22, driftX: 20, driftY: 25, driftDur: 52, size: 'lg', layer: 2, opacityMult: 1, scrollRatio: 0.28 },
  { name: 'MongoDB', x: 92, y: 38, driftX: 15, driftY: 20, driftDur: 45, size: 'sm', layer: 3, opacityMult: 1, scrollRatio: 0.12 },
  { name: 'PostgreSQL', x: 88, y: 55, driftX: 25, driftY: 15, driftDur: 38, size: 'lg', layer: 2, opacityMult: 1, scrollRatio: 0.22 },
  { name: 'FastAPI', x: 82, y: 72, driftX: 20, driftY: 25, driftDur: 47, size: 'md', layer: 3, opacityMult: 1, scrollRatio: 0.18 },
  { name: 'Gemini', x: 90, y: 85, driftX: 15, driftY: 20, driftDur: 55, size: 'sm', layer: 3, opacityMult: 1, scrollRatio: 0.14 },
  { name: 'Redis', x: 75, y: 40, driftX: 25, driftY: 15, driftDur: 60, size: 'sm', layer: 3, opacityMult: 1, scrollRatio: 0.16 },
  // BOTTOM
  { name: 'GitHub', x: 40, y: 92, driftX: 20, driftY: 15, driftDur: 50, size: 'md', layer: 3, opacityMult: 1, scrollRatio: 0.2 },
  { name: 'Postman', x: 60, y: 88, driftX: 15, driftY: 25, driftDur: 40, size: 'sm', layer: 3, opacityMult: 1, scrollRatio: 0.15 },
];

const CONNECTIONS = [
  { from: 'React', to: 'Next.js' },
  { from: 'Node.js', to: 'MongoDB' },
  { from: 'Python', to: 'Gemini' },
  { from: 'FastAPI', to: 'PostgreSQL' },
  { from: 'Docker', to: 'AWS' },
];

// ─── Size and styling ─────────────────────────────────────────────────────────
const SIZE_PX = { sm: 20, md: 30, lg: 40 };
const POD_SIZE = { sm: 60, md: 80, lg: 100 };
// Parallax on mouse move
const PARALLAX_MOUSE = { 2: 5, 3: 15 };

function EcosystemPod({
  node, mouseX, mouseY, scrollY, pageConfig
}: {
  node: TechNode; mouseX: number; mouseY: number; scrollY: number;
  pageConfig: { visibilityMult: number; focus: string[]; converge: boolean };
}) {
  const Icon = ICONS[node.name];
  if (!Icon) return null;

  // Converge to center if contact page
  const targetX = pageConfig.converge ? 50 : node.x;
  const targetY = pageConfig.converge ? 50 : node.y;
  const convergeScale = pageConfig.converge ? 0.2 : 1;

  // Mouse parallax
  const mx = (mouseX - 0.5) * PARALLAX_MOUSE[node.layer];
  const my = (mouseY - 0.5) * PARALLAX_MOUSE[node.layer];

  // Scroll parallax (negative moves up as you scroll down)
  const sy = scrollY * node.scrollRatio * -1;

  const isFocused = pageConfig.focus.includes(node.name);
  const opacityFocusMult = pageConfig.focus.length === 0 ? 1 : (isFocused ? 1.5 : 0.4);

  // Base opacities - near (layer 2) is clearer, far (layer 3) is more faded
  const baseOp = node.layer === 2 ? 0.8 : 0.5;

  const finalOpacity = Math.min(1, Math.max(0, baseOp * node.opacityMult * pageConfig.visibilityMult * opacityFocusMult));

  // The color of the glow
  const color = COLORS[node.name] || '#ffffff';

  return (
    <motion.div
      className="absolute pointer-events-none select-none flex items-center justify-center"
      style={{
        left: `${targetX}%`,
        top: `${targetY}%`,
        x: '-50%',
        y: '-50%',
        width: POD_SIZE[node.size],
        height: POD_SIZE[node.size],
        zIndex: node.layer === 2 ? 20 : 10,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: finalOpacity,
        scale: convergeScale
      }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <motion.div
        animate={{
          x: [mx, mx + node.driftX, mx - node.driftX * 0.5, mx],
          y: [my + sy, my + sy - node.driftY, my + sy + node.driftY * 0.6, my + sy],
        }}
        transition={{
          duration: node.driftDur,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
        }}
        className="relative flex items-center justify-center w-full h-full group"
      >
        {/* Glass Pedestal Base */}
        <div className="absolute inset-0 rounded-full border border-white/5 bg-white/[0.01] shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-500 overflow-hidden group-hover:border-white/20">
          {/* Soft glow gradient inside the pedestal */}
          <div
            className="absolute inset-0 opacity-10 bg-gradient-to-t from-transparent to-white/10"
          />
        </div>

        {/* Colored glow reflection */}
        <div
          className="absolute inset-0 rounded-full opacity-20 blur-2xl mix-blend-screen transition-opacity duration-500 group-hover:opacity-40"
          style={{ backgroundColor: color }}
        />

        {/* Inner Ring */}
        <div className="absolute inset-[2px] rounded-full border border-white/5 bg-gradient-to-b from-white/5 to-transparent shadow-inner opacity-50" />

        {/* Logo */}
        <Icon
          size={SIZE_PX[node.size]}
          className="relative z-10 drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:opacity-100 opacity-80 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          color={color}
        />
      </motion.div>
    </motion.div>
  );
}

// ─── Connection Lines ─────────────────────────────────────────────────────────
function ConnectionLines({ nodes, mouseX, mouseY, scrollY, converge }: { nodes: TechNode[], mouseX: number, mouseY: number, scrollY: number, converge: boolean }) {
  // Map node names to positions
  const positions = nodes.reduce((acc, node) => {
    // calculate estimated position
    const targetX = converge ? 50 : node.x;
    const targetY = converge ? 50 : node.y;
    // skip drift for lines to keep it simple, just use base + parallax
    const mx = (mouseX - 0.5) * PARALLAX_MOUSE[node.layer];
    const my = (mouseY - 0.5) * PARALLAX_MOUSE[node.layer];
    const sy = scrollY * node.scrollRatio * -1;
    acc[node.name] = { x: targetX, y: targetY, mx, my, sy };
    return acc;
  }, {} as Record<string, any>);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-[2]">
      {CONNECTIONS.map(({ from, to }) => {
        const p1 = positions[from];
        const p2 = positions[to];
        if (!p1 || !p2) return null;

        // Boomerang curve (soft bezier)
        const midX = (p1.x + p2.x) / 2 + 10;
        const midY = (p1.y + p2.y) / 2 - 10;

        return (
          <g key={`${from}-${to}`}>
            <motion.path
              d={`M ${p1.x}% ${p1.y}% Q ${midX}% ${midY}% ${p2.x}% ${p2.y}%`}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              className="transition-all duration-1000"
            />
            {/* Boomerang Light Trail */}
            <motion.path
              d={`M ${p1.x}% ${p1.y}% Q ${midX}% ${midY}% ${p2.x}% ${p2.y}%`}
              fill="none"
              stroke="url(#boomerangGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              className="transition-all duration-1000"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 0.5, 1],
                opacity: [0, 0.5, 0],
                pathOffset: [0, 0.5, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
            />
          </g>
        );
      })}
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
        <linearGradient id="boomerangGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0, 229, 255, 0)" />
          <stop offset="50%" stopColor="rgba(0, 229, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(0, 229, 255, 0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function EngineeringEcosystem() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => { setMounted(true); }, []);

  // Track mouse
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
  }, []);

  // Track scroll
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  if (!mounted) return null;

  // Page config logic
  let visibilityMult = 1.3; // Increased base visibility by 30%
  let focus: string[] = [];
  let converge = false;

  if (pathname === '/') {
    visibilityMult = 1.3;
  } else if (pathname === '/projects') {
    focus = ['React', 'Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'];
    visibilityMult = 0.8;
  } else if (pathname === '/tech-stack') {
    focus = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'FastAPI', 'Python', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Linux', 'Git'];
    visibilityMult = 1.0;
  } else if (pathname === '/coding-profile') {
    focus = ['LeetCode', 'CodeChef', 'GitHub', 'Python', 'TypeScript'];
    visibilityMult = 0.7;
  } else if (pathname === '/resume') {
    visibilityMult = 0.1;
  } else if (pathname === '/contact') {
    visibilityMult = 0.4;
    converge = true;
  }

  const pageConfig = { visibilityMult, focus, converge };

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Deep background ambient particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 opacity-20 z-[1]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
      </div>

      <ConnectionLines
        nodes={ECOSYSTEM_BASE}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        scrollY={scrollY}
        converge={converge}
      />

      <AnimatePresence mode="popLayout">
        {ECOSYSTEM_BASE.map((node) => (
          <EcosystemPod
            key={node.name}
            node={node}
            mouseX={mousePos.x}
            mouseY={mousePos.y}
            scrollY={scrollY}
            pageConfig={pageConfig}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
