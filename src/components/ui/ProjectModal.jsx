import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GithubLogo, X } from "@phosphor-icons/react";

export default function ProjectModal({ project, isOpen, onClose, isMobile }) {
  // Lock background scroll when the modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (typeof window === "undefined") return null;

  const techStack = project?.tech || project?.tags || [];
  const imageUrl = project?.image || project?.thumbnail;
  const liveUrl = project?.liveUrl || project?.live;
  const githubUrl = project?.githubUrl || project?.github;

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40"
            onClick={onClose}
          />

          {isMobile ? (
            /* Mobile Sheet Layout */
            <div className="fixed inset-0 z-50 flex items-end justify-center">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="relative w-full max-h-[85vh] bg-zinc-900/95 border-t border-white/10 rounded-t-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 z-50 p-2 bg-zinc-800/80 border border-white/10 rounded-lg"
                >
                  <X size={18} weight="bold" className="text-zinc-400" />
                </button>

                <div data-lenis-prevent className="max-h-[85vh] overflow-y-auto p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-wider px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                      {project.category}
                    </span>
                    {project.year && (
                      <span className="text-[9px] font-mono text-zinc-500 px-2 py-0.5 bg-zinc-800/50 border border-white/5 rounded-full">
                        {project.year}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold text-zinc-100 mb-2">
                    {project.title}
                  </h2>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-zinc-950 mb-4">
                    <img
                      src={project.detailedImage || imageUrl}
                      alt={project.title}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30`} />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {techStack.map((tech) => (
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
                    {liveUrl && liveUrl !== "#" && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white font-medium rounded-lg text-sm"
                      >
                        <span>View Live Demo</span>
                        <ArrowUpRight size={14} weight="bold" />
                      </a>
                    )}

                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-800 text-zinc-200 font-medium border border-white/10 rounded-lg text-sm"
                      >
                        <GithubLogo size={14} weight="bold" />
                        <span>View Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            /* Desktop Dialog Layout */
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
                  onClick={onClose}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2.5 md:p-3 bg-zinc-800/80 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-zinc-700 transition-colors"
                >
                  <X size={20} weight="bold" className="text-zinc-400" />
                </button>

                <div data-lenis-prevent className="max-h-[85vh] overflow-y-auto custom-scrollbar">
                  <div className="p-6 md:p-8">
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.2em] px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                          {project.category}
                        </span>
                        {project.year && (
                          <span className="text-[10px] font-mono text-zinc-500 px-2.5 py-1 bg-zinc-800/50 border border-white/5 rounded-full">
                            {project.year}
                          </span>
                        )}
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
                        src={project.detailedImage || imageUrl}
                        alt={project.title}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                    </div>

                    <div className="mb-5">
                      <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                        Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
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
                      {liveUrl && liveUrl !== "#" && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg text-sm hover:bg-indigo-500 transition-colors"
                        >
                          <span>View Live Demo</span>
                          <ArrowUpRight size={16} weight="bold" />
                        </a>
                      )}

                      {githubUrl && (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-200 font-medium border border-white/10 rounded-lg text-sm hover:bg-zinc-700 transition-colors"
                        >
                          <GithubLogo size={16} weight="bold" />
                          <span>View Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}