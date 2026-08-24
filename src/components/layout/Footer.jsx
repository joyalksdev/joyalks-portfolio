import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white border-t border-white/[0.08] px-6 sm:px-12 md:px-16 pt-20 pb-10 overflow-hidden font-sans">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh]">

        {/* Top Section: Giant Call-to-Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-white/[0.08]">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <span className="text-xs font-mono text-indigo-400 tracking-[0.3em] uppercase block mb-4">
              // LET&apos;S CONNECT
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-none uppercase tracking-tight text-zinc-100">
              HAVE A PROJECT IN MIND?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest"
              style={{ transition: 'background-color 0.3s, color 0.3s' }}
            >
              <span>Start A Conversation</span>
              <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ transition: 'transform 0.3s' }} />
            </Link>
          </motion.div>

        </div>

        {/* Middle Section: Navigation & Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs font-mono">
          
          {/* Col 1: Sitemap */}
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 uppercase tracking-widest mb-1">// NAVIGATION</span>
            <Link to="/" className="text-zinc-400 hover:text-white" style={{ transition: 'color 0.2s' }}>Home</Link>
            <Link to="/work" className="text-zinc-400 hover:text-white" style={{ transition: 'color 0.2s' }}>Selected Work</Link>
            <Link to="/about" className="text-zinc-400 hover:text-white" style={{ transition: 'color 0.2s' }}>About Me</Link>
            <Link to="/contact" className="text-zinc-400 hover:text-white" style={{ transition: 'color 0.2s' }}>Contact</Link>
          </div>

          {/* Col 2: Social Links */}
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 uppercase tracking-widest mb-1">// CONNECT</span>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white"
              style={{ transition: 'color 0.2s' }}
            >
              <GithubLogo size={14} /> GitHub ↗
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white"
              style={{ transition: 'color 0.2s' }}
            >
              <LinkedinLogo size={14} /> LinkedIn ↗
            </a>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white"
              style={{ transition: 'color 0.2s' }}
            >
              <EnvelopeSimple size={14} /> Email Direct
            </a>
          </div>

          {/* Col 3: Tech Focus */}
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 uppercase tracking-widest mb-1">// CORE STACK</span>
            <span className="text-zinc-400">React / Next.js</span>
            <span className="text-zinc-400">Node.js / Express</span>
            <span className="text-zinc-400">MongoDB / Mongoose</span>
            <span className="text-zinc-400">Tailwind CSS</span>
          </div>

          {/* Col 4: Location & Status */}
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 uppercase tracking-widest mb-1">// LOCATION</span>
            <span className="text-zinc-400">Kerala, India</span>
            <span className="text-zinc-400">UTC +05:30</span>
            <div className="mt-2 flex items-center gap-2">
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-2 h-2 rounded-full bg-emerald-500"
              >
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </motion.span>
              <span className="text-emerald-400 text-[11px]">Available for Full-time & Client Builds</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/[0.08] flex justify-between items-center text-xs font-mono text-zinc-500">
          <span>© Joyal K.S. {new Date().getFullYear()}. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-400 hover:text-white uppercase tracking-wider"
            style={{ transition: 'color 0.3s' }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} weight="bold" className="group-hover:-translate-y-1 text-indigo-400" style={{ transition: 'transform 0.3s' }} />
          </button>
        </div>

      </div>

    </footer>
  );
};

export default Footer;