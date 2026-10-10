import type { Gift } from "../data/types";

export function parsePrice(price?: string): number {
  const match = price?.match(/£?([\d.]+)/);
  return match ? parseFloat(match[1]) : 0;
}

export function sumPrices(items: Gift[]): number {
  return items.reduce((sum, item) => sum + parsePrice(item.price), 0);
}
