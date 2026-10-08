import { CareerTimeline } from '../components/CareerTimeline';
import { CaseBlock } from '../components/CaseBlock';
import { DocSection, DocShell } from '../components/DocShell';
import { careerSummary, companyMonths, fmtDate, fmtPeriod, formatMonths, today, TRACK_LABEL } from '../data/career';
import { companies, profile, type ProjectLog, type Track } from '../data/profile';

const CERTIFIED = companies.reduce((n, c) => n + (c.projectLog?.length ?? 0), 0);

const EVIDENCE = [
  {
    name: '소프트웨어기술자 경력증명서',
    issuer: '한국소프트웨어산업협회(KOSA)',
    issued: '2022.01.27',
    covers: `로브 · 아이티굿 · 올림플래닛 재직 및 기술경력 ${CERTIFIED}건`,
  },
  {
    name: '경력증명서',
    issuer: '주식회사 위펀',
    issued: '2026.01.14',
    covers: '위펀 재직기간 · 조직(Front-End Unit) · 직위(매니저)',
  },
  {
    name: '건강보험 자격득실확인서',
    issuer: '국민건강보험공단',
    issued: '2025.12.11',
    covers: '전 직장 4대보험 가입 이력, 예스씨앤씨 재직(2024.04.22 취득)',
  },
];

const namesOf = (track: Track) =>
  companies
    .filter((c) => c.tracks.includes(track))
    .map((c) => c.name)
    .join(' · ');

const withAlongside = companies.filter((c) => c.alongside?.length);

function longDate(date: string) {
  const [y, m, d] = date.split('-');
  return `${y}년 ${Number(m)}월 ${Number(d)}일`;
}

