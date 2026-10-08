import type { ReactNode } from 'react';
import { cn } from '../lib/cn';
import type { Case } from '../data/profile';
import { useI18n } from '../i18n';

interface Props {
  item: Case;
  /** web: 홈페이지(Tailwind) · doc: 이력서/경력기술서(doc.css 의 .case 스타일) */
  variant?: 'web' | 'doc';
  /** 왼쪽 강조선 색 — 프론트엔드(노랑) · 퍼블리싱(갈색) */
  tone?: 'frontend' | 'pub';
  /** 흰 카드 위가 아니라 배경 위에 바로 놓일 때 */
  onSurface?: boolean;
}

/** 문제 해결 사례 — 문제 → 해결 → 결과 → 배운 점 */
export function CaseBlock({ item, variant = 'web', tone = 'frontend', onSurface = false }: Props) {
  const web = variant === 'web';
  const { t, tc } = useI18n();
  const rows: { label: string; body: ReactNode; strong?: boolean }[] = [
    { label: t('case.problem'), body: tc(item.problem) },
    {
      label: t('case.action'),
      body:
        item.action.length === 1 ? (
          tc(item.action[0])
        ) : (
          <ul className={cn(web && 'grid gap-0.5')}>
            {item.action.map((a) => (
              <li key={a} className={cn(web && "relative pl-3 before:absolute before:left-0.5 before:font-bold before:content-['·']")}>
                {tc(a)}
              </li>
            ))}
          </ul>
        ),
    },
    { label: t('case.result'), body: tc(item.result), strong: true },
    ...(item.learned ? [{ label: t('case.learned'), body: tc(item.learned) }] : []),
  ];

  return (
    <div
      className={
        web
          ? cn(
              'border-l-4 px-5 py-[18px]',
              tone === 'frontend' ? 'border-accent' : 'border-pub',
              onSurface ? 'rounded-r-card bg-surface' : 'rounded-r-[10px] bg-surface-2',
            )
          : 'case'
      }
    >
      <div className={web ? 'flex flex-wrap items-center gap-x-2.5 gap-y-1.5' : 'case__head'}>
        <h5 className={web ? 'text-base font-bold tracking-[-0.02em]' : 'case__title'}>{tc(item.title)}</h5>
        <ul className={web ? 'flex flex-wrap gap-1' : 'case__tags'} aria-label={t('a11y.tags')}>
          {item.tags.map((tag) => (
            <li key={tag} className={cn(web && 'rounded-full border border-line px-2 py-px text-[11.5px] text-ink-2')}>
              {tc(tag)}
            </li>
          ))}
        </ul>
      </div>
      <dl className={web ? 'mt-3 grid gap-2 text-[14.5px]' : 'case__body'}>
        {rows.map((r) => (
          <div
            key={r.label}
            className={web ? 'grid gap-0.5 sm:grid-cols-[56px_1fr] sm:gap-2.5' : cn(r.strong && 'case__result')}
          >
            <dt className={cn(web && 'pt-0.5 text-[12.5px] font-bold text-ink-3')}>{r.label}</dt>
            <dd className={cn(web && (r.strong ? 'font-semibold text-ink' : 'text-ink-2'))}>{r.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
