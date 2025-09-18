import logo from "./_assets/hero-logo.png";
import cofoundeer from "./_assets/hero-illustration.png";
import background1 from "./_assets/hero-bg-right.png";
import background2 from "./_assets/hero-bg-left.png";
import CTAButton from "../../../../_components/CTAButton";
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
          <nav className="absolute right-[60px] top-[31px]">
            <ul
              className="group/menus flex text-white items-center"
              style={{ gap: "106px" }}
            >
                {/* About Us */}
                <li className="group flex h-[25px] items-center">
                  <a
                    href="#"
                    className="relative block transition-colors duration-300"
                    style={{ fontFamily: FF, fontSize: "18px", lineHeight: "25px" }}
                  >
                    About Us
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute left-1/2 -translate-x-1/2
                        -bottom-2 h-[3px] w-0 rounded-full bg-white
                        opacity-0 transition-[opacity,width] duration-300 ease-out
                        group-hover:opacity-100 group-hover:w-[50px]
                      "
                    />
                  </a>
                </li>

                {/* Products */}
                <li className="group flex h-[25px] items-center">
                  <a
                    href="#"
                    className="relative block transition-colors duration-300"
                    style={{ fontFamily: FF, fontSize: "18px", lineHeight: "25px" }}
                  >
                    Products
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute left-1/2 -translate-x-1/2
                        -bottom-2 h-[3px] w-0 rounded-full bg-white
                        opacity-0 transition-[opacity,width] duration-300 ease-out
                        group-hover:opacity-100 group-hover:w-[50px]
                      "
                    />
                  </a>
                </li>

                {/* Blog */}
                <li className="group flex h-[25px] items-center">
                  <a
                    href="#"
                    className="relative block transition-colors duration-300"
                    style={{ fontFamily: FF, fontSize: "18px", lineHeight: "25px" }}
                  >
                    Blog
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute left-1/2 -translate-x-1/2
                        -bottom-2 h-[3px] w-0 rounded-full bg-white
                        opacity-0 transition-[opacity,width] duration-300 ease-out
                        group-hover:opacity-100 group-hover:w-[50px]
                      "
                    />
                  </a>
                </li>

                {/* See All Service —— 默认显示；当鼠标移到其它项时自动隐藏 */}
                <li className="group flex h-[25px] items-center">
                  <a
                    href="#"
                    className="relative block transition-colors duration-300"
                    style={{ fontFamily: FF, fontSize: "18px", lineHeight: "25px" }}
                  >
                    See All Service
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute left-1/2 -translate-x-1/2
                        -bottom-2 h-[3px] rounded-full bg-white
                        transition-[opacity,width] duration-300 ease-out
                        w-[50px] opacity-100
                        group-hover/menus:w-0 group-hover/menus:opacity-0   /* 鼠标在任何菜单项上时先收起 */
                        hover:!w-[50px] hover:!opacity-100                  /* 如果正好悬停在本项，再展开 */
                      "
                    />
                  </a>
                </li>
              </ul>
            </nav>
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
