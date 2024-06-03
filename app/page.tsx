import { SiNotion } from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";

import styles from "./page.module.scss";
import { LinkCircle } from "./components/main-link-circle";

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
