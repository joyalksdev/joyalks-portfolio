import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const navLinks = [
  { name: "Work",    path: "/work",    num: "01" },
  { name: "About",   path: "/about",   num: "02" },
  { name: "Contact", path: "/contact", num: "03" },
];

/* ─── Animated hamburger bars ────────────────────────── */
const HamIcon = ({ open }) => (
  <div className="w-[22px] h-[14px] flex flex-col justify-between">
    <motion.span
      animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="block h-[1.5px] w-full bg-white rounded-full origin-center"
    />
    <motion.span
      animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.2 }}
      className="block h-[1.5px] w-full bg-white rounded-full"
    />
    <motion.span
      animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="block h-[1.5px] w-full bg-white rounded-full origin-center"
    />
  </div>
);

/* ─── Full-screen overlay menu ───────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
  exit:   { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 40, skewY: 4 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -20,          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

const FullscreenMenu = ({ onClose, currentPath }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const hamburgerBtn = document.querySelector('[aria-label="Close menu"]');
        const menuFocusables = overlayRef.current
          ? Array.from(overlayRef.current.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]'))
          : [];

        const focusableElements = [];
        if (hamburgerBtn) {
          focusableElements.push(hamburgerBtn);
        }

        menuFocusables.forEach((el) => {
          if (el !== hamburgerBtn && !focusableElements.includes(el)) {
            focusableElements.push(el);
          }
        });

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Auto-focus first link when menu opens for accessibility
    const firstLink = overlayRef.current?.querySelector('a[href]');
    if (firstLink) {
      firstLink.focus();
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      ref={overlayRef}
      key="fullscreen-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-40 flex flex-col md:hidden animate-none"
      style={{ backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)", backgroundColor: "rgba(8,8,8,0.85)" }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 left-1/3 w-[320px] h-[320px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Centered link list */}
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col items-center justify-center flex-1 gap-2 px-8"
      >
        {navLinks.map((link) => {
          const isActive = currentPath === link.path;
          return (
            <motion.div
              key={link.path}
              variants={linkVariants}
              className="w-full max-w-xs"
            >
              <Link
                to={link.path}
                onClick={onClose}
                className="group flex items-center justify-between w-full py-5 px-3 border-b border-white/[0.06] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-lg"
              >
                {/* Number */}
                <span className="text-[10px] font-mono text-zinc-600 tracking-widest w-8">
                  {link.num}
                </span>

                {/* Name */}
                <span className={`text-4xl font-semibold tracking-tight flex-1 text-center transition-colors duration-300 ${
                  isActive ? "text-indigo-400" : "text-white group-active:text-indigo-300"
                }`}>
                  {link.name}
                </span>

                {/* Active dot */}
                <span className="w-8 flex justify-end">
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  )}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* Footer strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="px-8 pb-10 flex items-center justify-between"
      >
        <p className="text-[10px] font-mono tracking-[0.25em] text-zinc-600 uppercase">
          JOYAL KS · Portfolio
        </p>
        <div className="flex gap-5 text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
          <a
            href="https://github.com/joyalksdev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-400 transition-colors relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:min-w-[44px] after:min-h-[44px] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
          >
            GH
          </a>
          <a
            href="https://linkedin.com/in/joyalks"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-400 transition-colors relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:min-w-[44px] after:min-h-[44px] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
          >
            LI
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Navbar ─────────────────────────────────────────── */
const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  /* close on route change */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-12 md:px-16 flex justify-between items-center transition-all duration-500 font-sans ${
          scrolled || menuOpen
            ? "backdrop-blur-xl bg-[#0a0a0a]/90 border-b border-white/10 shadow-2xl py-4"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        {/* Brand */}
        <Link
          to="/"
          tabIndex={menuOpen ? -1 : 0}
          className="flex items-center gap-2.5 text-xs tracking-[0.25em] text-white font-medium focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded"
          style={{ transition: "opacity 0.3s" }}
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-1.5 h-1.5 rounded-full bg-indigo-500"
          >
            <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-75" />
          </motion.span>
          <span>JOYAL KS</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 sm:gap-10 text-xs tracking-widest uppercase text-zinc-400">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <div key={link.path} className="relative py-1">
                <Link
                  to={link.path}
                  className={`${isActive ? "text-white font-medium" : "hover:text-white"} focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-md px-1.5 py-0.5`}
                  style={{ transition: "color 0.3s" }}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="activeNavbarUnderline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.8)]"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden relative z-50 flex items-center justify-center w-11 h-11 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          style={{ background: menuOpen ? "rgba(255,255,255,0.06)" : "transparent" }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <HamIcon open={menuOpen} />
        </button>
      </motion.nav>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <FullscreenMenu
            onClose={() => setMenuOpen(false)}
            currentPath={location.pathname}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
