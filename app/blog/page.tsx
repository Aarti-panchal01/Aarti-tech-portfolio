import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import posts from "./posts.json";

const BLOG_DESC =
  "Writing on production voice AI, migrating India's 104 health helpline to Angular 20, getting into C4GT DMP, and NMR quantum computing — by Aarti Panchal.";

export const metadata: Metadata = {
  title: "Blog",
  description: BLOG_DESC,
  alternates: { canonical: "/blog/" },
  openGraph: {
    type: "website",
    title: "Blog — Aarti Panchal",
    description: BLOG_DESC,
    url: "/blog/",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Aarti Panchal",
    description: BLOG_DESC,
    images: ["/og.png"],
  },
};

export default function Blog() {
  return (
    <div className="mx-auto flex min-h-svh max-w-[42rem] flex-col px-6 pb-14">
      <SiteNav page="blog" />

      <main className="pt-14 pb-14">
        <h1 className="text-3xl font-medium tracking-tight">Blog</h1>

        <p className="mt-4 text-soft">
          Selected writing — the engineering behind things I&rsquo;ve shipped,
          what a government-tech fellowship is actually like, and quantum
          hardware from a student lab.
        </p>

        <hr className="mt-5 border-hairline" />

        <ul className="mt-8 list-none space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <p className="label text-soft">{post.date}</p>
              <h2 className="mt-1 text-xl font-medium tracking-tight">
                <Link href={`/blog/${post.slug}/`} className="no-underline hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-soft">{post.description}&hellip;</p>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}
