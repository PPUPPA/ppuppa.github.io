import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';
import { CareerTimeline } from '../components/CareerTimeline';
import { CaseBlock } from '../components/CaseBlock';
import { CountUp } from '../components/CountUp';
import { Reveal } from '../components/Reveal';
import { Sunflower } from '../components/Sunflower';
import { Tooltip } from '../components/Tooltip';
import { ThemeToggle } from '../components/ThemeToggle';
import { careerSummary, companyMonths, fmtDate, fmtPeriod, formatMonths, trackKey } from '../data/career';
import { works, type WorkKind } from '../data/portfolio';
import {
  certificates,
  companies,
  education,
  profile,
  projectCount,
  sideProjects,
  skills,
  trainings,
  type Company,
} from '../data/profile';
import { useI18n } from '../i18n';
import { cn } from '../lib/cn';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Career' },
  { id: 'works', label: 'Works' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- 반복되는 스타일 조합 ---------- */
const btn = {
  base: 'inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-[background-color,color,border-color,transform] duration-250 ease-soft hover:-translate-y-0.5',
  md: 'h-11 px-5 text-[15px]',
  sm: 'h-[34px] px-3.5 text-sm',
  primary: 'bg-accent text-on-accent hover:bg-ink hover:text-bg',
  ghost: 'border border-line bg-surface hover:border-ink',
  ghostDark: 'border border-bg/30 bg-transparent text-bg hover:border-sun hover:text-sun',
};
const section = 'scroll-mt-16 py-[clamp(80px,12vw,140px)]';
const card = 'rounded-card border border-line bg-surface';
const dashItem = "relative pl-3.5 before:absolute before:left-0 before:text-ink-3 before:content-['–']";
const extArrow =
  'ml-1 inline-block text-[0.85em] text-ink-3 transition-transform duration-250 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink';

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function LangToggle() {
  const { t, lang, setLang } = useI18n();
  return (
    <Tooltip label={t('a11y.language')}>
      <button
        type="button"
        className="grid h-[34px] min-w-[34px] place-items-center rounded-full border border-line bg-surface px-2 text-xs font-bold tracking-[0.04em] transition-colors duration-200 hover:border-ink"
        onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
        aria-label={t('a11y.language')}
        lang={lang === 'ko' ? 'en' : 'ko'}
      >
        {t('lang.switch')}
      </button>
    </Tooltip>
  );
}

function Header() {
  const { t, tc } = useI18n();
  const active = useActiveSection(NAV.map((n) => n.id));
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300',
        scrolled && 'bg-bg/78 shadow-[0_1px_0_var(--line)] backdrop-blur-[14px] backdrop-saturate-140',
      )}
    >
      <div className="wrap flex h-16 items-center gap-6">
        <a href="#top" className="inline-flex items-center gap-2 text-[17px] font-extrabold tracking-[-0.02em]">
          <span className="size-2.5 rounded-full bg-sun shadow-[0_0_0_4px_var(--sun-soft)]" aria-hidden="true" />
          {tc(profile.name)}
        </a>
        <nav aria-label={t('a11y.sections')} className="ml-auto hidden gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? 'true' : undefined}
              className={cn(
                'rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 hover:bg-surface-2 hover:text-ink',
                active === n.id ? 'bg-surface-2 text-ink' : 'text-ink-2',
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <a className={cn(btn.base, btn.sm, btn.ghost)} href="./resume.html">
            {t('nav.resume')}
          </a>
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

const unitClass = 'ml-0.5 text-[0.45em] font-semibold text-ink-2';

function Stat({ label, children, unit }: { label: string; children: ReactNode; unit?: string }) {
  return (
    <div>
      <dt className="text-[13px] text-ink-3">{label}</dt>
      <dd className="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] tracking-[-0.03em] tabular-nums">
        {children}
        {unit && <small className={unitClass}>{unit}</small>}
      </dd>
    </div>
  );
}

/** 개월 수를 'N년 N개월'로 — 숫자 부분만 카운트업 */
function Duration({ months }: { months: number }) {
  const { t } = useI18n();
  const y = Math.floor(months / 12);
  const m = months % 12;
  return (
    <>
      {y > 0 && (
        <>
          <CountUp to={y} />
          <small className={unitClass}>{t('stats.year', { count: y })}</small>
        </>
      )}
      {m > 0 && (
        <>
          {y > 0 && ' '}
          <CountUp to={m} />
          <small className={unitClass}>{t('stats.month', { count: m })}</small>
        </>
      )}
    </>
  );
}

function Hero() {
  const { t, tc, lang } = useI18n();
  const s = careerSummary();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const flowerY = useTransform(scrollY, [0, 800], [0, 160]);
  const flowerScale = useTransform(scrollY, [0, 800], [1, 1.15]);

  const fadeIn = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-30 pb-24" id="top">
      <motion.div
        className={cn(
          'pointer-events-none absolute aspect-square',
          'top-[22%] right-[-40vw] -mt-[55vw] w-[110vw] opacity-55',
          'md:top-1/2 md:right-[max(-16vw,-260px)] md:mt-[calc(min(58vw,680px)/-2)] md:w-[min(58vw,680px)] md:opacity-100',
        )}
        style={reduce ? undefined : { y: flowerY, scale: flowerScale }}
      >
        <Sunflower />
      </motion.div>
      <div className="wrap relative z-10">
        <motion.p
          className={cn(
            'font-serif leading-[1.28] font-bold',
            lang === 'en' ? 'text-[clamp(32px,4.8vw,58px)] tracking-[-0.02em]' : 'text-[clamp(34px,5.4vw,66px)] tracking-[-0.035em]',
          )}
          {...fadeIn(0.1)}
        >
          {tc(profile.slogan[0])}
          <br />
          <mark className="bg-transparent bg-[linear-gradient(transparent_60%,var(--sun-soft)_60%)] text-inherit">{tc(profile.slogan[1])}</mark>
        </motion.p>
        <motion.h1
          className="mt-7 text-[clamp(18px,2.2vw,24px)] leading-normal font-medium tracking-[-0.02em] text-ink-2"
          {...fadeIn(0.3)}
        >
          {t('hero.greetBefore', { role: tc(profile.role) })}
          <strong className="bg-[linear-gradient(transparent_70%,var(--accent-soft)_70%)] text-[1.45em] font-extrabold tracking-[-0.03em] text-ink">
            {tc(profile.name)}
          </strong>
          {t('hero.greetAfter', { role: tc(profile.role).toLowerCase() })}
        </motion.h1>
        <motion.p className="mt-7 max-w-[520px] text-[clamp(16px,2vw,18px)] text-ink-2" {...fadeIn(0.5)}>
          {tc(profile.intro[0])}
        </motion.p>
        <motion.div className="mt-8 flex flex-wrap gap-2.5" {...fadeIn(0.6)}>
          <a className={cn(btn.base, btn.md, btn.primary)} href="./resume.html">
            {t('hero.resume')}
          </a>
          <a className={cn(btn.base, btn.md, btn.ghost)} href="./career.html">
            {t('hero.career')}
          </a>
          <a className={cn(btn.base, btn.md, btn.ghost)} href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </motion.div>
        <motion.dl
          className="mt-14 grid grid-cols-[repeat(2,auto)] justify-start gap-x-[clamp(24px,4vw,48px)] gap-y-2 md:grid-cols-[repeat(4,auto)]"
          {...fadeIn(0.7)}
        >
          <Stat label={t('stats.total')}>
            <Duration months={s.all} />
          </Stat>
          <Stat label={t('stats.frontend')}>
            <Duration months={s.frontend} />
          </Stat>
          <Stat label={t('stats.projects')} unit={t('stats.count')}>
            <CountUp to={s.projects} />
          </Stat>
          <Stat label={t('stats.a11y')} unit={t('stats.count')}>
            <CountUp to={2} />
          </Stat>
        </motion.dl>
      </div>
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 -ml-3 h-[38px] w-6 rounded-xl border-[1.5px] border-ink-3"
        aria-label={t('a11y.scrollDown')}
      >
        <span className="absolute top-2 left-1/2 -ml-[1.5px] h-[7px] w-[3px] animate-wheel rounded-sm bg-ink-2 motion-reduce:animate-none" />
      </a>
    </section>
  );
}

function SectionHead({ index, title, desc }: { index: string; title: string; desc?: string }) {
  return (
    <Reveal className="mb-[clamp(36px,6vw,56px)]">
      <span className="mb-2.5 inline-block text-[13px] font-semibold tracking-[0.08em] text-accent-ink">{index}</span>
      <h2 className="text-[clamp(36px,6vw,56px)] leading-[1.1] font-extrabold tracking-[-0.03em]">{title}</h2>
      {desc && <p className="mt-4 max-w-[620px] text-ink-2">{desc}</p>}
    </Reveal>
  );
}

function About() {
  const { tc } = useI18n();
  return (
    <section className={section} id="about">
      <div className="wrap">
        <SectionHead index="01" title="About" />
        <div className="grid gap-[clamp(32px,6vw,80px)] lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="grid gap-[18px] text-[clamp(17px,2vw,19px)] leading-[1.85] text-ink-2 [&>p:first-child]:font-semibold [&>p:first-child]:text-ink">
            {profile.intro.map((p) => (
              <p key={p}>{tc(p)}</p>
            ))}
          </Reveal>
          <ul className="grid gap-3.5">
            {profile.strengths.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 0.08}
                className={cn(
                  card,
                  'relative py-6 pr-6 pl-16 transition-[transform,border-color] duration-350 ease-soft hover:translate-x-1.5 hover:border-accent',
                )}
              >
                <span className="absolute top-[26px] left-6 text-[13px] font-bold text-accent-ink">0{i + 1}</span>
                <h3 className="text-lg font-bold tracking-[-0.02em]">{tc(s.title)}</h3>
                <p className="mt-1.5 text-[15px] text-ink-2">{tc(s.body)}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectLogToggle({ company }: { company: Company }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const log = company.projectLog;
  if (!log || log.length <= company.projects.length) return null;
  const id = `log-${company.id}`;
  return (
    <div className="mt-4">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-dashed border-ink-3 px-4 py-2.5 text-sm font-semibold transition-colors duration-200 hover:border-solid hover:bg-surface"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? t('career.hideLog') : t('career.showLog', { count: log.length })}
        <span
          className={cn(
            'size-[7px] border-r-2 border-b-2 border-current transition-transform duration-300 ease-soft',
            open ? 'translate-y-0.5 -rotate-135' : '-translate-y-0.5 rotate-45',
          )}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {t('career.logNote') && <p className="mt-3 text-[13px] text-ink-3">{t('career.logNote')}</p>}
            <ol className={cn(card, 'mt-3 grid overflow-hidden [counter-reset:log]')} lang="ko">
            {log.map((p) => (
              <li
                key={p.name + p.period[0]}
                className="grid grid-cols-[2.4em_1fr] gap-2 border-t border-line px-[18px] py-[9px] text-sm [counter-increment:log] first:border-t-0 before:text-ink-3 before:tabular-nums before:content-[counter(log)] lg:grid-cols-[2.4em_170px_1fr]"
              >
                <span className="text-ink-3 tabular-nums">{fmtPeriod(p.period)}</span>
                <span className="col-start-2 lg:col-start-auto">{p.name}</span>
              </li>
            ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Experience({ company }: { company: Company }) {
  const { t, tc, lang } = useI18n();
  const tone = trackKey(company) === 'frontend' ? 'frontend' : 'pub';
  return (
    <Reveal
      as="article"
      className="grid gap-[clamp(24px,4vw,56px)] border-t border-line py-[clamp(36px,5vw,56px)] lg:grid-cols-[260px_1fr]"
    >
      <div className="self-start lg:sticky lg:top-22">
        <p className="text-sm font-semibold text-ink-3 tabular-nums">
          {fmtDate(company.start)} – {company.end ? fmtDate(company.end) : t('career.present')}
        </p>
        <h3 className="mt-1.5 text-[28px] font-extrabold tracking-[-0.03em]">{tc(company.name)}</h3>
        <p className="font-medium text-ink-2">{tc(company.jobTitle)}</p>
        <p className="mt-3.5 text-sm font-bold">{formatMonths(companyMonths(company), lang)}</p>
        <p className="mt-2 text-sm text-ink-3">
          {t('career.meta', { description: tc(company.description), count: projectCount(company) })}
        </p>
      </div>
      <div>
        <ul className="mb-7 grid gap-1.5 text-[17px] font-semibold">
          {company.summary.map((s) => (
            <li
              key={s}
              className={cn(
                "relative pl-[18px] before:absolute before:top-[0.72em] before:left-0 before:size-[7px] before:rounded-full before:content-['']",
                tone === 'frontend' ? 'before:bg-accent' : 'before:bg-pub',
              )}
            >
              {tc(s)}
            </li>
          ))}
        </ul>
        {company.cases && (
          <div className="mb-3.5 grid gap-3.5">
            {company.cases.map((c) => (
              <CaseBlock key={c.title} item={c} tone={tone} onSurface />
            ))}
          </div>
        )}
        <div className="grid gap-3.5">
          {company.projects.map((p) => (
            <div
              key={p.name}
              className={cn(
                card,
                'px-6 py-[22px] transition-[border-color,box-shadow] duration-300',
                'hover:border-[color-mix(in_srgb,var(--ink)_25%,var(--line))] hover:shadow-[0_12px_32px_-18px_rgb(0_0_0/0.25)]',
              )}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-lg font-bold tracking-[-0.02em]">
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noreferrer" className="group hover:text-accent-ink">
                      {tc(p.name)}
                      <span className={extArrow} aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ) : (
                    tc(p.name)
                  )}
                </h4>
                <span className="text-[13px] text-ink-3 tabular-nums">{fmtPeriod(p.period, false, lang)}</span>
              </div>
              <p className="mt-1 text-[15px] text-ink-2">{tc(p.summary)}</p>
              {p.role && (
                <p className="mt-2 text-[14.5px] font-medium">
                  <span className="mr-2 inline-block rounded-md bg-ink px-2 align-[1px] text-xs font-bold text-bg">{t('career.role')}</span>
                  {tc(p.role)}
                </p>
              )}
              {p.highlights.length > 0 && (
                <ul className="mt-3 grid gap-1 text-[15px]">
                  {p.highlights.map((h) => (
                    <li key={h} className={dashItem}>
                      {tc(h)}
                    </li>
                  ))}
                </ul>
              )}
              {p.cases && (
                <div className="mt-4 grid gap-3">
                  {p.cases.map((c) => (
                    <CaseBlock key={c.title} item={c} tone={tone} />
                  ))}
                </div>
              )}
              <ul className="mt-3.5 flex flex-wrap gap-1.5" aria-label={t('a11y.techStack')}>
                {p.stack.map((t) => (
                  <li key={t} className="rounded-md bg-surface-2 px-2.5 py-0.5 text-[12.5px] font-medium text-ink-2">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ProjectLogToggle company={company} />
      </div>
    </Reveal>
  );
}

function Career() {
  const { t, tc, lang } = useI18n();
  const s = careerSummary();
  return (
    <section className={section} id="career">
      <div className="wrap">
        <SectionHead
          index="02"
          title="Career"
          desc={t('career.desc', {
            all: formatMonths(s.all, lang),
            projects: s.projects,
            publishing: formatMonths(s.publishing, lang),
            frontend: formatMonths(s.frontend, lang),
          })}
        />
        <Reveal>
          <CareerTimeline />
        </Reveal>
        <div className="grid">
          {companies.map((c) => (
            <Experience key={c.id} company={c} />
          ))}
        </div>
        <Reveal className="mt-[clamp(40px,6vw,64px)] border-t border-line pt-[clamp(36px,5vw,56px)]">
          <h3 className="mb-[18px] text-[22px] font-extrabold tracking-[-0.02em]">Side Projects</h3>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3.5">
            {sideProjects.map((p) => (
              <li key={p.name}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    card,
                    'grid h-full gap-1.5 px-6 py-[22px] transition-[transform,border-color] duration-350 ease-soft hover:-translate-y-1 hover:border-accent',
                  )}
                >
                  <span className="text-[17px] font-bold">{tc(p.name)}</span>
                  <span className="text-[15px] text-ink-2">{tc(p.summary)}</span>
                  {p.highlights && (
                    <ul className="mt-1 mb-0.5 grid gap-[3px] text-sm text-ink-2">
                      {p.highlights.map((h) => (
                        <li key={h} className={dashItem}>
                          {tc(h)}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="text-[13px] text-ink-3">{p.stack.join(' · ')}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const WORK_KINDS: (WorkKind | 'all')[] = ['all', 'frontend', 'publishing', 'design'];

function Works() {
  const { t, tc } = useI18n();
  const [kind, setKind] = useState<WorkKind | 'all'>('all');
  const [expanded, setExpanded] = useState(false);
  const filtered = works.filter((w) => kind === 'all' || w.kind === kind);
  const visible = expanded ? filtered : filtered.slice(0, 9);

  return (
    <section className={cn(section, 'bg-surface-2')} id="works">
      <div className="wrap">
        <SectionHead index="03" title="Works" desc={t('works.desc')} />
        <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label={t('a11y.workFilter')}>
          {WORK_KINDS.map((id) => (
            <button
              key={id}
              type="button"
              className={cn(
                'inline-flex h-[38px] items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors duration-200',
                kind === id ? 'border-ink bg-ink text-bg' : 'border-line bg-surface hover:border-ink',
              )}
              aria-pressed={kind === id}
              onClick={() => {
                setKind(id);
                setExpanded(false);
              }}
            >
              {t(`works.${id}`)}
              <span className="text-xs opacity-60">{id === 'all' ? works.length : works.filter((w) => w.kind === id).length}</span>
            </button>
          ))}
        </div>
        <motion.ul layout className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((w) => {
              const Inner = w.url ? 'a' : 'div';
              return (
                <motion.li
                  layout
                  key={w.num}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <Inner
                    className={cn(card, 'group block h-full overflow-hidden')}
                    {...(w.url ? { href: w.url, target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    <div className="aspect-[740/400] overflow-hidden bg-surface-2">
                      <img
                        src={`./img/portfolio/thumb_${w.num}.jpg`}
                        alt=""
                        loading="lazy"
                        width={740}
                        height={400}
                        className={cn('size-full object-cover transition-transform duration-800 ease-soft', w.url && 'group-hover:scale-106')}
                      />
                    </div>
                    <div className="px-[18px] pt-4 pb-[18px]">
                      <p className="text-[12.5px] text-ink-3">
                        {w.year} · {tc(w.company)}
                      </p>
                      <h3 className="mt-0.5 text-[17px] font-bold tracking-[-0.02em]">
                        {tc(w.title)}
                        {w.url && (
                          <span className={extArrow} aria-hidden="true">
                            ↗
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 text-[13px] text-ink-2">{tc(w.contribution)}</p>
                    </div>
                  </Inner>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
        {filtered.length > visible.length && (
          <div className="mt-8 flex justify-center">
            <button type="button" className={cn(btn.base, btn.md, btn.ghost)} onClick={() => setExpanded(true)}>
              {t('works.more', { count: filtered.length - visible.length })}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function EduColumn({ title, items, delay }: { title: string; items: { period: string; name: string; detail: string }[]; delay?: number }) {
  const { tc } = useI18n();
  return (
    <Reveal delay={delay}>
      <h3 className="text-sm font-bold tracking-[0.04em] text-ink-3 uppercase">{title}</h3>
      <ul className="mt-4 grid gap-[18px]">
        {items.map((e) => (
          <li key={e.name} className="grid text-[15px]">
            <span className="text-[13px] text-ink-3 tabular-nums">{e.period}</span>
            <strong>{tc(e.name)}</strong>
            <span className="text-sm text-ink-2">{tc(e.detail)}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function Skills() {
  const { t, tc } = useI18n();
  return (
    <section className={section} id="skills">
      <div className="wrap">
        <SectionHead index="04" title="Skills & Education" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-10 gap-y-7">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.06}>
              <h3 className="text-sm font-bold tracking-[0.04em] text-ink-3 uppercase">{tc(g.group)}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink">
                    {tc(s)}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <div className="mt-[clamp(56px,8vw,88px)] grid gap-10 border-t border-line pt-[clamp(40px,6vw,56px)] lg:grid-cols-3">
          <EduColumn title={t('edu.education')} items={education} />
          <EduColumn title={t('edu.training')} items={trainings} delay={0.06} />
          <EduColumn
            title={t('edu.certificates')}
            items={certificates.map((c) => ({ period: c.date, name: c.name, detail: c.issuer }))}
            delay={0.12}
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t, tc } = useI18n();
  return (
    <section className="scroll-mt-16 bg-ink pt-[clamp(80px,12vw,140px)] text-bg" id="contact">
      <div className="wrap">
        <Reveal>
          <span className="mb-2.5 inline-block text-[13px] font-semibold tracking-[0.08em] text-sun">05</span>
          <h2 className="font-serif text-[clamp(30px,5vw,52px)] leading-[1.3] font-bold tracking-[-0.03em]">
            {t('contact.title1')}
            <br />
            {t('contact.title2')}
          </h2>
          <a
            className={cn(
              'mt-9 inline-block text-[clamp(22px,4vw,40px)] font-extrabold tracking-[-0.02em]',
              'bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_3px] bg-[position:0_100%] bg-no-repeat',
              'transition-[background-size,color] duration-500 ease-soft hover:bg-[length:100%_3px] hover:text-sun',
            )}
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <div className="mt-9 flex flex-wrap gap-2.5">
            <a className={cn(btn.base, btn.md, btn.ghostDark)} href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className={cn(btn.base, btn.md, btn.ghostDark)} href="./resume.html">
              {t('contact.resume')}
            </a>
            <a className={cn(btn.base, btn.md, btn.ghostDark)} href="./career.html">
              {t('contact.career')}
            </a>
          </div>
        </Reveal>
      </div>
      <footer className="mt-[clamp(80px,12vw,140px)] border-t border-bg/14 px-4 py-7 text-center text-[13px] opacity-60">
        <p>
          © {new Date().getFullYear()} {tc(profile.name)}. Built with React · Tailwind CSS · Motion.
        </p>
      </footer>
    </section>
  );
}

export function Home() {
  const { t } = useI18n();
  return (
    <>
      <a className="skip-link" href="#about">
        {t('a11y.skip')}
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Career />
        <Works />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
