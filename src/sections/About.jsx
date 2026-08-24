import SectionBadge from "../components/ui/SectionBadge";
import ParallaxSection from "../components/ui/ParallaxSection";
import GitHubContributions from "../components/ui/GitHubContributions";

export default function About() {
  return (
    <ParallaxSection className="relative bg-[#0a0a0a] text-white py-32 px-6 md:px-12 border-t border-white/[0.08] overflow-hidden font-sans">

      {/* Ambient Background */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-4">
            <SectionBadge number="03" label="ABOUT ME" variant="minimal" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100 mb-6">
            Building with purpose and precision
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* Left: About Text */}
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

          {/* Right: Quick Facts */}
          <div className="space-y-8">

            {/* Location & Status */}
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

            {/* Approach */}
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

        {/* GitHub Activity Section */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          {/* Section Header */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 mb-3">
              Active Developer
            </h3>
            <p className="text-zinc-400 text-sm md:text-base">
              Consistent contributions and continuous learning—building and shipping every day
            </p>
          </div>

          {/* GitHub Contribution Component */}
          <GitHubContributions username="joyalksdev" />
        </div>

      </div>
    </ParallaxSection>
  );
}
