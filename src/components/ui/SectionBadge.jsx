import { motion } from "framer-motion";

/**
 * SectionBadge Component
 * Reusable badge for section/page headers with animation variants
 *
 * @param {string} number - Section number (e.g., "01", "02")
 * @param {string} label - Section label (e.g., "INTRO", "SELECTED WORKS")
 * @param {string} variant - Style variant: "default" | "hero" | "minimal"
 */

export default function SectionBadge({
  number,
  label,
  variant = "default",
  className = ""
}) {

  const variants = {
    default: {
      container: "inline-flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm",
      number: "text-[10px] font-mono text-indigo-500 font-bold",
      separator: "w-1 h-1 rounded-full bg-indigo-500/50",
      label: "text-[10px] font-mono text-indigo-400 tracking-[0.25em] uppercase"
    },
    hero: {
      container: "inline-flex items-center gap-2.5",
      number: "text-[11px] font-mono text-zinc-600 font-medium",
      separator: "w-px h-3 bg-zinc-700",
      label: "text-[11px] font-mono text-zinc-500 tracking-[0.2em] uppercase"
    },
    minimal: {
      container: "inline-flex items-center gap-3",
      number: "text-[10px] font-mono text-indigo-500 font-bold",
      separator: "text-zinc-700",
      label: "text-[10px] font-mono text-indigo-400 tracking-[0.3em] uppercase"
    }
  };

  const style = variants[variant] || variants.default;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${style.container} ${className}`}
    >
      <span className={style.number}>{number}</span>
      {variant === "minimal" ? (
        <span className={style.separator}>—</span>
      ) : (
        <div className={style.separator} />
      )}
      <span className={style.label}>{label}</span>
    </motion.div>
  );
}
