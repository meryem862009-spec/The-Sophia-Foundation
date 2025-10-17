'use client';
import { useState } from 'react';

const presets = [25, 50, 100, 250];

export default function DonationCard() {
  const [amount, setAmount] = useState<number>(50);
  const [loading, setLoading] = useState(false);

  async function donate() {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amountCents: amount * 100 }),
      });
      if (!res.ok) throw new Error('Failed to create checkout session');
      const { url } = await res.json();
      window.location.href = url;
    } catch (e) {
      alert('Something went wrong starting checkout.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl p-6 bg-white border shadow-sm">
      <h3 className="text-xl font-semibold">Make a donation</h3>
      <p className="text-neutral-600 mt-1">Choose an amount or enter your own.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {presets.map(v => (
          <button key={v} onClick={() => setAmount(v)} className={`px-4 py-2 rounded-xl border ${amount===v ? 'bg-gold text-white border-gold' : ''}`}>
            ${v}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <label className="text-sm">Custom amount (USD)</label>
        <input
          type="number"
          min={1}
          value={amount}
          onChange={(e)=> setAmount(Math.max(1, Math.round(Number(e.target.value)||0)))}
          className="mt-1 w-40 px-3 py-2 rounded-xl border"
        />
      </div>
      <button onClick={donate} disabled={loading} className="mt-6 px-5 py-3 rounded-2xl bg-gold text-white font-medium disabled:opacity-60">
        {loading ? 'Redirecting…' : 'Donate with Stripe'}
      </button>
      <p className="text-xs text-neutral-500 mt-3">Secure checkout via Stripe.</p>
    </div>
  );
}
