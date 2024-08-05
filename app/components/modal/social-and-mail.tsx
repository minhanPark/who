"use client";

import { useState } from "react";
import { FcFeedback } from "react-icons/fc";

import { ModalContainer } from "./modal-container";
import type { Modal } from "./type";
import { FolderIcon } from "../folder-icon";
import { FaGithub } from "react-icons/fa";

export function SocialAndMail({ closeModal, constraints, icon, title }: Modal) {
  const [isFocus, setIsFocus] = useState<string | null>(null);

  const sendMailToMe = () => {
    window.location.href = "mailto:alsgks1218@gmail.com";
  };

  const openGithub = () => {
    window.open("https://github.com/minhanPark");
  };

  return (
    <ModalContainer
      closeModal={closeModal}
      constraints={constraints}
      icon={icon}
      maxWidth="max-w-md"
      title={title}
    >
      <div
        className="w-full h-60 flex items-start p-2"
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
        <FolderIcon
          handleFocus={setIsFocus}
          isFocus={isFocus === "깃허브"}
          title="깃허브"
          icon={FaGithub}
          triggerEvent={openGithub}
        />
      </div>
    </ModalContainer>
  );
}
