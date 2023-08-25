"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VscBlank } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";

const Terminal = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      style={{
        position: "relative",
        width: 500,
        height: 500,
        background: "black",
        display: "flex",
        flexDirection: "column",
      }}
      drag
      dragMomentum={false}
    >
      <div
        style={{
          background: "#81ecec",
          height: 25,
        }}
      >
        <div
          style={{
            background: "#ff7675",
            width: 50,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "red",
              display: "inline-block",
              borderRadius: "9999px",
            }}
          >
            <IoCloseSharp />
          </div>
        </div>
      </div>
      <div
        style={{
          background: "white",
          flex: 1,
        }}
      ></div>
    </motion.div>
  );
};

export default Terminal;
