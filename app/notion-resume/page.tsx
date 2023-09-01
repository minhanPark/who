import { NotionAPI } from "notion-client";
import "react-notion-x/src/styles.css";
import type { Metadata } from "next";

import Notion from "../../app/components/Notion";
import createTitle from "../libs/create-title";
import getMetaTag from "../libs/get-meta-tag";

export const metadata: Metadata = {
  ...getMetaTag({
    title: createTitle("노션 이력서"),
    description: "노션페이지를 통해서 만든 이력서 입니다.",
    image: "/notion-profile-image.jpg",
  }),
};

const notion = new NotionAPI();

export default async function Page() {
  // TODO 에러 페이지, 로딩 페이지 등 필요
  const recordMap = await notion.getPage(
    "runningwater-e1796b03ef6546c49d88d08de4f5a1f1"
  );
  return <Notion recordMap={recordMap} />;
}
