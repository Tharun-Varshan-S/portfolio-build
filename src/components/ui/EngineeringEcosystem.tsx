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

// ─── Icon Registry ────────────────────────────────────────────────────────────
const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  React: SiReact, 'Next.js': SiNextdotjs, TypeScript: SiTypescript,
  JavaScript: SiJavascript, HTML5: SiHtml5, Tailwind: SiTailwindcss,
  Vite: SiVite, 'Node.js': SiNodedotjs, Express: SiExpress,
  FastAPI: SiFastapi, Python: SiPython, MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql, MySQL: SiMysql, Redis: SiRedis,
  Gemini: SiGooglegemini, 'Scikit-Learn': SiScikitlearn, Pandas: SiPandas,
  NumPy: SiNumpy, Jupyter: SiJupyter, Git: SiGit, GitHub: SiGithub,
  Docker: SiDocker, Postman: SiPostman, Linux: SiLinux,
  Nginx: SiNginx, Kubernetes: SiKubernetes, LeetCode: SiLeetcode,
  CodeChef: SiCodechef,
};

// ─── Tech Node Definition ─────────────────────────────────────────────────────
interface TechNode {
  name: string;
  // Base position 0-100 (viewport %)
  x: number;
  y: number;
  // Orbit motion params
  driftX: number;   // px amplitude horizontal drift
  driftY: number;   // px amplitude vertical drift
  driftDur: number; // seconds for one drift cycle
  // Visual
  size: 'sm' | 'md' | 'lg';
  layer: 1 | 2 | 3; // 1=near,2=mid,3=far
  baseOpacity: number;
}

