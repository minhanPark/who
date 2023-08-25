"use client";

import { useState } from "react";
import { FaTerminal } from "react-icons/fa";
import { motion } from "framer-motion";

const SmallIcon = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
  };
  return (
    <motion.div
      style={{
        x: 95,
        y: 95,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: 95,
        height: 95,
        background: clicked ? "#485460" : "transparent",
        borderRadius: 5,
      }}
      drag
      dragMomentum={false}
      onClick={handleClick}
      whileDrag={{ cursor: "grabbing" }}
    >
      <div
        style={{
          background: "black",
          display: "inline-block",
          paddingTop: 7,
          paddingBottom: 7,
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 5,
          border: "3px solid #d2dae2",
        }}
      >
        <FaTerminal size={35} color="white" />
      </div>
      <p>터미널</p>
    </motion.div>
  );
};

export default SmallIcon;
