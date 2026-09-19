import { Signature } from "@/components/layout";
import { Hero, PricingCard } from "@/views/home";

export default function Home() {
  return (
    <>
      <main className="v-band relative grid gap-8 px-6 pt-14.5 pb-12 lg:gap-13.5 lg:pt-17">
        <Hero />
        <PricingCard />
      </main>
      <Signature />
    </>
  );
}
