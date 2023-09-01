import "./globals.css";
import { Roboto } from "next/font/google";
import createTitle from "./libs/create-title";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

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
    </html>
  );
}
