"use client";

import { FcDocument } from "react-icons/fc";
import { DesktopIcon } from "../components/desktop-icon";

// export const metadata: Metadata = {
//   ...getMetaTag({
//     title: createTitle("인터랙티브 이력서"),
//     description: "터미널 형태로 만든 이력서 입니다.",
//     image: "/terminal-profile-image.png",
//   }),
// };

const Page = () => {
  const isDay = new Date().getHours() > 8 && new Date().getHours() < 18;
  return (
    <div
      className={`h-screen ${
        isDay
          ? "bg-[url('/background-light.webp')]"
          : "bg-[url('/background-dark.webp')]"
      }`}
    >
      <DesktopIcon icon={FcDocument} />
    </div>
  );
};

export default Page;
