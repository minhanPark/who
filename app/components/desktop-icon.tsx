"use client";

import { Dispatch, SetStateAction, useState, cloneElement } from "react";
import { motion } from "framer-motion";
import { FcFolder, FcDocument } from "react-icons/fc";
import clsx from "clsx";

import { pretendard } from "../fonts";
import type { DesktopList, DesktopApp } from "../interactive-resume/type";

type DesktopIcon = DesktopApp & {
  handleFocus: Dispatch<SetStateAction<DesktopList | null>>;
  isFocus: boolean;
  constraints?: React.RefObject<HTMLDivElement>;
  modal: React.ReactElement;
};

export function DesktopIcon({
  isFolder = false,
  icon,
  isFocus,
  handleFocus,
  title,
  constraints,
  modal,
}: DesktopIcon) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.detail === 1) {
      handleFocus((prev) => (prev === title ? null : title));
      return;
    } else if (e.detail === 2) {
      handleFocus(null);
      openModal();
    }
  };
  const RenderedIcon = icon || FcDocument;

  const Icon = isFolder ? FcFolder : RenderedIcon;

  const clonedModal = cloneElement(modal, {
    isOpen: isModalOpen,
    onClose: closeModal,
  });
  return (
    <>
      <motion.div
        drag
        dragMomentum={false}
        className={clsx(
          "inline-flex flex-col gap-1 items-center p-2 rounded-md cursor-pointer",
          isFocus ? "bg-gray-300 bg-opacity-50" : "bg-transparent"
        )}
        onClick={handleClick}
        dragConstraints={constraints}
        whileDrag={{ zIndex: 100 }}
      >
        <Icon className="size-12" />
        <span
          className={clsx(
            pretendard.className,
            "text-sm",
            "text-neutral-50",
            isFocus ? "font-semibold" : "font-normal"
          )}
        >
          {title}
        </span>
      </motion.div>
      {isModalOpen && clonedModal}
    </>
  );
}
