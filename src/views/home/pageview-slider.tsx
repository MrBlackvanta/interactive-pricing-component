import type { CSSProperties } from "react";

type PageviewSliderProps = {
  value: number;
  max: number;
  valueText: string;
  onChange: (value: number) => void;
};

export default function PageviewSlider({
  value,
  max,
  valueText,
  onChange,
}: PageviewSliderProps) {
  return (
    <input
      id="pageviews"
      type="range"
      min={0}
      max={max}
      step={1}
      value={value}
      onChange={(event) => onChange(event.currentTarget.valueAsNumber)}
      aria-label="Monthly pageviews"
      aria-valuetext={valueText}
      className="v-slider h-10 w-full cursor-pointer lg:col-span-2 lg:row-start-2"
      style={{ "--progress": `${(value / max) * 100}%` } as CSSProperties}
    />
  );
}
