/**
 * 이력서 · 경력기술서 PDF 생성
 *   1) .env.pdf.local 의 연락처/생년월일을 넣어 별도 폴더(dist-pdf)로 빌드
 *   2) 로컬 서버를 띄우고 설치된 Chrome으로 A4 PDF 출력
 *   3) resume/signature.png 가 있으면 경력기술서 (인) 자리에 서명으로 들어간다 (vite.config 의 localSignature)
 *   결과: resume/output/*.pdf (git 제외)
 */
import { build, preview } from 'vite';
import puppeteer from 'puppeteer-core';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const outDir = resolve(root, 'resume/output');
const CHROME = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find((p) => p && existsSync(p));
if (!CHROME) throw new Error('Chrome을 찾을 수 없습니다. CHROME_PATH 환경변수를 지정해주세요.');

await build({ root, mode: 'pdf', logLevel: 'warn', build: { outDir: 'dist-pdf', emptyOutDir: true } });
console.log(existsSync(resolve(root, 'resume/signature.png')) ? '서명: resume/signature.png 사용' : '서명: 없음 (resume/signature.png 를 두면 (인) 자리에 들어갑니다)');
const server = await preview({ root, mode: 'pdf', build: { outDir: 'dist-pdf' }, preview: { port: 4399, strictPort: true } });

const stamp = new Date().toISOString().slice(2, 10).replaceAll('-', '');
mkdirSync(outDir, { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
try {
  for (const [page, title] of [
    ['resume', '이력서'],
    ['career', '경력기술서'],
  ]) {
    const tab = await browser.newPage();
    await tab.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
    await tab.goto(`http://localhost:4399/${page}.html`, { waitUntil: 'networkidle0' });
    await tab.evaluate(() => document.fonts.ready);
    const file = resolve(outDir, `송아선_${title}_${stamp}.pdf`);
    await tab.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('✓', file);
  }
} finally {
  await browser.close();
  server.httpServer.close();
}
