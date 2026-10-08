/**
 * 홈페이지 콘텐츠 영어 번역 — "한국어 원문 → 영어" 사전
 * 원문은 src/data/*.ts 에 있고, 누락 · 미사용 항목은 `npm run i18n:check` 로 확인한다.
 */
export const contentEn: Record<string, string> = {
  // ---------- 프로필 ----------
  '송아선': 'Asun Song',
  '프론트엔드 개발자': 'Front-end Developer',
  '전체 구조를 이해하고,': 'I understand the big picture,',
  '소설 쓰듯 코드를 씁니다.': 'and write code like a story.',
  '퍼블리셔로 시작해, 지금은 TypeScript와 컴포넌트 기반 모던 프레임워크로 클라우드 관리 플랫폼의 프론트엔드를 개발하고 있습니다.':
    'I started as a web publisher, and now build the front end of a cloud management platform with TypeScript and modern component-based frameworks.',
  '공공기관 웹 접근성 인증 프로젝트와 수십 건의 반응형 가상 전시 사이트를 퍼블리싱하며 마크업과 반응형 레이아웃의 기본기를 다졌고, 지금은 공통 컴포넌트 설계, 대용량 데이터 렌더링 최적화, 비동기 처리 개선처럼 화면 뒤의 구조를 다듬는 일에 집중하고 있습니다.':
    'Building accessibility-certified public sector sites and dozens of responsive virtual exhibitions gave me a solid foundation in markup and responsive layout. Today I focus on the structure behind the screen: shared component design, rendering large data sets efficiently, and improving async flows.',
  '문예창작을 전공했습니다. 읽는 사람을 생각하며 글을 쓰듯, 다음에 이 코드를 읽을 동료와 화면을 쓰는 사용자를 함께 생각하며 코드를 작성합니다.':
    'I majored in creative writing. Just as I write with the reader in mind, I write code thinking of both the teammate who will read it next and the user on the other side of the screen.',
  '마크업부터 설계까지': 'From markup to architecture',
  '시맨틱 마크업과 반응형 레이아웃을 직접 짜 온 경험 덕분에, 컴포넌트를 나눌 때 구조와 스타일까지 함께 고려합니다.':
    'Years of hand-writing semantic markup and responsive layouts mean I consider structure and styling together when I split components.',
  '접근성을 아는 프론트엔드': 'A front-end developer who knows accessibility',
  '국립중앙도서관·서울시복지재단 웹 접근성 품질인증(WA) 프로젝트에 참여했습니다. 기능을 만들 때도 키보드·스크린 리더 사용자를 놓치지 않습니다.':
    'I worked on the National Library of Korea and Seoul Welfare Foundation sites, both of which earned the Korean Web Accessibility (WA) certification. I keep keyboard and screen reader users in mind when I build features, too.',
  '팀의 생산성을 올리는 공통화': 'Shared building blocks that speed up the team',
  '반복되는 로직은 Util로, 자주 쓰는 UI는 Core 컴포넌트로 분리해 팀 전체가 같은 부품으로 빠르게 화면을 만들 수 있게 합니다.':
    'I extract repeated logic into utilities and common UI into core components, so the whole team can build screens quickly from the same parts.',

  // ---------- 예스씨앤씨 ----------
  '예스씨앤씨': 'YES CNC',
  '클라우드 · IT 인프라 관리 솔루션': 'Cloud & IT infrastructure management software',
  'Vue 3 · Quasar · TypeScript 기반 B2B 인프라 관리 솔루션 5개 프로젝트 프론트엔드 개발, pCMP 버전업에서 프론트엔드 메인 담당':
    'Front-end development for 5 B2B infrastructure management products with Vue 3, Quasar and TypeScript; front-end lead for the pCMP version upgrade',
  '백엔드 응답과 실제 데이터 반영 시점의 불일치를 찾아 프론트엔드에서 우회하고, 백엔드 팀과 근본 해결 방향을 협의':
    'Found a gap between back-end responses and when data was actually updated, worked around it on the front end, and agreed on a root-cause fix with the back-end team',
  '공통 컴포넌트 · Util 설계, BT(Beta Test) 기간 이슈 재현 · 분석 및 예외 처리, Playwright 시나리오 기반 E2E 테스트 도입 진행 중':
    'Designed shared components and utilities, reproduced and fixed beta test issues, and am introducing scenario-based E2E tests with Playwright',
  'pCMP — Proxmox 기반 클라우드 관리 플랫폼': 'pCMP — Proxmox-based cloud management platform',
  'Proxmox VE 기반 VM · Node를 웹에서 제어하고 모니터링하는 클라우드 관리 플랫폼 버전업':
    'Version upgrade of a platform for controlling and monitoring Proxmox VE virtual machines and nodes from the web',
  '프론트엔드 메인 — 화면 구조 · 공통 컴포넌트 설계, 백엔드 API 연동 · 협의, 테스트 · BT 대응까지 담당':
    'Front-end lead — owned screen structure, shared components, back-end API integration and negotiation, testing and beta test response',
  '메인 대시보드 · 시스템 모니터링, VM 액션(시작 · 종료 · 마이그레이션) · 백업 · 복제 · 스냅샷 · 방화벽 · 콘솔':
    'Main dashboard and system monitoring; VM actions (start, stop, migrate), backup, replication, snapshots, firewall and console',
  '드래그 앤 드롭 VM 마이그레이션 흐름 재정리': 'Reworked the drag-and-drop VM migration flow',
  'Node 셸(Shell) 연동, VM · Node Task 이력 조회 · 추적': 'Node shell integration; VM and node task history and tracking',
  '(진행 중) Playwright 기반 E2E 테스트 도입 — 실제 사용자 흐름을 시나리오로 정의해, 수동 BT에 의존하던 기능 검증을 자동화':
    '(In progress) Introducing Playwright E2E tests — defining real user flows as scenarios to automate checks that relied on manual beta testing',
  'Proxmox Job 완료와 DB 반영 시점 불일치': 'Proxmox job completion vs. database update timing',
  'API 연동': 'API integration',
  '백엔드 협업': 'Back-end collaboration',
  '리스크 관리': 'Risk management',
  'VM 작업이 끝나면 Proxmox Job 기준으로 job_success가 내려오지만, 서비스 DB 동기화는 별도로 이루어져 job_success 직후 다시 조회하면 화면에 이전 상태가 남아 있었습니다. 백엔드에서 DB 반영 완료를 알려주는 방법은 없었습니다.':
    'When a VM operation finished, the API returned job_success based on the Proxmox job, but the service database was synced separately. Re-fetching right after job_success still showed the old state, and the back end had no way to signal that the database was updated.',
  'job_success를 완료 기준으로 삼지 않고, 대상 리소스의 DB 상태가 실제로 바뀐 것을 확인할 때까지 재조회(polling)한 뒤 화면을 갱신하도록 변경':
    'Stopped treating job_success as "done" and instead polled until the resource’s database state had actually changed before updating the screen',
  '프론트엔드 polling은 요청이 늘고 반영이 늦어지면 대기가 길어지는 임시 방편이라는 점을 정리해 백엔드 팀에 문제 제기':
    'Documented that front-end polling is a stopgap — it adds requests and makes users wait longer when updates lag — and raised the issue with the back-end team',
  '작업 완료 후 화면이 실제 DB 상태와 일치하게 되었고, 백엔드와 협의해 Job 완료 응답을 DB 반영까지 확인한 뒤 내려주는 방식으로 바꾸는 것을 향후 과제로 검토하기로 했습니다.':
    'The screen now matches the real database state after each operation, and the back-end team agreed to consider returning job completion only after the database update is confirmed.',
  '프론트엔드에서 우회할 수 있는 문제라도 원인이 다른 계층에 있다면, 근거를 정리해 공유해야 제품 전체의 리스크가 줄어든다는 것':
    'Even when the front end can work around a problem, if the cause lives in another layer, documenting and sharing it is what reduces risk for the whole product.',
  '대용량 로그 · 이벤트 목록 렌더링 최적화': 'Rendering large log and event lists',
  '렌더링 최적화': 'Rendering performance',
  '대용량 로그와 이벤트 데이터를 한 번에 그리는 화면에서 브라우저 렌더링 부하가 커 체감 속도가 느렸습니다.':
    'Screens that rendered large log and event data sets all at once put heavy load on the browser and felt slow.',
  '보이는 영역만 그리는 Virtual Scroll과 필요한 시점에 그리는 Lazy Rendering 도입':
    'Introduced virtual scrolling (render only what is visible) and lazy rendering (render only when needed)',
  '렌더링 부하를 줄여 대용량 화면의 체감 속도를 개선했습니다.': 'Reduced rendering load and made large-data screens feel faster.',
  'API 호출 병목으로 인한 화면 응답 지연': 'Slow screens caused by API call bottlenecks',
  '성능 개선': 'Performance',
  '여러 API를 호출하는 화면에서 응답 지연(Latency)이 발생했습니다.': 'Screens that called several APIs suffered from latency.',
  '호출 병목 구간을 분석해 Promise 기반 비동기 · 병렬 처리로 개선': 'Analyzed the bottlenecks and moved to Promise-based async, parallel requests',
  '화면 응답 지연 문제를 해결했습니다.': 'Resolved the screen latency.',
  'VM 상태 · Task 진행 상황의 UI 동기화': 'Keeping VM state and task progress in sync in the UI',
  '상태 관리': 'State management',
  'VM 상태 변화와 Task 진행 상황이 여러 화면에 걸쳐 표시되어, 데이터가 바뀔 때 UI가 즉시 · 안정적으로 갱신되는 구조가 필요했습니다.':
    'VM state and task progress appear across many screens, so the UI needed to update immediately and reliably whenever the data changed.',
  'watch와 computed 중심으로 상태 흐름을 정리해 데이터 변경이 UI에 자동 반영되도록 구조화':
    'Restructured state flow around watch and computed so data changes propagate to the UI automatically',
  'VM 상태 변화와 Task 진행 상황이 화면에 즉시 반영되도록 했습니다.': 'VM state changes and task progress now show up on screen immediately.',
  'JADE — IDC 관리 서비스': 'JADE — data center (IDC) management service',
  'IDC 자산 · 로그 · 이벤트를 관리하는 서비스 개발': 'Built a service for managing data center assets, logs and events',
  '로그 관리 · 이벤트 기능 (서브)': 'Log management and events (supporting role)',
  '로그 관리 및 이벤트 기능 개발, REST API 연동': 'Built log management and event features with REST API integration',
  '공통 Util 및 컴포넌트 개발 · 적용': 'Built and applied shared utilities and components',
  'BT(Beta Test) 기간 이슈 분석 및 예외 처리 · 기능 보완': 'Analyzed beta test issues, added error handling and filled feature gaps',
  'Garnet v1.3 — 소프트웨어 자산 · 비용 관리 서비스': 'Garnet v1.3 — software asset & cost management',
  '소프트웨어 자산 및 비용 관리 서비스 기능 고도화': 'Feature enhancements for a software asset and cost management service',
  '관리자 설정 · 고객 관리 · 회사/도메인 관리 (메인)': 'Admin settings, customer management, company/domain management (lead)',
  '회사 및 도메인 관리 기능 신규 개발, 관리자 설정 · 고객 관리 기능 개선':
    'Built new company and domain management; improved admin settings and customer management',
  'i18n 다국어 적용, BT 이슈 분석 및 보완': 'Applied i18n localization; analyzed and fixed beta test issues',
  '통일성이 떨어지는 기존 컴포넌트 정비': 'Cleaning up inconsistent legacy components',
  'UI 설계': 'UI design',
  '유지보수': 'Maintainability',
  '기존 화면들이 서로 다른 컴포넌트를 쓰고 있어 같은 기능도 화면마다 모양과 동작이 달랐습니다.':
    'Existing screens used different components, so the same feature looked and behaved differently from screen to screen.',
  '문제가 되는 컴포넌트를 파악해 공통 컴포넌트로 교체하는 방안을 도입하고 기존 화면에 적용':
    'Identified the problem components, proposed replacing them with shared components, and rolled that out across existing screens',
  '화면 간 UI와 동작의 일관성을 확보했습니다.': 'Made UI and behavior consistent across screens.',
  'Davis Lite — KPI · SLA 대시보드 서비스': 'Davis Lite — KPI & SLA dashboard',
  'KPI 관리, 미터링, SLA, 보고서를 제공하는 대시보드 서비스 개발': 'Built a dashboard service for KPI management, metering, SLAs and reports',
  'KPI · SLA · 공통 메타데이터 관리 (메인)': 'KPI, SLA and shared metadata management (lead)',
  'KPI, SLA, 공통 메타데이터 관리 기능 개발': 'Built KPI, SLA and shared metadata management features',
  'ECharts 기반 대시보드 차트 구현, 공통 Util · 컴포넌트 개발': 'Implemented dashboard charts with ECharts; built shared utilities and components',
  'Garnet v1.2 — 소프트웨어 자산 · 비용 관리 서비스': 'Garnet v1.2 — software asset & cost management',
  '소프트웨어 자산 및 비용 관리 서비스 개발': 'Built a software asset and cost management service',
  '관리자 설정 · 고객 관리 (메인)': 'Admin settings and customer management (lead)',
  '관리자 설정, 고객 관리 기능 개발': 'Built admin settings and customer management features',

  // ---------- 위펀 ----------
  '위펀': 'Wefun',
  '웹 퍼블리셔 (기능 개발 병행)': 'Web Publisher (with some feature development)',
  '기업 복지 · 구매 플랫폼': 'Corporate benefits & procurement platform',
  '메인 퍼블리셔 — React · Vue 기반 신규 서비스 3종의 레이아웃 · Core 컴포넌트를 전담하고, 일부 기능 개발을 병행':
    'Lead publisher — owned layouts and core components for 3 new React and Vue services, and built some features alongside',
  'SCSS(BEM) 기반 마크업 가이드 수립': 'Wrote the team’s SCSS (BEM) markup guide',
  '신규 서비스 3종의 마크업 기준 정립': 'Setting markup standards for 3 new services',
  '협업': 'Collaboration',
  'React · Vue로 신규 서비스 3종을 연이어 구축하면서, 화면 마크업과 스타일 기준 없이 각자 작업하면 구조가 제각각이 되고 프론트엔드 개발자가 마크업 · CSS에 시간을 쓰게 되는 상황이었습니다.':
    'We were building 3 new services back to back in React and Vue. Without shared markup and styling rules, structures drifted apart and front-end developers spent their time on markup and CSS.',
  'SCSS(BEM) 기반 마크업 가이드를 수립해 클래스 네이밍과 스타일 구조 기준을 통일': 'Wrote an SCSS (BEM) markup guide to unify class naming and style structure',
  '메인 퍼블리셔로서 레이아웃과 Core 컴포넌트를 먼저 만들어 제공하고, 마크업 · CSS에서 막히는 프론트엔드 개발자를 지원':
    'As lead publisher, delivered layouts and core components up front and helped developers who got stuck on markup and CSS',
  '서비스 3종의 레이아웃 · Core 컴포넌트를 메인으로 담당했고, 프론트엔드 개발자들은 기능 개발에 더 집중할 수 있게 되었습니다.':
    'I owned the layouts and core components for all 3 services, and the front-end developers could focus more on features.',
  '스낵24 배송관리 웹': 'Snack24 Delivery Manager',
  '배송 기사 전용 모바일 웹 서비스 구축': 'Built a mobile web app for delivery drivers',
  '레이아웃 · 컴포넌트 · 퍼블리싱 메인, 배송 담당자 평가 기능': 'Lead on layout, components and markup; built the driver rating feature',
  'vw 단위 기반 모바일 전용 반응형 레이아웃 및 Core 컴포넌트 개발': 'Built a vw-based mobile-only responsive layout and core components',
  '배송 담당자 평가 기능 개발': 'Built the driver rating feature',
  'KPI24 대시보드': 'KPI24 Dashboard',
  '기업용 KPI 대시보드 웹 서비스 구축': 'Built a KPI dashboard web service for businesses',
  '레이아웃 · 컴포넌트 · 퍼블리싱 메인, 위젯 기능': 'Lead on layout, components and markup; widget features',
  '반응형 대시보드 및 웹사이트 Core 컴포넌트 개발': 'Built core components for the responsive dashboard and website',
  '버티컬 위젯, 대시보드 위젯 크기 조정, 템플릿 관련 기능 개발': 'Built vertical widgets, dashboard widget resizing and template features',
  '구매24 Mall': 'Buy24 Mall',
  '기업 전용 PC 폐쇄몰 구축': 'Built a members-only desktop B2B shopping mall',
  '레이아웃 · 컴포넌트 · 퍼블리싱 메인, 장바구니 · 즐겨찾기 기능': 'Lead on layout, components and markup; cart and favorites features',
  'PC 웹사이트 Core 컴포넌트 및 전체 페이지 마크업 개발': 'Built core components and markup for every page of the desktop site',
  '장바구니, 즐겨찾기 추가 기능 개발': 'Built add-to-cart and favorites features',

  // ---------- 올림플래닛 ----------
  '올림플래닛': 'Olim Planet',
  '웹 퍼블리셔': 'Web Publisher',
  'VR 가상 전시 · 가상 투어 솔루션': 'VR virtual exhibition & virtual tour platform',
  'VR 가상 전시 · 가상 모델하우스 반응형 웹사이트 68건 퍼블리싱 (KOSA 기술경력 등록)':
    'Built 68 responsive VR exhibition and virtual model house sites (registered with KOSA)',
  '마크업 가이드 수립, 사내 홈페이지(워드프레스) 리뉴얼 · 유지보수': 'Wrote the markup guide; renewed and maintained the company website (WordPress)',
  '짧은 주기의 가상 전시 사이트 반복 구축': 'Shipping virtual exhibition sites on short cycles',
  '반응형': 'Responsive',
  '생산성': 'Productivity',
  '박람회 · 분양 일정에 맞춰 가상 전시와 가상 모델하우스 사이트를 짧은 주기로, 여러 건을 동시에 구축해야 했습니다.':
    'Virtual exhibition and model house sites had to ship on short cycles, several at once, to match fair and property sale schedules.',
  '마크업 가이드를 수립하고, 샘플 전시관을 기준으로 반응형 페이지 구조를 맞춰 행사별 사이트에 적용':
    'Wrote a markup guide and aligned responsive page structure to a sample exhibition, then applied it to each event site',
  '1년 4개월 동안 68건(KOSA 등재)을 퍼블리싱했고, 도쿄올림픽 코리아하우스는 5개 국어로 구축했습니다.':
    'Built 68 sites in 1 year 4 months (registered with KOSA), including the Tokyo Olympics Korea House in 5 languages.',
  '도쿄올림픽 코리아하우스 가상 전시': 'Tokyo Olympics Korea House virtual exhibition',
  '국 · 영 · 일 · 중 · 불 5개 국어 반응형 가상 전시 웹사이트': 'Responsive virtual exhibition site in 5 languages (Korean, English, Japanese, Chinese, French)',
  '전체 퍼블리싱': 'All markup',
  '박람회 · 기업 가상 전시관': 'Trade fair & corporate virtual exhibitions',
  '에듀테크 코리아 페어, 바이오코리아, LG화학, KT Super VR, 현대백화점 50주년 등 행사별 반응형 가상 전시 사이트를 짧은 주기로 반복 구축':
    'Shipped responsive virtual exhibitions on short cycles for EdTech Korea Fair, Bio Korea, LG Chem, KT Super VR, Hyundai Department Store’s 50th anniversary and more',
  '가상 모델하우스 · 가상 투어': 'Virtual model houses & tours',
  'e편한세상 · 더샵 · 롯데캐슬 등 분양 단지 온라인 모델하우스': 'Online model houses for apartment developments such as e-Pyunhansesang, The Sharp and Lotte Castle',

  // ---------- 아이티굿 ----------
  '아이티굿': 'ITGood',
  '공공기관 웹 구축 에이전시': 'Public sector web agency',
  '웹 표준 · 웹 접근성을 준수한 공공기관 홈페이지 구축 (HTML5, CSS3, jQuery, WAI-ARIA)':
    'Built standards-compliant, accessible public sector websites (HTML5, CSS3, jQuery, WAI-ARIA)',
  '웹 접근성 품질인증(WA) 마크 취득 프로젝트 2건, 마크업 가이드 수립': '2 projects earned the Web Accessibility (WA) certification; wrote the markup guide',
  '공공기관 웹 접근성 품질인증 대응': 'Passing the public sector accessibility certification',
  '접근성': 'Accessibility',
  '웹 표준': 'Web standards',
  '공공기관 홈페이지는 웹 접근성 품질인증(WA) 기준을 통과해야 했습니다.': 'Public sector sites had to pass the Korean Web Accessibility (WA) certification.',
  '웹 표준과 WAI-ARIA를 적용한 시맨틱 마크업으로 구축하고 마크업 가이드 수립': 'Built with semantic, standards-based markup and WAI-ARIA, and wrote a markup guide',
  '참여한 국립중앙도서관 · 서울시복지재단 2건 모두 WA 인증마크를 취득했습니다.':
    'Both projects I worked on — the National Library of Korea and the Seoul Welfare Foundation — earned the WA certification.',
  '국립중앙도서관 홈페이지 구축': 'National Library of Korea website',
  '국문 반응형 홈페이지(상세) 및 영문 반응형 홈페이지(메인 · 상세) 구축': 'Responsive Korean site (sub pages) and English site (main and sub pages)',
  '국문 서브 페이지 전반 · 영문 홈페이지 전체 퍼블리싱': 'Markup for most Korean sub pages and the entire English site',
  '웹 접근성 품질인증(WA) 마크 취득': 'Earned the Web Accessibility (WA) certification',
  '서울시복지재단 홈페이지 구축': 'Seoul Welfare Foundation website',
  '국 · 영문 반응형 홈페이지(메인 · 상세) 구축': 'Responsive Korean and English sites (main and sub pages)',
  '한국과학창의재단 홈페이지 구축': 'Korea Foundation for the Advancement of Science & Creativity website',
  '반응형 홈페이지 구축': 'Responsive website',
  '퍼블리싱': 'Markup',

  // ---------- 로브 ----------
  '로브': 'LOB',
  '웹 디자이너 · 퍼블리셔': 'Web Designer & Publisher',
  '웹 에이전시': 'Web agency',
  '기업 · 대학 · 공공기관 홈페이지 16건 디자인 및 퍼블리싱': 'Designed and built 16 websites for companies, universities and public institutions',
  '디자인부터 마크업까지 1인 전담, 웹 접근성 개선 작업': 'Handled everything from design to markup on my own; accessibility improvements',
  '한국전력국제원자력대학원대학교(KINGS) 홈페이지': 'KEPCO International Nuclear Graduate School (KINGS) website',
  '국 · 영문 반응형 홈페이지 및 교직원 LAB 페이지': 'Responsive Korean and English sites plus faculty lab pages',
  '전체 디자인 · 퍼블리싱': 'All design and markup',
  '한양대학교 채널 H 멀티미디어 시스템': 'Hanyang University Channel H multimedia system',
  '반응형 홈페이지(메인 · 상세 · 게시판)': 'Responsive site (main, sub pages and boards)',

  // ---------- 사이드 프로젝트 ----------
  '개인 홈페이지 · 이력서 사이트 (ppuppa.github.io)': 'Personal site & résumé (ppuppa.github.io)',
  '이력 데이터 하나로 홈페이지 · 이력서 · 경력기술서를 함께 만드는 React + TypeScript 사이트':
    'A React + TypeScript site that generates my homepage, résumé and career statement from a single data source',
  '기획 · 디자인 · 개발 (1인)': 'Planning, design and development (solo)',
  '타입이 정의된 이력 데이터 한 곳을 원본으로 두고 세 페이지가 공유하도록 설계 — 내용을 한 번만 고치면 모든 문서에 반영':
    'One typed data source shared by all three pages — edit once and every document updates',
  '재직 기간에서 총 경력 · 직무별 경력을 자동 계산해, 문서마다 숫자가 어긋나는 문제를 구조적으로 차단':
    'Total and per-role experience are calculated from employment dates, so the numbers can never disagree between documents',
  'Tailwind CSS v4 테마를 CSS 변수와 연결해 라이트 · 다크 모드를 변수 교체만으로 전환, 인쇄용 문서 스타일은 별도 CSS로 분리':
    'Tailwind CSS v4 theme mapped to CSS variables, so light/dark mode is just a variable swap; print styles live in separate CSS',
  'react-i18next로 한국어 · 영어 지원 — 콘텐츠는 한국어 원본 하나, 영어는 문장 사전으로 관리':
    'Korean/English support with react-i18next — one Korean content source plus an English sentence dictionary, with a script that flags missing translations',
  'Vite 멀티 페이지 빌드, 스크롤 연동 애니메이션, prefers-reduced-motion · 키보드 접근성 대응':
    'Vite multi-page build, scroll-linked animation, prefers-reduced-motion and keyboard accessibility support',
  'Puppeteer로 A4 PDF를 자동 생성하고, 연락처 등 개인정보는 로컬 PDF 빌드에서만 주입해 공개 사이트에는 노출되지 않도록 분리':
    'A4 PDFs generated with Puppeteer; personal details are injected only in the local PDF build and never shipped to the public site',
  '무빙(Moving) — 영화관 예매 사이트': 'Moving — movie theater booking site',
  '영화 · 상영관 관리와 예매 기능을 갖춘 가상 영화관 사이트 (5인 팀 프로젝트, 그린아이티아카데미)':
    'A mock movie theater site with movie and screen management and booking (5-person team project, Green IT Academy)',
  '메인, 영화, 공지사항, 공통 header/footer — 프론트엔드 및 백엔드': 'Main page, movies, notices and shared header/footer — front end and back end',

  // ---------- 스킬 · 학력 ----------
  '반응형 웹': 'Responsive web',
  '웹 표준 · 웹 접근성': 'Web standards & accessibility',
  'Docker (사내 스터디)': 'Docker (internal study group)',
  'Backend 경험': 'Back-end experience',
  '학점은행제 (국가평생교육진흥원)': 'Academic Credit Bank System (NILE)',
  '컴퓨터공학 학사 · 학점 3.98 / 4.5': 'B.S. in Computer Engineering · GPA 3.98 / 4.5',
  '서울예술대학교': 'Seoul Institute of the Arts',
  '문예창작과 전문학사 · 학점 3.54 / 4.5': 'Associate degree in Creative Writing · GPA 3.54 / 4.5',
  '그린아이티아카데미': 'Green IT Academy',
  '자바 · 스프링 프레임워크 기반 풀스택 개발자 과정': 'Full-stack developer program (Java, Spring Framework)',
  '제로베이스 · 노마드코더': 'Zero-base · Nomad Coders',
  '프론트엔드 온라인 과정, 바닐라 JS 챌린지': 'Online front-end course and Vanilla JS Challenge',
  '웹기획 실무 트레이닝 코스': 'Web planning practical training course',
  '한국IT아카데미': 'Korea IT Academy',
  'UI/UX 엔지니어링 (반응형 웹 · 모바일) 과정': 'UI/UX engineering program (responsive web & mobile)',
  '멘사코리아 회원': 'Mensa Korea member',
  '멘사코리아': 'Mensa Korea',
  '웹디자인기능사': 'Craftsman Web Design (national certification)',
  '한국산업인력공단': 'HRD Korea',
  'GTQ 그래픽기술자격 1급': 'GTQ Graphic Technology Qualification, Level 1',
  '한국생산성본부': 'Korea Productivity Center',

  // ---------- 작업물 ----------
  '위펀 · 배송기사 전용': 'Wefun · for delivery drivers',
  '퍼블리싱 40% · 프론트엔드 25%': 'Markup 40% · Front-end 25%',
  '퍼블리싱 60% · 프론트엔드 15%': 'Markup 60% · Front-end 15%',
  '위펀 · 폐쇄몰': 'Wefun · members-only mall',
  '퍼블리싱 40% · 프론트엔드 20%': 'Markup 40% · Front-end 20%',
  '무빙 (Moving)': 'Moving',
  '그린아이티아카데미 팀 프로젝트': 'Green IT Academy team project',
  '교육': 'Training',
  '프론트엔드 30% · 백엔드 25%': 'Front-end 30% · Back-end 25%',
  '퍼블리싱 100%': 'Markup 100%',
  '에듀테크 코리아 페어 사무국': 'EdTech Korea Fair secretariat',
  '가상 전시관 샘플 (뷰어 타입)': 'Sample virtual exhibition (viewer type)',
  '모아 미래도 에듀파크': 'Moa Miraedo Edu Park',
  '광주 평화맨션 재건축조합': 'Gwangju Pyeonghwa Mansion redevelopment association',
  '청량리역 포레스타 E-모델하우스': 'Cheongnyangni Station Foresta e-model house',
  '이룸씨앤디': 'Irum C&D',
  '광주 초월역 한라비발디 온라인 분양관': 'Gwangju Chowol Station Halla Vivaldi online sales gallery',
  '리얼하우스': 'Real House',
  '퍼블리싱 50%': 'Markup 50%',
  '국립중앙도서관': 'National Library of Korea',
  '국립중앙도서관 · WA 인증': 'National Library of Korea · WA certified',
  '퍼블리싱 60%': 'Markup 60%',
  '서울시복지재단': 'Seoul Welfare Foundation',
  '서울시복지재단 · WA 인증': 'Seoul Welfare Foundation · WA certified',
  '한국과학창의재단': 'Korea Foundation for the Advancement of Science & Creativity',
  '퍼블리싱 40%': 'Markup 40%',
  '한국전력국제원자력대학원대학교': 'KEPCO International Nuclear Graduate School',
  '디자인 100% · 퍼블리싱 100%': 'Design 100% · Markup 100%',
  '한양대 채널 H': 'Hanyang Univ. Channel H',
  '한양대학교': 'Hanyang University',
  '경찰대학 치안대학원': 'Korean National Police University Graduate School',
  '경찰대학': 'Korean National Police University',
  '추가의정서 보고 안내': 'Additional Protocol reporting guide',
  '한국원자력통제기술원': 'Korea Institute of Nuclear Nonproliferation and Control',
  '디자인 80% · 퍼블리싱 95%': 'Design 80% · Markup 95%',
  '양주 손짜장': 'Yangju Son Jjajang',
  '양주손짜장마을': 'Yangju Son Jjajang Village',
  '로브 회사 홈페이지': 'LOB company website',
  '(주)로브': 'LOB Inc.',
  '로브 회사 홈페이지 (초기)': 'LOB company website (first version)',
  '체육쌤': 'Cheyuk Ssaem',
  '라하 잉글리시': 'Laha English',
  '디자인 90% · 퍼블리싱 100%': 'Design 90% · Markup 100%',
  '스마트한 주식회사': 'Smarthan Inc.',
  '스마트한': 'Smarthan',
  '아이로봇': 'iRobot',
  '디자인 80% · 퍼블리싱 100%': 'Design 80% · Markup 100%',
  '메드사피엔스': 'Medsapiens',
  '디자인 80% · 퍼블리싱 80%': 'Design 80% · Markup 80%',
  'HP솔루션 회사소개': 'HP Solution company profile',
  'HP솔루션': 'HP Solution',
  'HP솔루션 플랫폼': 'HP Solution platform',
  '퍼블리싱 30%': 'Markup 30%',
  '메디우스': 'Medius',
  '3L 코리아': '3L Korea',
  '육군 필수 군가 12곡': '12 essential Korean Army songs',
  '디자인 50% · 퍼블리싱 100%': 'Design 50% · Markup 100%',
};
