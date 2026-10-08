import { careerGaps, companyMonths, fmtDate, formatMonths, today, trackKey } from '../data/career';
import { companies } from '../data/profile';
import { useI18n } from '../i18n';
import { cn } from '../lib/cn';
import { TooltipBubble } from './Tooltip';

/** 가장 이른 입사월 — 막대가 첫 경력에서 바로 시작하도록 */
const RANGE_START = companies.map((c) => c.start).sort()[0];

/** 주 직무(퍼블리싱) 갈색 + 아래 노란 띠(프론트엔드 병행) */
const BOTH_FILL = 'bg-[linear-gradient(to_bottom,var(--pub)_68%,var(--accent)_68%)]';

const SEG_TONE = {
  frontend: 'bg-accent text-on-accent',
  publishing: 'bg-pub text-white',
  both: `${BOTH_FILL} text-white`,
} as const;

const ROW_TONE = {
  frontend: 'border-accent',
  publishing: 'border-pub',
  both: '[border-image:linear-gradient(to_bottom,var(--pub)_60%,var(--accent)_60%)_1]',
} as const;

const KEY = "before:mr-1.5 before:inline-block before:size-3 before:rounded-[3px] before:align-[-1px] before:content-['']";
const HATCH = 'bg-[repeating-linear-gradient(135deg,var(--gap)_0_2px,transparent_2px_7px)]';

/** 'YYYY-MM' 의 해당 월 첫날(edge='start') 또는 다음 달 첫날(edge='end')을 일 단위 인덱스로 */
function dayIndex(ym: string, edge: 'start' | 'end'): number {
  const [y, m] = ym.split('-').map(Number);
  return Date.UTC(y, edge === 'start' ? m - 1 : m, 1) / 86_400_000;
}

interface Props {
  /** web: 홈페이지(애니메이션 · 회사 목록 포함) · doc: 경력기술서(인쇄용 축소판) */
  variant?: 'web' | 'doc';
}

