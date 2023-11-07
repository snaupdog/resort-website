import { motion } from "framer-motion";
import Navbar from "../navbar/navbar.jsx";
import * as React from "react";

import "./header.css";

export default function Header() {
  return (
    <motion.div
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
    >
      <Navbar />

      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 7 }}
        transition={{
          type: "tween",
          duration: 2,
        }}
      >
        This is a motion h4
      </motion.h4>

      <div className="bal"></div>
    </motion.div>
  );
}
