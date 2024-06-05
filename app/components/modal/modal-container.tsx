"use client";

import { IconType } from "react-icons";
import { FcDocument } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import clsx from "clsx";

import type { DesktopList } from "@/app/interactive-resume/type";

type ModalContainer = {
  closeModal?: () => void;
  constraints?: React.RefObject<HTMLDivElement>;
  icon?: IconType;
  maxWidth?: "max-w-xs" | "max-w-sm" | "max-w-md" | "max-w-lg" | "max-w-xl";
  title?: DesktopList;
  children: React.ReactNode;
  zIndexNumber?: number;
};

export function ModalContainer({
  closeModal,
  constraints,
  icon: Icon = FcDocument,
  maxWidth = "max-w-lg",
  title,
  children,
  zIndexNumber = 10,
}: ModalContainer) {
  const zIndex = `z-${zIndexNumber}`;
  return (
    <motion.div
      className={clsx(
        "bg-slate-50 min-w-80 w-full rounded-md flex flex-col overflow-hidden absolute shadow-lg",
        maxWidth,
        zIndex
      )}
      drag
      dragMomentum={false}
      dragConstraints={constraints}
    >
      <div className="h-6 bg-slate-200 w-full cursor-grab relative flex justify-center">
        <div
          className="absolute left-1 top-1 bg-red-500 rounded-full size-4 cursor-default group"
          onClick={() => closeModal?.()}
        >
          <IoClose className="hidden group-hover:block" />
        </div>
        <div className="flex items-center gap-2">
          <Icon className="size-5" />
          <h3 className="text-sm font-bold text-slate-800">{title}</h3>
        </div>
      </div>
      <div
        onPointerDownCapture={(e) => {
          e.stopPropagation();
        }}
        className="flex-1 p-2 flex flex-col items-center gap-3"
      >
        {children}
      </div>
    </motion.div>
  );
}
