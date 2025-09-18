import logo from "./_assets/hero-logo.png";
import cofoundeer from "./_assets/hero-illustration.png";
import background1 from "./_assets/hero-bg-right.png";
import background2 from "./_assets/hero-bg-left.png";
import CTAButton from "../../../../_components/CTAButton";
import buttonIcon from "./_assets/hero-cta-icon.png";

const FF = "PingFang SC-Bold";

function HeroHeader() {
  return (
    <section
      className="relative overflow-hidden bg-no-repeat"
      style={{
        backgroundImage: `url(${background1}), url(${background2})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "right top, left bottom",
        backgroundSize: "min(1265px, 120vw) auto, min(145px, 30vw) auto",
      }}
    >
      <div className="relative mx-auto flex min-h-[740px] w-full max-w-[1360px] flex-col px-4 pb-16 pt-8 sm:px-8 lg:px-[40px] lg:pt-10">
        <header className="flex w-full flex-wrap items-center justify-between gap-6 text-white">
          <img
            src={logo}
            alt="Melfish logo"
            className="h-[49.51px] w-[189.91px] max-w-full"
          />
          <nav className="w-full sm:w-auto">
            <ul className="group/menus flex flex-wrap items-center justify-center gap-6 text-base lg:gap-[106px]">
              <li className="group flex h-[25px] items-center">
                <a
                  href="#"
                  className="relative block transition-colors duration-300"
                  style={{ fontFamily: FF, fontSize: "18px", lineHeight: "25px" }}
                >
                  About Us
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 -bottom-2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-white opacity-0 transition-[opacity,width] duration-300 ease-out group-hover:opacity-100 group-hover:w-[50px]"
                  />
                </a>
              </li>
              <li className="group flex h-[25px] items-center">
                <a
                  href="#"
                  className="relative block transition-colors duration-300"
                  style={{ fontFamily: FF, fontSize: "18px", lineHeight: "25px" }}
                >
                  Products
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 -bottom-2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-white opacity-0 transition-[opacity,width] duration-300 ease-out group-hover:opacity-100 group-hover:w-[50px]"
                  />
                </a>
              </li>
              <li className="group flex h-[25px] items-center">
                <a
                  href="#"
                  className="relative block transition-colors duration-300"
                  style={{ fontFamily: FF, fontSize: "18px", lineHeight: "25px" }}
                >
                  Blog
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 -bottom-2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-white opacity-0 transition-[opacity,width] duration-300 ease-out group-hover:opacity-100 group-hover:w-[50px]"
                  />
                </a>
              </li>
              <li className="group flex h-[25px] items-center">
                <a
                  href="#"
                  className="relative block transition-colors duration-300"
                  style={{ fontFamily: FF, fontSize: "18px", lineHeight: "25px" }}
                >
                  See All Service
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 -bottom-2 h-[3px] w-[50px] -translate-x-1/2 rounded-full bg-white opacity-100 transition-[opacity,width] duration-300 ease-out group-hover/menus:w-0 group-hover/menus:opacity-0 hover:!w-[50px] hover:!opacity-100"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="mt-16 flex flex-1 flex-col-reverse items-center gap-14 lg:mt-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex w-full flex-col items-center text-center lg:max-w-[640px] lg:items-start lg:text-left lg:flex-1">
            <h1
              className="font-bold text-black leading-[1.1] text-[42px] sm:text-[52px] lg:text-[67px]"
              style={{ fontFamily: FF }}
            >
              Your Technical Co–
              <br className="hidden lg:block" />
              founder in Melbourne
            </h1>
            <p
              className="mt-6 text-lg text-black sm:text-xl"
              style={{ fontFamily: FF }}
            >
              <span className="block">We build, accelerate, and scale exceptional&nbsp;digital&nbsp;products</span>
              <span className="block">
                through expert consulting and&nbsp;
                <span className="whitespace-nowrap">hands–on incubation.</span>
              </span>
            </p>
            <div className="mt-10 flex w-full justify-center lg:justify-start">
              <CTAButton label="See All Service" iconSrc={buttonIcon} />
            </div>
          </div>

          <div className="flex w-full justify-center lg:flex-1 lg:max-w-none lg:justify-end">
            <img
              src={cofoundeer}
              alt="Technical Co-founder"
              className="h-auto w-full max-w-[540px] lg:max-w-[620px] xl:max-w-[780px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHeader;
