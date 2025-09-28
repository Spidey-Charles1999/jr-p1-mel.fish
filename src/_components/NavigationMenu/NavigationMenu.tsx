import { forwardRef } from "react";
import type { CSSProperties, HTMLAttributes } from "react";

const DEFAULT_FONT_FAMILY =
  '"PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif';

export type NavigationMenuItem = {
  /** 菜单文案 */
  label: string;
  /** 菜单链接 */
  href: string;
  /** 是否默认高亮（展开下划线） */
  highlight?: boolean;
  /** 单独覆盖当前项的文字颜色 */
  textColor?: string;
};

export type NavigationMenuProps = HTMLAttributes<HTMLElement> & {
  /** 菜单数据，默认包含四个固定项 */
  items?: NavigationMenuItem[];
  /** 菜单项之间的间距，默认 106px */
  gap?: number | string;
  /** 默认字体 */
  fontFamily?: string;
  /** 默认字号 */
  fontSize?: number | string;
  /** 默认行高 */
  lineHeight?: number | string;
  /** 默认文字颜色 */
  textColor?: string;
};

const DEFAULT_ITEMS: NavigationMenuItem[] = [
  { label: "About Us", href: "#" },
  { label: "Products", href: "#" },
  { label: "Blog", href: "#" },
  { label: "See All Service", href: "#", highlight: true },
];

const NavigationMenu = forwardRef<HTMLElement, NavigationMenuProps>(
  (
    {
      items = DEFAULT_ITEMS,
      gap = "106px",
      fontFamily = DEFAULT_FONT_FAMILY,
      fontSize = "18px",
      lineHeight = "25px",
      textColor = "#FFFFFF",
      className = "",
      ...rest
    },
    ref
  ) => {
    return (
      <nav ref={ref} className={className} {...rest}>
        <ul
          className="group/navigation-menu flex items-center"
          style={{ gap }}
        >
          {items.map(({ label, href, highlight, textColor: itemColor }) => {
            const linkStyle: CSSProperties = {
              fontFamily,
              fontSize,
              lineHeight,
              color: itemColor ?? textColor,
            };

            const underlineBaseClasses =
              "pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-2 h-[3px] rounded-full transition-[opacity,width] duration-300 ease-out";

            const underlineClassName = highlight
              ? `${underlineBaseClasses} w-[50px] opacity-100 group-hover/navigation-menu:w-0 group-hover/navigation-menu:opacity-0 hover:!w-[50px] hover:!opacity-100`
              : `${underlineBaseClasses} w-0 opacity-0 group-hover:w-[50px] group-hover:opacity-100`;

            return (
              <li key={label} className="group relative flex h-[25px] items-center">
                <a
                  href={href}
                  className="relative block transition-colors duration-300"
                  style={linkStyle}
                >
                  {label}
                  <span
                    aria-hidden
                    className={`${underlineClassName} bg-white`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
);

NavigationMenu.displayName = "NavigationMenu";

export default NavigationMenu;
