import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).end();

  const { priceId } = req.body;

  const priceIds = Array.isArray(priceId) ? priceId : [priceId];
  const line_items = priceIds.map((id: string) => ({ price: id, quantity: 1 }));

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items,
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://foundherai.ai'}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://foundherai.ai'}/#foundhers-club`,
  });

  res.status(200).json({ url: session.url });
}
