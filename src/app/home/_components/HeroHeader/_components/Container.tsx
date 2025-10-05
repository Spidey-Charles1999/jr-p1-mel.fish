import type { FC, PropsWithChildren } from "react";
import bgLeft from "../_assets/hero-bg-left.png";
import bgRight from "../_assets/hero-bg-right.png";
import bgIll from "../_assets/hero-illustration.png";

const Container: FC<PropsWithChildren> = ({ children }) => (
  <section className="relative overflow-hidden bg-background min-h-[55.63rem]">
    <img
      src={bgRight}
      alt=""
      aria-hidden
      className="select-none absolute right-0 top-0 h-[50.1875rem] w-[79.0625rem] object-cover"
    />
    <img
      src={bgLeft}
      alt=""
      aria-hidden
      className="select-none absolute left-0 top-[9.06rem] h-[41.0625rem] w-[9.0625rem] object-cover"
    />
    
    <div className="absolute right-[6.25rem] top-[7.19rem] h-[41.06rem] w-[48.75rem]">
      <img
        src={bgIll}
        alt=""
        aria-hidden
        className="pointer-events-none select-none h-full w-full object-contain"
      />
    </div>

    <div className="relative">
      {children}
    </div>
  </section>
);

export default Container;
