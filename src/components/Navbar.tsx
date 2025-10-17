import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-pink-soft/60 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={28} height={28} />
          <span className="font-semibold">Sophia Foundation</span>
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/donate">Donate</Link>
          <Link href="/for-families">For Families</Link>
          <Link href="/impacts">Impacts</Link>
        </nav>
      </div>
    </header>
  );
}
