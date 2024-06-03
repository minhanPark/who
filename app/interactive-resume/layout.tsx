import { Metadata } from "next";

export const metadata: Metadata = {
  title: "인터랙티브 이력서 | 러닝워터",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
