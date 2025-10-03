import type { ProjectShowcaseContent } from "./types";

export const content: ProjectShowcaseContent = {
  title: "Explore how we turn ideas into reality",
  projects: [
    {
      id: "chuckroo",
      name: "Chuckroo",
      description:
        "A modern, performant, and SEO–friendly blog platform built with Next.js, designed for content creators.",
      quote:
        "As a content creator, Chuckroo helped me build my blog quickly with great SEO results.",
      techs: ["Next.js", "React.js", "TailwindCSS", "Prisma"],
    },
    {
      id: "meta-town",
      name: "Meta Town",
      description:
        "A 2D real-time collaborative virtual world prototype, enabling users to interact and communicate in a shared space.",
      quote:
        "Meta Town made remote collaboration feel natural, almost like being in the same room.",
      techs: ["React.js", "WebSocket", "Pixi.js", "TypeScript"],
    },
    {
      id: "unimate-ai",
      name: "UniMateAI",
      description:
        "A RAG–powered learning assistant that provides intelligent, context-aware answers from a large knowledge base.",
      quote:
        "UniMateAI has transformed the way I study by giving me context-aware answers instantly.",
      techs: ["TypeScript", "LangChain", "OpenAI API", "Vector DB"],
    },
  ],
  quote:
    "Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.",
  techs: ["React.js", "Next.js", "Auth.js", "Tiptap", "Prisma"],
};

