// @ts-ignore
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import createTitle from "./libs/create-title";
import { roboto } from "./fonts";

export const metadata = {
  title: createTitle(),
  description: "러닝워터",
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