export function Career() {
  const s = careerSummary();
  const asOf = today();
  let row = 0;

  return (
    <DocShell current="career">
      <header className="doc-title">
        <h1>경력기술서</h1>
        <p>{fmtDate(asOf, true)} 기준</p>
      </header>

      <table className="doc-table doc-table--info">
        <tbody>
          <tr>
            <th scope="row">성명</th>
            <td>{profile.name}</td>
            <th scope="row">희망 직무</th>
            <td>{profile.role}</td>
          </tr>
          <tr>
            {profile.birth ? (
              <>
                <th scope="row">생년월일</th>
                <td>{profile.birth}</td>
              </>
            ) : (
              <>
                <th scope="row">GitHub</th>
                <td>{profile.github.replace('https://', '')}</td>
              </>
            )}
            <th scope="row">이메일</th>
            <td>{profile.email}</td>
          </tr>
          {profile.phone && (
            <tr>
              <th scope="row">연락처</th>
              <td>{profile.phone}</td>
              <th scope="row">GitHub</th>
              <td>{profile.github.replace('https://', '')}</td>
            </tr>
          )}
        </tbody>
      </table>

      <DocSection title="1. 경력 요약">
        <dl className="doc-stats doc-stats--boxed">
          <div className="is-primary">
            <dt>총 실무 경력</dt>
            <dd>{formatMonths(s.all)}</dd>
            <p>{companies.length}개사 재직 기간 합산</p>
          </div>
          <div>
            <dt>프론트엔드 개발</dt>
            <dd>{formatMonths(s.frontend)}</dd>
            <p>{namesOf('frontend')}</p>
          </div>
          <div>
            <dt>웹 퍼블리싱</dt>
            <dd>{formatMonths(s.publishing)}</dd>
            <p>{namesOf('publishing')}</p>
          </div>
          <div>
            <dt>참여 프로젝트</dt>
            <dd>{s.projects}건</dd>
            <p>KOSA 증명서 등재 {CERTIFIED}건 포함</p>
          </div>
        </dl>
        <p className="doc-note">
          경력 기간은 입사월과 퇴사월(재직 중인 경우 작성월)을 모두 포함해 월 단위로 산정했습니다.
          {withAlongside.map((c) => (
            <span key={c.id}>
              {' '}
              {c.name} 재직 기간({formatMonths(companyMonths(c))})은 메인 퍼블리셔로 근무하며 React · Vue 기능 개발을 병행했으나, 경력은
              퍼블리싱으로만 산정했습니다.
            </span>
          ))}
        </p>
      </DocSection>

      <DocSection title="2. 재직 이력">
        <table className="doc-table doc-table--career">
          <thead>
            <tr>
              <th scope="col">회사명</th>
              <th scope="col">근무기간</th>
              <th scope="col">기간</th>
              <th scope="col">부서 · 직위</th>
              <th scope="col">직무</th>
              <th scope="col">경력 산정</th>
              <th scope="col">증빙</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr key={c.id}>
                <th scope="row">{c.legalName}</th>
                <td className="nowrap">
                  {fmtDate(c.start)} ~ {c.end ? fmtDate(c.end) : '재직 중'}
                </td>
                <td className="nowrap">{formatMonths(companyMonths(c))}</td>
                <td>{c.dept}</td>
                <td>{c.jobTitle}</td>
                <td>
                  {c.tracks.map((t) => (
                    <span key={t} className={`doc-pill doc-pill--${t}`}>
                      {TRACK_LABEL[t]}
                    </span>
                  ))}
                  {c.alongside?.map((t) => (
                    <span key={t} className="doc-alongside">
                      {TRACK_LABEL[t]} 병행 (미산정)
                    </span>
                  ))}
                </td>
                <td>{c.evidence}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan={2}>
                합계
              </th>
              <td className="nowrap">
                <strong>{formatMonths(s.all)}</strong>
              </td>
              <td colSpan={4} className="doc-muted">
                프론트엔드 {formatMonths(s.frontend)} · 퍼블리싱 {formatMonths(s.publishing)}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="doc-timeline">
          <CareerTimeline variant="doc" />
        </div>
      </DocSection>

      <DocSection title="3. 회사별 경력 상세">
        {companies.map((c) => {
          const log: ProjectLog[] = c.projectLog ?? [];
          return (
            <article className="doc-company" key={c.id}>
              <header className="doc-company__head">
                <h3>
                  {c.legalName}
                  <span>{c.description}</span>
                </h3>
                <p>
                  {fmtDate(c.start)} ~ {c.end ? fmtDate(c.end) : '재직 중'}
                  <strong> · {formatMonths(companyMonths(c))}</strong>
                </p>
              </header>

              <h4 className="doc-sub">담당 업무</h4>
              <ul className="doc-bullets">
                {c.summary.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              {c.cases && (
                <>
                  <h4 className="doc-sub">문제 해결 사례</h4>
                  {c.cases.map((k) => (
                    <CaseBlock key={k.title} item={k} variant="doc" />
                  ))}
                </>
              )}

              <h4 className="doc-sub">주요 프로젝트</h4>
              {c.projects.map((p) => (
                <div className="doc-project doc-project--boxed" key={p.name}>
                  <div className="doc-project__head">
                    <h5>{p.name}</h5>
                    <span>{fmtPeriod(p.period)}</span>
                  </div>
                  <table className="doc-kv">
                    <tbody>
                      <tr>
                        <th scope="row">개요</th>
                        <td>{p.summary}</td>
                      </tr>
                      {p.role && (
                        <tr>
                          <th scope="row">역할 · 책임</th>
                          <td>{p.role}</td>
                        </tr>
                      )}
                      {p.highlights.length > 0 && (
                        <tr>
                          <th scope="row">담당 기능</th>
                          <td>
                            <ul className="doc-bullets">
                              {p.highlights.map((h) => (
                                <li key={h}>{h}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      )}
                      <tr>
                        <th scope="row">기술</th>
                        <td>{p.stack.join(', ')}</td>
                      </tr>
                    </tbody>
                  </table>
                  {p.cases?.map((k) => (
                    <CaseBlock key={k.title} item={k} variant="doc" />
                  ))}
                </div>
              ))}

              {log.length > 0 && (<>
              <h4 className="doc-sub">
                전체 참여 프로젝트 <span className="doc-muted">({log.length}건)</span>
              </h4>
              <table className="doc-table doc-table--log">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">프로젝트명</th>
                    <th scope="col">참여기간</th>
                    <th scope="col">발주처</th>
                  </tr>
                </thead>
                <tbody>
                  {log.map((p) => {
                    row += 1;
                    return (
                      <tr key={p.name + p.period[0]}>
                        <td className="num">{row}</td>
                        <td>{p.name}</td>
                        <td className="nowrap">
                          {fmtDate(p.period[0], p.period[0].length > 7)} ~ {fmtDate(p.period[1], p.period[1].length > 7)}
                        </td>
                        <td>{p.client ?? c.legalName}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </>)}
            </article>
          );
        })}
      </DocSection>

      <div className="doc-closing">
      <DocSection title="4. 증빙 자료">
        <table className="doc-table">
          <thead>
            <tr>
              <th scope="col">서류</th>
              <th scope="col">발급기관</th>
              <th scope="col">발급일</th>
              <th scope="col">확인 가능한 내용</th>
            </tr>
          </thead>
          <tbody>
            {EVIDENCE.map((e) => (
              <tr key={e.name}>
                <th scope="row">{e.name}</th>
                <td>{e.issuer}</td>
                <td className="nowrap">{e.issued}</td>
                <td>{e.covers}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="doc-note">증빙서류 원본은 요청 시 함께 제출하겠습니다.</p>
      </DocSection>

      <footer className="doc-sign">
        <p>위 기재 사항은 사실과 다름없음을 확인합니다.</p>
        <p className="doc-sign__date">{longDate(asOf)}</p>
        <p className="doc-sign__name">
          작성자 <strong>{profile.name}</strong>{' '}
          <span className="doc-sign__seal">
            (인)
            {profile.signature && <img src={profile.signature} alt={`${profile.name} 서명`} />}
          </span>
        </p>
      </footer>
      </div>
    </DocShell>
  );
}
