export type Project = {
  id: string;
  name: string;
  description: string;
  quote: string;
  techs: string[];
};

export type ProjectShowcaseContent = {
  title: string;
  projects: Project[];
  quote: string;
  techs: string[];
};

