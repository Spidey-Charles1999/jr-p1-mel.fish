import classNames from "classnames";
import arrow1x from "./_assets/arrow@1x.png";
import arrow2x from "./_assets/arrow@2x.png";
import type { FC, PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "btn-base btn-hover-shadow relative",
  variants: {
    size: {
      hu: "w-[7.3125rem] pl-[1.9375rem]",
      sas: "w-[11.9375rem] pl-[1.8125rem]",
      cwoe: "w-[15.1875rem] pl-[1.75rem]",
      cwoea: "w-[16.5rem] pl-[1.5625rem] pr-[2.9rem]",
    },
  },
});

interface Props extends VariantProps<typeof button>, PropsWithChildren {
  className?: string;
  showArrow?: boolean;
}

const Button: FC<Props> = ({
  children,
  className = "",
  size = "hu",
  showArrow = false,
}) => (
  <button className={classNames(button({ size }), className)}>
    <span className="leading-none mr-[0.2rem]">{children}</span>
    {showArrow ? (
      <img
        src={arrow1x}
        srcSet={`${arrow1x} 1x, ${arrow2x} 2x`}
        alt=""
        aria-hidden
        draggable={false}
        className="absolute top-[1.375rem] right-[1.625rem] w-[1rem] h-[1rem]"
      />
    ) : null}
  </button>
);

export default Button;
