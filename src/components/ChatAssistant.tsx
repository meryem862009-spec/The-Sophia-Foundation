'use client';
import { useState } from 'react';

export default function ChatAssistant() {
  const [q, setQ] = useState('');
  const [a, setA] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function ask() {
    if (!q.trim()) return;
    setLoading(true);
    setA('');
    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: q })
    });
    const data = await res.json();
    setA(data.answer || '');
    setLoading(false);
  }

  return (
    <div className="rounded-2xl p-6 bg-white border shadow-sm">
      <h3 className="text-xl font-semibold mb-2">AI Help</h3>
      <div className="flex gap-2">
        <input className="flex-1 rounded-xl border px-3 py-2" placeholder="Ask about DIPG resources, logistics, etc." value={q} onChange={e=>setQ(e.target.value)} />
        <button onClick={ask} disabled={loading} className="px-4 py-2 rounded-xl bg-gold text-white disabled:opacity-60">{loading ? 'Thinking…' : 'Ask'}</button>
      </div>
      {a && <div className="mt-4 whitespace-pre-wrap text-neutral-800">{a}</div>}
    </div>
  );
}
