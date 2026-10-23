import Icon from "./Icon";
import { site } from "@/lib/site";

export default function Cta({ title = "قیمت روز زیتون و روغن زیتون عمده را همین حالا بگیرید" }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-olive-800 px-6 py-12 text-center text-white md:px-12">
      <div className="pointer-events-none absolute -top-16 -start-16 size-64 rounded-full bg-olive-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -end-16 size-64 rounded-full bg-gold/20 blur-3xl" />
      <h2 className="relative text-2xl font-extrabold md:text-3xl">{title}</h2>
      <p className="relative mx-auto mt-3 max-w-xl text-olive-100">مشاوره رایگان، ارسال به تهران، کرج و زنجان، قیمت عمده مستقیم از تولیدکننده.</p>
      <div className="relative mt-7 flex flex-wrap justify-center gap-3">
        <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 font-bold text-olive-900 transition hover:bg-gold-600 hover:text-white"><Icon n="phone" /> تماس تلفنی</a>
        <a href={`https://wa.me/${site.whatsapp}`} className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-bold transition hover:bg-white/10"><Icon n="chat" /> واتساپ</a>
      </div>
    </div>
  );
}
