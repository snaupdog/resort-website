import { motion } from "framer-motion";
import Navbar from "../navbar/navbar.jsx";
import * as React from "react";

import "./header.css";

export default function Header() {
  return (
    <motion.div className="header">
      <Navbar />

      <h1 style={{ color: "black" }}>HELLO</h1>
    </motion.div>
  );
}
