import { motion } from "framer-motion";
import "./test.css";

import img1 from "../../assets/map.webp";
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
      <img src={img1} alt="fsadf" className="est-img1" />

      <motion.h4
        className="oasis-text"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: -50 }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 1.2,
        }}
      >
        OASIS
      </motion.h4>

      <motion.h4
        className="resort-text"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 80 }}
        transition={{
          type: "tween",
          duration: 0.5,

          delay: 1,
        }}
      >
        RESORTS
      </motion.h4>

      <motion.h4
        className="text"
        variants={typingContainer}
        initial="hidden"
        animate="show"
      >
        {Array.from("where blah blah eats blah blah").map((word, i) => (
          <motion.span key={i} variants={typingText}>
            {word}
          </motion.span>
        ))}
      </motion.h4>
    </div>
  );
}
