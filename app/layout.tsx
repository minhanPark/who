// @ts-ignore
import { GoogleTagManager } from "@next/third-parties/google";
import { type Metadata } from "next";

import "./globals.css";
import { roboto } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://runningwater.me"
  ),
  applicationName: "러닝워터",
  authors: [{ name: "러닝워터", url: "https://runningwater.me" }],
  keywords: ["러닝워터"],
  title: "러닝워터",
  description:
    "끊임없이 흘러가겠다는 의미로 Runningwater라는 닉네임을 사용하고 있습니다.",
  openGraph: {
    siteName: "러닝워터",
    images: "/notion-profile-image.jpg",
    url: "/",
    title: "러닝워터",
    description:
      "끊임없이 흘러가겠다는 의미로 Runningwater라는 닉네임을 사용하고 있습니다.",
  },
  twitter: {
    site: "러닝워터",
    images: "/notion-profile-image.jpg",
    title: "러닝워터",
    description:
      "끊임없이 흘러가겠다는 의미로 Runningwater라는 닉네임을 사용하고 있습니다.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={roboto.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-N6MQN47T" />
    </html>
  );
}
