import { useId } from "react";

export type TitleWithCircleProps = {
  text: string;
  className?: string;
  /** 圆圈外径（px） */
  size?: number;
  /** 圆圈边框厚度（px） */
  thickness?: number;
  /** 主色（十六进制） */
  color?: string;
  /** 尾端透明度 0~1 */
  fade?: number;
  /** 渐变角度（度） */
  angle?: number;
  /** 圆圈相对标题左上角 X 偏移（px，负值向左） */
  offsetX?: number;
  /** 圆圈相对标题左上角 Y 偏移（px，负值向上） */
  offsetY?: number;

  /** 字号（rem），默认 36px => 2.25rem（root 16px 时） */
  fontSizeRem?: number;
  /** 字体族 */
  fontFamily?: string;
  /** 字重 */
  fontWeight?: number | string;
  /** 文本颜色 */
  textColor?: string;
};

export default function TitleWithCircle({
  text,
  className = "leading-tight", // 行高由 Tailwind 控制，字号/颜色走行内样式以精准匹配
  size = 36,
  thickness = 5,
  color = "#FD933F",
  fade = 0.3,
  angle = 147,
  offsetX = -10,
  offsetY = -15,
  fontSizeRem = 2.25, // 36px
  fontFamily = 'PingFang SC, PingFang SC, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
  fontWeight = 700,
  textColor = "#000000",
}: TitleWithCircleProps) {
  const gradId = useId(); // 保证多个实例不冲突
  const r = (size - thickness) / 2; // 圆半径

  return (
    <div className="relative inline-block">
      {/* 圆圈：绝对定位到标题左上角 */}
      <svg
        aria-hidden
        className="absolute pointer-events-none"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ left: offsetX, top: offsetY }}
      >
        <defs>
          <linearGradient
            id={gradId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={size}
            y2="0"
            gradientTransform={`rotate(${angle} ${size / 2} ${size / 2})`}
          >
            <stop offset="0%" stopColor={color} stopOpacity={1} />
            <stop offset="100%" stopColor={color} stopOpacity={fade} />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={thickness}
        />
      </svg>

      {/* 标题文本：严格匹配给定样式 */}
      <h2
        className={`relative z-10 ${className}`}
        style={{
          fontFamily,
          fontWeight,
          fontSize: `${fontSizeRem}rem`,
          color: textColor,
          textAlign: "left",
          fontStyle: "normal",
          textTransform: "none",
        }}
      >
        {text}
      </h2>
    </div>
  );
}
