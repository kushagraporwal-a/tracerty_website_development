import { SITE_URL } from "@/data/site";

export function toAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
