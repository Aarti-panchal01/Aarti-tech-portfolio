import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav({ page }: { page: "home" | "about" | "blog" }) {
  return (
    <nav className="flex items-center justify-between pt-4">
      <Link href="/" className="label no-underline text-soft hover:text-ink">
        ap
      </Link>
      <div className="label flex items-center gap-3 text-soft">
        <ThemeToggle />
        {page !== "home" && <Link href="/">Home</Link>}
        {page !== "about" && <Link href="/about/">About</Link>}
        {page !== "blog" && <Link href="/blog/">Blog</Link>}
      </div>
    </nav>
  );
}
