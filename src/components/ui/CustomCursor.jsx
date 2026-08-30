import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Eye } from "@phosphor-icons/react";

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState("default"); // default, hover, view
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics
  const springConfig = { damping: 20, stiffness: 400, mass: 0.3 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      // Check for view/project cards in SelectedWork section
      if (target.closest('[data-cursor="view"]')) {
        setCursorState("view");
      }
      // Check for links and buttons
      else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "pointer"
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Continuous rotation for text
  useEffect(() => {
    if (cursorState === "view") {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 1) % 360);
      }, 16); // ~60fps
      return () => clearInterval(interval);
    }
  }, [cursorState]);

  if (!mounted || typeof window === "undefined") return null;

  return createPortal(
    <>
      {/* Main Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorState === "view" ? 100 : cursorState === "hover" ? 50 : 32,
          height: cursorState === "view" ? 100 : cursorState === "hover" ? 50 : 32,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="relative w-full h-full">
          {/* Simple Circle for default and hover */}
          {cursorState !== "view" && (
            <motion.div
              className="w-full h-full rounded-full border border-indigo-400/50"
              animate={{
                borderColor: cursorState === "hover" ? "rgba(129, 140, 248, 0.8)" : "rgba(129, 140, 248, 0.5)",
              }}
              transition={{ duration: 0.2 }}
            />
          )}

          {/* View Project State: Eye Icon + Border + Rotating Text */}
          {cursorState === "view" && (
            <div className="absolute inset-0">
              {/* Static Eye Icon with Border in Center */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Inner Circle Border (static) */}
                <div className="absolute w-8 h-8 rounded-full border-2 border-indigo-400/60" />

                {/* Eye Icon (static, no rotation) */}
                <Eye size={18} weight="bold" className="text-indigo-400 relative z-10" />
              </motion.div>

              {/* Rotating Text Outside Border - Very close to center */}
              <motion.div
                className="absolute inset-0"
                style={{ rotate: rotation }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
                    />
                  </defs>
                  <text className="text-[10px] fill-indigo-300 font-mono font-bold tracking-[0.25em] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      VIEW • VIEW • VIEW •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorState === "view" ? 0 : cursorState === "hover" ? 1.8 : 1,
          opacity: cursorState === "view" ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorState === "view" ? 1.5 : cursorState === "hover" ? 1.2 : 0,
          opacity: cursorState === "view" ? 0.3 : cursorState === "hover" ? 0.2 : 0,
        }}
      >
        <div className="w-20 h-20 bg-indigo-500 rounded-full blur-2xl" />
      </motion.div>
    </>,
    document.body
  );
}