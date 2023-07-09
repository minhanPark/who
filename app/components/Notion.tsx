"use client";

import { NotionRenderer } from "react-notion-x";
import type { ExtendedRecordMap } from "notion-types";

interface Props {
  /**
   * recordMap - Notion API로 받아온 데이터
   */
  recordMap: ExtendedRecordMap;
}

/**
 * NotionRenderer를 이용하여 Notion 페이지를 렌더링하는 클라이언트 컴포넌트
 *
 * @returns
 * \<NotionRenderer recordMap={recordMap} fullPage={true} />
 */
export default function Notion({ recordMap }: Props) {
  // TODO 링크가 포함되어 있는데 해당 부분은 전달되지 않아도 되는지 확인
  return <NotionRenderer recordMap={recordMap} fullPage={true} />;
}
