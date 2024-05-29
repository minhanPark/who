import Link from "next/link";

interface LinkCircle {
  href: string;
  children: React.ReactNode;
}

export const LinkCircle = ({ href, children }: LinkCircle) => {
  return (
    <Link
      className="bg-white p-2.5 rounded-full shadow-lg hover:text-main-blue text-3xl md:text-5xl"
      href={href}
    >
      {children}
    </Link>
  );
};
