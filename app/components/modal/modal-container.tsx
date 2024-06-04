import { IconType } from "react-icons";

type ModalContainer = {
  closeModal?: () => void;
  constraints?: React.RefObject<HTMLDivElement>;
  icon?: IconType;
  // 최대사이즈, 타이틀, 칠드런, z-index ??
};

export function ModalContainer() {}
