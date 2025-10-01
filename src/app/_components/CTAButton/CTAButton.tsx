import { forwardRef, useState } from "react";
import type { ButtonHTMLAttributes} from "react";

export type CTAButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** 按钮文字 */
  label: string;
  /** 可选图标（PNG/SVG 路径）。不传则不显示图标。 */
  iconSrc?: string;
  /** 图标 alt 文案，默认空字符串以隐藏可读性影响 */
  iconAlt?: string;
  /** 自定义宽度，默认 191px */
  width?: number | string;
  /** 自定义高度，默认 56px */
  height?: number | string;
  /** 水平内边距，默认 24px */
  paddingX?: number | string;
  /** 背景色，默认 #2D7597 */
  backgroundColor?: string;
  /** hover 背景色 */
  hoverBackgroundColor?: string;
  /** hover 阴影 */
  hoverShadow?: string;
};

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      label,
      iconSrc,
      iconAlt = "",
      className = "",
      disabled,
      onMouseEnter,
      onMouseLeave,
      type = "button",
      width = 191,
      height = 56,
      paddingX = 24,
      backgroundColor = "#2D7597",
      hoverBackgroundColor = "#3385AB",
      hoverShadow = "0 16px 32px rgba(45,117,151,0.35)",
      style,
      ...rest
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[28px] text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
        style={{
          width,
          height,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          backgroundColor: hovered ? hoverBackgroundColor : backgroundColor,
          boxShadow: hovered ? hoverShadow : "none",
          fontFamily:
            'PingFang SC, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
          fontSize: 16,
          fontWeight: 500,
          lineHeight: "32.29px",
          ...style,
        }}
        onMouseEnter={(event) => {
          if (!disabled) setHovered(true);
          onMouseEnter?.(event);
        }}
        onMouseLeave={(event) => {
          if (!disabled) setHovered(false);
          onMouseLeave?.(event);
        }}
        {...rest}
      >
        <span>{label}</span>
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={iconAlt}
            className="h-4 w-4"
            draggable={false}
          />
        ) : null}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
