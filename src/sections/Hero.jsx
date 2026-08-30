import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useScroll,
  useTransform
} from "framer-motion";
import SectionBadge from "../components/ui/SectionBadge";

// Mobile Hero Component
const MobileHero = () => {
  // Reduce motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Staggered animation delays to prevent layout thrashing
  const badgeDelay = prefersReducedMotion ? 0 : 0.1;
  const nameDelay = prefersReducedMotion ? 0 : 0.2;
  const statusDelay = prefersReducedMotion ? 0 : 0.35;
  const portraitDelay = prefersReducedMotion ? 0 : 0.5;
  const descDelay = prefersReducedMotion ? 0 : 0.65;
  const scrollDelay = prefersReducedMotion ? 0 : 0.8;

  // Use transform instead of layout-affecting properties
  const nameAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0.01 : 0.7, delay: nameDelay, ease: [0.22, 1, 0.36, 1] }
  };

  const fadeUpAnimation = (delay) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0.01 : 0.6, delay, ease: [0.22, 1, 0.36, 1] }
  });

  const scaleAnimation = (delay) => ({
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: prefersReducedMotion ? 0.01 : 0.6, delay, ease: [0.22, 1, 0.36, 1] }
  });

  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col justify-between px-6 pt-20 pb-6 overflow-hidden font-sans">
      {/* Simplified background - single layer, no grid overlay to reduce paint */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Mobile Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center space-y-6 pt-6">

        {/* Section Badge */}
        <motion.div {...fadeUpAnimation(badgeDelay)}>
          <SectionBadge number="01" label="INTRODUCTION" variant="hero" />
        </motion.div>

        {/* Name - Stacked Layout (use transform, not layout properties) */}
        <motion.div {...nameAnimation} className="space-y-1 leading-[0.9]">
          <h1 className="font-display text-[16vw] sm:text-[18vw] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 uppercase select-none">
            JOYAL
          </h1>
          <h1 className="font-display text-[16vw] sm:text-[18vw] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 via-zinc-300 to-white uppercase select-none">
            K.S.
          </h1>
        </motion.div>

        {/* Status Badge */}
        <motion.div {...scaleAnimation(statusDelay)} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-emerald-500/30">
          {!prefersReducedMotion && (
            <motion.span
              animate={{
                scale: [1, 1.25, 1],
                opacity: [1, 0.6, 1]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-2 h-2 rounded-full bg-emerald-500"
            >
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
            </motion.span>
          )}
          <span className="text-zinc-300 font-medium text-xs uppercase tracking-wider">Available for work</span>
        </motion.div>

        {/* Portrait - simplified, single image with subtle animation */}
        <motion.div {...scaleAnimation(portraitDelay)} className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-2xl" />

          <img
            src="/joyal.png"
            alt="Joyal K.S."
            className="w-full h-full object-cover object-center grayscale transition-opacity duration-700"
            loading="lazy"
          />

          {!prefersReducedMotion && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-transparent border-t-indigo-400/40 rounded-full"
            />
          )}
        </motion.div>

        {/* Description */}
        <motion.div {...fadeUpAnimation(descDelay)} className="max-w-xs space-y-3 text-center">
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            <strong className="font-medium text-white">Full-stack developer</strong> based in India. I engineer systems that scale with clarity, performance, and structure.
          </p>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Turning complex architectures into clean, responsive experiences.
          </p>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div {...fadeUpAnimation(scrollDelay)} className="relative z-20 flex justify-center items-center gap-2 text-zinc-500 py-4">
        <span className="text-xs uppercase tracking-widest font-mono">Scroll down</span>
        {!prefersReducedMotion && (
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-indigo-400"
          >
            ↓
          </motion.span>
        )}
      </motion.div>
    </section>
  );
};

