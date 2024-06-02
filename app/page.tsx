import type { Metadata } from "next";
import { SiNotion } from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";

import createTitle from "./libs/create-title";
import styles from "./page.module.scss";
import getMetaTag from "./libs/get-meta-tag";
import { LinkCircle } from "./components/main-link-circle";

export const metadata: Metadata = {
  ...getMetaTag({
    title: createTitle("이력서"),
    description:
      "끊임없이 흘러가겠다는 의미로 Runningwater라는 닉네임을 사용하고 있습니다.",
    image: "/profile-image.png",
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-background-blue flex justify-center items-center">
      <div className="w-full h-full">
        <div className={styles["name-wrapper"]}>
          <h2>RunninGWateR</h2>
          <h2>RunninGWateR</h2>
        </div>
        <div className="flex justify-center gap-4 mt-3">
          <LinkCircle href="/notion-resume">
            <SiNotion />
          </LinkCircle>
          <LinkCircle href="/interactive-resume">
            <MdLaptopMac />
          </LinkCircle>
        </div>
      </div>
    </main>
  );
}
