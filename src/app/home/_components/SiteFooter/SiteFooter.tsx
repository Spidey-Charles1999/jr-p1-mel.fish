
import logo1x from "./_assets/footer-logo-1x.png";
import logo2x from "./_assets/footer-logo-2x.png";
import NavigationMenu from "../../../../_components/NavigationMenu";


const BG = "#232F37 ";
const FF = "PingFang SC, PingFang SC";
function SiteFooter() {
  return (
    <section
      className="relative w-screen h-[326px] left-1/2 -ml-[50vw] right-1/2 -mr-[50vw] text-white"
      style={{ backgroundColor: BG }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5">
        {/* 顶部：小屏两行，md 及以上同一行 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo 单独一行（小屏） */}
          <a
            href="/"
            className="absolute w-[253px] h-[65.96px] right-[1347px] top-[50px]"
          >
            <img
              src={logo1x}
              srcSet={`${logo1x} 1x, ${logo2x} 2x`}
              alt="melfish"
              className="w-[253px] h-[65.96px]"
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* 导航：默认仅最后一个高亮；悬停时仅悬停项高亮 */}
          <NavigationMenu
            className="absolute right-[320px] top-[75px]"
          />
        </div>
        <hr
          className="absolute w-[1280px] border-0 border-t border-white/10 right-[320px] top-[172px]"
        />

        {/* 中部：标题 + 副标题*/}
        <div className="py-8">
          
          <h1
            className="absolute w-[411px] h-[34px] text-center text-[24px] leading-[34px] font-bold text-white tracking-tight right-[755px] top-[209px]"
            style={{
              fontFamily: FF,
            }}
          >
            Technical Excellence You Can Trust
          </h1>
          <p
            className="absolute mx-auto mt-3 text-center font-medium whitespace-nowrap px-4 right-[590px] top-[253px]"
            style={{
              color: "#5DAFCF",
              fontFamily: '"PingFang SC","Helvetica Neue",Helvetica,Arial,sans-serif',
              // 字体随视口缩放，12–18px 之间自适应；行高随之变化
              fontSize: "clamp(12px, 1.6vw, 18px)",
              lineHeight: "clamp(18px, 2.2vw, 25px)",
            }}
          >
            Trusted development partner for every stage of your product journey, from idea to scale
          </p>

        </div>
      </div>
  </section>
  );
}

export default SiteFooter
