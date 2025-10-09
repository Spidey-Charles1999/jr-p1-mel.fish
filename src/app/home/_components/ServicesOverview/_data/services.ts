import leftCardBackground from "../_assets/services-card-bg-left.png";
import rightCardBackground from "../_assets/services-card-bg-right.png";
import titleUnderline from "../_assets/services-title-underline.png";
import fullStackConsultingImage from "../_assets/service-full-stack-consulting.png";
import productIncubationImage from "../_assets/service-product-incubation.png";
import technologyAccelerationImage from "../_assets/service-technology-acceleration.png";
import dedicatedDevelopmentImage from "../_assets/service-dedicated-development.png";

export interface ServiceData {
  title: string;
  description: string;
  tags: readonly string[];
  imageSrc: string;
  imageAlt: string;
  backgroundImage: string;
  titleHighlightSrc: string;
  orientation: "image-right" | "image-left";
  imageClassName?: string;
}

export const services: ServiceData[] = [
  {
    title: "Full-stack Consulting",
    description: "Expert guidance on architecture, tech stack, and bestpractices for building robust and scalable applications",
    tags: ["1099 taxes", "Dependents", "Trust Taxes"],
    imageSrc: fullStackConsultingImage,
    imageAlt: "Full-stack Consulting",
    backgroundImage: leftCardBackground,
    titleHighlightSrc: titleUnderline,
    orientation: "image-right",
    imageClassName: "h-64 w-64 object-contain -translate-x-10"
  },
  {
    title: "Product Incubation",
    description: "From idea to MVP, we partner with you to build, launch,and grow your next big thing.",
    tags: ["1099 taxes", "Dependents", "Trust Taxes"],
    imageSrc: productIncubationImage,
    imageAlt: "Product Incubation",
    backgroundImage: rightCardBackground,
    titleHighlightSrc: titleUnderline,
    orientation: "image-left",
    imageClassName: "w-[rem] object-contain translate-x-40"
  },
  {
    title: "Technology Acceleration",
    description: "Accelerate your development cycles and enhance yourteam's capabilities with our hands-on expertise,",
    tags: ["1099 taxes", "Dependents", "Trust Taxes"],
    imageSrc: technologyAccelerationImage,
    imageAlt: "Technology Acceleration",
    backgroundImage: leftCardBackground,
    titleHighlightSrc: titleUnderline,
    orientation: "image-right",
    imageClassName: "w-[8rem] object-contain -translate-x-45"
  },
  {
    title: "Dedicated Development",
    description: "From idea to MVP, we partner with you to build, launch,and grow your next big thing.",
    tags: ["1099 taxes", "Dependents", "Trust Taxes"],
    imageSrc: dedicatedDevelopmentImage,
    imageAlt: "Dedicated Development",
    backgroundImage: rightCardBackground,
    titleHighlightSrc: titleUnderline,
    orientation: "image-left",
    imageClassName: "w-[15rem] object-contain translate-x-30"
  }
];