/** 2018년부터 현재까지 재직 구간을 한 줄 막대로 보여주는 타임라인 */
export function CareerTimeline({ variant = 'web' }: Props) {
  const web = variant === 'web';
  const { t, tc, lang } = useI18n();
  const end = (ym: string | null) => (ym ? fmtDate(ym) : t('career.present'));
  const now = today().slice(0, 7);
  const origin = dayIndex(RANGE_START, 'start');
  const span = dayIndex(now, 'end') - origin;
  const pos = (ym: string, edge: 'start' | 'end') => ((dayIndex(ym, edge) - origin) / span) * 100;

  const segments = [...companies]
    .sort((a, b) => a.start.localeCompare(b.start))
    .map((c) => ({
      id: c.id,
      name: tc(c.name),
      key: trackKey(c),
      start: c.start,
      end: c.end,
      left: pos(c.start, 'start'),
      width: pos(c.end ?? now, 'end') - pos(c.start, 'start'),
      duration: formatMonths(companyMonths(c), lang),
    }));

  // 시작월이 1월이면 그 해부터, 아니면 다음 해부터 눈금 표시
  const startYear = Number(RANGE_START.slice(0, 4)) + (RANGE_START.endsWith('-01') ? 0 : 1);
  const endYear = Number(now.slice(0, 4));
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

  return (
    <figure
      className={cn(
        'border border-line bg-surface',
        web ? 'mb-[clamp(48px,8vw,80px)] rounded-card p-[clamp(20px,3vw,32px)]' : 'rounded-[2mm] p-[4mm]',
      )}
    >
      <div className={cn('relative rounded-[10px] bg-surface-2', web ? 'h-11' : 'h-[9mm]')} role="list" aria-label={t('a11y.timeline')}>
        {careerGaps().map((g) => (
          <div
            key={g.start}
            className={cn('absolute inset-y-0', web ? `${HATCH} opacity-80` : 'bg-gap/60')}
            style={{ left: `${pos(g.start, 'start')}%`, width: `${pos(g.end, 'end') - pos(g.start, 'start')}%` }}
            aria-hidden="true"
          />
        ))}
        {segments.map((s, i) => (
          <div
            key={s.id}
            role="listitem"
            // 키보드 사용자도 툴팁을 볼 수 있도록 포커스 가능하게
            tabIndex={web ? 0 : undefined}
            className="group/tip absolute inset-y-0 rounded-lg"
            style={{ left: `${s.left}%`, width: `${s.width}%` }}
          >
            <div
              className={cn(
                'flex size-full origin-left items-center justify-center overflow-hidden rounded-lg font-bold whitespace-nowrap',
                web
                  ? 'animate-grow text-[13px] transition-[filter] duration-200 group-hover/tip:brightness-95 motion-reduce:animate-none'
                  : 'text-[7.5pt]',
                SEG_TONE[s.key],
              )}
              style={{ animationDelay: web ? `${0.15 + i * 0.12}s` : undefined }}
            >
              {/* 좁은 화면에서는 막대 안 이름을 숨긴다 (인쇄 A4 폭에서는 표시) */}
              <span className="hidden overflow-hidden px-1.5 text-ellipsis sm:inline print:inline" aria-hidden="true">
                {s.width > 4 ? s.name : ''}
              </span>
              <span className="sr-only">
                {t('a11y.timelineItem', { name: s.name, from: fmtDate(s.start), to: end(s.end), duration: s.duration })}
              </span>
            </div>
            {web && (
              <TooltipBubble side="top" align={s.left < 12 ? 'start' : s.left + s.width > 88 ? 'end' : 'center'}>
                <strong className="block text-[13px] font-bold">{s.name}</strong>
                <span className="block tabular-nums opacity-80">
                  {fmtDate(s.start)} – {end(s.end)} · {s.duration}
                </span>
                <span className="block opacity-80">{t(`track.${s.key}`)}</span>
              </TooltipBubble>
            )}
          </div>
        ))}
      </div>
      <div className="relative mt-1.5 h-6" aria-hidden="true">
        {years.map((y) => (
          <span
            key={y}
            className="absolute top-0 -translate-x-1/2 text-xs tabular-nums text-ink-3 before:absolute before:-top-1.5 before:left-1/2 before:h-[5px] before:w-px before:bg-ink-3 before:content-['']"
            style={{ left: `${pos(`${y}-01`, 'start')}%` }}
          >
            {y}
          </span>
        ))}
      </div>
      <figcaption className="mt-2.5 flex flex-wrap gap-x-[18px] gap-y-1.5 text-[13px] text-ink-2">
        <span className={cn(KEY, 'before:bg-accent')}>{t('track.frontend')}</span>
        <span className={cn(KEY, 'before:bg-[linear-gradient(to_bottom,var(--pub)_60%,var(--accent)_60%)]')}>{t('track.both')}</span>
        <span className={cn(KEY, 'before:bg-pub')}>{t('track.publishing')}</span>
        <span
          className={cn(
            KEY,
            web
              ? 'before:border before:border-line before:bg-[repeating-linear-gradient(135deg,var(--gap)_0_2px,transparent_2px_5px)]'
              : 'before:bg-gap/60',
          )}
        >
          {t('track.gap')}
        </span>
      </figcaption>
      {web && (
        <ol className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-2.5 border-t border-line pt-5">
          {[...companies].reverse().map((c) => (
            <li key={c.id} className={cn('grid gap-0.5 border-l-[3px] pl-3 text-[13px]', ROW_TONE[trackKey(c)])}>
              <span className="text-[15px] font-bold">{tc(c.name)}</span>
              <span className="tabular-nums text-ink-3">
                {fmtDate(c.start)} – {end(c.end)}
              </span>
              <span className="font-semibold text-ink-2">{formatMonths(companyMonths(c), lang)}</span>
            </li>
          ))}
        </ol>
      )}
    </figure>
  );
}
