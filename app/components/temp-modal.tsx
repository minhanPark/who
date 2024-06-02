"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { IoClose } from "react-icons/io5";
import { FcDocument } from "react-icons/fc";
import Image from "next/image";
import { pretendard } from "../fonts";
import clsx from "clsx";

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
      className="bg-slate-50 max-w-lg min-w-96 w-full rounded-md flex flex-col overflow-hidden absolute shadow-lg"
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
        className="flex-1 p-2 flex flex-col items-center gap-3"
      >
        <div className="aspect-video relative w-full rounded-md overflow-hidden">
          <Image
            alt="profile-image"
            fill
            src="/notion-profile-image.jpg"
            className="object-cover"
          />
        </div>
        <div
          className={clsx(
            pretendard.className,
            "text-neutral-800 flex flex-col gap-2"
          )}
        >
          <h2 className="font-bold text-lg">Plus Ultra라는 말을 좋아합니다.</h2>
          <p>
            러시아 문학을 통해서 인문학을 접하고 실용적인 해결책들을 고민하다
            보니 자연스럽게 프로그래밍을 배웠습니다.
          </p>
          <p>
            한계를 넘어 더욱 먼 곳으로 간다는 의미인{" "}
            <span className="font-bold">“Plus Ultra”</span>
            라는 말을 좋아하며 몸소 실천하고 있는{" "}
            <span className="font-bold">자바스크립트</span>를 주로 사용합니다.
          </p>
          <p>
            끊임없이 흘러가겠다는 의미로{" "}
            <span className="font-bold">runningwater</span>라는 닉네임을
            사용합니다.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
