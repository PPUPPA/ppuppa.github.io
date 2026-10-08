import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

type Side = 'top' | 'bottom';
type Align = 'start' | 'center' | 'end';

const SIDE: Record<Side, string> = {
  top: 'bottom-full mb-2 translate-y-1 after:top-full after:border-t-ink',
  bottom: 'top-full mt-2 -translate-y-1 after:bottom-full after:border-b-ink',
};

const ALIGN: Record<Align, string> = {
  start: 'left-0 after:left-3',
  center: 'left-1/2 -translate-x-1/2 after:left-1/2 after:-translate-x-1/2',
  end: 'right-0 after:right-3',
};

interface BubbleProps {
  children: ReactNode;
  side?: Side;
  align?: Align;
}

/**
 * 말풍선만 — 부모에 `group/tip relative` 가 있어야 한다.
 * 대상 요소에 이미 aria-label · 스크린 리더용 텍스트가 있으므로 말풍선은 시각 전용(aria-hidden).
 */
export function TooltipBubble({ children, side = 'top', align = 'center' }: BubbleProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute z-30 w-max max-w-60 rounded-lg bg-ink px-2.5 py-1.5 text-left text-xs leading-snug font-medium text-bg opacity-0 shadow-lg',
        'transition-[opacity,translate] duration-150 ease-soft',
        'group-focus-within/tip:translate-y-0 group-focus-within/tip:opacity-100 group-hover/tip:translate-y-0 group-hover/tip:opacity-100',
        "after:absolute after:border-4 after:border-transparent after:content-['']",
        SIDE[side],
        ALIGN[align],
      )}
    >
      {children}
    </span>
  );
}

interface Props extends BubbleProps {
  label: ReactNode;
  className?: string;
}

/** 버튼 등 인라인 요소에 마우스 오버 · 키보드 포커스 시 보이는 툴팁 */
export function Tooltip({ label, children, side = 'bottom', align = 'center', className }: Props) {
  return (
    <span className={cn('group/tip relative inline-flex', className)}>
      {children}
      <TooltipBubble side={side} align={align}>
        {label}
      </TooltipBubble>
    </span>
  );
}
