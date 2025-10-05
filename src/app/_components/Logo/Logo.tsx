import classNames from "classnames";
import type { FC, ImgHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import logo1x from "./_assets/logo@1x.png";
import logo2x from "./_assets/logo@2x.png";

const logo = tv({
  variants: {
    size: {
      sm: "w-[clamp(8rem, 25vw, 11.869rem)] h-auto",
      lg: "w-[clamp(10rem, 30vw, 15.8125rem)] h-auto",
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
