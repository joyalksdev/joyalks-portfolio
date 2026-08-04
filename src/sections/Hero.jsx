import Aurora from "../components/Aurora";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] w-full bg-black overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 opacity-50">
        <Aurora
          colorStops={["#4f46e5", "#22d3ee", "#1960f1"]}
          amplitude={1}
          blend={0.5}
        />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Light Sweep */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
      />

      {/* Layout */}
      <div className="relative z-10 grid md:grid-cols-2 min-h-[100svh]">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-24 py-24 md:py-0">

          <div className="text-xs sm:text-sm text-zinc-500 tracking-[0.3em] mb-6 md:mb-8">
            01 — INTRODUCTION
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-light leading-snug max-w-xl"
          >
            I build digital systems
            that scale with clarity,
            performance, and structure.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 md:mt-16 text-xs sm:text-sm text-zinc-600 tracking-widest"
          >
            BASED IN INDIA — AVAILABLE WORLDWIDE
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center overflow-hidden mt-10 md:mt-0">

          {/* Hide divider on mobile */}
          <div className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-zinc-700" />

          <div className="text-center md:text-right px-6 md:pr-22 select-none">

            <div className="text-[60px] sm:text-[90px] md:text-[130px] font-bold text-white/10 leading-none text-center">
              PRECISION
            </div>

            <div className="text-[60px] sm:text-[90px] md:text-[130px] font-bold text-white/20 leading-none text-center ">
              PRECISION
            </div>

            <div className="text-[60px] sm:text-[90px] md:text-[130px] font-bold text-indigo-500 leading-none text-center ">
              PRECISION
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
