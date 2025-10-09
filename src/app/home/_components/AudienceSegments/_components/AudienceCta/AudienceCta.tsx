import audienceCta1x from "../../_assets/audience-cta-1x.png";
import audienceCta2x from "../../_assets/audience-cta-2x.png";
import Button from "../../../../../_components/Button";

// CTA 区块，按钮颜色使用主题变量；右侧图片内置于本组件
export default function AudienceCta() {

  return (
    <div className="mt-12 grid items-center rounded-3xl p-0 md:grid-cols-[3fr_1fr] bg-secondary">
      <div className="flex flex-col items-start p-10">
        <div className="relative inline-block">
          <h3 className="relative z-[2] text-left font-medium text-[2.625rem] leading-[5.3125rem] text-foreground">
            Dedicated Developers for Your Project
          </h3>
          <span aria-hidden className="absolute left-12 z-[1] h-2 w-[18rem] -bottom-6 -translate-y-11 -translate-x-12 bg-accent" />
        </div>

        <p className="mt-4 text-left text-[1.125rem] leading-[2.25rem] text-[var(--foreground-70)]">
          At Melfish, we provide top-tier developers who integrate seamlessly
          with your team, delivering clean code, scalable architecture, and
          on-time delivery. Get the expertise you need, without the overhead.
        </p>

        <Button
          size="sas"
          // showArrow={true}
          className="mt-6"
          // onClick={() => {
          //   window.location.href = "#";
          // }}
        >
          Hire Us
        </Button>
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
