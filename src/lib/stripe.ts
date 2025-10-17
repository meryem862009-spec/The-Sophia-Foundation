// src/lib/stripe.ts
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}

// Let the Stripe SDK pick the correct apiVersion for the installed package
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
