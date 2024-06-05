"use client";

import { useState, useRef } from "react";
import { FcDocument } from "react-icons/fc";
import clsx from "clsx";

import { DesktopIcon } from "../components/desktop-icon";
import type { DesktopList } from "./type";
import { AboutMe } from "../components/modal/about-me";

const Page = () => {
  const isDay = new Date().getHours() > 8 && new Date().getHours() < 18;
  const [isFocus, setIsFocus] = useState<DesktopList | null>(null);
  const constraintsRef = useRef(null);
  // const handleClick = (e: React.MouseEvent<HTMLOrSVGElement>) => {
  //   // 클릭했을 때 메일이 뜨도록 트리거할 수 있다.
  //   window.location.href = "mailto:aaa@b.com";
  // };

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
      <DesktopIcon
        title="자기 소개"
        icon={FcDocument}
        handleFocus={setIsFocus}
        isFocus={isFocus === "자기 소개"}
        isFolder={false}
        constraints={constraintsRef}
        modal={<AboutMe />}
      />
      <DesktopIcon
        title="소셜 및 메일"
        handleFocus={setIsFocus}
        isFocus={isFocus === "소셜 및 메일"}
        isFolder={true}
        constraints={constraintsRef}
        modal={<AboutMe />}
      />
    </div>
  );
};

export default Page;
