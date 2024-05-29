"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { FcFolder, FcDocument } from "react-icons/fc";
import clsx from "clsx";

import { pretendard } from "../fonts";

type DesktopIcon = {
  isFolder?: boolean;
  icon?: IconType;
};

export function DesktopIcon({ isFolder, icon }: DesktopIcon) {
  const [isFocus, setIsFocus] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("e.detail", e.detail);
    if (e.detail === 1) {
      setIsFocus((prev) => !prev);
      return;
    } else if (e.detail === 2) {
      setIsFocus(false);
      // TODO: 여기서 모달창 열리도록 하면됨
      console.log("더블클릭");
    }
  };
  const RenderedIcon = icon || FcDocument;
  const Icon = isFolder ? FcFolder : RenderedIcon;
  return (
    <motion.div
      drag
      dragMomentum={false}
      className={clsx(
        "inline-flex flex-col gap-1 items-center p-2 rounded-md cursor-pointer",
        isFocus ? "bg-gray-300 bg-opacity-50" : "bg-transparent"
      )}
      onClick={handleClick}
    >
      <Icon className="size-12" />
      <span
        className={clsx(
          pretendard.className,
          "text-sm",
          "text-slate-800",
          isFocus ? "font-semibold" : "font-normal"
        )}
      >
        자기 소개
      </span>
    </motion.div>
  );
}
