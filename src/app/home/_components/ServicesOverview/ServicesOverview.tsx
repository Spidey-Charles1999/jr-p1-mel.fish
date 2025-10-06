import heroPatternMain from "./_assets/services-hero-pattern-main.png";
import heroPatternSecondary from "./_assets/services-hero-pattern-secondary.png";
import heroPatternAccent from "./_assets/services-hero-pattern-accent.png";
import { Cards, ServiceHeader } from "./_components";

function ServicesOverview() {
  return (
    <div
      className="justify-center border-box justify-items-center bg-secondary py-3 bg-no-repeat"
      style={{
        backgroundImage: `url(${heroPatternMain}), url(${heroPatternSecondary}), url(${heroPatternAccent})`,
        backgroundPosition: "right top, right 85%, left 55%",
        backgroundSize: "28% auto, 12% auto, 15% auto",
      }}
    >
      <div className="mx-auto max-w-[1360px] px-[40px] py-12 lg:py-16">
        <ServiceHeader />
        <Cards />
      </div>
    </div>
  );
}

export default ServicesOverview;
