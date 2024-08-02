"use client";

import { ModalContainer } from "./modal-container";
import { Modal } from "./type";

export function WorkExperience({
  closeModal,
  constraints,
  icon,
  title,
}: Modal) {
  return (
    <ModalContainer
      closeModal={closeModal}
      constraints={constraints}
      icon={icon}
      maxWidth="max-w-md"
      title={title}
    >
      <div className="w-full h-60 flex flex-col">
        <h2 className="font-bold text-xl">(주)옵타움플랫폼</h2>
        <p className="text-xs text-slate-500 leading-6">
          프론트엔드 개발(2020년 7월 ~ 현재)
        </p>
      </div>
    </ModalContainer>
  );
}
