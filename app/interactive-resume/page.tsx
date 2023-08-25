"use client";

import { useState, ReactEventHandler } from "react";
import Image from "next/image";
import { BsFillTerminalFill } from "react-icons/bs";
import { motion } from "framer-motion";
import SmallIcon from "../components/SmallIcon";

const Page = () => {
  const [imageSrc, setImageSrc] = useState("/background.webp");
  const [screen, setScreen] = useState<"icon" | "terminal">("icon");
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Image
        src={imageSrc}
        alt="background"
        fill={true}
        style={{ objectFit: "cover" }}
        onError={() => setImageSrc("/background.jpg")}
      />
      <motion.div
        drag
        dragMomentum={false}
        whileDrag={{ cursor: "grabbing" }}
        style={{
          position: "relative",
          width: 62,
          height: 62,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <BsFillTerminalFill size={60} />
      </motion.div>
      <SmallIcon />
    </div>
  );
};

export default Page;
