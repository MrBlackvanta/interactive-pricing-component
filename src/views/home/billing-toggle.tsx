type BillingToggleProps = {
  yearly: boolean;
  onChange: (yearly: boolean) => void;
};

export default function BillingToggle({
  yearly,
  onChange,
}: BillingToggleProps) {
  return (
    <div className="text-ui mt-2.5 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 font-semibold lg:col-span-2 lg:row-start-3 lg:mt-4 lg:grid-cols-[auto_auto_auto] lg:justify-center lg:gap-x-4">
      <span className="justify-self-end whitespace-nowrap">
        Monthly Billing
      </span>
      <button
        id="billing"
        type="button"
        role="switch"
        aria-checked={yearly}
        aria-labelledby="billing-label"
        onClick={() => onChange(!yearly)}
        className="group/toggle v-focus-ring bg-control hover:bg-accent-hover aria-checked:bg-accent relative h-5.5 w-10.75 rounded-full motion-safe:transition-colors"
      >
        <span className="absolute top-1 left-1 size-3.5 rounded-full bg-white group-aria-checked/toggle:translate-x-5.25 motion-safe:transition-transform" />
      </button>
      <div className="xs:grid-flow-col relative grid items-center justify-items-start gap-1.5 whitespace-nowrap">
        <span id="billing-label">Yearly Billing</span>
        <span
          aria-hidden="true"
          className="bg-discount text-discount-ink text-badge rounded-full px-1.75 py-0.75 font-extrabold lg:absolute lg:top-1/2 lg:left-full lg:ml-2.25 lg:-translate-y-1/2"
        >
          <span className="lg:hidden">-25%</span>
          <span className="hidden lg:inline">25% discount</span>
        </span>
      </div>
    </div>
  );
}
