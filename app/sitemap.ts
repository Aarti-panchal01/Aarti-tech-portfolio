import type { MetadataRoute } from "next";
import posts from "./blog/posts.json";

const SITE = "https://aarti-tech-portfolio.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const newest = posts.reduce(
    (latest, p) => (p.date > latest ? p.date : latest),
    posts[0]?.date ?? "2026-01-01",
  );

  return [
    { url: `${SITE}/`, lastModified: newest, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/about/`, lastModified: newest, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog/`, lastModified: newest, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${SITE}/blog/${p.slug}/`,
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
