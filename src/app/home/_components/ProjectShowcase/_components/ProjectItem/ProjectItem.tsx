import type { Project } from "../../_data";

interface ProjectItemProps {
  project: Project;
  active: boolean;
  onActivate: () => void;
}

// 单个项目卡项，包含标题/描述以及移动端指示条
export default function ProjectItem({ project, active, onActivate }: ProjectItemProps) {
  return (
    <button
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-pressed={active}
      className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light rounded-2xl"
    >
      <div className="p-2">
        <h3
          className={`text-[2.25rem] leading-[2.25rem] font-semibold transition ${
            active ? "text-primary" : "text-foreground"
          }`}
        >
          {project.name}
        </h3>
        <p
          className={`mt-3 text-[1.1rem] leading-[2rem] ${
            active ? "text-muted-foreground" : "text-[var(--foreground-70)]"
          }`}
        >
          {project.description}
        </p>
      </div>

      {/* 小屏选中指示条 */}
      <div className="relative mt-3 h-[0.3125rem] md:hidden">
        <span
          aria-hidden
          className={`block h-full w-full rounded-full transition-all duration-300 ${
            active ? "bg-accent-light" : "bg-border"
          }`}
        />
        <span
          aria-hidden
          className={`absolute -top-[6px] left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent ${
            active ? "border-b-accent-light" : "border-b-transparent"
          }`}
        />
      </div>
    </button>
  );
}
