import { icons } from "../../_data";
import type { Target } from "../../_data";

interface Props {
  target: Target;
}

export default function AudienceCard({ target }: Props) {
  const set = icons[target.icon];
  return (
    <article className="flex flex-col items-center rounded-3xl p-8 bg-muted">
      <img
        src={set["1x"]}
        srcSet={`${set["1x"]} 1x, ${set["2x"]} 2x`}
        alt=""
        width={64}
        height={64}
        loading="lazy"
        decoding="async"
        className="mb-4 h-16 w-16 select-none"
      />

      <div className="relative inline-block">
        <h3 className="relative z-[2] text-left font-bold text-[1.75rem] leading-[3.5625rem] text-foreground">
          {target.title}
        </h3>
        <span aria-hidden className="absolute left-1/2 z-[1] h-[0.3125rem] w-[6.125rem] -translate-x-1/2 -translate-y-4 -bottom-0 bg-accent" />
      </div>

      <p className="mt-2 text-left text-[1.3125rem] leading-[2.625rem] text-foreground">{target.subTitle}</p>
      <p className="mt-4 text-center text-[1rem] leading-[2rem] text-[var(--foreground-70)]">{target.text}</p>
    </article>
  );
}

