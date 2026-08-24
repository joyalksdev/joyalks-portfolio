import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-12 md:px-16 flex justify-between items-center transition-all duration-500 font-sans ${
        scrolled
          ? "backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/10 shadow-2xl py-4"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      {/* Brand Logo */}
      <Link
        to="/"
        className="group flex items-center gap-2.5 text-xs tracking-[0.25em] text-white font-medium"
        style={{ transition: 'opacity 0.3s' }}
      >
        <motion.span
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.7, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-1.5 h-1.5 rounded-full bg-indigo-500"
        >
          <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-75" />
        </motion.span>
        <span>JOYAL KS</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 sm:gap-10 text-xs tracking-widest uppercase text-zinc-400">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <div key={link.path} className="relative py-1">
              <Link
                to={link.path}
                className={`${
                  isActive ? "text-white font-medium" : "hover:text-white"
                }`}
                style={{ transition: 'color 0.3s' }}
              >
                {link.name}
              </Link>

              {/* Active Indicator with Glow */}
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
    </motion.nav>
  );
};

export default Navbar;