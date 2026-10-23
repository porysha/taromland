import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamicParams = false;
export const revalidate = 86400;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title, description: p.desc, keywords: p.keywords,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.desc, publishedTime: p.date, images: [p.image] },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.desc,
    datePublished: p.date, image: `${site.url}${p.image}`,
    author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name },
  };
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <nav className="mb-6 text-sm text-olive-500"><Link href="/" className="hover:underline">خانه</Link> / <Link href="/blog" className="hover:underline">وبلاگ</Link></nav>
      <h1 className="text-3xl font-extrabold leading-snug md:text-4xl md:leading-snug">{p.title}</h1>
      <time className="mt-3 block text-sm text-olive-500">{new Date(p.date).toLocaleDateString("fa-IR")}</time>
      <Image src={p.image} alt={p.title} width={768} height={400} priority sizes="(max-width:800px) 100vw, 768px" className="mt-6 aspect-[2/1] w-full rounded-3xl object-cover" />
      <p className="mt-8 rounded-2xl border-s-4 border-gold bg-olive-50 p-5 leading-8 text-olive-800">{p.desc}</p>
      {p.sections.map(([h, t]) => (
        <section key={h}><h2 className="mb-3 mt-10 text-xl font-extrabold text-olive-800 md:text-2xl">{h}</h2><p className="leading-9 text-olive-800/90">{t}</p></section>
      ))}
      <div className="mt-14"><Cta title="سفارش عمده و استعلام قیمت روز" /></div>
      <h3 className="mb-4 mt-14 text-xl font-extrabold">مقالات مرتبط</h3>
      <div className="grid gap-3">
        {related.map((r) => <Link key={r.slug} href={`/blog/${r.slug}`} className="rounded-2xl border border-olive-100 bg-white px-5 py-3 font-medium transition hover:border-olive-500 hover:text-olive-500">{r.title}</Link>)}
      </div>
    </article>
  );
}
