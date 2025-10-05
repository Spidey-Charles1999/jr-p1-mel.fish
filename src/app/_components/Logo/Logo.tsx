import classNames from "classnames";
import type { FC, ImgHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import logo1x from "./_assets/logo@1x.png";
import logo2x from "./_assets/logo@2x.png";

const logo = tv({
  variants: {
    size: {
      sm: "h-[3.094rem] w-[11.869rem]",
      lg: "h-[4.1225rem] w-[15.8125rem]",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type LogoProps = ImgHTMLAttributes<HTMLImageElement> &
  VariantProps<typeof logo> & {
    alt?: string;
    className?: string;
  };

const Logo: FC<LogoProps> = ({ alt = "Logo", size, className}) => (
  <img
    src={logo1x}
    srcSet={`${logo1x} 1x, ${logo2x} 2x`}
    alt={alt}
    decoding="async"
    loading="lazy"
    draggable={false}
    className={classNames(logo({ size }), className)}
  />
);

export default Logo;
