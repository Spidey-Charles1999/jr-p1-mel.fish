import TitleWithCircle from "../../../../../_components/TitleWithCircle";

const title = "Services";
const FF = "PingFang SC, PingFang SC";
const small_title = "3.5rem";
const paragraph = "1.125rem";

export default function ServiceHeader() {
  return (
    <div className="mb-20">
      <div className="mb-[88px]">
        <TitleWithCircle text={title} />
      </div>
      <div className="relative mb-[124px]">
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
      </div>
    </div>
  );
}
