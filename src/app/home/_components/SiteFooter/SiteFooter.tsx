
import logo1x from "./_assets/footer-logo-1x.png";
import logo2x from "./_assets/footer-logo-2x.png";


const BG = "#232F37 ";
const FF = "PingFang SC, PingFang SC";
function SiteFooter() {
  return (
    <section
      className="relative w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw] text-white"
      style={{ backgroundColor: BG }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-[40px] py-5">
        {/* 顶部：小屏堆叠，md 起与导航同列排布 */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <a
            href="/"
            className="inline-flex items-center justify-center md:justify-start w-[253px] h-[65.96px] shrink-0"
          >
            <img
              src={logo1x}
              srcSet={`${logo1x} 1x, ${logo2x} 2x`}
              alt="melfish"
              className="h-9 w-auto"
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* 导航：默认仅最后一个高亮；悬停时仅悬停项高亮 */}
          <nav className="w-full md:w-auto">
            <ul
              className="group/menus flex flex-wrap items-center justify-center gap-6 text-white md:justify-end md:gap-10 lg:gap-[106px]"
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
        </div>

        {/* 细分割线 —— 1280px 宽，1px，白色10%，虚线，居中 */}
        <hr
          className="mt-6 mx-auto w-full max-w-[1360px] border-0 border-t border-dashed border-white/10"
        />

        {/* 中部：标题 + 副标题*/}
        <div className="py-8">
          
          <h1
            className="mx-auto w-[411px] text-center text-[24px] leading-[34px] font-bold text-white tracking-tight"
            style={{
              fontFamily: '"PingFang SC","Helvetica Neue",Helvetica,Arial,sans-serif',
            }}
          >
            Technical Excellence You Can Trust
          </h1>

        
          <p
            className="
              mx-auto mt-3 max-w-[540px] px-4 text-center font-medium
            "
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
