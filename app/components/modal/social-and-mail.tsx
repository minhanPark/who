"use client";

import { useState } from "react";
import { FcFeedback } from "react-icons/fc";

import { ModalContainer } from "./modal-container";
import type { Modal } from "./type";
import { FolderIcon } from "../folder-icon";

export function SocialAndMail({ closeModal, constraints, icon, title }: Modal) {
  const [isFocus, setIsFocus] = useState<string | null>(null);

  const sendMailToMe = () => {
    window.location.href = "mailto:alsgks1218@gmail.com";
  };

  return (
    <ModalContainer
      closeModal={closeModal}
      constraints={constraints}
      icon={icon}
      maxWidth="max-w-md"
      title={title}
      zIndexNumber={10}
    >
      <div
        className="w-full h-60 flex items-start"
        onClick={() => {
          setIsFocus(null);
        }}
      >
        <FolderIcon
          handleFocus={setIsFocus}
          isFocus={isFocus === "메일 보내기"}
          title="메일 보내기"
          icon={FcFeedback}
          triggerEvent={sendMailToMe}
        />
      </div>
    </ModalContainer>
  );
}
