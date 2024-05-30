import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export type DesktopList = "자기 소개" | "경력" | "프로젝트" | "Contact";

export type DesktopApp = {
  isFolder?: boolean;
  icon?: IconType;
  title: DesktopList;
};
