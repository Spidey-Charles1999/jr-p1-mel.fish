import { useState } from "react";
import TitleWithCircle from "../../../_components/TitleWithCircle";
import { DesktopIndicator, ProjectItem, TechTags, WaveBackground } from "./_components";
import { content } from "./_data";

// 改造说明：
// - 移除硬编码颜色与字体，统一使用 globals.css 中通过 @theme 暴露的 Tailwind 颜色/字体类。
// - 页宽与内边距采用通用容器类，避免在组件中定义页面常量。

/* ========= 数据 ========= */

/* ========= 组件 ========= */
export default function ProjectShowcase() {
  const { title, projects, quote, techs } = content;
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden font-sans">
      {/* 背景波浪 */}
      <WaveBackground className="pointer-events-none absolute inset-x-0 bottom-0 h-[240px] -z-10" />

      <div className="relative container mx-auto max-w-[1360px] px-6 md:px-10 py-12 lg:py-16">
        {/* 标题 */}
        <div className="pb-[100px]">
          <TitleWithCircle text={title} />
        </div>

        {/* 三列项目卡 */}
        <ul role="list" className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, idx) => (
            <li key={project.id}>
              <ProjectItem
                project={project}
                active={active === idx}
                onActivate={() => setActive(idx)}
              />
            </li>
          ))}
        </ul>

        {/* 大屏底部活动条 */}
        <DesktopIndicator active={active} count={projects.length} />

        {/* 引述 */}
        {quote && (
          <blockquote
            className="mt-10 lg:mt-12 max-w-full text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.25rem] text-foreground"
          >
            “{projects[active].quote}”
          </blockquote>
        )}

        {/* 技术栈标签 */}
        {techs.length > 0 && <TechTags tags={projects[active].techs} />}
      </div>
    </section>
  );
}

// WaveBackground 拆分为独立子组件，见 ./_components/WaveBackground
