import wave1x from "./_assets/wave-mask.png";      
import wave2x from "./_assets/wave-mask@2x.png";   

import CTAButton from "../../../_components/CTAButton";
import arrow1x from "./_assets/wave-cta-icon.png";


const CTA_URL = "#"; // 按需替换
const BG_TOP = "#F7F7F7"; // 整体背景色

function CallToActionWave() {
  return (
    // full-bleed：占满整屏宽度，背景图可贴到最右边
    <section className="relative w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw] overflow-hidden">
      {/* 顶部浅灰背景层 */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: BG_TOP }}
      />

      {/* 底部波浪位图（1x/2x 适配） */}
      <img
        src={wave1x}
        srcSet={`${wave2x} 2x`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        draggable={false}
        className="pointer-events-none select-none absolute inset-x-0 bottom-0 w-full"
      />

    {/* 内容容器*/}
    <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
      <div className="mx-auto max-w-[951px]">
        <h2
          className="
            font-bold                
            text-black              
            text-[42px]              
            leading-[59.22px]        
            tracking-tight
          "
          style={{
            fontFamily:'PingFang SC',
          }}
        >
          We believe building great software should be
          <br className="hidden sm:block" />
          seamless, scalable, and worry-free. Get started
          <br className="hidden sm:block" />
          with Melfish today!
        </h2>

        {/* CTA 按钮 */}
        <CTAButton
          label="Connect with our experts"
          iconSrc={arrow1x}
          width={264}
          paddingX={32}
          className="mt-8 mx-auto"
          onClick={() => {
            window.location.href = CTA_URL;
          }}
        />

      </div>
    </div>

    </section>
  );
}

export default CallToActionWave
