import Link from "next/link";

export function SiteNav({ page }: { page: "home" | "about" }) {
  return (
    <nav className="flex items-baseline justify-between pt-8">
      <Link href="/" className="label no-underline text-soft hover:text-ink">
        ap
      </Link>
      <div className="label text-soft">
        {page === "home" ? (
          <Link href="/about/">About</Link>
        ) : (
          <Link href="/">Home</Link>
        )}
      </div>
    </nav>
  );
}
