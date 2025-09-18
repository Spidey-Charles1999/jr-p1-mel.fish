import type { CSSProperties } from "react";
import TitleWithCircle from "../../../../_components/TitleWithCircle";
import CTAButton from "../../../../_components/CTAButton";

import startups1x from "./_assets/audience-startups-1x.png";
import startups2x from "./_assets/audience-startups-2x.png";
import enterprises1x from "./_assets/audience-enterprises-1x.png";
import enterprises2x from "./_assets/audience-enterprises-2x.png";
import innovators1x from "./_assets/audience-innovators-1x.png";
import innovators2x from "./_assets/audience-innovators-2x.png";
import audienceCta1x from "./_assets/audience-cta-1x.png";
import audienceCta2x from "./_assets/audience-cta-2x.png";
import audienceMask1x from "./_assets/audience-mask-1x.png";
import audienceMask2x from "./_assets/audience-mask-2x.png";

/* ========= 常量（颜色/尺寸/链接/字体） ========= */
const FF = "PingFang SC, PingFang SC";
const PAGE_PADDING = "px-[40px]";
const PAGE_MAXW = "max-w-[1360px]";

const block1Color = "#F1FAFD";
const block2Color = "#F7F7F7";
const barColor = "#71C6E5";
const TEXT_MAIN = "#000000";
const TEXT_MID = "#000000b3"; // 70% 黑
const urlHireUs = "#";
const buttonColor = "#2D7597";

/* ========= 图片集合 ========= */
const icons = {
  startups: { "1x": startups1x, "2x": startups2x },
  enterprises: { "1x": enterprises1x, "2x": enterprises2x },
  innovators: { "1x": innovators1x, "2x": innovators2x },
} as const;

/* ========= 数据 ========= */
type Target = {
  id: "startups" | "enterprises" | "innovators";
  icon: keyof typeof icons;
  title: string;
  subTitle: string;
  text: string;
};

const targets: Target[] = [
  {
    id: "startups",
    icon: "startups",
    title: "For Startups",
    subTitle: "Speed & Scalability",
    text: "From MVPs to market-ready platforms, we build fast, reliable, and scalable solutions—helping you launch quickly, iterate efficiently, and attract your first users with confidence.",
  },
  {
    id: "enterprises",
    icon: "enterprises",
    title: "For Enterprises",
    subTitle: "Modernisation & Efficiency",
    text: "We modernise legacy systems, integrate AI and automation, and optimise workflows—empowering your teams to focus on innovation while reducing operational costs.",
  },
  {
    id: "innovators",
    icon: "innovators",
    title: "For Innovators",
    subTitle: "Vision & Impact",
    text: "We partner with forward-thinking leaders to explore emerging technologies, validate bold ideas, and turn ambitious concepts into digital products that shape the future.",
  },
];

/* ========= 组件 ========= */
export default function AudienceSegments() {
  return (
    <section
      className="
        relative overflow-hidden py-14
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
      <div className={`mx-auto ${PAGE_MAXW} ${PAGE_PADDING}`}>
        <TitleWithCircle text="Your Technical Co-founder in Melbourne for everyone" />

        {/* 介绍段落（rem 排版） */}
        <p
          className="
            mt-4 max-w-3xl
            text-[1.125rem] leading-[2.25rem]
          "
          style={{ color: TEXT_MID, fontFamily: FF }}
        >
          At Melfish, we combine rigorous engineering principles with a
          human-centered design philosophy to create digital products that truly
          matter.
        </p>

        {/* 三卡片 */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {targets.map((target) => (
            <AudienceSegmentCard
              key={target.id}
              icon={target.icon}
              title={target.title}
              subTitle={target.subTitle}
              text={target.text}
              bg={block1Color}
            />
          ))}
        </div>

        {/* 大横幅 */}
        <AudienceCta />
      </div>
    </section>
  );
}

type AudienceSegmentCardProps = {
  icon: keyof typeof icons;
  title: string;
  subTitle: string;
  text: string;
  bg?: string;
};

function AudienceSegmentCard({ icon, title, subTitle, text, bg }: AudienceSegmentCardProps) {
  const set = icons[icon];

  return (
    <article
      className="flex flex-col items-center rounded-3xl p-8"
      style={bg ? { backgroundColor: bg } : undefined}
    >
      {/* 图标 */}
      <img
        src={set["1x"]}
        srcSet={`${set["1x"]} 1x, ${set["2x"]} 2x`}
        alt=""
        width={64}
        height={64}
        loading="lazy"
        decoding="async"
        className="mb-4 h-16 w-16 select-none"
      />

      {/* 标题 + 下划线条 */}
      <div className="relative inline-block">
        <h3
          className="
            relative z-[2]
            text-left font-bold
            text-[1.75rem] leading-[3.5625rem]
          "
          style={{ color: TEXT_MAIN, fontFamily: FF }}
        >
          {title}
        </h3>

        <span
          aria-hidden
          className="absolute left-1/2 z-[1] h-[0.3125rem] w-[6.125rem] -translate-x-1/2 -translate-y-4 -bottom-0"
          style={{ backgroundColor: barColor } as CSSProperties}
        />
      </div>

      {/* 副标题 */}
      <p
        className="
          mt-2 text-left
          text-[1.3125rem] leading-[2.625rem]
        "
        style={{ color: TEXT_MAIN, fontFamily: FF }}
      >
        {subTitle}
      </p>

      {/* 文案 */}
      <p
        className="
          mt-4 text-center
          text-[1rem] leading-[2rem]
        "
        style={{ color: TEXT_MID, fontFamily: FF }}
      >
        {text}
      </p>
    </article>
  );
}

function AudienceCta() {
  return (
    <div
      className="mt-12 grid items-center rounded-3xl p-0 md:grid-cols-[3fr_1fr]"
      style={{ backgroundColor: block2Color }}
    >
      <div className="flex flex-col items-start p-10">
        {/* 标题 + 下划线条 */}
        <div className="relative inline-block">
          <h3
            className="
              relative z-[2] text-left
              font-medium
              text-[2.625rem] leading-[5.3125rem]
            "
            style={{ color: TEXT_MAIN, fontFamily: FF }}
          >
            Dedicated Developers for Your Project
          </h3>

          <span
            aria-hidden
            className="absolute left-12 z-[1] h-2 w-[18rem] -bottom-6 -translate-y-11 -translate-x-12"
            style={{ backgroundColor: barColor } as CSSProperties}
          />
        </div>

        {/* 说明文字 */}
        <p
          className="mt-4 text-left text-[1.125rem] leading-[2.25rem]"
          style={{ color: TEXT_MID, fontFamily: FF }}
        >
          At Melfish, we provide top-tier developers who integrate seamlessly
          with your team, delivering clean code, scalable architecture, and
          on-time delivery. Get the expertise you need, without the overhead.
        </p>

        {/* 按钮（固定 rem 尺寸） */}
        <CTAButton
          label="Hire Us"
          className="mt-6"
          width={117}
          height={56}
          backgroundColor={buttonColor}
          onClick={() => {
            window.location.href = urlHireUs;
          }}
        />
      </div>

      <div className="flex overflow-hidden rounded-2xl sm:justify-center md:justify-end">
        <img
          src={audienceCta1x}
          srcSet={`${audienceCta1x} 1x, ${audienceCta2x} 2x`}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-64 object-contain md:h-[260px]"
        />
      </div>
    </div>
  );
}
