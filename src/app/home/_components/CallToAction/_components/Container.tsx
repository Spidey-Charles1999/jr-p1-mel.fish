import type { FC, PropsWithChildren } from "react";
import wave1x from "../_assets/wave-mask@1x.png";
import wave2x from "../_assets/wave-mask@2x.png";

const Container: FC<PropsWithChildren> = ({ children }) => (
  <section className="relative overflow-hidden bg-secondary">
    <div className="absolute inset-0">
      <div
        className="h-full w-full bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `image-set(url(${wave1x}) 1x, url(${wave2x}) 2x)`,
          backgroundSize: "100% 100%",
        }}
      />
    </div>

    <div className="relative container mx-auto max-w-4xl text-center">
      {children}
    </div>
  </section>
);

export default Container;
