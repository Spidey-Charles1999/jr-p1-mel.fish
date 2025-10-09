import type { FC } from "react";
import Button from "../../../_components/Button";
import Container from "./_components";

const CallToAction: FC = () => (
  <Container>
    <h2 className="mt-[5.4375rem] max-w-[951px] font-sans font-bold text-[42px] leading-[59px] text-foreground text-center">
      We believe building great software should be
      seamless, scalable, and worry-free. Get started
      with Melfish today!
    </h2>
    <Button 
      size="cwoea" 
      showArrow  
      className="mt-[3.125rem] mb-[3.5625rem] px-[26px]">
      Connect with our experts
    </Button>
  </Container>
);

export default CallToAction
