import "./cards.css";
import { motion } from "framer-motion";

export default function Cards() {
  const CardVariants = {
    beforeHover: {
      opacity: 0,
      y: 100,
    },

    onHover: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5, // Set your desired duration in seconds
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
          <p className="cards-para">
            {" "}
            <span>KOMODO</span>
            <br />
            Where dreams come to die, something along these lines
          </p>
        </motion.div>
      </div>

      <div className="box2">
        <motion.div
          className="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <p className="cards-para">
            {" "}
            <span>KOMODO</span>
            <br />
            Where dreams come to die, something along these lines
          </p>
        </motion.div>
      </div>

      <div className="box3">
        <motion.div
          className="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <p className="cards-para">
            {" "}
            <span>KOMODO</span>
            <br />
            Where dreams come to die, something along these lines
          </p>
        </motion.div>
      </div>

      <div className="box4">
        <motion.div
          className="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <p className="cards-para">
            {" "}
            <span>KOMODO</span>
            <br />
            Where dreams come to die, something along these lines
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
