import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GithubLogo, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import SectionBadge from "../components/ui/SectionBadge";
import ParallaxSection from "../components/ui/ParallaxSection";

const projects = [
  {
    id: "01",
    title: "CineMood AI",
    category: "AI & Semantic Search",
    year: "2026",
    description: "Movie discovery platform leveraging Gemini API natural language parsing to match films based on emotional context and mood-driven recommendations.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS", "Gemini API"],
    image: "/cinemood-preview.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
  },
  {
    id: "02",
    title: "NexCart Platform",
    category: "E-Commerce Engine",
    year: "2026",
    description: "High-performance storefront with modular API routing, secure cart states, and resilient cloud microservices architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Render"],
    image: "/nexcart-preview.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
  },
  {
    id: "03",
    title: "Kripa Trust",
    category: "Web & Admin System",
    year: "2026",
    description: "Full-stack web overhaul featuring custom media administration feeds, Mongoose schema models, and secure access control.",
    tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
    image: "/kripa-preview.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
  },
  {
    id: "04",
    title: "MERN API Core",
    category: "Backend Microservices",
    year: "2026",
    description: "Scalable REST API architecture designed with JWT token authorization, database connection pooling, and rate-limiting middleware.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    image: "/backend-preview.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
  },
];

const ProjectCard = ({ project, isExpanded, onExpand, onCollapse, isMobile }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Mobile Card Layout
  if (isMobile) {
    return (
      <>
        {!isExpanded && (
          <div
            onClick={onExpand}
            className="relative bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden active:scale-[0.98] transition-transform"
          >
            {/* Mobile Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
              <img
                src={project.image}
                alt={project.title}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="w-full h-full object-cover object-top filter grayscale contrast-110"
                style={{ opacity: imageLoaded ? 0.4 : 0 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
            </div>

            {/* Mobile Content */}
            <div className="p-4">
              <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-wider px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                {project.category}
              </span>

              <h3 className="text-xl font-semibold text-zinc-100 mt-3 mb-2">
                {project.title}
              </h3>

              <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                {project.description}
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[9px] font-mono text-zinc-400 bg-zinc-800/50 border border-white/5 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-0.5 text-[9px] font-mono text-zinc-500">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 mt-3">
                <span>Tap to expand</span>
                <span>→</span>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Modal */}
        <AnimatePresence>
          {isExpanded && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40"
                onClick={onCollapse}
              />

              <div className="fixed inset-0 z-50 flex items-end justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  className="relative w-full max-h-[85vh] bg-zinc-900/95 border-t border-white/10 rounded-t-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={onCollapse}
                    className="absolute top-3 right-3 z-50 p-2 bg-zinc-800/80 border border-white/10 rounded-lg"
                  >
                    <X size={18} weight="bold" className="text-zinc-400" />
                  </button>

                  <div className="max-h-[85vh] overflow-y-auto p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-wider px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-500 px-2 py-0.5 bg-zinc-800/50 border border-white/5 rounded-full">
                        {project.year}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-zinc-100 mb-2">
                      {project.title}
                    </h2>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-zinc-950 mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                        className="w-full h-full object-cover object-top filter grayscale contrast-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} mix-blend-overlay opacity-60`} />
                    </div>

                    <div className="mb-4">
                      <h3 className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                        Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-[10px] font-mono text-zinc-300 bg-zinc-800/60 border border-white/10 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white font-medium rounded-lg text-sm"
                        >
                          <span>View Live Demo</span>
                          <ArrowUpRight size={14} weight="bold" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-800 text-zinc-200 font-medium border border-white/10 rounded-lg text-sm"
                      >
                        <GithubLogo size={14} weight="bold" />
                        <span>View Source Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop Card Layout (original)
  return (
    <>
      {!isExpanded && (
        <div
          onClick={onExpand}
          data-cursor="view"
          className="relative w-full aspect-[4/5] cursor-pointer group"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="absolute inset-0 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="w-full h-full object-cover object-top filter grayscale contrast-110 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
                style={{ opacity: imageLoaded ? 0.3 : 0 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            </div>

            <div className="relative h-full flex flex-col justify-between p-6 z-10">
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.2em] px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="text-5xl font-mono text-zinc-800 font-bold group-hover:text-zinc-700 transition-colors duration-300">
                  {project.id}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-semibold text-zinc-100 mb-2 tracking-tight group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-mono text-zinc-400 bg-zinc-800/50 border border-white/5 rounded-md backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 text-[10px] font-mono text-zinc-500">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 group-hover:text-indigo-400 transition-colors duration-300">
                  <span>Click to expand</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
              }}
            />
          </div>
        </div>
      )}

      {/* Desktop Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40"
              onClick={onCollapse}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-3xl max-h-[85vh] bg-zinc-900/95 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onCollapse}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2.5 md:p-3 bg-zinc-800/80 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-zinc-700 transition-colors"
                >
                  <X size={20} weight="bold" className="text-zinc-400" />
                </button>

                <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
                  <div className="p-6 md:p-8">
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.2em] px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 px-2.5 py-1 bg-zinc-800/50 border border-white/5 rounded-full">
                          {project.year}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-2 tracking-tight">
                        {project.title}
                      </h2>

                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-zinc-950 mb-5 group">
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                        className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} mix-blend-overlay opacity-60`} />
                    </div>

                    <div className="mb-5">
                      <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                        Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-mono text-zinc-300 bg-zinc-800/60 border border-white/10 rounded-lg hover:border-indigo-400/30 hover:bg-zinc-800 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg text-sm hover:bg-indigo-500 transition-colors"
                        >
                          <span>View Live Demo</span>
                          <ArrowUpRight size={16} weight="bold" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-200 font-medium border border-white/10 rounded-lg text-sm hover:bg-zinc-700 transition-colors"
                      >
                        <GithubLogo size={16} weight="bold" />
                        <span>View Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default function SelectedWork() {
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (expandedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedId]);

  return (
    <ParallaxSection
      id="work"
      className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="mb-4 md:mb-6 flex justify-center md:justify-start">
            <SectionBadge number="04" label="SELECTED WORKS" variant="default" />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-600 mb-3 md:mb-4 text-center md:text-left">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            A curated collection of full-stack applications built with modern technologies
          </p>
        </div>

        <div className={`grid gap-4 md:gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onExpand={() => setExpandedId(project.id)}
              onCollapse={() => setExpandedId(null)}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* CTA to /work page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-20 flex justify-center"
        >
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-zinc-900/60 border border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-zinc-900/80 transition-all duration-300"
          >
            <span className="text-sm md:text-base font-medium text-zinc-100 group-hover:text-indigo-400 transition-colors">
              View all projects
            </span>
            <ArrowUpRight size={18} weight="bold" className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(39, 39, 42, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(113, 113, 122, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(113, 113, 122, 0.7);
        }
      `}</style>
    </ParallaxSection>
  );
}
