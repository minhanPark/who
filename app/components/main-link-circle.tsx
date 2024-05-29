import Link from "next/link";

type LinkCircle = {
  href: string;
  children: React.ReactNode;
};

export const LinkCircle = ({ href, children }: LinkCircle) => {
  return (
    <Link
      className="bg-white p-2.5 rounded-full shadow-lg hover:text-main-blue text-3xl md:text-5xl transition-colors duration-300"
      href={href}
    >
      {children}
    </Link>
  );
};
