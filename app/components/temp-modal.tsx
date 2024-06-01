"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { IoClose } from "react-icons/io5";
import { FcDocument } from "react-icons/fc";

type Modal = {
  closeModal?: () => void;
  constraints?: React.RefObject<HTMLDivElement>;
  icon?: IconType;
};

export function TempModal({ closeModal, constraints, icon }: Modal) {
  // 기본적으로 icon은 다 있지만 modal에서 직접적으로 받는게 아니고
  // desktop-icon에서 받기 위해 icon을 optional로 설정했기 때문에 기본값을 설정
  const RenderedIcon = icon || FcDocument;
  return (
    <motion.div
      className="bg-slate-50 max-w-md w-full h-28 rounded-md flex flex-col overflow-hidden absolute"
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
          <RenderedIcon className="size-5" />
          <h3 className="text-sm font-bold text-slate-800">자기 소개</h3>
        </div>
      </div>
      <div
        onPointerDownCapture={(e) => {
          e.stopPropagation();
        }}
        className="flex-1 p-2"
      >
        공간 다 차지
      </div>
    </motion.div>
  );
}
