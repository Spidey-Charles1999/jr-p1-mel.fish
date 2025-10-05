import type { FC } from "react";
import Container from "./_components";
import Logo from "../../../_components/Logo";
import NavigationMenu from "../../../_components/NavigationMenu";



const Footer: FC = () => (
  <Container>
    <div className="mx-auto flex w-full flex-col items-center sm:px-12 lg:flex-row lg:items-start lg:justify-between lg:px-[20rem] lg:pt-[3.125rem] ">
      <Logo size="lg" alt="Melfish" />
      <NavigationMenu variant="footer" className="lg:mt-[2rem]" />
    </div>
    <hr className="w-[80rem] border-0 border-t border-background/10 mx-[20rem] mt-[3.5rem]"/>
    <div className="py-[2.31rem] text-center">
          <h1 className="font-sans font-bold text-[24px] text-background tracking-tight" >
            Technical Excellence You Can Trust
          </h1>
          <p className="mt-[0.68rem] font-sans font-bold text-[18px] text-footer-foreground">
            Trusted development partner for every stage of your product journey, from idea to scale
          </p>

        </div>
  </Container>
);

export default Footer;
