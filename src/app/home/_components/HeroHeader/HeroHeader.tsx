import type { FC } from "react";
import Container from "./_components";
import Logo from "../../../_components/Logo";
import NavigationMenu from "../../../_components/NavigationMenu";
import Button from "../../../_components/Button";

const HeroHeader: FC = () => (
  <Container>
    <div className="flex w-full">
    <Logo size="sm" alt="Melfish" className="mt-[1.19rem] ml-[2.63rem]"/>
    <NavigationMenu variant="header" className="mt-[1.94rem] ml-auto mr-[3.75rem] "/>
    </div>
    <div className="flex flex-col w-[43.25rem]  mt-[13rem] ml-[20rem]">
      <h1 className="font-sans font-bold text-[67px] text-foreground ">
            Your Technical Co–founder in Melbourne
      </h1>
      <p className="font-sans text-[18px] leading-[36.33px] text-foreground ">
      We build, accelerate, and scale exceptional digital products<br />
      through expert consulting and hands–on incubation.
      </p>
      <Button
        size="sas"
        showArrow
        className="mt-[2.31rem]"
      >
        See All Service
      </Button>
    </div>
    
  </Container>
);

export default HeroHeader;
