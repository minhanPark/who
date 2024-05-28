import Link from "next/link";

interface LinkCircle {
  href: string;
  children: React.ReactNode;
}

export const LinkCircle = ({ href, children }: LinkCircle) => {
  return <Link href={href}>{children}</Link>;
};
