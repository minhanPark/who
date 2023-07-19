"use client";

import { useState } from "react";
import Image from "next/image";
import { BsFillTerminalFill } from "react-icons/bs";
import { motion } from "framer-motion";

interface ImageMap {
  "/background-light.webp": "/background-light.jpg";
  "/background-dark.webp": "/background-dark.jpg";
  [key: string]: string;
}

const fallbackImg: ImageMap = {
  "/background-light.webp": "/background-light.jpg",
  "/background-dark.webp": "/background-dark.jpg",
};

const Page = () => {
  const [imageSrc, setImageSrc] = useState(
    new Date().getHours() > 7 && new Date().getHours() < 17
      ? "/background-light.webp"
      : "/background-dark.webp"
  );
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Image
        src={imageSrc}
        alt="background"
        fill={true}
        style={{ objectFit: "cover" }}
        onError={() => {
          setImageSrc(fallbackImg[imageSrc]);
        }}
      />
      <motion.div
        drag
        dragMomentum={false}
        whileDrag={{ cursor: "grabbing" }}
        onClick={(e) => {
          if (e.detail === 2) {
            console.log("you clicked");
          }
        }}
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
    </div>
  );
};

export default Page;
