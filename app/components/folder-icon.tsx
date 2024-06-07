"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

type FolderIcon = {
  icon: IconType;
  title: string;
  handleFocus: Dispatch<SetStateAction<string | null>>;
  isFocus: boolean;
  triggerEvent: () => void;
};

export function FolderIcon({
  handleFocus,
  title,
  triggerEvent,
  icon: Icon,
  isFocus,
}: FolderIcon) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.detail === 1) {
      handleFocus((prev) => (prev === title ? null : title));
      return;
    } else if (e.detail === 2) {
      handleFocus(null);
      triggerEvent();
    }
  };
  return (
    <div
      onClick={handleClick}
      className={clsx(
        "inline-flex flex-col gap-1 items-center p-2 rounded-md cursor-pointer",
        isFocus ? "bg-gray-300 bg-opacity-50" : "bg-transparent"
      )}
    >
      <Icon className="size-12" />
      <span className="text-sm font-bold text-slate-800">{title}</span>
    </div>
  );
}
