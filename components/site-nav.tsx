import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav({ page }: { page: "home" | "about" }) {
  return (
    <nav className="flex items-center justify-between pt-8">
      <Link href="/" className="label no-underline text-soft hover:text-ink">
        ap
      </Link>
      <div className="label flex items-center gap-3 text-soft">
        <ThemeToggle />
        {page === "home" ? (
          <Link href="/about/">About</Link>
        ) : (
          <Link href="/">Home</Link>
        )}
      </div>
    </nav>
  );
}
