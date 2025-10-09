import classNames from "classnames";
import type { CSSProperties, FC } from "react";

type Orientation = "image-right" | "image-left";

interface ServiceCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  imageContainerClassName?: string;
  className?: string;
  backgroundImage: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  titleHighlightSrc: string;
  titleHighlightSize?: string;
  titleHighlightPosition?: string;
  orientation?: Orientation;
  style?: CSSProperties;
  textContainerClassName?: string;
  tagContainerClassName?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  imageClassName,
  imageContainerClassName,
  className,
  backgroundImage,
  backgroundSize = "auto 100%",
  backgroundPosition,
  titleHighlightSrc,
  titleHighlightSize = "auto 15px",
  titleHighlightPosition,
  orientation = "image-right",
  style,
  textContainerClassName,
  tagContainerClassName,
}) => {
  const isImageRight = orientation === "image-right";

  const containerClasses = classNames(
    "grid w-full items-center gap-8 bg-cover bg-no-repeat py-8 lg:min-h-[300px]",
    isImageRight
      ? "lg:grid-cols-[minmax(0,1fr)_260px]"
      : "lg:grid-cols-[260px_minmax(0,1fr)]",
    className,
  );

  const textContainerClasses = classNames(
    "grid gap-3",
    isImageRight ? "pl-10 text-left" : "pr-10 text-right",
    textContainerClassName,
  );

  const tagClasses = classNames(
    "flex gap-3 font-sans text-[1rem]",
    { "justify-end": !isImageRight },
    tagContainerClassName,
  );

  const imageContainerClasses = classNames(
    "flex justify-center",
    isImageRight ? "lg:justify-end" : "lg:justify-start",
    imageContainerClassName,
  );

  const highlightPosition =
    titleHighlightPosition ?? (isImageRight ? "left 85%" : "right 85%");

  const cardStyle: CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize,
    backgroundPosition: backgroundPosition ?? (isImageRight ? "left center" : "right center"),
    ...style,
  };

  const tagStyle: CSSProperties = {
    backgroundColor: "var(--lable-10)",
    color: "var(--lable)",
  };

  const textContent = (
    <div className={textContainerClasses}>
      <h3
        className="font-bold font-sans text-[2.625rem] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${titleHighlightSrc})`,
          backgroundSize: titleHighlightSize,
          backgroundPosition: highlightPosition,
        }}
      >
        {title}
      </h3>
      <h5
        className={classNames("font-sans text-[1.125rem]", {
          "text-right": !isImageRight,
        })}
      >
        {description}
      </h5>
      <div className={tagClasses}>
        {tags.map((tag) => (
          <p key={tag} className="grid h-9 w-28 place-items-center" style={tagStyle}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );

  const imageContent = (
    <div className={imageContainerClasses}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={classNames("object-contain", imageClassName)}
      />
    </div>
  );

  return (
    <div className={containerClasses} style={cardStyle}>
      {isImageRight ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : (
        <>
          {imageContent}
          {textContent}
        </>
      )}
    </div>
  );
};

export type { ServiceCardProps };
export default ServiceCard;
