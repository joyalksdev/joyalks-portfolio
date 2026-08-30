import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import SectionBadge from "../components/ui/SectionBadge";
import ParallaxSection from "../components/ui/ParallaxSection";
import ProjectModal from "../components/ui/ProjectModal";
import { projects } from "../data/projects";

const ProjectCard = ({ project, onExpand, isMobile }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const techStack = project.tech || project.tags || [];
  const imageUrl = project.image || project.thumbnail;

  if (isMobile) {
    return (
      <div
        onClick={onExpand}
        className="relative bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden active:scale-[0.98] transition-transform cursor-pointer"
      >
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
          <img
            src={imageUrl}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="w-full h-full object-cover object-top transition-opacity duration-300"
            style={{ opacity: imageLoaded ? 0.85 : 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
        </div>

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

          <div className="flex flex-wrap gap-1.5">
            {techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[9px] font-mono text-zinc-400 bg-zinc-800/50 border border-white/5 rounded"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="px-2 py-0.5 text-[9px] font-mono text-zinc-500">
                +{techStack.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 mt-3">
            <span>Tap to expand</span>
            <span>→</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onExpand}
      data-cursor="view"
      className="relative w-full aspect-[4/5] cursor-pointer group"
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-0`} />

        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src={imageUrl}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
            style={{ opacity: imageLoaded ? 0.75 : 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent group-hover:opacity-80 transition-opacity duration-500" />
        </div>

        <div className="relative h-full flex flex-col justify-between p-6 z-10">
          <div className="flex items-start justify-between">
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.2em] px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
              {project.category}
            </span>
            <span className="text-5xl font-mono text-zinc-700 font-bold group-hover:text-zinc-300 transition-colors duration-300">
              {project.id}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-3xl font-semibold text-zinc-100 mb-2 tracking-tight group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-300 line-clamp-2 group-hover:text-zinc-100 transition-colors duration-300">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[10px] font-mono text-zinc-300 bg-zinc-950/60 border border-white/10 rounded-md backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
              {techStack.length > 3 && (
                <span className="px-2.5 py-1 text-[10px] font-mono text-zinc-400 bg-zinc-950/40 rounded-md backdrop-blur-sm">
                  +{techStack.length - 3} more
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 group-hover:text-indigo-300 transition-colors duration-300">
              <span>Click to expand</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);
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
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

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

        <div className={`grid gap-4 md:gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
              onExpand={() => setSelectedProject(project)}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Global Modal Instance */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          isMobile={isMobile}
        />

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