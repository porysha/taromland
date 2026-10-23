import { Vazirmatn } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";
import "./globals.css";

const font = Vazirmatn({ subsets: ["arabic", "latin"], display: "swap", variable: "--font-vazir" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: "خرید و پخش عمده زیتون و روغن زیتون | برگ زیتون", template: "%s | برگ زیتون" },
  description: "پخش عمده زیتون و روغن زیتون طارم زنجان، برنج، سبزیجات آماده و پاک‌شده. شعبه فردیس کرج و چورزق طارم؛ ارسال به تهران، ملارد، شهریار و اندیشه.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fa_IR", siteName: site.name, images: ["/images/hero.webp"] },
  robots: { index: true, follow: true },
};
export const viewport = { themeColor: "#1f2a10" };

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={font.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <a href={`tel:${site.phone}`} aria-label="تماس" className="fixed bottom-5 start-5 z-40 grid size-14 place-items-center rounded-full bg-gold text-olive-900 shadow-xl transition hover:scale-110 md:hidden"><Icon n="phone" className="size-6" /></a>
      </body>
    </html>
  );
}
