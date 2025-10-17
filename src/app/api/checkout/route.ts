import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { amountCents } = await req.json();
    if (!amountCents || amountCents < 100) {
      return NextResponse.json({ error: 'Minimum $1.00' }, { status: 400 });
    }

    const origin = process.env.NEXT_PUBLIC_SITE_URL || req.headers.get('origin') || '';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Donation to Sophia Foundation' },
            unit_amount: amountCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/impacts?ok=1`,
      cancel_url: `${origin}/donate?canceled=1`,
      metadata: { purpose: 'donation' },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
