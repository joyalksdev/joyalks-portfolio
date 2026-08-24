import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ParallaxSection Component
 * Wrapper for sections with scroll-based parallax animations
 *
 * @param {ReactNode} children - Section content
 * @param {string} className - Additional CSS classes
 * @param {boolean} enableParallax - Enable/disable parallax effect (default: true)
 * @param {number} parallaxSpeed - Parallax intensity (default: 50)
 */

export default function ParallaxSection({
  children,
  className = "",
  enableParallax = true,
  parallaxSpeed = 50,
}) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [parallaxSpeed, -parallaxSpeed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.section
      ref={sectionRef}
      style={enableParallax ? { y, opacity, scale } : {}}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
