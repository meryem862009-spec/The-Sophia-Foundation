'use client';
import { useEffect, useState } from 'react';
import { formatCurrency } from '@/lib/utils';

export default function ImpactsPage() {
  const [total, setTotal] = useState<number | null>(null);
  const [count, setCount] = useState<number | null>(null);

  useEffect(()=>{
    (async()=>{
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setTotal(data.totalCents ?? 0);
        setCount(data.count ?? 0);
      } catch {}
    })();
  },[]);

  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-semibold">Impacts</h1>
      <div className="rounded-2xl p-6 bg-white border shadow-sm grid gap-3">
        <div className="text-2xl">Total raised: {total===null ? '…' : formatCurrency(total)}</div>
        <div className="text-neutral-600">Number of donations: {count===null ? '…' : count}</div>
        <p className="text-neutral-600">This number updates automatically from Stripe. For detailed reporting, we can later add a database + webhooks.</p>
      </div>
    </div>
  );
}
