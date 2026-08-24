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
  return (
    <ParallaxSection className="relative bg-[#0a0a0a] text-zinc-100 font-sans py-24 px-6 md:px-12 border-t border-white/[0.08] overflow-hidden">

      {/* Ambient Background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="mb-4">
            <SectionBadge number="04" label="TECH STACK" variant="default" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div key={category.category} className="relative">
              {/* Category Card */}
              <div className="bg-zinc-900/40 border border-white/[0.08] rounded-2xl p-6 backdrop-blur-sm hover:border-white/[0.12] transition-colors duration-300">

                <h3 className="text-lg font-semibold text-zinc-200 mb-6 tracking-tight">
                  {category.category}
                </h3>

                {/* Tech Items */}
                <div className="space-y-4">
                  {category.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-4 p-3 rounded-xl bg-zinc-800/30 border border-white/[0.05] hover:bg-zinc-800/50 hover:border-white/[0.1] transition-all duration-300 group"
                    >
                      {/* Icon */}
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-800/50 group-hover:bg-zinc-800 transition-colors duration-300">
                        <tech.Icon size={20} style={{ color: tech.color }} />
                      </div>

                      {/* Name */}
                      <span className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </ParallaxSection>
  );
}
