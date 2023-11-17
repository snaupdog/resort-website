import { useRef } from "react";
import { useInView } from "framer-motion";
import "./onview.css";

// Section component
function Section({ children, imageSrc }) {
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
        src={imageSrc} // Use the provided image source
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
// Onview component
export default function Onview() {
  return (
    <>
      <div className="onview-container">
        <Section imageSrc="https://images.unsplash.com/photo-1693215538598-7a0326f14d38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D">
          Animate
        </Section>
        <Section imageSrc="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJhbGklMjBzcGF8ZW58MHwxfDB8fHww">
          when
        </Section>
      </div>
    </>
  );
}
