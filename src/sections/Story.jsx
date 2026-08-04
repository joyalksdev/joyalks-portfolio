import ScrollReveal from "../components/ScrollReveal";

const Story = () => {
  return (
    <section className="px-6 md:px-20 py-40 md:py-50 bg-black text-white">
      <ScrollReveal
      baseOpacity={0.1}
      enableBlur
      baseRotation={6}
      blurStrength={3}>
     Most people focus on finishing.
     I focus on refining. Again. And again. 
     Until it feels right.
    </ScrollReveal>
    </section>
  );
};

export default Story;