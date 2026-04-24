import { contentfulClient } from "@/lib/contentful";

export const getAllBlogs = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "blogs",
  });

  return response.items;
};

export const getBlogs = async ({ page = 1, limit = 10, search = "" }) => {
  const skip = (page - 1) * limit;

  const response = await contentfulClient.getEntries({
    content_type: "blogs",
    limit,
    skip,
    order: ["-fields.publishedDate"],
    query: search || undefined,
  });

  return {
    blogs: response.items,
    total: response.total,
    page,
    totalPages: Math.ceil(response.total / limit),
  };
};

export const getBlogBySlug = async (slug: any) => {
  const response = await contentfulClient.getEntries({
    content_type: "blogs",
    "fields.slug": slug,
    limit: 1,
  });

  return response.items[0];
};

export const getBlogByRef = async (blogRef: string) => {
  const bySlug = await getBlogBySlug(blogRef);
  if (bySlug) return bySlug;

  try {
    const byId = await contentfulClient.getEntry(blogRef);
    if (byId?.sys?.type === "Entry") return byId;
  } catch {
    return undefined;
  }

  return undefined;
};

export const getLatestBlogs = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "blogs",
    limit: 3,
  });

  return response.items;
};
