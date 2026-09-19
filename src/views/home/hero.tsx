import PatternCircles from "@/components/pattern-circles";

export default function Hero() {
  return (
    <header className="relative grid min-h-36 place-content-center gap-2 text-center lg:gap-3">
      <PatternCircles className="text-control absolute top-1/2 left-1/2 -z-10 h-36.25 w-36.5 -translate-x-1/2 -translate-y-1/2" />
      <h1 className="text-display lg:text-display-lg text-ink font-extrabold">
        Simple, traffic-based pricing
      </h1>
      <p className="text-lead lg:text-lead-lg leading-lead lg:leading-base font-semibold">
        Sign-up for our 30-day trial.
        <br className="lg:hidden" /> No credit card required.
      </p>
    </header>
  );
}
