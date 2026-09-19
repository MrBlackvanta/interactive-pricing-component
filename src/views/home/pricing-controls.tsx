"use client";

import { DEFAULT_TIER_INDEX, tiers, YEARLY_RATE } from "@/data/tiers";
import { useState } from "react";
import BillingToggle from "./billing-toggle";
import PageviewSlider from "./pageview-slider";
import PriceDisplay from "./price-display";

export default function PricingControls() {
  const [tierIndex, setTierIndex] = useState(DEFAULT_TIER_INDEX);
  const [yearly, setYearly] = useState(false);
  const [priceCounts, setPriceCounts] = useState(false);

  const tier = tiers[tierIndex];
  const label = `${tier.pageviews} pageviews`;

  const selectTier = (index: number) => {
    setPriceCounts(false);
    setTierIndex(index);
  };

  const selectBilling = (nextYearly: boolean) => {
    setPriceCounts(true);
    setYearly(nextYearly);
  };

  return (
    <div className="grid gap-y-6 px-6 pt-8.5 pb-9.5 lg:grid-cols-2 lg:px-12 lg:py-10">
      <p className="text-eyebrow lg:text-eyebrow-lg text-center font-extrabold uppercase lg:col-start-1 lg:row-start-1 lg:self-center lg:text-left">
        {label}
      </p>
      <PageviewSlider
        value={tierIndex}
        max={tiers.length - 1}
        valueText={label}
        onChange={selectTier}
      />
      <PriceDisplay
        price={yearly ? tier.monthly * YEARLY_RATE : tier.monthly}
        counts={priceCounts}
      />
      <BillingToggle yearly={yearly} onChange={selectBilling} />
    </div>
  );
}
