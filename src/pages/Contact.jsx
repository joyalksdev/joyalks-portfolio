import { motion } from "framer-motion";
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import SectionBadge from "../components/ui/SectionBadge";
import ParallaxSection from "../components/ui/ParallaxSection";

export default function Contact() {
  return (
    <ParallaxSection
      className="relative min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 sm:px-10 md:px-24 font-sans overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
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

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="https://github.com/joyalksdev"
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-indigo-500/50 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300"
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
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-indigo-500/50 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300"
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
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-indigo-500/50 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300"
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