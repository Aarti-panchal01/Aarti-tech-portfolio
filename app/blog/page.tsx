import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import posts from "./posts.json";

export const metadata: Metadata = {
  title: "Blog | Aarti Panchal",
  description:
    "Writing on NMR quantum computing, research agents, and building for India — by Aarti Panchal, C4GT 2026 fellow and founder of Khoj.",
};

export default function Blog() {
  return (
    <div className="mx-auto flex min-h-svh max-w-[42rem] flex-col px-6 pb-14">
      <SiteNav page="blog" />

      <main className="pt-14 pb-14">
        <h1 className="text-3xl font-medium tracking-tight">Blog</h1>

        <p className="mt-4 text-soft">
          Selected writing — quantum hardware from a student lab, and the
          engineering behind things I&rsquo;ve built.
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