// ─── Page Configs ─────────────────────────────────────────────────────────────
const PAGE_NODES: Record<string, TechNode[]> = {
  '/': [
    { name: 'React',      x: 8,  y: 22, driftX: 12, driftY: 8,  driftDur: 18, size: 'lg', layer: 1, baseOpacity: 0.30 },
    { name: 'Next.js',   x: 90, y: 18, driftX: 10, driftY: 12, driftDur: 22, size: 'lg', layer: 1, baseOpacity: 0.28 },
    { name: 'TypeScript', x: 6,  y: 70, driftX: 8,  driftY: 10, driftDur: 25, size: 'md', layer: 2, baseOpacity: 0.22 },
    { name: 'Node.js',   x: 92, y: 72, driftX: 14, driftY: 8,  driftDur: 20, size: 'md', layer: 2, baseOpacity: 0.24 },
    { name: 'Python',    x: 3,  y: 45, driftX: 6,  driftY: 16, driftDur: 28, size: 'sm', layer: 3, baseOpacity: 0.18 },
    { name: 'Docker',    x: 95, y: 48, driftX: 8,  driftY: 12, driftDur: 24, size: 'sm', layer: 3, baseOpacity: 0.16 },
    { name: 'GitHub',    x: 50, y: 5,  driftX: 10, driftY: 6,  driftDur: 30, size: 'sm', layer: 3, baseOpacity: 0.15 },
    { name: 'FastAPI',   x: 18, y: 92, driftX: 10, driftY: 8,  driftDur: 26, size: 'sm', layer: 3, baseOpacity: 0.16 },
    { name: 'MongoDB',   x: 82, y: 92, driftX: 8,  driftY: 10, driftDur: 23, size: 'sm', layer: 3, baseOpacity: 0.15 },
  ],

  '/projects': [
    { name: 'React',    x: 7,  y: 25, driftX: 10, driftY: 12, driftDur: 20, size: 'lg', layer: 1, baseOpacity: 0.30 },
    { name: 'Node.js',  x: 91, y: 30, driftX: 12, driftY: 8,  driftDur: 18, size: 'lg', layer: 1, baseOpacity: 0.28 },
    { name: 'MongoDB',  x: 5,  y: 65, driftX: 8,  driftY: 14, driftDur: 24, size: 'md', layer: 2, baseOpacity: 0.24 },
    { name: 'Gemini',   x: 93, y: 60, driftX: 10, driftY: 10, driftDur: 22, size: 'md', layer: 2, baseOpacity: 0.22 },
    { name: 'Python',   x: 4,  y: 45, driftX: 6,  driftY: 12, driftDur: 28, size: 'sm', layer: 3, baseOpacity: 0.18 },
    { name: 'Docker',   x: 94, y: 42, driftX: 8,  driftY: 8,  driftDur: 26, size: 'sm', layer: 3, baseOpacity: 0.16 },
    { name: 'TypeScript', x: 48, y: 4, driftX: 12, driftY: 6,  driftDur: 32, size: 'sm', layer: 3, baseOpacity: 0.15 },
    { name: 'FastAPI',  x: 15, y: 88, driftX: 8,  driftY: 10, driftDur: 21, size: 'sm', layer: 3, baseOpacity: 0.16 },
    { name: 'NumPy',    x: 85, y: 88, driftX: 10, driftY: 8,  driftDur: 25, size: 'sm', layer: 3, baseOpacity: 0.15 },
    { name: 'Pandas',   x: 2,  y: 82, driftX: 6,  driftY: 12, driftDur: 29, size: 'sm', layer: 3, baseOpacity: 0.14 },
  ],

  '/projects/interview-platform': [
    { name: 'React',    x: 6,  y: 20, driftX: 12, driftY: 10, driftDur: 18, size: 'lg', layer: 1, baseOpacity: 0.32 },
    { name: 'Node.js',  x: 91, y: 25, driftX: 10, driftY: 12, driftDur: 20, size: 'lg', layer: 1, baseOpacity: 0.30 },
    { name: 'MongoDB',  x: 5,  y: 62, driftX: 8,  driftY: 14, driftDur: 24, size: 'md', layer: 2, baseOpacity: 0.28 },
    { name: 'Gemini',   x: 92, y: 60, driftX: 10, driftY: 8,  driftDur: 22, size: 'md', layer: 2, baseOpacity: 0.26 },
    { name: 'FastAPI',  x: 4,  y: 40, driftX: 6,  driftY: 12, driftDur: 26, size: 'sm', layer: 3, baseOpacity: 0.20 },
    { name: 'Python',   x: 94, y: 44, driftX: 8,  driftY: 10, driftDur: 28, size: 'sm', layer: 3, baseOpacity: 0.18 },
  ],

  '/projects/error-mitigation': [
    { name: 'Python',       x: 6,  y: 22, driftX: 10, driftY: 12, driftDur: 20, size: 'lg', layer: 1, baseOpacity: 0.32 },
    { name: 'Pandas',       x: 92, y: 28, driftX: 12, driftY: 8,  driftDur: 18, size: 'lg', layer: 1, baseOpacity: 0.30 },
    { name: 'NumPy',        x: 5,  y: 65, driftX: 8,  driftY: 14, driftDur: 24, size: 'md', layer: 2, baseOpacity: 0.28 },
    { name: 'Scikit-Learn', x: 93, y: 62, driftX: 10, driftY: 10, driftDur: 22, size: 'md', layer: 2, baseOpacity: 0.26 },
    { name: 'Jupyter',      x: 48, y: 4,  driftX: 12, driftY: 6,  driftDur: 30, size: 'sm', layer: 3, baseOpacity: 0.20 },
  ],

  '/projects/lifebridge': [
    { name: 'React',   x: 7,  y: 24, driftX: 12, driftY: 10, driftDur: 20, size: 'lg', layer: 1, baseOpacity: 0.32 },
    { name: 'Vite',    x: 91, y: 28, driftX: 10, driftY: 12, driftDur: 18, size: 'lg', layer: 1, baseOpacity: 0.30 },
    { name: 'Tailwind', x: 5, y: 64, driftX: 8,  driftY: 14, driftDur: 24, size: 'md', layer: 2, baseOpacity: 0.28 },
    { name: 'JavaScript', x: 93, y: 60, driftX: 10, driftY: 8, driftDur: 22, size: 'md', layer: 2, baseOpacity: 0.26 },
  ],

  '/architecture': [
    { name: 'FastAPI',    x: 5,  y: 20, driftX: 10, driftY: 12, driftDur: 20, size: 'lg', layer: 1, baseOpacity: 0.30 },
    { name: 'Docker',     x: 91, y: 22, driftX: 12, driftY: 8,  driftDur: 18, size: 'lg', layer: 1, baseOpacity: 0.30 },
    { name: 'PostgreSQL', x: 5,  y: 60, driftX: 8,  driftY: 14, driftDur: 24, size: 'md', layer: 2, baseOpacity: 0.26 },
    { name: 'Redis',      x: 92, y: 58, driftX: 10, driftY: 10, driftDur: 22, size: 'md', layer: 2, baseOpacity: 0.24 },
    { name: 'MongoDB',    x: 50, y: 5,  driftX: 14, driftY: 6,  driftDur: 28, size: 'md', layer: 2, baseOpacity: 0.22 },
    { name: 'Nginx',      x: 20, y: 90, driftX: 8,  driftY: 10, driftDur: 26, size: 'sm', layer: 3, baseOpacity: 0.20 },
    { name: 'Kubernetes', x: 80, y: 90, driftX: 10, driftY: 8,  driftDur: 23, size: 'sm', layer: 3, baseOpacity: 0.18 },
    { name: 'React',      x: 3,  y: 42, driftX: 6,  driftY: 12, driftDur: 30, size: 'sm', layer: 3, baseOpacity: 0.15 },
    { name: 'Node.js',    x: 95, y: 44, driftX: 8,  driftY: 10, driftDur: 27, size: 'sm', layer: 3, baseOpacity: 0.15 },
  ],

  '/infrastructure': [
    { name: 'Docker',     x: 8,  y: 15, driftX: 10, driftY: 10, driftDur: 18, size: 'lg', layer: 1, baseOpacity: 0.32 },
    { name: 'Kubernetes', x: 88, y: 15, driftX: 12, driftY: 8,  driftDur: 20, size: 'lg', layer: 1, baseOpacity: 0.30 },
    { name: 'Nginx',      x: 8,  y: 50, driftX: 8,  driftY: 14, driftDur: 24, size: 'lg', layer: 1, baseOpacity: 0.28 },
    { name: 'Linux',      x: 88, y: 50, driftX: 10, driftY: 10, driftDur: 22, size: 'md', layer: 2, baseOpacity: 0.26 },
    { name: 'GitHub',     x: 48, y: 5,  driftX: 12, driftY: 6,  driftDur: 30, size: 'md', layer: 2, baseOpacity: 0.24 },
    { name: 'Git',        x: 50, y: 92, driftX: 10, driftY: 8,  driftDur: 26, size: 'md', layer: 2, baseOpacity: 0.22 },
    { name: 'Python',     x: 3,  y: 75, driftX: 6,  driftY: 12, driftDur: 28, size: 'sm', layer: 3, baseOpacity: 0.20 },
    { name: 'Node.js',    x: 94, y: 75, driftX: 8,  driftY: 10, driftDur: 25, size: 'sm', layer: 3, baseOpacity: 0.18 },
    { name: 'PostgreSQL', x: 20, y: 4,  driftX: 10, driftY: 6,  driftDur: 32, size: 'sm', layer: 3, baseOpacity: 0.16 },
    { name: 'MongoDB',    x: 78, y: 4,  driftX: 8,  driftY: 8,  driftDur: 29, size: 'sm', layer: 3, baseOpacity: 0.16 },
    { name: 'Redis',      x: 3,  y: 30, driftX: 6,  driftY: 14, driftDur: 27, size: 'sm', layer: 3, baseOpacity: 0.15 },
    { name: 'FastAPI',    x: 94, y: 28, driftX: 8,  driftY: 12, driftDur: 23, size: 'sm', layer: 3, baseOpacity: 0.15 },
  ],

  '/analytics': [
    { name: 'Git',      x: 7,  y: 25, driftX: 10, driftY: 12, driftDur: 20, size: 'lg', layer: 1, baseOpacity: 0.30 },
    { name: 'GitHub',   x: 91, y: 28, driftX: 12, driftY: 8,  driftDur: 18, size: 'lg', layer: 1, baseOpacity: 0.30 },
    { name: 'LeetCode', x: 5,  y: 65, driftX: 8,  driftY: 14, driftDur: 24, size: 'md', layer: 2, baseOpacity: 0.24 },
    { name: 'CodeChef', x: 93, y: 60, driftX: 10, driftY: 10, driftDur: 22, size: 'md', layer: 2, baseOpacity: 0.22 },
    { name: 'Python',   x: 3,  y: 44, driftX: 6,  driftY: 12, driftDur: 28, size: 'sm', layer: 3, baseOpacity: 0.16 },
    { name: 'Docker',   x: 95, y: 44, driftX: 8,  driftY: 10, driftDur: 26, size: 'sm', layer: 3, baseOpacity: 0.15 },
  ],

  '/resume': [
    { name: 'TypeScript', x: 4,  y: 50, driftX: 6, driftY: 10, driftDur: 28, size: 'sm', layer: 3, baseOpacity: 0.15 },
    { name: 'Python',     x: 94, y: 50, driftX: 6, driftY: 10, driftDur: 30, size: 'sm', layer: 3, baseOpacity: 0.14 },
    { name: 'React',      x: 4,  y: 25, driftX: 6, driftY: 8,  driftDur: 32, size: 'sm', layer: 3, baseOpacity: 0.12 },
    { name: 'Git',        x: 94, y: 75, driftX: 6, driftY: 8,  driftDur: 26, size: 'sm', layer: 3, baseOpacity: 0.12 },
  ],

  '/contact': [
    { name: 'React',      x: 8,  y: 12, driftX: 10, driftY: 10, driftDur: 20, size: 'lg', layer: 1, baseOpacity: 0.28 },
    { name: 'Next.js',   x: 88, y: 12, driftX: 12, driftY: 8,  driftDur: 22, size: 'lg', layer: 1, baseOpacity: 0.26 },
    { name: 'Node.js',   x: 5,  y: 45, driftX: 8,  driftY: 14, driftDur: 24, size: 'md', layer: 2, baseOpacity: 0.22 },
    { name: 'Python',    x: 92, y: 45, driftX: 10, driftY: 10, driftDur: 20, size: 'md', layer: 2, baseOpacity: 0.22 },
    { name: 'MongoDB',   x: 8,  y: 78, driftX: 8,  driftY: 10, driftDur: 26, size: 'md', layer: 2, baseOpacity: 0.20 },
    { name: 'Docker',    x: 88, y: 78, driftX: 10, driftY: 8,  driftDur: 23, size: 'md', layer: 2, baseOpacity: 0.20 },
    { name: 'GitHub',    x: 48, y: 4,  driftX: 12, driftY: 6,  driftDur: 30, size: 'sm', layer: 3, baseOpacity: 0.18 },
    { name: 'Git',       x: 50, y: 93, driftX: 10, driftY: 6,  driftDur: 28, size: 'sm', layer: 3, baseOpacity: 0.16 },
    { name: 'FastAPI',   x: 2,  y: 62, driftX: 6,  driftY: 12, driftDur: 32, size: 'sm', layer: 3, baseOpacity: 0.14 },
    { name: 'TypeScript', x: 96, y: 62, driftX: 6, driftY: 12, driftDur: 29, size: 'sm', layer: 3, baseOpacity: 0.14 },
    { name: 'Gemini',    x: 25, y: 4,  driftX: 8,  driftY: 8,  driftDur: 27, size: 'sm', layer: 3, baseOpacity: 0.14 },
    { name: 'PostgreSQL', x: 72, y: 4, driftX: 8,  driftY: 8,  driftDur: 25, size: 'sm', layer: 3, baseOpacity: 0.14 },
  ],
};

