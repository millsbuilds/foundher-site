export async function createCheckoutSession(priceId: string | string[]) {
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId }),
  });
  const data = await response.json();
  return data;
}
