"use client";

import { NotionRenderer } from "react-notion-x";
import type { ExtendedRecordMap } from "notion-types";

interface Props {
  recordMap: ExtendedRecordMap;
}

export default function Notion({ recordMap }: Props) {
  // TODO 링크가 포함되어 있는데 해당 부분은 전달되지 않아도 되는지 확인
  return <NotionRenderer recordMap={recordMap} fullPage={true} />;
}
