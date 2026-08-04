import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax({ children, speed = 0.3 }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 200}%`]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}