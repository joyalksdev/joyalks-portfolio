import { motion, AnimatePresence } from "framer-motion";
import { DownloadSimple, X } from "@phosphor-icons/react";
import { useState, useEffect, useRef } from "react";

export default function FloatingCVButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState('center'); // 'center' or 'bottom'
  const [showShine, setShowShine] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const buttonRef = useRef(null);
  const lastScrollY = useRef(0);

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll with debounce to prevent flickering
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const heroHeight = window.innerHeight;

          // Only update if scroll difference is significant (prevents flickering)
          if (Math.abs(currentScrollY - lastScrollY.current) > 50) {
            if (currentScrollY < heroHeight - 200) {
              setPosition('center');
            } else {
              setPosition('bottom');
            }
            lastScrollY.current = currentScrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger shine animation after photo appears
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShine(true);
      setTimeout(() => setShowShine(false), 2000);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Joyal_KS_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsExpanded(false), 1000);
  };

  // Mobile is always bottom, desktop follows scroll
  const isAtBottom = isMobile || position === 'bottom';

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
          />
        )}
      </AnimatePresence>

      <div
        ref={buttonRef}
        className={`fixed right-6 md:right-8 z-[70] transition-all duration-500 ease-out ${
          isAtBottom ? 'bottom-6 md:bottom-8' : 'top-1/2 -translate-y-1/2'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        >
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              // Collapsed Button
              <motion.button
                key="collapsed"
                onClick={() => setIsExpanded(true)}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-indigo-500/40 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Valorant-style Shine Animation */}
                {showShine && (
                  <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shine" />
                  </div>
                )}

                {/* Button */}
                <div className="relative flex items-center gap-2.5 md:gap-3 px-5 py-3 md:px-6 md:py-4 bg-zinc-900 border-2 border-indigo-500/60 rounded-full shadow-lg">
                  <DownloadSimple size={20} weight="bold" className="text-indigo-400" />
                  <span className="text-white font-medium text-sm tracking-wide hidden md:inline">
                    Resume
                  </span>
                </div>
              </motion.button>
            ) : (
              // Expanded Card
              <motion.div
                key="expanded"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl w-[280px] md:w-80"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg bg-zinc-800/60 border border-white/5 hover:bg-zinc-800 transition-colors duration-200"
                >
                  <X size={16} weight="bold" className="text-zinc-400" />
                </button>

                {/* Content */}
                <div className="pr-8">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    Download Resume
                  </h3>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    Get my latest resume with work experience and tech stack.
                  </p>

                  {/* Download Button */}
                  <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 bg-indigo-600 rounded-xl text-white font-medium text-sm hover:bg-indigo-500 transition-colors duration-200"
                  >
                    <DownloadSimple size={18} weight="bold" />
                    <span>Download CV</span>
                  </motion.button>

                  {/* File Info */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500">
                    <span>PDF Format</span>
                    <span>~150 KB</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Shine Animation */}
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-150%) rotate(45deg);
          }
          100% {
            transform: translateX(250%) rotate(45deg);
          }
        }
        .animate-shine {
          animation: shine 2s ease-in-out;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
        }
      `}</style>
    </>
  );
}
