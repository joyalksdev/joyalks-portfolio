import { motion } from "framer-motion";
import SectionBadge from "../components/ui/SectionBadge";
import ParallaxSection from "../components/ui/ParallaxSection";

const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"] },
  { category: "Database & Tools", items: ["MongoDB", "Mongoose", "PostgreSQL", "Git & GitHub", "Docker", "Vercel"] },
];

export default function About() {
  return (
    <ParallaxSection
      className="relative min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 sm:px-10 md:px-24 font-sans overflow-hidden"
    >
      {/* Ambient Background */}
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

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 border-t border-white/[0.08] pt-12 mb-20">

          {/* Left: About Text */}
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

          {/* Right: Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-zinc-900/40 p-6 rounded-xl border border-white/[0.08] backdrop-blur-sm"
          >
            <h3 className="text-xs text-zinc-500 tracking-[0.2em] uppercase mb-4">Core Competencies</h3>
            <ul className="text-sm text-zinc-300 space-y-3">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                Full-Stack MERN Architecture
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                REST API Design & Integration
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                Responsive UI Components & Micro-interactions
              </li>
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
            {skills.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                className="p-6 bg-zinc-900/40 border border-white/[0.08] rounded-xl backdrop-blur-sm"
              >
                <h3 className="text-xs text-indigo-400 tracking-widest uppercase mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-zinc-300 flex items-center gap-2">
                      <span className="text-zinc-600">—</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </ParallaxSection>
  );
}
