import DonationCard from "@/components/DonationCard";

export const metadata = { title: "Donate — Sophia Foundation" };

export default function DonatePage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-semibold">Donate</h1>
      <DonationCard />
    </div>
  );
}
