"use client";

import { useState, useRef } from "react";
import { FcDocument } from "react-icons/fc";

import { DesktopIcon } from "../components/desktop-icon";
import clsx from "clsx";
import type { DesktopApp, DesktopList } from "./type";

// export const metadata: Metadata = {
//   ...getMetaTag({
//     title: createTitle("인터랙티브 이력서"),
//     description: "터미널 형태로 만든 이력서 입니다.",
//     image: "/terminal-profile-image.png",
//   }),
// };

const DesktopAppList: DesktopApp[] = [
  {
    icon: FcDocument,
    title: "자기 소개",
  },
  {
    isFolder: true,
    title: "프로젝트",
  },
];

const Page = () => {
  const isDay = new Date().getHours() > 8 && new Date().getHours() < 18;
  const [isFocus, setIsFocus] = useState<DesktopList | null>(null);
  const constraintsRef = useRef(null);

  return (
    <div
      className={clsx(
        "h-screen",
        isDay
          ? "bg-[url('/background-light.webp')]"
          : "bg-[url('/background-dark.webp')]",
        "bg-no-repeat bg-cover bg-center",
        "flex items-center justify-center gap-3"
      )}
      onClick={() => {
        setIsFocus(null);
      }}
      ref={constraintsRef}
    >
      {DesktopAppList.map((app) => (
        <DesktopIcon
          key={app.title}
          title={app.title}
          icon={app.icon}
          handleFocus={setIsFocus}
          isFocus={isFocus === app.title}
          isFolder={app.isFolder}
          constraints={constraintsRef}
        />
      ))}
    </div>
  );
};

export default Page;
