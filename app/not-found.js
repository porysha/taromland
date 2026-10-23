import Link from "next/link";
export default function NotFound() {
  return <div className="grid min-h-[50vh] place-items-center text-center"><div><h1 className="text-5xl font-extrabold text-olive-700">۴۰۴</h1><p className="mt-2">صفحه پیدا نشد</p><Link href="/" className="mt-4 inline-block rounded-xl bg-olive-800 px-6 py-2 text-white">بازگشت به خانه</Link></div></div>;
}
