import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GithubLogo, Star, X, ArrowRight } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import SectionBadge from "../components/ui/SectionBadge";
import ParallaxSection from "../components/ui/ParallaxSection";

const projects = [
  {
    title: "CineMood AI",
    category: "AI & Semantic Search",
    description: "Movie discovery platform leveraging Gemini API natural language parsing to match films based on emotional context and mood-driven recommendations.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/joyalksdev/cinemood",
    githubStars: 12,
    live: "https://cinemood.vercel.app",
    thumbnail: "/projects/cinemood-thumb.png",
    detailedImage: "/projects/cinemood-detail.png",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    accent: "#a855f7",
  },
  {
    title: "NexCart Platform",
    category: "E-Commerce System",
    description: "High-performance storefront with modular API routing, secure cart states, and resilient cloud microservices architecture.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],
    github: "https://github.com/joyalksdev/nexcart",
    githubStars: 8,
    live: "https://nexcart.vercel.app",
    thumbnail: "/projects/nexcart-thumb.png",
    detailedImage: "/projects/nexcart-detail.png",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    accent: "#06b6d4",
  },
  {
    title: "Kripa Trust",
    category: "Web & Admin System",
    description: "Full-stack web overhaul featuring custom media administration feeds, Mongoose schema models, and secure access control.",
    tags: ["React", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/joyalksdev/kripa-trust",
    githubStars: 5,
    live: "#",
    thumbnail: "/projects/kripa-thumb.png",
    detailedImage: "/projects/kripa-detail.png",
    gradient: "from-emerald-500/20 via-green-500/20 to-lime-500/20",
    accent: "#22c55e",
  },
  {
    title: "MERN API Core",
    category: "Backend Microservices",
    description: "Scalable REST API architecture designed with JWT token authorization, database connection pooling, and rate-limiting middleware.",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/joyalksdev",
    githubStars: 15,
    live: "#",
    thumbnail: "/projects/api-thumb.png",
    detailedImage: "/projects/api-detail.png",
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    accent: "#f59e0b",
  },
];

/* ─── Desktop card with image reveal on hover ─── */
const DesktopProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="view"
      className="group relative bg-zinc-900/40 border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm"
      animate={{
        borderColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.08)"
      }}
    >
      {/* Project Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-zinc-950">
        <motion.img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
          animate={{ scale: isHovered ? 1.05 : 1, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-110"
        />
        <motion.img
          src={project.detailedImage}
          alt={`${project.title} detailed view`}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
          animate={{ scale: isHovered ? 1 : 1.1, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} mix-blend-overlay opacity-60`} />
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <span className="text-xs tracking-widest text-indigo-400 uppercase font-mono mb-2 block">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold text-zinc-100 group-hover:text-white transition-colors mb-3">
              {project.title}
            </h3>
          </div>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/60 border border-white/10 rounded-lg"
            animate={{ borderColor: isHovered ? "rgba(234, 179, 8, 0.5)" : "rgba(255, 255, 255, 0.1)" }}
          >
            <Star size={14} weight="fill" className="text-yellow-500" />
            <span className="text-xs font-mono text-zinc-300">{project.githubStars}</span>
          </motion.a>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-3 py-1 rounded-lg bg-zinc-800/60 border border-white/[0.06] text-zinc-300 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
          {project.live !== "#" && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm font-medium"
              animate={{ color: isHovered ? "rgb(129, 140, 248)" : "rgb(244, 244, 245)" }}
            >
              <span>Live Demo</span>
              <ArrowUpRight size={16} weight="bold" />
            </motion.a>
          )}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-sm font-medium"
            animate={{ color: isHovered ? "rgb(228, 228, 231)" : "rgb(161, 161, 170)" }}
          >
            <GithubLogo size={16} weight="bold" />
            <span>View Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Mobile card — tap to expand detail sheet ─── */
const MobileProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.07 * index }}
        onClick={() => setOpen(true)}
        className="relative flex items-center gap-4 p-4 bg-zinc-900/40 border border-white/[0.08] rounded-2xl active:scale-[0.98] transition-transform"
      >
        {/* Accent strip */}
        <div
          className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full"
          style={{ backgroundColor: project.accent }}
        />

        {/* Thumbnail */}
        <div className="ml-3 w-14 h-14 rounded-xl overflow-hidden bg-zinc-800/60 shrink-0">
          <img
            src={project.thumbnail}
            alt={project.title}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase block mb-0.5">
            {project.category}
          </span>
          <h3 className="text-sm font-semibold text-zinc-100 truncate">{project.title}</h3>
          <div className="flex items-center gap-1.5 mt-1">
            <Star size={11} weight="fill" className="text-yellow-500" />
            <span className="text-[11px] text-zinc-500 font-mono">{project.githubStars}</span>
          </div>
        </div>

        <ArrowRight size={16} className="text-zinc-600 shrink-0" />
      </motion.div>

      {/* Detail sheet */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Bottom sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#111111] border-t border-white/[0.08] rounded-t-3xl overflow-hidden max-h-[88vh] flex flex-col"
            >
              {/* Drag pill */}
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1 bg-zinc-700 rounded-full" />
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto flex-1 pb-10 px-6">
                {/* Close button */}
                <div className="flex items-center justify-between py-4">
                  <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase">
                    {project.category}
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-8 h-8 rounded-full bg-zinc-800/60 flex items-center justify-center"
                  >
                    <X size={14} className="text-zinc-400" />
                  </button>
                </div>

                {/* Image */}
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 mb-5">
                  <img
                    src={project.detailedImage || project.thumbnail}
                    alt={project.title}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title + stars */}
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-semibold text-zinc-100 leading-tight pr-3">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 border border-white/10 rounded-lg shrink-0">
                    <Star size={13} weight="fill" className="text-yellow-500" />
                    <span className="text-xs font-mono text-zinc-300">{project.githubStars}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1 rounded-lg bg-zinc-800/60 border border-white/[0.06] text-zinc-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white text-sm font-medium active:opacity-80 transition-opacity"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={16} weight="bold" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800/60 border border-white/10 text-zinc-200 text-sm font-medium active:opacity-80 transition-opacity"
                  >
                    <GithubLogo size={16} weight="bold" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/* ─── Mobile Work page ─── */
const MobileWork = () => (
  <div className="relative min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-5 font-sans overflow-hidden">
    <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10 max-w-2xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="mb-3">
          <SectionBadge number="02" label="SELECTED WORK" variant="default" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight leading-tight mb-3">
          Built for <span className="text-indigo-400">performance</span> and scale.
        </h1>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Full-stack applications crafted with clean architecture and attention to detail.
        </p>
      </motion.div>

      {/* Project list */}
      <div className="space-y-3">
        {projects.map((project, idx) => (
          <MobileProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </div>
  </div>
);

/* ─── Desktop Work page ─── */
const DesktopWork = () => (
  <ParallaxSection className="relative min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 sm:px-10 md:px-24 font-sans overflow-hidden">
    <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <div className="mb-6">
          <SectionBadge number="02" label="SELECTED WORK" variant="default" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Architected with focus on <span className="text-indigo-400">performance</span> and scale.
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Full-stack applications built with modern technologies, clean architecture, and attention to detail.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <DesktopProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </div>
  </ParallaxSection>
);

/* ─── Root export with device split ─── */
export default function Work() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <MobileWork /> : <DesktopWork />;
}
