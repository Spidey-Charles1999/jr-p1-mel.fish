import logo from "./_assets/hero-logo.png";
import cofoundeer from "./_assets/hero-illustration.png";
import background1 from "./_assets/hero-bg-right.png";
import background2 from "./_assets/hero-bg-left.png";
import CTAButton from "../../../../_components/CTAButton";
import NavigationMenu from "../../../../_components/NavigationMenu";
import buttonIcon from "./_assets/hero-cta-icon.png";

const FF = "PingFang SC-Bold";


// 字体大小常量
const title = "67px";
function HeroHeader() {

  return (
    <>
      <section
        className="relative bg-no-repeat h-[890px]"
        style={{
          backgroundImage: `url(${background1}), url(${background2})`,
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'right top, left bottom',
          backgroundSize: '1265px 803px, 145px 657px',
        }}
      >
        <header className="relative bg-transparent box-border">
          <img
            src={logo}
            alt="Melfish logo"
            className="absolute left-[42px] top-[19px]"
            style={{ width: "189.91px", height: "49.51px" }}
          />
          <NavigationMenu
            className="absolute right-[60px] top-[31px]"
            fontFamily={FF}
          />
        </header>
        <div
          className="absolute"
          style={{
            top: "277px",
            left: "320px",
            width: "692px",
            height: "190px",
          }}
        >
          <h1
            className="font-bold text-black text-left w-full"
            style={{ fontFamily: FF, fontSize: title}}
          >
            Your Technical Co–
            founder in Melbourne
          </h1>
        </div>
        <div
          className="absolute"
          style={{
            top: "476px",
            left: "320px",
            width: "506px",
            height: "72px",
          }}
        >
          <p
            style={{fontFamily: FF,}}>
            <span
              className="block"
              style={{ letterSpacing: "-0.3px" }}
            >
              We build, accelerate, and scale exceptional&nbsp;digital&nbsp;products
            </span>
            <span className="block">
              through expert consulting and&nbsp;
              <span className="whitespace-nowrap">hands–on incubation.</span>
            </span>
          </p>
        </div>
        <div
          className="absolute"
          style={{ top: "585px", left: "320px" }}
        >
          <CTAButton
            label="See All Service"
            iconSrc={buttonIcon}
          />
        </div>


        <div className="absolute"
        style={{
          top: "115px",
          left: "1040px",
          width: "780px",
          height: "657px",
        }}>
          <img
            src={cofoundeer}
            alt="Technical Co-founder"
            className="w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}

export default HeroHeader;
