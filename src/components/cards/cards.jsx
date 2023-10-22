import "./cards.css";
import { motion } from "framer-motion";

export default function Cards() {
  const CardVariants = {
    beforeHover: {
      opacity: 0,
    },
    onHover: {
      opacity: 0.5,
      transition: {
        duration: 0.7, // Set your desired duration in seconds
      },
    },
  };

  const TextVariants = {
    hidden: { opacity: 0, y: 400 },
    visible: {
      opacity: 1,

      y: 202,

      transition: {
        duration: 0.7, // Set your desired duration in seconds
      },
    },
  };

  return (
    <motion.div className="container">
      <div className="box1">
        <motion.div
          className="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <motion.div
            className="text"
            variants={TextVariants}
            initial="hidden"
            animate="visible"
          >
            Text that appears on hover
          </motion.div>
        </motion.div>
      </div>

      <div className="box2">
        <motion.div
          class="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        ></motion.div>
      </div>

      <div className="box3">
        <motion.div
          class="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        ></motion.div>
      </div>

      <div className="box4">
        <motion.div
          class="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        ></motion.div>
      </div>
    </motion.div>
  );
}
