import { site } from "@/lib/site";
import { posts } from "@/lib/posts";
import { areas } from "@/lib/areas";

export default function sitemap() {
  const u = (p, d, pr) => ({ url: `${site.url}${p}`, lastModified: d || new Date(), priority: pr });
  return [
    u("/", null, 1), u("/blog", null, 0.8),
    ...areas.map((a) => u(`/areas/${a.slug}`, null, 0.9)),
    ...posts.map((p) => u(`/blog/${p.slug}`, p.date, 0.7)),
  ];
}
