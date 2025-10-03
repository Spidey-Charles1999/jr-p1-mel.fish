import type { Target } from "../../_data";
import { AudienceCard } from "..";

export default function AudienceCards({ targets }: { targets: Target[] }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {targets.map((t) => (
        <AudienceCard key={t.id} target={t} />
      ))}
    </div>
  );
}

