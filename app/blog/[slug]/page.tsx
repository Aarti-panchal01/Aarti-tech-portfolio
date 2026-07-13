import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import posts from "../posts.json";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Aarti Panchal`,
    description: post.description,
  };
}

export default async function Post({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="mx-auto flex min-h-svh max-w-[42rem] flex-col px-6 pb-14">
      <SiteNav page="blog" />

      <main className="pt-14 pb-14">
        <p className="label text-soft">{post.date}</p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight">
          {post.title}
        </h1>

        <hr className="mt-5 border-hairline" />

        <article
          className="post-content mt-8"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <hr className="mt-10 border-hairline" />

        <p className="mt-6 text-soft">
          First published on{" "}
          <a href={post.sourceUrl}>Hashnode</a>.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
