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
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center transition-colors border-neutral-600 duration-500
         ${scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-xs tracking-[0.3em] text-white font-light hover:opacity-80 transition"
      >
        JOYAL KS
      </Link>

      {/* Links */}
      <div className="flex gap-10 text-xs tracking-wider uppercase text-zinc-400">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <motion.div
              key={link.path}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Link
                to={link.path}
                className={`transition duration-300 ${
                  isActive ? "text-white" : "hover:text-white"
                }`}
              >
                {link.name}
              </Link>

              {/* Active underline glow */}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 h-[1px] w-full bg-white"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;
