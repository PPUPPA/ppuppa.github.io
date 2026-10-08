# ppuppa.github.io

프론트엔드 개발자 송아선의 개인 홈페이지 · 이력서 · 경력기술서.

| 페이지 | 경로 |
| --- | --- |
| 홈페이지 | `index.html` |
| 이력서 (A4) | `resume.html` |
| 경력기술서 (A4) | `career.html` |

React 19 · TypeScript · Tailwind CSS v4 · react-i18next · Vite · Motion

## 스타일 구조

| 파일 | 역할 |
| --- | --- |
| [`src/styles/tokens.css`](src/styles/tokens.css) | 색 · 폰트 CSS 변수(라이트/다크)와 기본 요소 스타일 |
| [`src/styles/tailwind.css`](src/styles/tailwind.css) | Tailwind 테마 — 색 유틸리티(`bg-accent` 등)를 위 변수에 연결, 애니메이션 · 브레이크포인트 |
| [`src/styles/doc.css`](src/styles/doc.css) | 이력서 · 경력기술서 A4 인쇄 스타일 (`@page`, mm 단위, 쪽 나눔) |

홈페이지 컴포넌트는 Tailwind 클래스로 작성했고, 인쇄용 문서는 쪽 나눔 · mm 단위 제어가 많아 일반 CSS로 둡니다.
다크 모드는 `<html data-theme="dark">`일 때만 적용되며(기본은 라이트), 변수만 바뀌므로 클래스에 `dark:`를 따로 붙일 필요가 없습니다.

## 이력 수정

모든 페이지가 [`src/data/profile.ts`](src/data/profile.ts) 하나를 원본으로 씁니다.
경력 기간(총 경력 · 프론트엔드 · 퍼블리싱)은 재직 기간에서 일 단위로 자동 계산되므로
숫자를 직접 고칠 필요가 없습니다. 작업물 썸네일은 [`src/data/portfolio.ts`](src/data/portfolio.ts)에 있습니다.

## 다국어 (한국어 · 영어)

홈페이지는 한국어/영어를 지원합니다. 헤더의 KO/EN 버튼 또는 `?lang=en` 주소로 전환하며, 이력서 · 경력기술서는 한국어 고정입니다.

| 파일 | 역할 |
| --- | --- |
| [`src/i18n/ui.ts`](src/i18n/ui.ts) | 버튼 · 라벨 같은 화면 문구 (ko/en) |
| [`src/i18n/content.en.ts`](src/i18n/content.en.ts) | 이력 콘텐츠 영어 번역 — "한국어 원문 → 영어" 사전 |

이력 데이터(`src/data`)는 한국어 원본 하나만 고칩니다. 문장을 고치거나 추가했다면 아래로 번역 누락을 확인하세요.

```bash
npm run i18n:check
```

## 개발

```bash
npm install
npm run dev      # 로컬 개발 서버
npm run build    # dist/ 로 빌드
```

`master`에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 배포합니다.
(저장소 Settings → Pages → Source를 **GitHub Actions**로 설정)

## PDF 만들기

공개 사이트에는 전화번호와 생년월일을 넣지 않습니다. 제출용 PDF에만 넣으려면:

```bash
cp .env.pdf.example .env.pdf.local   # 값 채우기 (git 제외)
npm run pdf                          # resume/output/ 에 이력서 · 경력기술서 PDF 생성
```

서명 이미지(`resume/signature.png`, 투명 배경 권장)를 두면 경력기술서의 (인) 자리에 들어갑니다. 로컬의 dev · preview · PDF에는 표시되지만, `resume/`는 git 제외 폴더라 GitHub Actions 배포 사이트에는 포함되지 않습니다.

설치된 Chrome(또는 Edge)을 사용합니다. 경로가 다르면 `CHROME_PATH`를 지정하세요.

## 이전 작업물

`public/project/` — 2021년 마크업 연습 프로젝트 (todo, wa-table)
