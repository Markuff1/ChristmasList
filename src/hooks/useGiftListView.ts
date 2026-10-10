import { useMemo, useState } from "react";
import type { Gift } from "../data/types";
import { sumPrices, parsePrice } from "../utils/currency";

export type SortOption = "name" | "price" | "new" | "Lego" | null;

export function useGiftListView(items: Gift[]) {
  const [sortOption, setSortOption] = useState<SortOption>(null);

  const total = useMemo(() => sumPrices(items), [items]);

  const displayedGifts = useMemo(() => {
    let gifts = [...items];

    if (sortOption === "new") {
      gifts = gifts.filter((gift) => gift.isNew);
    }

    if (sortOption === "Lego") {
      gifts = gifts.filter((gift) => gift.shop === "Lego");
    }

    if (sortOption === "name") {
      gifts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortOption === "price") {
      gifts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return gifts;
  }, [items, sortOption]);

  return { sortOption, setSortOption, displayedGifts, total };
}
