import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

const links = [["/#products", "محصولات"], ["/#areas", "مناطق"], ["/blog", "وبلاگ"], ["/#faq", "سؤالات"], ["/#branches", "شعب"]];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-olive-100 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-olive-800">
          <span className="grid size-9 place-items-center rounded-xl bg-olive-700 text-white"><Icon n="leaf" /></span>
          {site.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-olive-800 md:flex">
          {links.map(([h, t]) => <Link key={h} href={h} className="transition hover:text-olive-500">{t}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${site.phone}`} className="hidden items-center gap-2 rounded-xl bg-olive-800 px-4 py-2 text-sm font-bold text-white transition hover:bg-olive-700 sm:flex">
            <Icon n="phone" className="size-4" /> استعلام قیمت
          </a>
          <details className="relative md:hidden">
            <summary className="grid size-10 place-items-center rounded-xl border border-olive-200"><Icon n="menu" /></summary>
            <div className="absolute end-0 top-12 w-48 rounded-2xl border border-olive-100 bg-white p-2 shadow-xl">
              {links.map(([h, t]) => <Link key={h} href={h} className="block rounded-xl px-4 py-2.5 text-sm hover:bg-olive-50">{t}</Link>)}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
