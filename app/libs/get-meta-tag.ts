import type { Metadata } from "next";

import createTitle from "./create-title";

interface GetMetaTagProps {
  title: string;
  description: string;
  image: string;
}

const getMetaTag = ({
  title,
  description,
  image,
}: GetMetaTagProps): Metadata => {
  return {
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://runningwater.me"
    ),
    title,
    description,
    openGraph: {
      siteName: "러닝워터",
      title,
      description,
      images: image,
    },
    twitter: {
      site: "러닝워터",
      title,
      description,
      images: image,
      card: "summary_large_image",
    },
  };
};

export default getMetaTag;
