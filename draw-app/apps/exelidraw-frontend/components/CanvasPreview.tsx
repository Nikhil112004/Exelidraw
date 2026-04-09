"use client"
import { motion } from "framer-motion";

const CanvasPreview = () => {
  return (
    <motion.svg
      viewBox="0 0 600 400"
      className="w-full h-full"
      initial="hidden"
      animate="visible"
    >
      {/* Grid dots */}
      {Array.from({ length: 25 }).map((_, i) =>
        Array.from({ length: 17 }).map((_, j) => (
          <circle
            key={`${i}-${j}`}
            cx={i * 24 + 12}
            cy={j * 24 + 12}
            r={1}
            className="fill-muted-foreground/20"
          />
        ))
      )}

      {/* Rectangle shape */}
      <motion.rect
        x={80} y={60} width={180} height={120} rx={12}
        className="fill-none stroke-primary"
        strokeWidth={2.5}
        strokeDasharray="1000"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Arrow */}
      <motion.path
        d="M 270 120 L 350 120"
        className="stroke-foreground/60 fill-none"
        strokeWidth={2}
        strokeDasharray="1000"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        markerEnd="url(#arrowhead)"
      />

      {/* Diamond */}
      <motion.path
        d="M 430 60 L 500 120 L 430 180 L 360 120 Z"
        className="fill-none stroke-accent"
        strokeWidth={2.5}
        strokeDasharray="1000"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Circle */}
      <motion.circle
        cx={200} cy={300} r={60}
        className="fill-none stroke-primary/60"
        strokeWidth={2.5}
        strokeDasharray="1000"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
      />

      {/* Squiggly line */}
      <motion.path
        d="M 320 260 C 340 240, 380 280, 400 260 C 420 240, 460 280, 480 260"
        className="fill-none stroke-accent/70"
        strokeWidth={2}
        strokeDasharray="1000"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      />

      {/* Text lines */}
      {[100, 110, 120].map((y, i) => (
        <motion.rect
          key={i}
          x={110} y={y} width={120 - i * 20} height={3} rx={1.5}
          className="fill-foreground/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
        />
      ))}

      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" className="fill-foreground/60" />
        </marker>
      </defs>
    </motion.svg>
  );
};

export default CanvasPreview;