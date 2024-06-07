import { DesktopList } from "@/app/interactive-resume/type";
import { IconType } from "react-icons";

export type Modal = {
  closeModal?: () => void;
  constraints?: React.RefObject<HTMLDivElement>;
  icon?: IconType;
  title?: DesktopList;
};
