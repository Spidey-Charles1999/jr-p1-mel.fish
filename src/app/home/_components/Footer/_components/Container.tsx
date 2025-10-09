import type { FC, PropsWithChildren } from "react";


const Container: FC<PropsWithChildren> = ({ children }) => (
  <footer className="relative overflow-hidden bg-footer-background">
    <div className="container w-full max-w-[1920px] min-h-[326px] text-center">
      {children}
    </div>
    
  </footer>
);

export default Container;
