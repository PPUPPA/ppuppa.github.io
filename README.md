# ppuppa.github.io

프론트엔드 개발자 송아선의 개인 홈페이지 · 이력서 · 경력기술서.

**https://ppuppa.github.io**

| 페이지          | 경로          | 비고                       |
| --------------- | ------------- | -------------------------- |
| 홈페이지        | `index.html`  | 한국어 · 영어 (`?lang=en`) |
| 이력서 (A4)     | `resume.html` | 인쇄 · PDF 출력용          |
| 경력기술서 (A4) | `career.html` | 인쇄 · PDF 출력용          |

## 기술 스택

React 19 · TypeScript · Tailwind CSS v4 · react-i18next · Vite · Motion · Puppeteer · GitHub Actions

## 설계

### 단일 데이터 원본

세 페이지는 [`src/data/profile.ts`](src/data/profile.ts)의 타입이 정의된 이력 데이터를 공유한다.
경력 기간(총 경력 · 직무별 경력)은 재직 기간으로부터 월 단위로 계산하며([`src/data/career.ts`](src/data/career.ts)), 문서마다 숫자를 따로 관리하지 않는다.

- 회사별 산정 직무(`tracks`)와 병행 직무(`alongside`)를 구분한다. 병행 직무는 화면에 표시하되 경력 기간에는 산정하지 않는다.
- 프로젝트와 회사에는 문제 · 해결 · 결과 · 배운 점 구조의 사례(`cases`)를 둔다.

### 스타일

| 파일                                                 | 역할                                                                     |
| ---------------------------------------------------- | ------------------------------------------------------------------------ |
| [`src/styles/tokens.css`](src/styles/tokens.css)     | 색 · 폰트 CSS 변수(라이트/다크)와 기본 요소 스타일                       |
| [`src/styles/tailwind.css`](src/styles/tailwind.css) | Tailwind 테마 — 색 유틸리티를 CSS 변수에 연결, 애니메이션 · 브레이크포인트 |
| [`src/styles/doc.css`](src/styles/doc.css)           | 이력서 · 경력기술서 A4 인쇄 스타일 (`@page`, mm 단위, 쪽 나눔)           |

홈페이지는 Tailwind 클래스로 작성하고, 인쇄용 문서는 쪽 나눔 · mm 단위 제어가 많아 일반 CSS로 둔다.
다크 모드는 `<html data-theme="dark">`에서 CSS 변수만 교체하는 방식이므로 컴포넌트에 `dark:` 변형을 두지 않는다. 기본 테마는 라이트다.

### 다국어

홈페이지는 react-i18next로 한국어 · 영어를 지원한다. 이력서 · 경력기술서는 제출용 문서이므로 한국어로 고정한다.

| 파일                                               | 역할                                         |
| -------------------------------------------------- | -------------------------------------------- |
| [`src/i18n/ui.ts`](src/i18n/ui.ts)                 | 버튼 · 라벨 등 화면 문구 (ko / en)           |
| [`src/i18n/content.en.ts`](src/i18n/content.en.ts) | 이력 콘텐츠 영어 번역 — 한국어 원문을 키로 하는 사전 |

이력 데이터는 한국어 원본 하나로 유지하고, [`scripts/i18n-check.mjs`](scripts/i18n-check.mjs)로 번역 누락 · 미사용 항목을 검사한다.

### 개인정보 분리

전화번호 · 생년월일 · 서명은 공개 사이트에 포함하지 않는다.
이 값들은 git에서 제외된 로컬 파일(`.env.pdf.local`, `resume/`)에만 두며, 로컬 빌드와 PDF 출력([`scripts/pdf.mjs`](scripts/pdf.mjs))에서만 주입된다.
CI 빌드에는 해당 파일이 없으므로 배포 결과물에서 자동으로 제외된다.

### 접근성

키보드 포커스 표시, 건너뛰기 링크, `prefers-reduced-motion` 대응, 툴팁의 키보드 포커스 지원, 화면 낭독기용 대체 텍스트를 적용한다.

## 스크립트

| 명령                 | 내용                                                   |
| -------------------- | ------------------------------------------------------ |
| `npm run dev`        | 개발 서버                                              |
| `npm run build`      | 타입 검사 후 `dist/`로 빌드                            |
| `npm run i18n:check` | 번역 누락 · 미사용 항목 검사                           |
| `npm run pdf`        | 이력서 · 경력기술서 A4 PDF 생성 (로컬 Chrome · Edge 사용) |

## 배포

`master`에 push하면 GitHub Actions([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))가 빌드 후 GitHub Pages에 배포한다.

## 이전 작업물

`public/project/` — 2021년 마크업 연습 프로젝트 (todo, wa-table)
