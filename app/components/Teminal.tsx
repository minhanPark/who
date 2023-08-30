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
            height: 25,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          <div
            style={{
              background: "red",
              display: "flex",
              borderRadius: "50%",
              width: 18,
              height: 18,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isHovered ? <IoCloseSharp size={15} /> : <VscBlank size={15} />}
          </div>
          <div
            style={{
              background: "blue",
              display: "flex",
              borderRadius: "50%",
              width: 18,
              height: 18,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isHovered ? <BiMinus size={15} /> : <VscBlank size={15} />}
          </div>
        </div>
      </div>
      <div
        style={{
          background: "white",
          flex: 1,
        }}
        onPointerDownCapture={(e) => e.stopPropagation()}
      ></div>
    </motion.div>
  );
};

export default Terminal;
