import {motion} from "framer-motion"
import Navbar from "../navbar/navbar.jsx";
import * as React from "react";


import './header.css'


export default function Header() {
  return (
    <div className="header">
      <Navbar />

       <motion.h4
       initial={{ x:0}}
       animate={{ x:200}}

       transition={{
         type: "tween",
         duration: "2",
         delay: "1"

       }}

      >
         This is a motion h4
      </motion.h4>

    </div>
  );
}
