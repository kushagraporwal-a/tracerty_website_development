import SeoHead from "@/components/layout/SeoHead";
import { getBlogByRef } from "@/lib/blogsApi";
import { THEME } from "@/data/theme";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";

type BlogDetailsData = {
  slug: string;
  title: string;
  tag: string;
  author: string;
  publishedDate: string;
  imageSrc: string;
  imageAlt: string;
  descriptionStart: unknown;
  contentImageSrc: string;
  contentImageAlt: string;
  descriptionEnd: unknown;
};

type TocItem = {
  id: string;
  text: string;
  level: number;
};

function getStringField(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function normalizeImageUrl(value: unknown): string {
  if (typeof value !== "string" || value.length === 0) {
    return "/assets/resources/blogInfo-1.png";
  }

  return value.startsWith("//") ? `https:${value}` : value;
}

function normalizeOptionalImageUrl(value: unknown): string {
  if (typeof value !== "string" || value.length === 0) return "";
  return value.startsWith("//") ? `https:${value}` : value;
}

function slugifyHeading(value: string): string {
  const normalized = value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
  return normalized || "section";
}

function extractTextFromNode(node: any): string {
  if (!node) return "";
  if (node.nodeType === "text") return getStringField(node.value);
  if (!Array.isArray(node.content)) return "";
  return node.content.map((child: any) => extractTextFromNode(child)).join(" ").replace(/\s+/g, " ").trim();
}

function extractHeadingsFromRichText(value: unknown, idCounts: Record<string, number>): TocItem[] {
  if (!value || typeof value !== "object") return [];

  const headings: TocItem[] = [];

  const walk = (node: any) => {
    if (!node || typeof node !== "object") return;

    const headingLevels: Record<string, number> = {
      "heading-1": 1,
      "heading-2": 2,
      "heading-3": 3,
      "heading-4": 4,
    };

    const level = headingLevels[node.nodeType];
    if (level) {
      const text = extractTextFromNode(node);
      if (text) {
        const base = slugifyHeading(text);
        idCounts[base] = (idCounts[base] ?? 0) + 1;
        const id = idCounts[base] === 1 ? base : `${base}-${idCounts[base]}`;
        headings.push({ id, text, level });
      }
    }

    if (Array.isArray(node.content)) {
      node.content.forEach((child: any) => walk(child));
    }
  };

  walk(value);
  return headings;
}

function renderRichTextNode(
  node: any,
  key: string,
  headingIdCounts: Record<string, number>,
): ReactNode {
  if (!node) return null;

  if (node.nodeType === "text") {
    let textNode: ReactNode = node.value ?? "";
    const marks = Array.isArray(node.marks) ? node.marks : [];

    marks.forEach((mark: any, markIndex: number) => {
      const markKey = `${key}-mark-${markIndex}`;
      if (mark?.type === "bold") textNode = <strong key={markKey}>{textNode}</strong>;
      if (mark?.type === "italic") textNode = <em key={markKey}>{textNode}</em>;
      if (mark?.type === "underline") textNode = <u key={markKey}>{textNode}</u>;
      if (mark?.type === "code") textNode = <code key={markKey}>{textNode}</code>;
    });

    return textNode;
  }

  const children = Array.isArray(node.content)
    ? node.content.map((child: any, index: number) => renderRichTextNode(child, `${key}-${index}`, headingIdCounts))
    : null;

  const headingText = extractTextFromNode(node);
  const headingBase = headingText ? slugifyHeading(headingText) : "";
  if (headingBase) {
    headingIdCounts[headingBase] = (headingIdCounts[headingBase] ?? 0) + 1;
  }
  const headingId =
    headingBase && headingIdCounts[headingBase]
      ? headingIdCounts[headingBase] === 1
        ? headingBase
        : `${headingBase}-${headingIdCounts[headingBase]}`
      : undefined;

  switch (node.nodeType) {
    case "heading-1":
      return <h1 id={headingId} key={key} className="mb-4 mt-6 text-3xl font-bold text-[#101828] font-oxygen">{children}</h1>;
    case "heading-2":
      return <h2 id={headingId} key={key} className="mb-4 mt-6 text-2xl font-bold text-[#101828] font-oxygen">{children}</h2>;
    case "heading-3":
      return <h3 id={headingId} key={key} className="mb-3 mt-5 text-xl font-bold text-[#101828] font-oxygen">{children}</h3>;
    case "heading-4":
      return <h4 id={headingId} key={key} className="mb-3 mt-4 text-lg font-bold text-[#101828] font-oxygen">{children}</h4>;
    case "paragraph":
      return <p key={key} className="mb-4 text-base leading-7 text-[#0B1F33] font-inter">{children}</p>;
    case "unordered-list":
      return <ul key={key} className="mb-4 list-disc space-y-2 pl-6 text-base leading-7 text-[#0B1F33] font-inter">{children}</ul>;
    case "ordered-list":
      return <ol key={key} className="mb-4 list-decimal space-y-2 pl-6 text-base leading-7 text-[#0B1F33] font-inter">{children}</ol>;
    case "list-item":
      return <li key={key}>{children}</li>;
    case "blockquote":
      return (
        <blockquote
          key={key}
          className="mb-4 rounded-xl border-l-4 border-[#E8E8EA] bg-[#F6F6F7] px-8 pt-8 pb-2 text-2xl leading-9 text-[#181A2A] font-inter"
        >
          {children}
        </blockquote>
      );
    case "hr":
      return <hr key={key} className="my-6 border-[#E4E7EC]" />;
    case "hyperlink":
      return (
        <a
          key={key}
          href={getStringField(node?.data?.uri) || "#"}
          target="_blank"
          rel="noreferrer"
          className="text-[#1A5FCC] underline"
        >
          {children}
        </a>
      );
    case "document":
      return <div key={key}>{children}</div>;
    default:
      return <div key={key}>{children}</div>;
  }
}

function renderRichText(value: unknown, keyPrefix: string, headingIdCounts: Record<string, number>): ReactNode {
  if (!value || typeof value !== "object") return null;
  return renderRichTextNode(value, keyPrefix, headingIdCounts);
}

export default function BlogDetailsPage({
  blog,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const tocItems = useMemo(() => {
    const idCounts: Record<string, number> = {};
    return [
      ...extractHeadingsFromRichText(blog.descriptionStart, idCounts),
      ...extractHeadingsFromRichText(blog.descriptionEnd, idCounts),
    ];
  }, [blog.descriptionStart, blog.descriptionEnd]);

  const [activeTocId, setActiveTocId] = useState<string>(tocItems[0]?.id ?? "");

  useEffect(() => {
    if (tocItems.length === 0) return;
    setActiveTocId((current) => current || tocItems[0].id);

    const headingElements = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveTocId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.5, 1] },
    );

    headingElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [tocItems]);

  const renderHeadingIdCounts: Record<string, number> = {};

  return (
    <>
      <SeoHead
        title={`${blog.title} | Tracerty`}
        description={getStringField(blog.author) || "Read the latest insights from Tracerty."}
        canonicalPath={`/resources/blogs/${blog.slug}`}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-10">
          <article className="lg:col-span-7">
            <div className="mb-12 flex items-center gap-2">
              <Link href="/resources" className="text-base font-normal text-[#555555] font-inter">
                Resources
              </Link>
              <span className="text-base font-normal text-[#555555] font-inter">/</span>
              <span className="text-base font-bold text-[#0047AB] font-inter">Blog</span>
            </div>

            <span
              className="mb-4 inline-flex rounded-md px-3 py-1.5 text-sm font-bold text-white font-inter"
              style={{ backgroundColor: "#00B3A4" }}
            >
              {blog.tag || "Insights"}
            </span>

            <h1 className="mb-4 text-4xl font-bold text-[#181A2A] font-oxygen">{blog.title}</h1>

            <div className="mb-6 flex flex-wrap items-center text-sm text-[#696A75] font-inter">
              {blog.author ? (
                <>
                  <CircleUserRound size={20} className="mr-1" />
                  <span>{blog.author}</span>
                </>
              ) : null}
              {blog.publishedDate ? <span className={blog.author ? "ml-2" : ""}>{blog.publishedDate}</span> : null}
            </div>

            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
              <Image src={blog.imageSrc} alt={blog.imageAlt} fill className="object-cover" />
            </div>

            <div className="mb-8">{renderRichText(blog.descriptionStart, "description-start", renderHeadingIdCounts)}</div>

            {blog.contentImageSrc ? (
              <div className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                <Image src={blog.contentImageSrc} alt={blog.contentImageAlt} fill className="object-cover" />
              </div>
            ) : null}

            <div>{renderRichText(blog.descriptionEnd, "description-end", renderHeadingIdCounts)}</div>
          </article>

          <aside className="hidden lg:col-span-3 lg:block">
            {tocItems.length > 0 ? (
              <div className="sticky top-24 p-5">
                <h2
                  className="mb-[10px] text-[20px] font-bold font-oxygen"
                  style={{ color: THEME.colors.blogTocText }}
                >
                  In this article
                </h2>
                <nav aria-label="Table of contents" className="space-y-2">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        const target = document.getElementById(item.id);
                        if (!target) return;
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`block w-full py-2 text-left text-base font-inter transition ${
                        activeTocId === item.id ? "font-bold" : "font-normal"
                      }`}
                      style={{
                        color: THEME.colors.blogTocText,
                        paddingLeft: `${Math.max((item.level - 1) * 12, 0)}px`,
                        backgroundColor: activeTocId === item.id ? THEME.colors.backgroundTone : "transparent",
                        borderLeft:
                          activeTocId === item.id ? `3px solid ${THEME.colors.blogTocActiveBorder}` : "3px solid transparent",
                      }}
                    >
                      {item.text}
                    </button>
                  ))}
                </nav>
              </div>
            ) : null}
          </aside>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  blog: BlogDetailsData;
}> = async (context) => {
  const slug = getStringField(context.params?.slug);

  if (!slug) {
    return { notFound: true };
  }

  try {
    const blogEntry: any = await getBlogByRef(slug);

    if (!blogEntry?.fields) {
      return { notFound: true };
    }

    const imageUrl = blogEntry?.fields?.bannerImage?.fields?.file?.url;
    const descriptionStart = blogEntry?.fields?.descriptionStart ?? null;
    const descriptionEnd = blogEntry?.fields?.descriptionEnd ?? null;
    const contentImageUrl = blogEntry?.fields?.contentImage?.fields?.file?.url;

    return {
      props: {
        blog: {
          slug: getStringField(blogEntry?.fields?.slug) || slug,
          title: getStringField(blogEntry?.fields?.title) || "Untitled blog",
          tag: getStringField(blogEntry?.fields?.tag) || "Insights",
          author: getStringField(blogEntry?.fields?.author),
          publishedDate: getStringField(blogEntry?.fields?.publishedDate),
          imageSrc: normalizeImageUrl(imageUrl),
          imageAlt: getStringField(blogEntry?.fields?.title) || "Blog banner",
          descriptionStart,
          contentImageSrc: normalizeOptionalImageUrl(contentImageUrl),
          contentImageAlt: getStringField(blogEntry?.fields?.title) || "Blog content image",
          descriptionEnd,
        },
      },
    };
  } catch {
    return { notFound: true };
  }
};
