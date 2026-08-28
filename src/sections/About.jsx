import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import SectionBadge from "../components/ui/SectionBadge";
import ParallaxSection from "../components/ui/ParallaxSection";
import GitHubContributions from "../components/ui/GitHubContributions";

export default function About() {
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
      <ParallaxSection className="relative bg-[#0a0a0a] text-white py-20 px-6 border-t border-white/[0.08] overflow-hidden font-sans">
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="mb-3">
              <SectionBadge number="02" label="ABOUT ME" variant="minimal" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 mb-4">
              Building with purpose and precision
            </h2>
          </div>

          {/* About Text */}
          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-8">
            <p>
              I'm a <strong className="text-white font-medium">full-stack developer</strong> based in India, specializing in building web applications with modern JavaScript technologies.
            </p>
            <p>
              From AI-powered platforms to e-commerce systems, I handle the full spectrum—frontend interfaces, REST APIs, database design, and deployment.
            </p>
          </div>

          {/* Status Card */}
          <div className="bg-zinc-900/40 border border-white/[0.08] rounded-xl p-5 backdrop-blur-sm mb-6">
            <h3 className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider mb-3">
              Current Status
            </h3>
            <div className="space-y-2.5 text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for work</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-zinc-600">📍</span>
                <span>Kerala, India (UTC +5:30)</span>
              </div>
            </div>
          </div>

          {/* Approach */}
          <div className="bg-zinc-900/40 border border-white/[0.08] rounded-xl p-5 backdrop-blur-sm mb-8">
            <h3 className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider mb-3">
              My Approach
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-500 mt-0.5">→</span>
                <span>Write code that reads like documentation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-500 mt-0.5">→</span>
                <span>Design systems that scale without breaking</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-500 mt-0.5">→</span>
                <span>Iterate until the solution feels right</span>
              </li>
            </ul>
          </div>

          {/* GitHub Activity */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-100 mb-2">
              Active Developer
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Consistent contributions and continuous learning
            </p>
            <GitHubContributions username="joyalksdev" />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/60 border border-white/10 rounded-lg hover:border-indigo-500/50 hover:bg-zinc-900/80 transition-all duration-300 text-sm font-medium text-zinc-100"
            >
              <span>Learn more about me</span>
              <ArrowUpRight size={16} weight="bold" className="text-zinc-400" />
            </Link>
          </motion.div>
        </div>
      </ParallaxSection>
    );
  }

  // Desktop Layout (original)
  return (
    <ParallaxSection className="relative bg-[#0a0a0a] text-white py-32 px-6 md:px-12 border-t border-white/[0.08] overflow-hidden font-sans">
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="mb-4">
            <SectionBadge number="02" label="ABOUT ME" variant="minimal" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100 mb-6">
            Building with purpose and precision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
            <p>
              I'm a <strong className="text-white font-medium">full-stack developer</strong> based in India, specializing in building web applications with modern JavaScript technologies. My work focuses on clean code, scalable architecture, and user experiences that just work.
            </p>
            <p>
              From AI-powered platforms to e-commerce systems, I handle the full spectrum—frontend interfaces, REST APIs, database design, and deployment. I believe good software is invisible: it solves problems without getting in the way.
            </p>
            <p>
              When I'm not coding, I'm refining existing projects, exploring new frameworks, or figuring out better ways to structure complex systems. I care about the details that others might skip.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900/40 border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4">
                Current Status
              </h3>
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for work</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600">📍</span>
                  <span>Kerala, India (UTC +5:30)</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4">
                My Approach
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">→</span>
                  <span>Write code that reads like documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">→</span>
                  <span>Design systems that scale without breaking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1">→</span>
                  <span>Iterate until the solution feels right</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 mb-3">
              Active Developer
            </h3>
            <p className="text-zinc-400 text-sm md:text-base">
              Consistent contributions and continuous learning—building and shipping every day
            </p>
          </div>

          <GitHubContributions username="joyalksdev" />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-zinc-900/60 border border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-zinc-900/80 transition-all duration-300"
          >
            <span className="text-sm md:text-base font-medium text-zinc-100 group-hover:text-indigo-400 transition-colors">
              Learn more about me
            </span>
            <ArrowUpRight size={18} weight="bold" className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
          </Link>
        </motion.div>
      </div>
    </ParallaxSection>
  );
}
