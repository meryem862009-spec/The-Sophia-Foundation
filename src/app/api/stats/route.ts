import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

// Simple totals by summing succeeded PaymentIntents
export async function GET(_req: NextRequest) {
  try {
    let totalCents = 0;
    let count = 0;

    const iter = stripe.paymentIntents.list({limit: 100});
    // Note: for production, paginate through all results
    for await (const pi of (iter as any)) {
      if (pi.status === 'succeeded' && (pi.metadata?.purpose === 'donation' || true)) {
        totalCents += pi.amount_received || 0;
        count += 1;
      }
    }

    return NextResponse.json({ totalCents, count });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
