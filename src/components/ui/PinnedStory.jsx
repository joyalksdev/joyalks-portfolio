import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PinnedStory = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      ".line",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.6,
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <div className="text-center space-y-10 px-6">

        <p className="line text-3xl md:text-5xl text-zinc-400">
          Good design is decoration.
        </p>

        <p className="line text-4xl md:text-6xl font-light">
          Great design
        </p>

        <p className="line text-5xl md:text-7xl font-bold text-indigo-500">
          moves people.
        </p>

      </div>
    </section>
  );
};

export default PinnedStory;