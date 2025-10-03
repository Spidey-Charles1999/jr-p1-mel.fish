import TitleWithCircle from "../../../_components/TitleWithCircle";
import audienceMask1x from "./_assets/audience-mask-1x.png";
import audienceMask2x from "./_assets/audience-mask-2x.png";
import { targets } from "./_data";
import { AudienceCards, AudienceCta } from "./_components";

/* ========= 组件 ========= */
export default function AudienceSegments() {
  return (
    <section
      className="
        relative overflow-hidden py-14 font-sans
      "
    >
      {/* 背景遮罩 */}
      <img
        aria-hidden
        src={audienceMask1x}
        srcSet={`${audienceMask1x} 1x, ${audienceMask2x} 2x`}
        alt=""
        className="pointer-events-none absolute -z-10 right-0 inset-y-0 hidden h-full w-auto object-contain md:block"
      />

      {/* content container */}
      <div className="mx-auto container max-w-[1360px] px-6 md:px-10">
        <TitleWithCircle text="Your Technical Co-founder in Melbourne for everyone" />

        {/* 介绍段落（rem 排版） */}
        <p className="mt-4 max-w-3xl text-[1.125rem] leading-[2.25rem] text-[var(--foreground-70)]">
          At Melfish, we combine rigorous engineering principles with a
          human-centered design philosophy to create digital products that truly
          matter.
        </p>

        {/* 三卡片 */}
        <AudienceCards targets={targets} />

        {/* 大横幅 */}
        <AudienceCta />
      </div>
    </section>
  );
}
// 子组件已拆分至 ./_components
