import { useRef } from "react";
import { useInView } from "framer-motion";
import "./onview.css";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="onview-section" ref={ref}>
      <img
        style={{
          transform: isInView ? "none" : "translateX(900px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        src="https://images.unsplash.com/photo-1693215538598-7a0326f14d38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
        alt="dfsa"
      />
      <span
        className="onview-text"
        style={{
          transform: isInView ? "none" : "translateX(-900px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Onview() {
  return (
    <>
      <Section>Animate</Section>
      <Section>when</Section>
    </>
  );
}
