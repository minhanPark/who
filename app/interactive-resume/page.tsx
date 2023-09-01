"use client";

import { useState } from "react";
import Image from "next/image";

import SmallIcon from "../components/SmallIcon";
import Terminal from "../components/Teminal";

// export const metadata: Metadata = {
//   ...getMetaTag({
//     title: createTitle("인터랙티브 이력서"),
//     description: "터미널 형태로 만든 이력서 입니다.",
//     image: "/terminal-profile-image.png",
//   }),
// };

export type ScreenType = "icon" | "terminal";

const Page = () => {
  const [imageSrc, setImageSrc] = useState("/background.webp");
  const [screen, setScreen] = useState<ScreenType>("terminal");
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
        onError={() => {
          setImageSrc(fallbackImg[imageSrc]);
        }}
      />
      {screen === "icon" ? (
        <SmallIcon changeScreen={changeScreen} />
      ) : (
        <Terminal changeScreen={changeScreen} />
      )}
    </div>
  );
};

export default Page;
