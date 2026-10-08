import { CaseBlock } from '../components/CaseBlock';
import { DocSection, DocShell } from '../components/DocShell';
import { careerSummary, companyMonths, fmtDate, fmtPeriod, formatMonths } from '../data/career';
import {
  certificates,
  companies,
  coverLetter,
  education,
  featuredCases,
  profile,
  projectCount,
  sideProjects,
  skills,
  trainings,
  type Case,
} from '../data/profile';

const SITE_URL = 'https://ppuppa.github.io';

/** 이력서에서는 대표 사례만 전체 구조로, 나머지는 '제목 — 결과' 한 줄로 (전체는 경력기술서) */
function Cases({ items }: { items?: Case[] }) {
  if (!items?.length) return null;
  const brief = items.filter((k) => !k.featured);
  return (
    <>
      {items
        .filter((k) => k.featured)
        .map((k) => (
          <CaseBlock key={k.title} item={k} variant="doc" />
        ))}
      {brief.length > 0 && (
        <ul className="doc-bullets doc-brief-cases">
          {brief.map((k) => (
            <li key={k.title}>
              <strong>{k.title}</strong> — {k.result}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export function Resume() {
  const s = careerSummary();

  return (
    <DocShell current="resume">
      <header className="doc-header">
        <div>
          <p className="doc-header__role">{profile.role}</p>
          <h1 className="doc-header__name">{profile.name}</h1>
          <p className="doc-header__slogan">{profile.slogan.join(' ')}</p>
        </div>
        <ul className="doc-header__contact">
          <li>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          {profile.phone && (
            <li>
              <span>Phone</span>
              {profile.phone}
            </li>
          )}
          <li>
            <span>GitHub</span>
            <a href={profile.github}>{profile.github.replace('https://', '')}</a>
          </li>
          <li>
            <span>Web</span>
            <a href={SITE_URL}>{SITE_URL.replace('https://', '')}</a>
          </li>
        </ul>
      </header>

      <dl className="doc-stats">
        <div>
          <dt>총 실무 경력</dt>
          <dd>{formatMonths(s.all)}</dd>
        </div>
        <div>
          <dt>프론트엔드</dt>
          <dd>{formatMonths(s.frontend)}</dd>
        </div>
        <div>
          <dt>퍼블리싱</dt>
          <dd>{formatMonths(s.publishing)}</dd>
        </div>
        <div>
          <dt>참여 프로젝트</dt>
          <dd>{s.projects}건</dd>
        </div>
      </dl>
      <p className="doc-note">* 위펀에서는 메인 퍼블리셔로 근무하며 React · Vue 기능 개발을 병행했고, 이 기간은 퍼블리싱 경력으로 산정했습니다.</p>

      <DocSection title="Introduce">
        <div className="doc-intro">
          {profile.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </DocSection>

      <DocSection title="Key Problem Solving">
        <ol className="doc-keycases">
          {featuredCases().map(({ company, item }) => (
            <li key={item.title}>
              <div className="doc-keycases__head">
                <strong>{item.title}</strong>
                <span>
                  {company} · {item.tags.join(' · ')}
                </span>
              </div>
              <p>{item.result}</p>
            </li>
          ))}
        </ol>
      </DocSection>

      <DocSection title="Skills">
        <dl className="doc-skills">
          {skills.map((g) => (
            <div key={g.group}>
              <dt>{g.group}</dt>
              <dd>{g.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </DocSection>

      <DocSection title="Experience" className="doc-break">
        {companies.map((c) => {
          const isRecent = c.tracks.includes('frontend');
          const extra = projectCount(c) - c.projects.length;
          return (
            <article className="doc-exp" key={c.id}>
              <div className="doc-exp__aside">
                <h3>{c.name}</h3>
                <p className="doc-exp__period">
                  {fmtDate(c.start)} – {c.end ? fmtDate(c.end) : '재직 중'}
                </p>
                <p className="doc-exp__days">{formatMonths(companyMonths(c))}</p>
                <p className="doc-exp__role">{c.jobTitle}</p>
                <p className="doc-exp__dept">{c.dept}</p>
              </div>
              <div className="doc-exp__body">
                <p className="doc-exp__desc">{c.description}</p>
                <ul className="doc-bullets doc-bullets--strong">
                  {c.summary.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <Cases items={c.cases} />
                {c.projects.map((p) => (
                  <div className="doc-project" key={p.name}>
                    <div className="doc-project__head">
                      <h4>{p.name}</h4>
                      <span>{fmtPeriod(p.period)}</span>
                    </div>
                    {isRecent ? (
                      <>
                        <p className="doc-project__summary">{p.summary}</p>
                        {p.role && (
                          <p className="doc-project__role">
                            <span>역할</span>
                            {p.role}
                          </p>
                        )}
                        <ul className="doc-bullets">
                          {p.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                        <Cases items={p.cases} />
                      </>
                    ) : (
                      <p className="doc-project__summary">
                        {p.summary}
                        {p.role && <em> — {p.role}</em>}
                        {p.highlights.length > 0 && <strong className="doc-project__badge"> {p.highlights.join(', ')}</strong>}
                      </p>
                    )}
                    <p className="doc-project__stack">{p.stack.join(' · ')}</p>
                  </div>
                ))}
                {extra > 0 && <p className="doc-exp__more">외 {extra}건 — 전체 목록은 경력기술서에 정리했습니다.</p>}
              </div>
            </article>
          );
        })}
      </DocSection>

      <DocSection title="Side Projects">
        {sideProjects.map((p) => (
          <div className="doc-project doc-project--flat" key={p.name}>
            <div className="doc-project__head">
              <h4>{p.name}</h4>
              <span>{fmtPeriod(p.period)}</span>
            </div>
            <p className="doc-project__summary">
              {p.summary}
              <em> — {p.role}</em>
            </p>
            {p.highlights && (
              <ul className="doc-bullets">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <Cases items={p.cases} />
            <p className="doc-project__stack">
              {p.stack.join(' · ')} · <a href={p.link}>{p.link.replace(/^https?:\/\//, '')}</a>
            </p>
          </div>
        ))}
      </DocSection>

      <div className="doc-cols">
        <DocSection title="Education">
          <ul className="doc-list">
            {education.map((e) => (
              <li key={e.name}>
                <span>{e.period}</span>
                <div>
                  <strong>{e.name}</strong>
                  <p>{e.detail}</p>
                </div>
              </li>
            ))}
            {trainings.filter((e) => e.core).map((e) => (
              <li key={e.name}>
                <span>{e.period}</span>
                <div>
                  <strong>{e.name}</strong>
                  <p>{e.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </DocSection>
        <DocSection title="Certificates">
          <ul className="doc-list">
            {certificates.map((c) => (
              <li key={c.name}>
                <span>{c.date}</span>
                <div>
                  <strong>{c.name}</strong>
                  <p>{c.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </DocSection>
      </div>

      <DocSection title="자기소개" className="doc-break">
        <div className="doc-letter">
          {coverLetter.map((c) => (
            <div key={c.title}>
              <h3>{c.title}</h3>
              {c.body.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
          ))}
        </div>
      </DocSection>
    </DocShell>
  );
}
