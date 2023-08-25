"use client";

import { useState, ReactEventHandler } from "react";
import Image from "next/image";
import { BsFillTerminalFill } from "react-icons/bs";
import { motion } from "framer-motion";
import SmallIcon from "../components/SmallIcon";
import Terminal from "../components/Teminal";

export type ScreenType = "icon" | "terminal";

const Page = () => {
  const [imageSrc, setImageSrc] = useState("/background.webp");
  const [screen, setScreen] = useState<ScreenType>("icon");
  const changeScreen = (screen: ScreenType) => {
    setScreen(screen);
  };
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Image
        src={imageSrc}
        alt="background"
        fill={true}
        style={{ objectFit: "cover" }}
        onError={() => setImageSrc("/background.jpg")}
      />
      {screen === "icon" ? (
        <SmallIcon changeScreen={changeScreen} />
      ) : (
        <Terminal />
      )}
    </div>
  );
};

export default Page;
