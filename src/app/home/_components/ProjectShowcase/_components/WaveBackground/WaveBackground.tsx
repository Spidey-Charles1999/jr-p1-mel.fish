interface WaveBackgroundProps {
  className?: string;
}

// 背景波浪 SVG，颜色继承当前文本色
export default function WaveBackground({ className = "" }: WaveBackgroundProps) {
  return (
    <div className={`${className} text-[var(--wave)]`} aria-hidden>
      <svg className="h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,224L48,229.3C96,235,192,245,288,261.3C384,277,480,299,576,298.7C672,299,768,277,864,245.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}


