import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVercel,
  SiFramer
} from 'react-icons/si';
import SectionBadge from "../components/ui/SectionBadge";
import ParallaxSection from "../components/ui/ParallaxSection";

const fadeUpStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const skills = [
  {
    category: "Frontend",
    techs: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", Icon: SiFramer, color: "#BB4B96" },
    ]
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    ]
  },
  {
    category: "Tools",
    techs: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
    ]
  }
];

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    // Mobile Layout
    return (
      <ParallaxSection className="relative bg-[#0a0a0a] text-zinc-100 font-sans py-20 px-6 border-t border-white/8 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <div className="mb-3">
              <SectionBadge number="03" label="TECH STACK" variant="default" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-100">
              Skills & Technologies
            </h2>
          </motion.div>

          {/* Skills Stack */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {skills.map((category) => (
              <motion.div
                key={category.category}
                variants={fadeUpStagger}
                className="relative"
              >
                <div className="bg-zinc-900/40 border border-white/8 rounded-xl p-5 backdrop-blur-sm">
                  <h3 className="text-base font-semibold text-zinc-200 mb-4 tracking-tight">
                    {category.category}
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {category.techs.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/30 border border-white/5 transition-transform"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-8 h-8 flex items-center justify-center rounded-md bg-zinc-800/50"
                        >
                          <tech.Icon size={16} style={{ color: tech.color }} />
                        </motion.div>
                        <span className="text-xs font-medium text-zinc-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>
    );
  }

  // Desktop Layout (polished)
  return (
    <ParallaxSection className="relative bg-[#0a0a0a] text-zinc-100 font-sans py-24 px-6 md:px-12 border-t border-white/8 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="mb-4">
            <SectionBadge number="03" label="TECH STACK" variant="default" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            Skills & Technologies
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              variants={fadeUpStagger}
              custom={catIndex}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="bg-zinc-900/40 border border-white/8 rounded-2xl p-6 backdrop-blur-sm hover:border-white/[0.12] transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-zinc-200 mb-6 tracking-tight">
                  {category.category}
                </h3>

                <div className="space-y-3">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2, delay: techIndex * 0.02 }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-zinc-800/30 border border-white/[0.05] hover:bg-zinc-800/50 hover:border-white/[0.1] transition-all duration-300 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-800 transition-colors duration-300"
                      >
                        <tech.Icon size={20} style={{ color: tech.color }} />
                      </motion.div>
                      <span className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ParallaxSection>
  );
}
