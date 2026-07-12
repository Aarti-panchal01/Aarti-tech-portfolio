import Link from "next/link";

export function SiteNav({ page }: { page: "home" | "about" }) {
  return (
    <nav className="flex items-baseline justify-between pt-8">
      <Link href="/" className="label no-underline text-soft hover:text-ink">
        ap
      </Link>
      <div className="label flex gap-3 text-soft">
        {page === "home" ? (
          <Link href="/about/">About</Link>
        ) : (
          <Link href="/">Home</Link>
        )}
        <span aria-hidden="true">|</span>
        <a href="https://hashnode.com/@Aarti-panchal01">Blogs</a>
      </div>
    </nav>
  );
}
