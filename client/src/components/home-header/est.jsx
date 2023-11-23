import { motion } from "framer-motion";
import "./test.css";

import img1 from "../../assets/random-temple.jpg";
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
    <>
      <div className="est-container">
        <img src={img1} alt="fsadf" className="est-img1" />

        <motion.h4
          className="oasis-text"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [100, -50, -50, 20, 20], // Moving up initially and then to the right
            x: [100, 100, -50, -50], // Move to the right after 3 seconds
          }}
          transition={{
            type: "tween",
            duration: 3,
            delay: 1,
            times: [0, 1], // Keyframes for the y-axis motion
            ease: "easeInOut", // You can adjust the easing function as needed
          }}
        >
          OASIS
        </motion.h4>

        <motion.h4
          className="oasis-text"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [150, 50, 50, 20, 20], // Moving up initially and then to the right
            x: [-200, -200, -20, -20], // Move to the right after 3 seconds
          }}
          transition={{
            type: "tween",
            duration: 3,
            delay: 1,
            times: [0, 1], // Keyframes for the y-axis motion
            ease: "easeInOut", // You can adjust the easing function as needed
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
          {Array.from("A destination of its own").map((word, i) => (
            <motion.span key={i} variants={typingText}>
              {word}
            </motion.span>
          ))}
        </motion.h4>
      </div>
    </>
  );
}
