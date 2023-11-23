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
    <motion.div className="main-card-container">
      <div className="box1">
        <motion.div
          className="backdrop"
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <p className="cards-para">
            {" "}
            <span>BEACHES</span>
            <br />
            Dip your toes into luxury on our pristine beaches, where golden
            sands meet the turquoise embrace of the sea. Let the rhythmic waves
            serenade you as you relax under the sun's warm glow.
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
            <span>CULTURES</span>
            <br />
            Discover the allure of ancient temples and historic marvels
            surrounding our resort, each echoing with tales of a rich cultural
            legacy
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
            <span>TEMPLES</span>
            <br />
            Embark on a journey through time as you explore nearby historic
            sites, where the echoes of bygone eras resonate through captivating
            architecture and storied landmarks.
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
            <span>DINING</span>
            <br />
            Satisfy your palate with culinary perfection at our resort's dining
            havens, where world-class chefs orchestrate a symphony of flavors
            using the freshest local ingredients.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
