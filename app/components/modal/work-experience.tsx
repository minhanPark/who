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
      <div className="w-full h-60 flex items-start"></div>
    </ModalContainer>
  );
}
