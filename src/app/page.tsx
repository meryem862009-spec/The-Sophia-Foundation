import Link from "next/link";
import { brand } from "@/lib/theme";

export default function HomePage() {
  return (
    <div className="grid gap-8">
      <section className="rounded-2xl p-8 bg-white shadow-sm">
        <h1 className="text-3xl font-semibold">{brand.name}</h1>
        <p className="text-neutral-700 mt-2">{brand.tagline}</p>
        <div className="mt-6 flex gap-4">
          <Link href="/donate" className="px-5 py-3 rounded-2xl bg-gold text-white font-medium">Donate</Link>
          <Link href="/for-families" className="px-5 py-3 rounded-2xl bg-white border border-gold text-gold font-medium">AI Help for Families</Link>
          <Link href="/impacts" className="px-5 py-3 rounded-2xl bg-white border font-medium">Impacts</Link>
        </div>
      </section>
      <section className="rounded-2xl p-8 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Why donate?</h2>
        <p className="text-neutral-700">Your gift fuels DIPG research and provides practical support resources to families navigating a devastating diagnosis.</p>
      </section>
    </div>
  );
}
