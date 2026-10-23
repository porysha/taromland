import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "وبلاگ زیتون و روغن زیتون",
  description: "مقالات خرید عمده زیتون، روغن زیتون، برنج طارم و سبزیجات آماده.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-extrabold md:text-4xl">وبلاگ برگ زیتون</h1>
      <p className="mt-2 text-olive-700">راهنمای خرید عمده زیتون، روغن زیتون، برنج و سبزیجات آماده</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-3xl border border-olive-100 bg-white transition hover:shadow-xl">
            <Image src={p.image} alt={p.title} width={420} height={220} sizes="(max-width:640px) 100vw, 33vw" className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-5">
              <time className="text-xs text-olive-500">{new Date(p.date).toLocaleDateString("fa-IR")}</time>
              <h2 className="mt-1 font-extrabold leading-7 group-hover:text-olive-500">{p.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm leading-7 text-olive-700">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
