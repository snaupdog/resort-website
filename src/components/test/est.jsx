import { motion } from "framer-motion";
import "./test.css";

export default function Est() {
  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };
  const typingText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="est-container">
      <motion.h1
        className="text"
        variants={typingContainer}
        initial="hidden"
        animate="show"
      >
        {Array.from("Oasis Resort").map((word, i) => (
          <motion.span key={i} variants={typingText}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
