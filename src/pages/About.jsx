import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiGit, SiDocker, SiVercel, SiFramer
} from "react-icons/si";
import SectionBadge from "../components/ui/SectionBadge";
import ParallaxSection from "../components/ui/ParallaxSection";

const stackGroups = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", Icon: SiFramer, color: "#BB4B96" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    category: "Tools & Infra",
    items: [
      { name: "Git & GitHub", Icon: SiGit, color: "#F05032" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
    ],
  },
];

const competencies = [
  "Full-Stack MERN Architecture",
  "REST API Design & Integration",
  "Responsive UI / Micro-interactions",
];

/* ─── Mobile About page ─── */
const MobileAbout = () => (
  <div className="relative min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-5 font-sans overflow-hidden">
    <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10 max-w-2xl mx-auto space-y-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-3">
          <SectionBadge number="03" label="PERSPECTIVE & SKILLS" variant="default" />
        </div>
        <h1 className="text-[1.75rem] font-semibold tracking-tight leading-snug">
          Full-Stack Developer focused on <span className="text-indigo-400">clean web</span> applications.
        </h1>
      </motion.div>

      {/* Bio text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-3 text-sm text-zinc-400 leading-relaxed"
      >
        <p>
          I specialize in engineering full-stack web products using modern JavaScript technologies — building clean, maintainable, and responsive UIs powered by structured REST APIs and scalable database schemas.
        </p>
        <p>
          Whether integrating AI via Gemini APIs or crafting modular backend architectures with Node.js and MongoDB, I prioritize clarity, execution speed, and functional precision.
        </p>
      </motion.div>

      {/* Core competencies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="bg-zinc-900/40 border border-white/[0.08] rounded-xl p-5 backdrop-blur-sm"
      >
        <h3 className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider mb-4">
          Core Competencies
        </h3>
        <ul className="space-y-3">
          {competencies.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Technical Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-base font-semibold text-zinc-100 mb-4 tracking-tight">
          Technical Stack
        </h2>

        <div className="space-y-4">
          {stackGroups.map((group) => (
            <div
              key={group.category}
              className="bg-zinc-900/40 border border-white/[0.08] rounded-xl p-5 backdrop-blur-sm"
            >
              <h3 className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-800/30 border border-white/[0.05]"
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded-md bg-zinc-800/60 shrink-0">
                      <tech.Icon size={14} style={{ color: tech.color }} />
                    </div>
                    <span className="text-xs font-medium text-zinc-300 leading-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
);

/* ─── Desktop About page ─── */
const DesktopAbout = () => (
  <ParallaxSection className="relative min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 sm:px-10 md:px-24 font-sans overflow-hidden">
    <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

    <div className="relative z-10 max-w-5xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="mb-6">
          <SectionBadge number="03" label="PERSPECTIVE & SKILLS" variant="default" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-12">
          Full-Stack Developer focused on building clean web applications with tight backend integrations.
        </h1>
      </motion.div>

      {/* Two-column split */}
      <div className="grid md:grid-cols-2 gap-12 border-t border-white/[0.08] pt-12 mb-20">
        {/* Left: Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-400 text-sm leading-relaxed space-y-4"
        >
          <p>
            I specialize in engineering full-stack web products using modern JavaScript technologies. My focus revolves around building clean, maintainable, and responsive user interfaces powered by structured REST APIs and scalable database schemas.
          </p>
          <p>
            Whether it's integrating AI capabilities via Gemini APIs or crafting modular backend architectures with Node.js and MongoDB, I prioritize clarity, execution speed, and functional precision.
          </p>
        </motion.div>

        {/* Right: Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-zinc-900/40 p-6 rounded-xl border border-white/[0.08] backdrop-blur-sm"
        >
          <h3 className="text-xs text-zinc-500 tracking-[0.2em] uppercase mb-4">Core Competencies</h3>
          <ul className="text-sm text-zinc-300 space-y-3">
            {competencies.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                <span className={`h-1.5 w-1.5 rounded-full ${i % 2 === 0 ? "bg-indigo-500" : "bg-cyan-400"}`} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Technical Stack */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border-t border-white/[0.08] pt-12"
      >
        <h2 className="text-xl font-semibold mb-8">Technical Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stackGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              className="p-6 bg-zinc-900/40 border border-white/[0.08] rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-xs text-indigo-400 tracking-widest uppercase mb-5">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-800/30 border border-white/[0.05] hover:bg-zinc-800/50 hover:border-white/10 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-md bg-zinc-800/60 shrink-0">
                      <tech.Icon size={15} style={{ color: tech.color }} />
                    </div>
                    <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </ParallaxSection>
);

/* ─── Root export ─── */
export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <MobileAbout /> : <DesktopAbout />;
}
