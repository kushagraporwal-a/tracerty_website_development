import Head from "next/head";

import { toAbsoluteUrl } from "@/utils/url";

type SeoHeadProps = {
  title: string;
  description: string;
  canonicalPath: string;
};

export default function SeoHead({
  title,
  description,
  canonicalPath,
}: SeoHeadProps) {
  const canonical = toAbsoluteUrl(canonicalPath);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