// ─── Size map ─────────────────────────────────────────────────────────────────
const SIZE_PX = { sm: 28, md: 40, lg: 52 };

// ─── Parallax multiplier per layer ───────────────────────────────────────────
const PARALLAX = { 1: 0.015, 2: 0.025, 3: 0.04 };

// ─── Single floating node ────────────────────────────────────────────────────
function EcosystemNode({ node, mouseX, mouseY, containerW, containerH }: {
  node: TechNode;
  mouseX: number;
  mouseY: number;
  containerW: number;
  containerH: number;
}) {
  const Icon = ICONS[node.name];
  if (!Icon) return null;

  // Mouse parallax offset (in px, capped 5–15px)
  const mx = (mouseX - 0.5) * containerW * PARALLAX[node.layer];
  const my = (mouseY - 0.5) * containerH * PARALLAX[node.layer];

  const blur = node.layer === 3 ? 'blur-[1.5px]' : node.layer === 2 ? 'blur-[0.5px]' : '';
  const px = SIZE_PX[node.size];

  return (
    <motion.div
      key={node.name}
      className={`absolute pointer-events-none select-none ${blur}`}
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        x: '-50%',
        y: '-50%',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: node.baseOpacity, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* Drift animation wrapping parallax */}
      <motion.div
        animate={{
          x: [mx, mx + node.driftX, mx - node.driftX * 0.5, mx],
          y: [my, my - node.driftY, my + node.driftY * 0.6, my],
        }}
        transition={{
          duration: node.driftDur,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
        }}
        className="group"
      >
        {/* Hover glow ring */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.2 }}
        >
          <Icon
            size={px}
            className="text-white"
            style={{ filter: 'grayscale(100%) brightness(0.9)' }}
          />
          {/* Subtle label on hover */}
          <span
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-white/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {node.name}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function EngineeringEcosystem() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 1440, h: 900 });

  useEffect(() => { setMounted(true); }, []);

  // Track container dims
  useEffect(() => {
    const update = () => {
      setDims({ w: window.innerWidth, h: window.innerHeight });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Track mouse
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Resolve page nodes — try exact path then prefix match
  const resolveNodes = (): TechNode[] => {
    if (!pathname) return PAGE_NODES['/'] ?? [];
    if (PAGE_NODES[pathname]) return PAGE_NODES[pathname];
    // Prefix match (longest wins)
    const keys = Object.keys(PAGE_NODES).filter(k => k !== '/' && pathname.startsWith(k));
    if (keys.length) {
      keys.sort((a, b) => b.length - a.length);
      return PAGE_NODES[keys[0]] ?? [];
    }
    return PAGE_NODES['/'] ?? [];
  };

  if (!mounted) return null;

  const nodes = resolveNodes();

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[2] overflow-hidden"
    >
      <AnimatePresence mode="popLayout">
        {nodes.map((node) => (
          <EcosystemNode
            key={`${pathname}-${node.name}`}
            node={node}
            mouseX={mousePos.x}
            mouseY={mousePos.y}
            containerW={dims.w}
            containerH={dims.h}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
