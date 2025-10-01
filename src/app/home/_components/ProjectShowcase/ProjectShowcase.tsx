import { useState } from "react";
import TitleWithCircle from "../../../_components/TitleWithCircle";

/* ========= 常量（颜色/字体/宽度） ========= */
const FF = "PingFang SC, PingFang SC";

const PAGE_PADDING = "px-[40px]";
const PAGE_MAXW = "max-w-[1360px]";

const TEXT_MAIN = "#000000";
const TEXT_MID = "#000000b3"; // 70% 黑
const barColor = "#1E778F";
const titleFocus = "#2D7597";
const textFocus = "#3F494Eb3";
const bgCurve = "#F2FAFE";
const tagBg = "#FFF5EC";
const tagFg = "#FD933F";
const baseLine = "#2D759733";

/* ========= 数据 ========= */
type Project = {
  id: string;
  name: string;
  description: string;
  quote: string;
  techs: string[];
};

type ProjectShowcaseContent = {
  title: string;
  projects: Project[];
  quote: string;
  techs: string[];
};

const content: ProjectShowcaseContent = {
  title: "Explore how we turn ideas into reality",
  projects: [
    {
      id: "chuckroo",
      name: "Chuckroo",
      description:
        "A modern, performant, and SEO–friendly blog platform built with Next.js, designed for content creators.",
      quote:
        "As a content creator, Chuckroo helped me build my blog quickly with great SEO results.",
      techs: ["Next.js", "React.js", "TailwindCSS", "Prisma"],
    },
    {
      id: "meta-town",
      name: "Meta Town",
      description:
        "A 2D real-time collaborative virtual world prototype, enabling users to interact and communicate in a shared space.",
      quote:
        "Meta Town made remote collaboration feel natural, almost like being in the same room.",
      techs: ["React.js", "WebSocket", "Pixi.js", "TypeScript"],
    },
    {
      id: "unimate-ai",
      name: "UniMateAI",
      description:
        "A RAG–powered learning assistant that provides intelligent, context-aware answers from a large knowledge base.",
      quote:
        "UniMateAI has transformed the way I study by giving me context-aware answers instantly.",
      techs: ["TypeScript", "LangChain", "OpenAI API", "Vector DB"],
    },
  ],
  quote:
    "Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.",
  techs: ["React.js", "Next.js", "Auth.js", "Tiptap", "Prisma"],
};

/* ========= 组件 ========= */
export default function ProjectShowcase() {
  const { title, projects, quote, techs } = content;
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden">
      {/* 背景波浪 */}
      <WaveBackground className="pointer-events-none absolute inset-x-0 bottom-0 h-[240px] -z-10" />

      <div
        className={`relative mx-auto ${PAGE_MAXW} ${PAGE_PADDING} py-12 lg:py-16`}
      >
        {/* 标题 */}
        <div className="pb-[100px]">
          <TitleWithCircle text={title} />
        </div>

        {/* 三列项目卡 */}
        <ul role="list" className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, idx) => (
            <li key={project.id}>
              <button
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                onClick={() => setActive(idx)}
                aria-pressed={active === idx}
                className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E778F] rounded-2xl"
              >
                <div className="p-2">
                  <h3
                    className="text-[2.25rem] leading-[2.25rem] font-semibold transition"
                    style={{
                      color: active === idx ? titleFocus : TEXT_MAIN,
                      fontFamily: FF,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="mt-3 text-[1.1rem] leading-[2rem]"
                    style={{
                      color: active === idx ? textFocus : TEXT_MID,
                      fontFamily: FF,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* 小屏选中指示条 */}
                <div className="relative mt-3 h-[0.3125rem] md:hidden">
                  <span
                    aria-hidden
                    className="block h-full w-full rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: active === idx ? barColor : baseLine,
                    }}
                  />
                  <span
                    aria-hidden
                    className="absolute -top-[6px] left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent"
                    style={{
                      borderBottomColor:
                        active === idx ? barColor : "transparent",
                    }}
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* 大屏底部活动条 */}
        <div className="relative mt-3 hidden h-[0.3125rem] md:block">
          <span
            aria-hidden
            className="absolute bottom-0 left-0 block h-[2px] w-full rounded-full bg-slate-200"
          />
          <span
            aria-hidden
            className="absolute bottom-0 left-0 h-full w-1/3 rounded-full transition-transform duration-300"
            style={{
              backgroundColor: barColor,
              transform: `translateX(${active * 100}%)`,
            }}
          >
            <span
              className="absolute -top-[6px] left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent"
              style={{ borderBottomColor: barColor }}
            />
          </span>
        </div>

        {/* 引述 */}
        {quote && (
          <blockquote
            className="mt-10 lg:mt-12 max-w-full text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.25rem]"
            style={{ color: TEXT_MAIN, fontFamily: FF }}
          >
            “{projects[active].quote}”
          </blockquote>
        )}

        {/* 技术栈标签 */}
        {techs.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {projects[active].techs.map((tech) => (
              <li key={tech}>
                <span
                  className="inline-flex items-center rounded-sm px-3 py-1 text-[0.875rem] leading-[1.5rem]"
                  style={{
                    background: tagBg,
                    color: tagFg,
                    fontFamily: FF,
                  }}
                >
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/* ========= 波浪背景 ========= */
function WaveBackground({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={bgCurve}
          d="M0,224L48,229.3C96,235,192,245,288,261.3C384,277,480,299,576,298.7C672,299,768,277,864,245.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}
