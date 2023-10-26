import "./cards.css";
import { motion } from "framer-motion";
import svgImage1 from "./arrow.svg";

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
    }
  };

  const TextVariants = {
      hidden: { opacity: 0, scale: 4 ,y:-59},
    visible: { opacity: 1, scale: 3 ,y:0},
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
        </motion.div>
          <motion.h1 className="appear-text" variants={TextVariants} initial='hidden' whileHover='visible'>
            Please <br></br> show
          </motion.h1>

      </div>





      <div className="box2">
        <motion.div
          className="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        ></motion.div>
      </div>

      <div className="box3">
        <motion.div
          className="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        ></motion.div>
      </div>

      <div className="box4">
        <motion.div
          className="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        ></motion.div>
      </div>
    </motion.div>
  );
}
