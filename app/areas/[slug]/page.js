import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import Icon from "@/components/Icon";
import { areas } from "@/lib/areas";
import { posts } from "@/lib/posts";

export const dynamicParams = false;
export const generateStaticParams = () => areas.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: `خرید و پخش عمده زیتون و روغن زیتون در ${a.name}`,
    description: `پخش زیتون، روغن زیتون، برنج طارم و سبزیجات آماده پاک‌شده در ${a.name}. قیمت عمده، ارسال سریع.`,
    alternates: { canonical: `/areas/${a.slug}` },
  };
}

export default async function Area({ params }) {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  if (!a) notFound();
  const items = ["زیتون عمده (سبز، سیاه، پرورده)", "روغن زیتون بکر و فرابکر", "برنج طارم", "سایر محصولات ارگانیک", "سبزیجات آماده و پاک‌شده (شعبه تهران)"];
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-olive-500"><Link href="/" className="hover:underline">خانه</Link> / مناطق / {a.name}</nav>
      <span className="inline-flex items-center gap-1 rounded-full bg-olive-100 px-3 py-1 text-xs font-bold text-olive-700"><Icon n="pin" className="size-4" /> {a.sub}</span>
      <h1 className="mt-3 text-3xl font-extrabold leading-snug md:text-4xl md:leading-snug">پخش عمده زیتون و روغن زیتون در {a.name}</h1>
      <p className="mt-5 leading-9 text-olive-800/90">{a.text}</p>
      <h2 className="mb-4 mt-10 text-xl font-extrabold">محصولات قابل ارائه در {a.name}</h2>
      <ul className="grid gap-2">
        {items.map((i) => <li key={i} className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3"><Icon n="check" className="size-5 text-olive-500" />{i}</li>)}
      </ul>
      <h2 className="mb-4 mt-10 text-xl font-extrabold">مقالات مرتبط</h2>
      <div className="grid gap-3">
        {posts.slice(0, 3).map((p) => <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-olive-100 bg-white px-5 py-3 transition hover:border-olive-500">{p.title}</Link>)}
      </div>
      <div className="mt-12"><Cta title={`سفارش زیتون و روغن زیتون عمده در ${a.name}`} /></div>
    </article>
  );
}
