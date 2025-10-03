import type { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => (
  <section className="py-20 px-4 relative overflow-hidden">
    <div className="container mx-auto max-w-4xl text-center">{children}</div>
  </section>
);

export default Container;
