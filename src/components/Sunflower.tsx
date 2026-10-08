import { useMemo } from 'react';
import { cn } from '../lib/cn';

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5)); // ≈ 137.5°

/** 안쪽부터 짙은 씨앗 → 호박색 → 노란 꽃잎 */
const TONE = {
  core: 'fill-seed [--seed-opacity:0.7]',
  mid: 'fill-seed-2 [--seed-opacity:0.8]',
  petal: 'fill-sun [--seed-opacity:0.95]',
} as const;

interface Props {
  count?: number;
  className?: string;
}

/** 해바라기 씨앗 배열(Vogel 모델)로 그린 장식 그래픽 — sasunflower */
export function Sunflower({ count = 420, className }: Props) {
  const seeds = useMemo(() => {
    const scale = 48 / Math.sqrt(count);
    return Array.from({ length: count }, (_, i) => {
      const r = scale * Math.sqrt(i + 0.5);
      const theta = i * GOLDEN_ANGLE;
      const t = i / count;
      return {
        x: 50 + r * Math.cos(theta),
        y: 50 + r * Math.sin(theta),
        size: 0.65 + t * 0.8,
        tone: (t > 0.82 ? 'petal' : t > 0.55 ? 'mid' : 'core') as keyof typeof TONE,
        delay: t * 1.4,
      };
    });
  }, [count]);

  return (
    <svg className={cn('size-full overflow-visible', className)} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <g className="origin-[50px_50px] animate-spin-slow motion-reduce:animate-none">
        {seeds.map((s, i) => (
          <circle
            key={i}
            className={cn(
              'origin-center opacity-0 [transform-box:fill-box] animate-seed-in',
              'motion-reduce:[animation-duration:0.01s] motion-reduce:[animation-delay:0s]!',
              TONE[s.tone],
            )}
            cx={s.x.toFixed(3)}
            cy={s.y.toFixed(3)}
            r={s.size.toFixed(3)}
            style={{ animationDelay: `${s.delay.toFixed(3)}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
