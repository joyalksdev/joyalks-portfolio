import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GithubLogo, LinkedinLogo, EnvelopeSimple, ArrowRight } from "@phosphor-icons/react";
import SectionBadge from "../components/ui/SectionBadge";
import ParallaxSection from "../components/ui/ParallaxSection";

export default function Contact() {
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
      <ParallaxSection className="relative min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-6 font-sans overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <SectionBadge number="04" label="GET IN TOUCH" variant="default" />
            </div>
            <h1 className="text-4xl font-semibold tracking-tight mb-4 leading-tight">
              Let's build something
              <br />
              <span className="text-indigo-400">remarkable</span> together.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-sm max-w-xl mb-10"
          >
            Available for full-stack web development projects, technical collaborations, and full-time roles.
          </motion.p>

          {/* Contact Cards - Stack on Mobile */}
          <div className="space-y-4">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="mailto:contact@joyalks.dev"
              className="group flex items-center justify-between p-5 rounded-xl bg-zinc-900/40 border border-white/8 active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50">
                  <EnvelopeSimple size={20} className="text-zinc-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-100 mb-0.5">
                    Send an Email
                  </div>
                  <span className="text-xs text-zinc-500">Quick response</span>
                </div>
              </div>
              <ArrowRight size={18} className="text-zinc-600" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="https://github.com/joyalksdev"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-5 rounded-xl bg-zinc-900/40 border border-white/8 active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50">
                  <GithubLogo size={20} className="text-zinc-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-100 mb-0.5">
                    GitHub Profile
                  </div>
                  <span className="text-xs text-zinc-500">github.com/joyalksdev</span>
                </div>
              </div>
              <ArrowRight size={18} className="text-zinc-600" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="https://linkedin.com/in/joyalks"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-5 rounded-xl bg-zinc-900/40 border border-white/8 active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-800/50">
                  <LinkedinLogo size={20} className="text-zinc-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-100 mb-0.5">
                    LinkedIn
                  </div>
                  <span className="text-xs text-zinc-500">Professional profile</span>
                </div>
              </div>
              <ArrowRight size={18} className="text-zinc-600" />
            </motion.a>
          </div>
        </div>
      </ParallaxSection>
    );
  }

  // Desktop Layout
  return (
    <ParallaxSection className="relative min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 sm:px-10 md:px-24 font-sans overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6">
            <SectionBadge number="04" label="GET IN TOUCH" variant="default" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6">
            Let's build something
            <br />
            <span className="text-indigo-400">remarkable</span> together.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-400 text-sm sm:text-base max-w-2xl mb-16"
        >
          I'm available for full-stack web development projects, technical collaborations, and full-time roles. Drop a message or reach out directly.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="https://github.com/joyalksdev"
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-white/8 hover:border-indigo-500/50 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300"
          >
            <GithubLogo size={24} className="text-zinc-400 group-hover:text-white transition-colors duration-300 mb-4" />
            <span className="text-xs text-zinc-500 tracking-widest block mb-2 uppercase">Codebase</span>
            <div className="text-lg font-medium text-zinc-100 mb-1 group-hover:text-indigo-400 transition-colors duration-300">
              GitHub Profile
            </div>
            <span className="text-xs text-zinc-500">github.com/joyalksdev</span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="https://linkedin.com/in/joyalks"
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-white/8 hover:border-indigo-500/50 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300"
          >
            <LinkedinLogo size={24} className="text-zinc-400 group-hover:text-white transition-colors duration-300 mb-4" />
            <span className="text-xs text-zinc-500 tracking-widest block mb-2 uppercase">Network</span>
            <div className="text-lg font-medium text-zinc-100 mb-1 group-hover:text-indigo-400 transition-colors duration-300">
              LinkedIn
            </div>
            <span className="text-xs text-zinc-500">Professional profile</span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="mailto:contact@joyalks.dev"
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-white/8 hover:border-indigo-500/50 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300"
          >
            <EnvelopeSimple size={24} className="text-zinc-400 group-hover:text-white transition-colors duration-300 mb-4" />
            <span className="text-xs text-zinc-500 tracking-widest block mb-2 uppercase">Direct Mail</span>
            <div className="text-lg font-medium text-zinc-100 mb-1 group-hover:text-indigo-400 transition-colors duration-300">
              Send an Email
            </div>
            <span className="text-xs text-zinc-500">Quick response</span>
          </motion.a>
        </div>
      </div>
    </ParallaxSection>
  );
}
