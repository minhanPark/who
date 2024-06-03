"use client";

import { useState, useRef } from "react";
import { FcDocument } from "react-icons/fc";
import clsx from "clsx";

import { DesktopIcon } from "../components/desktop-icon";
import type { DesktopApp, DesktopList } from "./type";
import { TempModal } from "../components/temp-modal";

const DesktopAppList: DesktopApp[] = [
  {
    icon: FcDocument,
    title: "자기 소개",
  },
  // {
  //   isFolder: true,
  //   title: "프로젝트",
  // },
];

const Page = () => {
  const isDay = new Date().getHours() > 8 && new Date().getHours() < 18;
  const [isFocus, setIsFocus] = useState<DesktopList | null>(null);
  const constraintsRef = useRef(null);

  return (
    <div
      className={clsx(
        "h-screen w-full",
        isDay
          ? "bg-[url('/background-light.webp')]"
          : "bg-[url('/background-dark.webp')]",
        "bg-no-repeat bg-cover bg-center",
        "flex items-center justify-center gap-3 relative p-2"
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
          modal={<TempModal />}
        />
      ))}
    </div>
  );
};

export default Page;
