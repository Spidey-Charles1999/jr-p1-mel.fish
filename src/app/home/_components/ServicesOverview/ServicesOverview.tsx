import heroPatternMain from "./_assets/services-hero-pattern-main.png";
import heroPatternSecondary from "./_assets/services-hero-pattern-secondary.png";
import heroPatternAccent from "./_assets/services-hero-pattern-accent.png";
import leftCardBackground from "./_assets/services-card-bg-left.png";
import rightCardBackground from "./_assets/services-card-bg-right.png";
import titleUnderline from "./_assets/services-title-underline.png";
import fullStackConsultingImage from "./_assets/service-full-stack-consulting.png";
import productIncubationImage from "./_assets/service-product-incubation.png";
import technologyAccelerationImage from "./_assets/service-technology-acceleration.png";
import dedicatedDevelopmentImage from "./_assets/service-dedicated-development.png";
import TitleWithCircle from "../../../../_components/TitleWithCircle";

const button_color = "#2D7597";
const background = "#F7F7F7";
const label = "#FD933F";

const FF = "PingFang SC, PingFang SC";

const title = "Services";
const small_title = "3.5rem";
const section = "2.625rem";
const paragraph = "1.125rem";
const button = "1rem";
const PAGE_PADDING = "px-[40px]";
const PAGE_MAXW = "max-w-[1360px]";
const PAGE_SPACING_Y = "py-12 lg:py-16";

function ServicesOverview() {
  return (
    <div
      className="justify-center border-box justify-items-center py-3 bg-no-repeat"
      style={{
        backgroundImage: `url(${heroPatternMain}), url(${heroPatternSecondary}), url(${heroPatternAccent})`,
        backgroundPosition: "right top, right 85%, left 55%",
        backgroundSize: "28% auto, 12% auto, 15% auto",
        backgroundColor: background,
      }}
    >
      <div className={`mx-auto ${PAGE_MAXW} ${PAGE_PADDING} ${PAGE_SPACING_Y}`}>
        <div className="mb-20">
          <div className="mb-[88px]">
            <TitleWithCircle text={title} />
          </div>
          <div className="mb-[124px]">
            <h1
              className="font-bold"
              style={{ fontSize: small_title, fontFamily: FF }}
            >
              Building with Precision, Delivering <br /> with lmpact.
            </h1>
            <h3
              className="mt-4 mb-5"
              style={{ fontSize: paragraph, fontFamily: FF }}
            >
              We provide end-to-end solutions to bring your digital ideas to
              life.
            </h3>
            <button
              className="flex items-center mt-8 space-x-3 py-2.5 px-4 rounded-full hover:bg-button_hover max-h-14"
              style={{ backgroundColor: button_color }}
            >
              <h5
                className="text-white"
                style={{ fontSize: button, fontFamily: FF }}
              >
                Connect with our experts
              </h5>
            </button>
          </div>
        </div>
        <section className="space-y-12">
          <div
            className="grid w-full items-center gap-8 bg-cover bg-no-repeat py-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:min-h-[360px]"
            style={{
              backgroundImage: `url(${leftCardBackground})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "left center",
            }}
          >
            <div className="grid gap-3 pl-10">
              <h3
                className="font-bold bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${titleUnderline})`,
                  backgroundSize: "auto 15px",
                  backgroundPosition: "left 85%",
                  fontSize: section,
                  fontFamily: FF,
                }}
              >
                Full-stack Consulting
              </h3>
              <h5
                style={{ fontSize: paragraph, fontFamily: FF }}
              >
                Expert guidance on architecture, tech stack, and bestpractices
                for building robust and scalable applications
              </h5>
              <div
                className="flex gap-3"
                style={{ fontSize: button, fontFamily: FF }}
              >
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  1099 taxes
                </p>
                <p
                  className=" bg-label bg-opacity-10 h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Dependents
                </p>
                <p
                  className=" bg-label bg-opacity-10 h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Trust Taxes
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={fullStackConsultingImage}
                alt="Full-stack Consulting"
                className="h-64 w-64 object-contain"
              ></img>
            </div>
          </div>

          <div
            className="grid w-full items-center gap-8 bg-cover bg-no-repeat py-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:min-h-[360px]"
            style={{
              backgroundImage: `url(${rightCardBackground})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "right center",
            }}
          >
            <div className="flex justify-center lg:justify-start">
              <img
                src={productIncubationImage}
                alt="Full-stack Consulting"
                className="w-[11rem] object-contain"
              ></img>
            </div>
            <div className="grid gap-3 pr-10 text-right">
              <h3
                className="font-bold bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${titleUnderline})`,
                  backgroundSize: "auto 15px",
                  backgroundPosition: "right 85%",
                  fontSize: section,
                  fontFamily: FF,
                }}
              >
                Product Incubation
              </h3>
              <h5
                style={{ fontSize: paragraph, fontFamily: FF }}
              >
                From idea to MVP, we partner with you to build, launch,and grow
                your next big thing.
              </h5>
              <div className="flex justify-end gap-3" style={{ fontSize: button, fontFamily: FF }}>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  1099 taxes
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Dependents
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Trust Taxes
                </p>
              </div>
            </div>
          </div>

          <div
            className="grid w-full items-center gap-8 bg-cover bg-no-repeat py-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:min-h-[360px]"
            style={{
              backgroundImage: `url(${leftCardBackground})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "left center",
            }}
          >
            <div className="grid gap-3 pl-10">
              <h3
                className="font-bold bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${titleUnderline})`,
                  backgroundSize: "auto 15px",
                  backgroundPosition: "left 85%",
                  fontSize: section,
                  fontFamily: FF,
                }}
              >
                Technology Acceleration
              </h3>
              <h5
                style={{ fontSize: paragraph, fontFamily: FF }}
              >
                Accelerate your development cycles and enhance yourteam's
                capabilities with our hands-on expertise,
              </h5>
              <div
                className="flex gap-3"
                style={{ fontSize: button, fontFamily: FF }}
              >
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  1099 taxes
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Dependents
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Trust Taxes
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={technologyAccelerationImage}
                alt="Full-stack Consulting"
                className="w-[8rem] object-contain"
              ></img>
            </div>
          </div>

          <div
            className="grid w-full items-center gap-8 bg-cover bg-no-repeat py-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:min-h-[360px]"
            style={{
              backgroundImage: `url(${rightCardBackground})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "right center",
            }}
          >
            <div className="flex justify-center lg:justify-start">
              <img
                src={dedicatedDevelopmentImage}
                alt="Full-stack Consulting"
                className="w-[15rem] object-contain"
              ></img>
            </div>
            <div className="grid gap-3 pr-10 text-right">
              <h3
                className="font-bold bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${titleUnderline})`,
                  backgroundSize: "auto 15px",
                  backgroundPosition: "right 85%",
                  fontSize: section,
                  fontFamily: FF,
                }}
              >
                Dedicated Development
              </h3>
              <h5
                style={{ fontSize: paragraph, fontFamily: FF }}
              >
                From idea to MVP, we partner with you to build, launch,and grow
                your next big thing.
              </h5>
              <div className="flex justify-end gap-3" style={{ fontSize: button, fontFamily: FF }}>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  1099 taxes
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Dependents
                </p>
                <p
                  className="h-9 w-28 grid place-items-center"
                  style={{ backgroundColor: `${label}1A`, color: label }}
                >
                  Trust Taxes
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesOverview;
