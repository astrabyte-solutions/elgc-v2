export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://test-elgc-v2.astrabytesolutions.com";

export function getBlogUrl(slug: string) {
  return `${SITE_URL}/blogs/${slug}`;
}
