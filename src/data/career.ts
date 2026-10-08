import { companies, type Company, type Track } from './profile';

export function today(): string {
  const now = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}`;
}

function monthIndex(ym: string): number {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
}

function fromIndex(i: number): string {
  return `${Math.floor(i / 12)}-${String((i % 12) + 1).padStart(2, '0')}`;
}

/** 시작월과 종료월을 모두 포함한 개월 수 (종료가 null이면 이번 달까지) */
export function monthsBetween(start: string, end: string | null): number {
  return monthIndex(end ?? today()) - monthIndex(start) + 1;
}

/** 개월 수를 'N년 N개월' (en: 'N yrs N mos')로 */
export function formatMonths(months: number, lang: 'ko' | 'en' = 'ko'): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts =
    lang === 'en'
      ? [y && `${y} ${y === 1 ? 'yr' : 'yrs'}`, m && `${m} ${m === 1 ? 'mo' : 'mos'}`]
      : [y && `${y}년`, m && `${m}개월`];
  return parts.filter(Boolean).join(' ');
}

export function yearsDecimal(months: number): number {
  return Math.floor((months / 12) * 10) / 10;
}

export function companyMonths(c: Company): number {
  return monthsBetween(c.start, c.end);
}

/** track 지정 시 해당 직무로 산정되는 회사만 합산 (병행 직무는 제외) */
export function totalMonths(track?: Track): number {
  return companies.filter((c) => !track || c.tracks.includes(track)).reduce((sum, c) => sum + companyMonths(c), 0);
}

/** 재직 기간 사이의 빈 구간 (타임라인용) */
export function careerGaps(): { start: string; end: string }[] {
  const sorted = [...companies].sort((a, b) => a.start.localeCompare(b.start));
  const gaps: { start: string; end: string }[] = [];
  for (let i = 1; i < sorted.length; i++) {
    const prevEnd = sorted[i - 1].end;
    if (!prevEnd) continue;
    const from = monthIndex(prevEnd) + 1;
    const to = monthIndex(sorted[i].start) - 1;
    if (to >= from) gaps.push({ start: fromIndex(from), end: fromIndex(to) });
  }
  return gaps;
}

/** '2024-04-22' → '2024.04' (day=true면 '2024.04.22') */
export function fmtDate(date: string | null, day = false): string {
  if (!date) return '재직 중';
  const [y, m, d] = date.split('-');
  return day && d ? `${y}.${m}.${d}` : `${y}.${m}`;
}

export function fmtPeriod(period: [string, string | null], day = false, lang: 'ko' | 'en' = 'ko'): string {
  if (period[1] === period[0]) return fmtDate(period[0], day);
  return `${fmtDate(period[0], day)} – ${period[1] ? fmtDate(period[1], day) : lang === 'en' ? 'Present' : '현재'}`;
}

export const TRACK_LABEL: Record<Track, string> = {
  frontend: '프론트엔드',
  publishing: '퍼블리싱',
};

/** 표시용 키 — 산정 직무 외에 병행 직무가 있으면 'both' (타임라인 두 색 막대) */
export function trackKey(c: Company): 'frontend' | 'publishing' | 'both' {
  return c.alongside?.length ? 'both' : c.tracks[0];
}

export function careerSummary() {
  const all = totalMonths();
  const frontend = totalMonths('frontend');
  const publishing = totalMonths('publishing');
  const projects = companies.reduce((n, c) => n + (c.projectLog?.length ?? c.projects.length), 0);
  return { all, frontend, publishing, projects };
}
