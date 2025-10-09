interface DesktopIndicatorProps {
  active: number;
  count: number;
}

// 桌面端底部滑块指示条
export default function DesktopIndicator({ active, count }: DesktopIndicatorProps) {
  if (!Number.isFinite(count) || count <= 0) return null;
  const widthPercent = 100 / count;
  return (
    <div className="relative mt-3 hidden h-[0.3125rem] md:block">
      <span
        aria-hidden
        className="absolute bottom-0 left-0 block h-[2px] w-full rounded-full bg-border"
      />
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-full rounded-full transition-transform duration-300 bg-accent-light"
        style={{ width: `${widthPercent}%`, transform: `translateX(${active * 100}%)` }}
      >
        <span className="absolute -top-[6px] left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-accent-light" />
      </span>
    </div>
  );
}

