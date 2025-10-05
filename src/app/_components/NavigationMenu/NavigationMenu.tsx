import classNames from "classnames";
import { useState } from "react";
import type { CSSProperties, FC, HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const navigationMenu = tv({
  base: "flex items-center text-[1.125rem] font-sans transition-colors duration-300",
  variants: {
    variant: {
      header: "",
      footer: "",
    },
  },
  defaultVariants: {
    variant: "header",
  },
});

type NavigationMenuProps = HTMLAttributes<HTMLElement> & VariantProps<typeof navigationMenu>;

const LINKS = [
  { label: "About Us", href: "#" },
  { label: "Products", href: "#" },
  { label: "Blog", href: "#" },
  { label: "See All Service", href: "#", highlight: true },
];

const NavigationMenu: FC<NavigationMenuProps> = ({ className = "", variant }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className={classNames(navigationMenu({ variant }), className)}>
      <ul className="flex items-center gap-[6.625rem]">
        {LINKS.map(({ label, href, highlight }) => {
          const isHovered = hovered === label;
          const someoneElseHovered = hovered !== null && hovered !== label;

        const baseLink = "relative block font-medium transition-colors duration-300 hover:text-white focus-visible:text-white";

        const finalColorClass = classNames(
          baseLink,
          highlight
            ? variant === "footer"
              ? someoneElseHovered && !isHovered
                ? "text-white/70"
                : "text-white"
              : "text-white"
            : isHovered
            ? "text-white"
            : variant === "footer"
            ? "text-white/70"
            : "text-white"
        );

          const shouldUnderline = highlight ? !someoneElseHovered || isHovered : isHovered;

          const underlineStyle: CSSProperties = {
            width: shouldUnderline ? "3.125rem" : "0",
            opacity: shouldUnderline ? 1 : 0,
            transition: "width 300ms ease-out, opacity 300ms ease-out",
            left: "50%",
            transform: "translateX(-50%)",
          };

          return (
            <li
              key={label}
              className="relative flex h-[1.5625rem] items-center"
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
            >
              <a href={href} className={finalColorClass}>
                {label}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-2 h-[0.1875rem] rounded-full bg-white"
                  style={underlineStyle}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
