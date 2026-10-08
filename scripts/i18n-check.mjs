/**
 * 홈페이지에 노출되는 한국어 콘텐츠 문장 중 영어 번역(src/i18n/content.en.ts)이 없는 것을 찾는다.
 *   npm run i18n:check          누락 목록 출력 (누락이 있으면 exit 1)
 *   npm run i18n:check -- --all 전체 문장 목록 출력
 */
import { createServer } from 'vite';

const HANGUL = /[가-힣]/;

const server = await createServer({ logLevel: 'error', server: { middlewareMode: true }, appType: 'custom' });
try {
  const profile = await server.ssrLoadModule('/src/data/profile.ts');
  const portfolio = await server.ssrLoadModule('/src/data/portfolio.ts');
  const { contentEn } = await server.ssrLoadModule('/src/i18n/content.en.ts');

  const strings = new Set();
  const add = (...values) => values.flat(Infinity).forEach((v) => typeof v === 'string' && HANGUL.test(v) && strings.add(v));
  const addCase = (c) => add(c.title, c.tags, c.problem, c.action, c.result, c.learned);

  const p = profile.profile;
  add(p.name, p.role, p.slogan, p.intro, p.strengths.map((s) => [s.title, s.body]));
  for (const c of profile.companies) {
    add(c.name, c.jobTitle, c.description, c.summary);
    c.cases?.forEach(addCase);
    for (const pr of c.projects) {
      add(pr.name, pr.summary, pr.role, pr.highlights);
      pr.cases?.forEach(addCase);
    }
  }
  for (const s of profile.sideProjects) add(s.name, s.summary, s.role, s.highlights);
  for (const g of profile.skills) add(g.group, g.items);
  for (const e of [...profile.education, ...profile.trainings]) add(e.name, e.detail);
  for (const c of profile.certificates) add(c.name, c.issuer);
  for (const w of portfolio.works) add(w.title, w.client, w.company, w.contribution);

  const all = [...strings];
  const missing = all.filter((s) => !contentEn[s]);
  const unused = Object.keys(contentEn).filter((k) => !strings.has(k));

  if (process.argv.includes('--all')) all.forEach((s) => console.log(JSON.stringify(s)));
  console.log(`콘텐츠 문장 ${all.length}개 · 번역 누락 ${missing.length}개 · 쓰이지 않는 번역 ${unused.length}개`);
  missing.forEach((s) => console.log('  누락:', JSON.stringify(s)));
  unused.forEach((s) => console.log('  미사용:', JSON.stringify(s)));
  process.exitCode = missing.length ? 1 : 0;
} finally {
  await server.close();
}
