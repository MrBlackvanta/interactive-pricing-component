import type { CSSProperties } from "react";

const COUNT_MS = 300;

type PriceDisplayProps = {
  price: number;
  counts: boolean;
};

export default function PriceDisplay({ price, counts }: PriceDisplayProps) {
  return (
    <output
      htmlFor="pageviews billing"
      className="flex items-center justify-center gap-2 lg:col-start-2 lg:row-start-1 lg:justify-end"
    >
      <span className="sr-only">${price}.00 per month</span>
      <span
        aria-hidden="true"
        className="text-price lg:text-price-lg text-ink font-extrabold tabular-nums"
      >
        $
        <span
          className="v-price"
          style={
            {
              "--price": price,
              "--count": `${counts ? COUNT_MS : 0}ms`,
            } as CSSProperties
          }
        />
        .00
      </span>
      <span
        aria-hidden="true"
        className="text-unit lg:text-unit-lg font-semibold"
      >
        / month
      </span>
    </output>
  );
}
