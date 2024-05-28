import createTitle from "./libs/create-title";
import styles from "./page.module.scss";
import Link from "next/link";
import type { Metadata } from "next";
import getMetaTag from "./libs/get-meta-tag";
import { SiNotion } from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";

export const metadata: Metadata = {
  ...getMetaTag({
    title: createTitle("이력서"),
    description:
      "끊임없이 흘러가겠다는 의미로 Runningwater라는 닉네임을 사용하고 있습니다.",
    image: "/profile-image.png",
  }),
};

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const LinkCircle: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link className={styles.box} href={href}>
      {children}
    </Link>
  );
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles["name-wrapper"]}>
          <h2>RunninGWateR</h2>
          <h2>RunninGWateR</h2>
        </div>
        <div className={styles["box-wrapper"]}>
          <LinkCircle href="/notion-resume">
            <SiNotion />
          </LinkCircle>
          {/* <LinkCircle href="/resume">
            <MdLaptopMac />
          </LinkCircle> */}
        </div>
      </div>
    </main>
  );
}
