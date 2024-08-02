"use client";

import { useState, useRef } from "react";
import { FcDocument } from "react-icons/fc";
import clsx from "clsx";

import { DesktopIcon } from "../components/desktop-icon";
import type { DesktopList } from "./type";
import { AboutMe } from "../components/modal/about-me";
import { SocialAndMail } from "../components/modal/social-and-mail";
import { WorkExperience } from "../components/modal/work-experience";

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
        modal={<SocialAndMail />}
      />
      <DesktopIcon
        title="경력"
        handleFocus={setIsFocus}
        isFocus={isFocus === "경력"}
        isFolder={true}
        constraints={constraintsRef}
        modal={<WorkExperience />}
      />
    </div>
  );
};

export default Page;
