import { NotionAPI } from "notion-client";
import "react-notion-x/src/styles.css";
import type { Metadata } from "next";

import Notion from "../../app/components/Notion";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "노션 이력서 | 러닝워터",
};

const notion = new NotionAPI();

export default async function Page() {
  // TODO 에러 페이지, 로딩 페이지 등 필요
  const recordMap = await notion.getPage(
    "runningwater-e1796b03ef6546c49d88d08de4f5a1f1"
  );
  return <Notion recordMap={recordMap} />;
}
