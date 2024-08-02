"use client";

import Image from "next/image";
import clsx from "clsx";

import { pretendard } from "../../fonts";
import { ModalContainer } from "./modal-container";
import type { Modal } from "./type";

export function AboutMe({ closeModal, constraints, icon, title }: Modal) {
  return (
    <ModalContainer
      closeModal={closeModal}
      constraints={constraints}
      icon={icon}
      maxWidth="max-w-lg"
      title={title}
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
          러시아 문학을 통해서 인문학을 접하고 실용적인 해결책들을 고민하다 보니
          자연스럽게 프로그래밍을 배웠습니다.
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
    </ModalContainer>
  );
}
