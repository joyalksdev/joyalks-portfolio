import { useRef } from "react";

export default function MagneticButton({ children }) {
  const ref = useRef();

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    ref.current.style.transform = `translate(0px,0px)`;
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="px-8 py-3 border border-white/20 rounded-full backdrop-blur hover:border-white transition"
    >
      {children}
    </button>
  );
}