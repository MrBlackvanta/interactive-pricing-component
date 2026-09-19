import { CheckIcon } from "@/components/icons";
import PricingControls from "./pricing-controls";

const perks = ["Unlimited websites", "100% data ownership", "Email reports"];

export default function PricingCard() {
  return (
    <section
      aria-labelledby="pricing-title"
      className="shadow-card mx-auto w-full max-w-135 rounded-lg bg-white"
    >
      <h2 id="pricing-title" className="sr-only">
        Pricing
      </h2>
      <PricingControls />
      <div className="border-rule grid gap-8 border-t px-6 pt-6 pb-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:pt-8">
        <ul className="text-ui grid justify-items-center gap-2.75 font-semibold lg:justify-items-start">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-4">
              <CheckIcon className="text-accent w-2.25 shrink-0" />
              {perk}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="v-focus-ring bg-ink text-ui text-ink-on-dark justify-self-center rounded-full px-11.5 py-3 font-extrabold hover:text-white motion-safe:transition-colors lg:justify-self-end"
        >
          Start my trial
        </button>
      </div>
    </section>
  );
}
