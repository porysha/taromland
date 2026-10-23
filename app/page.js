import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Cta from "@/components/Cta";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { posts } from "@/lib/posts";

export const revalidate = 86400;

const products = [
  { t: "زیتون عمده", d: "زیتون تازه طارم؛ سبز، سیاه و پرورده", img: "/images/olive.webp", cls: "md:col-span-2 md:row-span-2" },
  { t: "روغن زیتون", d: "بکر و فرابکر، بسته‌بندی‌های متنوع", img: "/images/oil.webp", cls: "md:col-span-2" },
  { t: "برنج طارم", d: "عطر و پخت اصیل شمال غرب", img: "/images/rice.webp", cls: "" },
  { t: "سبزیجات آماده", d: "پاک‌شده و تمیز، شعبه تهران", img: "/images/veg.webp", cls: "" },
];
const why = [
  ["leaf", "مستقیم از باغ", "تأمین از باغ‌های چورزق و آببر طارم؛ بدون واسطه و تازه."],
  ["tag", "قیمت عمده", "قیمت رقابتی و پایدار مخصوص فروشگاه‌ها و رستوران‌ها."],
  ["truck", "ارسال سریع", "پخش در تهران، ملارد، شهریار، اندیشه، فردیس و کرج."],
  ["store", "دو شعبه فعال", "خرید حضوری در فردیس کرج و روستای انذر چورزق."],
];
const faqs = [
  ["حداقل میزان خرید عمده زیتون چقدر است؟", "برای اطلاع از حداقل سفارش و قیمت روز زیتون و روغن زیتون عمده با ما تماس بگیرید؛ شرایط برای فروشگاه‌ها و رستوران‌ها متفاوت است."],
  ["به کدام مناطق ارسال دارید؟", "پخش ما شامل طارم، آببر، چورزق، تهران (ملارد، شهریار، اندیشه) و کرج (فردیس) است."],
  ["آیا سبزیجات آماده و پاک‌شده دارید؟", "بله، انواع سبزی تمیز و پاک‌شده در شعبه تهران موجود است."],
  ["روغن زیتون را مستقیم از تولیدکننده تهیه می‌کنید؟", "بله، محصول مستقیم از مناطق زیتون‌خیز طارم زنجان تأمین می‌شود تا کیفیت و قیمت بهتری ارائه شود."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...site.branches.map((b) => ({
      "@type": "GroceryStore", name: `${site.name} - ${b.city}`, url: site.url, telephone: site.phone,
      image: `${site.url}/images/hero.webp`,
      address: { "@type": "PostalAddress", streetAddress: b.street, addressLocality: b.city, addressRegion: b.region, addressCountry: "IR" },
      areaServed: areas.map((a) => a.name),
    })),
    { "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

const H2 = ({ k, children }) => (
  <div className="mb-10 text-center">
    <span className="text-sm font-bold text-olive-500">{k}</span>
    <h2 className="mt-1 text-2xl font-extrabold text-olive-900 md:text-4xl">{children}</h2>
  </div>
);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden bg-olive-900 text-white">
        <div className="pointer-events-none absolute -start-24 top-0 size-96 rounded-full bg-olive-500/25 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-olive-100"><Icon n="leaf" className="size-4 text-gold" /> مستقیم از باغ‌های طارم زنجان</span>
            <h1 className="mt-5 text-3xl font-extrabold leading-snug md:text-5xl md:leading-snug">پخش عمده <span className="text-gold">زیتون</span> و <span className="text-gold">روغن زیتون</span> با قیمت مناسب</h1>
            <p className="mt-5 max-w-lg leading-8 text-olive-100">تأمین مستقیم از چورزق و آببر طارم، با ارسال به تهران، ملارد، شهریار، اندیشه و فردیس کرج. برنج طارم و سبزیجات آماده و پاک‌شده هم داریم.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 font-bold text-olive-900 shadow-lg shadow-gold/20 transition hover:-translate-y-0.5 hover:bg-white"><Icon n="phone" /> استعلام قیمت روز</a>
              <a href={`https://wa.me/${site.whatsapp}`} className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 font-bold transition hover:bg-white/10"><Icon n="chat" /> واتساپ</a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">
              {[["۲", "شعبه فعال"], ["۷+", "منطقه تحت پوشش"], ["۱۰۰٪", "تأمین مستقیم"]].map(([n, l]) => (
                <div key={l}><dt className="text-2xl font-extrabold text-gold">{n}</dt><dd className="text-xs text-olive-200">{l}</dd></div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gold/20" />
            <Image src="/images/hero.webp" alt="زیتون و روغن زیتون طارم زنجان" width={640} height={520} priority sizes="(max-width:768px) 100vw, 50vw" className="relative aspect-[5/4] w-full rounded-[2rem] object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-4 pt-20">
        <H2 k="محصولات">محصولات ارگانیک و عمده</H2>
        <div className="grid auto-rows-[200px] gap-4 md:grid-cols-4">
          {products.map((p) => (
            <article key={p.t} className={`group relative overflow-hidden rounded-3xl ${p.cls}`}>
              <Image src={p.img} alt={p.t} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-900/90 via-olive-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white"><h3 className="text-xl font-extrabold">{p.t}</h3><p className="text-sm text-olive-100">{p.d}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24">
        <H2 k="مزایا">چرا فروشگاه برگ زیتون؟</H2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(([i, t, d]) => (
            <div key={t} className="rounded-3xl border border-olive-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <span className="grid size-12 place-items-center rounded-2xl bg-olive-100 text-olive-700"><Icon n={i} className="size-6" /></span>
              <h3 className="mt-4 text-lg font-extrabold">{t}</h3><p className="mt-1 text-sm leading-7 text-olive-700">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="areas" className="mx-auto max-w-6xl px-4 pt-24">
        <H2 k="مناطق تحت پوشش">پخش زیتون و روغن زیتون در مناطق شما</H2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <Link key={a.slug} href={`/areas/${a.slug}`} className="group flex items-center justify-between rounded-2xl border border-olive-100 bg-white px-5 py-4 transition hover:border-olive-500 hover:bg-olive-800 hover:text-white">
              <span><b className="block">پخش زیتون {a.name}</b><span className="text-xs text-olive-500 group-hover:text-olive-200">{a.sub}</span></span>
              <Icon n="pin" className="size-5 text-gold" />
            </Link>
          ))}
        </div>
      </section>

      <section id="branches" className="mx-auto max-w-6xl px-4 pt-24">
        <H2 k="شعب">به فروشگاه‌های ما سر بزنید</H2>
        <div className="grid gap-5 md:grid-cols-2">
          {site.branches.map((b) => (
            <div key={b.name} className="flex gap-4 rounded-3xl bg-olive-800 p-7 text-white">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold text-olive-900"><Icon n="pin" className="size-6" /></span>
              <div><h3 className="text-lg font-extrabold">{b.name}</h3><p className="mt-1 text-sm leading-7 text-olive-100">{b.street}</p><a href={`tel:${site.phone}`} className="mt-2 inline-block text-sm font-bold text-gold" dir="ltr">{site.phone}</a></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24">
        <H2 k="وبلاگ">آخرین مقالات</H2>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-3xl border border-olive-100 bg-white transition hover:shadow-xl">
              <Image src={p.image} alt={p.title} width={420} height={220} sizes="(max-width:768px) 100vw, 33vw" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-5"><h3 className="font-extrabold leading-7 group-hover:text-olive-500">{p.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-7 text-olive-700">{p.desc}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-4 pt-24">
        <H2 k="سؤالات متداول">پاسخ به پرسش‌های شما</H2>
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-olive-100 bg-white px-5 py-4">
              <summary className="flex items-center justify-between gap-3 font-bold">{q}<Icon n="chev" className="chev size-5 shrink-0 text-olive-500 transition" /></summary>
              <p className="mt-3 text-sm leading-8 text-olive-700">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24"><Cta /></section>
    </>
  );
}
