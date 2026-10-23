import Link from "next/link";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";

export default function Footer() {
  return (
    <footer className="mt-24 bg-olive-900 text-olive-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <h3 className="mb-3 text-lg font-extrabold text-white">{site.name}</h3>
          <p className="text-sm leading-7 text-olive-200">پخش عمده زیتون، روغن زیتون، برنج طارم و سبزیجات آماده؛ مستقیم از باغ‌های طارم زنجان.</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">مناطق</h4>
          <ul className="space-y-1.5 text-sm">
            {areas.map((a) => <li key={a.slug}><Link href={`/areas/${a.slug}`} className="hover:text-gold">پخش زیتون {a.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">شعب</h4>
          <ul className="space-y-3 text-sm">
            {site.branches.map((b) => <li key={b.name}><b className="text-white">{b.name}</b><br />{b.street}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">تماس</h4>
          <a href={`tel:${site.phone}`} className="text-lg font-bold text-gold" dir="ltr">{site.phone}</a>
          <div className="mt-4 flex flex-col gap-1.5 text-sm"><Link href="/blog" className="hover:text-gold">وبلاگ</Link><Link href="/#faq" className="hover:text-gold">سؤالات متداول</Link></div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-olive-200">
        © {new Date().getFullYear()} {site.name} — طراحی و توسعه توسط <b className="text-gold">تیم پوریشا</b>
      </div>
    </footer>
  );
}
