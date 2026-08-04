import Reveal from "../components/Reveal";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="relative bg-black text-white py-40 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15),transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-40">

        {/* SECTION 1 */}
        <Reveal>
          <p className="text-zinc-500 tracking-[0.3em] text-sm">
            PHILOSOPHY
          </p>

          <h2 className="text-3xl md:text-5xl font-light leading-snug">
            Most developers chase speed.
          </h2>
        </Reveal>

        {/* SECTION 2 */}
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            I focus on
          </h2>

          <h2 className="text-5xl md:text-7xl font-semibold text-indigo-500">
            precision.
          </h2>
        </Reveal>

        {/* SECTION 3 */}
        <Reveal>
          <p className="text-2xl md:text-4xl text-zinc-300 leading-relaxed max-w-3xl">
            Every interface tells a story.
            Every interaction builds trust.
            Every animation should feel intentional.
          </p>
        </Reveal>

        {/* SECTION 4 */}
        <Reveal>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-semibold">
              Built with
            </h2>

            <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
              intention.
            </h2>
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
};

export default Story;