// Desktop Hero Component
const DesktopHero = () => {
  const containerRef = useRef(null);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // SCROLL PARALLAX TRACKING - disabled for reduced motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // ENHANCED PARALLAX TRANSFORMATIONS - reduced intensity
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "-35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, prefersReducedMotion ? 1 : 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, prefersReducedMotion ? 1 : 1.05]);
  const textBlur = useTransform(scrollYProgress, [0, 0.5], [0, prefersReducedMotion ? 0 : 6]);

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "-10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0.15, 0.8], [1, prefersReducedMotion ? 1 : 0]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [0, prefersReducedMotion ? 0 : -1.5]);

  const leftTextY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "-60%"]);
  const rightTextY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "-80%"]);
  const sideTextOpacity = useTransform(scrollYProgress, [0, 0.4], [1, prefersReducedMotion ? 1 : 0]);
  const sideTextBlur = useTransform(scrollYProgress, [0, 0.4], [0, prefersReducedMotion ? 0 : 5]);

  const bgGlowScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.5]);
  const bgGlowOpacity = useTransform(scrollYProgress, [0, 0.7], [0.15, prefersReducedMotion ? 0.15 : 0]);

  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "50%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "-40%"]);

  // ENHANCED SPOTLIGHT MOUSE TRACKING - disabled for reduced motion
  const rawX = useMotionValue(-500);
  const rawY = useMotionValue(-500);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.3 };
  const spotlightX = useSpring(rawX, springConfig);
  const spotlightY = useSpring(rawY, springConfig);

  const maskImage = useMotionTemplate`
    radial-gradient(
      circle 180px at ${spotlightX}px ${spotlightY}px,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0) 100%
    )
  `;

  const handleMouseMove = (e) => {
    if (!isHoveringImage || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
    setIsHoveringImage(true);
  };

  const handleMouseLeave = () => {
    setIsHoveringImage(false);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col justify-between px-4 sm:px-8 md:px-16 pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-hidden font-sans"
    >
      {/* Enhanced Multi-Layer Background - simplified for performance */}
      {!prefersReducedMotion && (
        <motion.div
          style={{ scale: bgGlowScale, opacity: bgGlowOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"
        />
      )}

      {/* Floating Ambient Orbs - reduced size and motion */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            style={{ y: orb1Y }}
            className="absolute top-20 left-[15%] w-[200px] h-[200px] bg-purple-500/8 rounded-full blur-[80px] pointer-events-none"
          />
          <motion.div
            style={{ y: orb2Y }}
            className="absolute bottom-20 right-[20%] w-[250px] h-[250px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none"
          />
        </>
      )}

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Main Hero Container */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center min-h-[70vh]">

        {/* Giant Name Display with Enhanced Parallax */}
        <motion.h1
          style={{
            y: textY,
            opacity: textOpacity,
            scale: textScale,
            filter: useMotionTemplate`blur(${textBlur}px)`
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[20vw] sm:text-[16vw] md:text-[14vw] lg:text-[16vw] xl:text-[18vw] leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-50 via-zinc-300 to-zinc-800 select-none uppercase text-center w-full whitespace-nowrap"
        >
          JOYAL KS
        </motion.h1>

        {/* Centered Portrait with Advanced Effects */}
        <motion.div
          style={{
            y: imageY,
            scale: imageScale,
            opacity: imageOpacity,
            rotateZ: imageRotate
          }}
          initial={{ opacity: 0, scale: 0.92, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute bottom-0 z-10 flex justify-center items-end w-full max-w-2xl h-[50vh] sm:h-[60vh] md:h-[68vh] lg:h-[72vh] cursor-none origin-bottom"
        >
          {/* Glow Effect Behind Image */}
          <motion.div
            animate={isHoveringImage ? { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 w-[60%] h-[40%] bg-indigo-500/30 rounded-full blur-[100px] pointer-events-none"
          />

          {/* BASE LAYER: Grayscale Photo */}
          <img
            src="/joyal.png"
            alt="Joyal K.S."
            className="h-full object-contain object-bottom filter grayscale contrast-[1.1] brightness-95 select-none pointer-events-none"
          />

          {/* TOP LAYER: Color Photo with Spotlight - simplified for performance */}
          {!prefersReducedMotion && (
            <motion.div
              className="absolute inset-0 flex justify-center items-end pointer-events-none"
              style={{
                WebkitMaskImage: isHoveringImage ? maskImage : "radial-gradient(circle 0px at 0px 0px, transparent 0%, transparent 100%)",
                maskImage: isHoveringImage ? maskImage : "radial-gradient(circle 0px at 0px 0px, transparent 0%, transparent 100%)",
              }}
            >
              <img
                src="/joyal.png"
                alt="Joyal K.S. Color"
                className="h-full object-contain object-bottom filter contrast-105 saturate-105 brightness-100 select-none"
              />
            </motion.div>
          )}

          {/* Edge Light Effect - only on hover, no infinite animation */}
          {!prefersReducedMotion && isHoveringImage && (
            <div
              className="absolute inset-0 border-2 border-indigo-400/20 rounded-full pointer-events-none"
              style={{
                boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)'
              }}
            />
          )}
        </motion.div>

        {/* Side Paragraphs with Asymmetric Motion */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 absolute z-20 bottom-2 sm:bottom-4 px-2 sm:px-4 pointer-events-none">

          <motion.div
            style={{
              y: leftTextY,
              opacity: sideTextOpacity,
              filter: useMotionTemplate`blur(${sideTextBlur}px)`
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="max-w-xs pointer-events-auto"
          >
            <p className="text-[11px] sm:text-xs md:text-sm text-zinc-300 font-light leading-relaxed">
              Hello, I&apos;m Joyal K.S., a <strong className="font-medium text-white">full-stack developer</strong> based in India. I engineer systems that scale with clarity, performance, and structure.
            </p>
          </motion.div>

          <motion.div
            style={{
              y: rightTextY,
              opacity: sideTextOpacity,
              filter: useMotionTemplate`blur(${sideTextBlur}px)`
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="max-w-xs md:ml-auto md:text-right pointer-events-auto"
          >
            <p className="text-[11px] sm:text-xs md:text-sm text-zinc-300 font-light leading-relaxed">
              I turn complex backend architectures and database models into clean, responsive user experiences.
            </p>
          </motion.div>

        </div>

      </div>

      {/* Enhanced Hero Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 text-[10px] sm:text-xs text-zinc-500 font-mono pt-4 sm:pt-6 border-t border-white/10 uppercase tracking-widest"
      >

        {/* Left: Section Badge + Status */}
        <div className="flex items-center gap-4">
          <SectionBadge number="01" label="INTRODUCTION" variant="hero" />
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
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
            <span className="text-zinc-300 font-medium text-[11px] sm:text-xs">Available for work</span>
          </div>
        </div>

        {/* Right: Enhanced Scroll Prompt */}
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="text-[10px] sm:text-xs">(Scroll down)</span>
          {!prefersReducedMotion && (
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-indigo-400 text-sm sm:text-base"
            >
              ↓
            </motion.span>
          )}
        </div>

      </motion.div>

    </section>
  );
};

// Main Hero Component
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileHero /> : <DesktopHero />;
};

export default Hero;
