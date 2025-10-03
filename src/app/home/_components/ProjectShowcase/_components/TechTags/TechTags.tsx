interface TechTagsProps {
  tags: string[];
}

// 技术标签列表
export default function TechTags({ tags }: TechTagsProps) {
  if (!tags?.length) return null;
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {tags.map((tech) => (
        <li key={tech}>
          <span className="inline-flex items-center rounded-sm px-3 py-1 text-[0.875rem] leading-[1.5rem] bg-accent-label-background text-accent-label">
            {tech}
          </span>
        </li>
      ))}
    </ul>
  );
}

