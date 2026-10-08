/**
 * 이력 데이터 (홈페이지 · 이력서 · 경력기술서 공통 원본)
 *
 * 재직 기간은 월 단위(입사월 ~ 퇴사월, 양 끝 월 포함)로 관리합니다.
 * 위펀은 메인 퍼블리셔로 근무하며 React · Vue 기능 개발을 병행했지만, 경력은 퍼블리싱으로만 산정합니다.
 *
 * 증빙
 * - 로브 · 아이티굿 · 올림플래닛: 한국소프트웨어산업협회(KOSA) 소프트웨어기술자 경력증명서 (2022.01.27 발급)
 * - 위펀: 주식회사 위펀 경력증명서 (2026.01.14 발급)
 * - 예스씨앤씨: 국민건강보험공단 건강보험 자격득실확인서 (2025.12.11 발급)
 */

export type Track = 'frontend' | 'publishing';

/** 문제 해결 사례 — 상황 · 문제 → 역할 · 해결 → 결과 → 배운 점 */
export interface Case {
  title: string;
  /** 성능 개선 · 상태 관리 · API 연동 · 협업 · 장애 대응 · 접근성 등 */
  tags: string[];
  problem: string;
  action: string[];
  result: string;
  learned?: string;
  /** 이력서 상단 '핵심 문제 해결'에 노출 */
  featured?: boolean;
}

export interface ProjectDetail {
  name: string;
  period: [string, string | null]; // 'YYYY-MM' 또는 'YYYY-MM-DD', null = 진행 중
  summary: string;
  /** 담당 역할과 책임 범위 */
  role?: string;
  stack: string[];
  /** 담당 기능 범위 */
  highlights: string[];
  cases?: Case[];
  link?: string;
}

export interface ProjectLog {
  name: string;
  period: [string, string]; // 'YYYY-MM-DD'
  client?: string;
}

export interface Company {
  id: string;
  name: string;
  legalName: string;
  /** 경력 산정 직무 */
  tracks: Track[];
  /** 병행한 직무 — 표시만 하고 경력에는 산정하지 않음 */
  alongside?: Track[];
  jobTitle: string;
  description: string;
  start: string; // 'YYYY-MM'
  end: string | null; // 'YYYY-MM', null = 재직 중
  dept: string; // 부서 · 직위
  evidence: string;
  summary: string[];
  /** 여러 프로젝트에 걸친 문제 해결 사례 */
  cases?: Case[];
  projects: ProjectDetail[];
  /** 증명서 기준 전체 참여 프로젝트 (경력기술서용) */
  projectLog?: ProjectLog[];
}

export const profile = {
  name: '송아선',
  role: '프론트엔드 개발자',
  slogan: ['전체 구조를 이해하고,', '소설 쓰듯 코드를 씁니다.'],
  email: 'it.ppu00@gmail.com',
  github: 'https://github.com/PPUPPA',
  site: 'http://sasunflower.com',
  /** 공개 사이트에는 넣지 않고 로컬 PDF 생성 시에만 .env.local 에서 주입 */
  phone: import.meta.env.VITE_PHONE || undefined,
  birth: import.meta.env.VITE_BIRTH || undefined,
  signature: import.meta.env.VITE_SIGNATURE || undefined,
  intro: [
    '퍼블리셔로 시작해, 지금은 TypeScript와 컴포넌트 기반 모던 프레임워크로 클라우드 관리 플랫폼의 프론트엔드를 개발하고 있습니다.',
    '공공기관 웹 접근성 인증 프로젝트와 수십 건의 반응형 가상 전시 사이트를 퍼블리싱하며 마크업과 반응형 레이아웃의 기본기를 다졌고, 지금은 공통 컴포넌트 설계, 대용량 데이터 렌더링 최적화, 비동기 처리 개선처럼 화면 뒤의 구조를 다듬는 일에 집중하고 있습니다.',
    '문예창작과 컴퓨터공학을 전공했습니다. 읽는 사람을 생각하며 글을 쓰듯, 다음에 이 코드를 읽을 동료와 화면을 쓰는 사용자를 함께 생각하며 코드를 작성합니다.',
  ],
  strengths: [
    {
      title: '마크업부터 설계까지',
      body: '시맨틱 마크업과 반응형 레이아웃을 직접 짜 온 경험 덕분에, 컴포넌트를 나눌 때 구조와 스타일까지 함께 고려합니다.',
    },
    {
      title: '접근성을 아는 프론트엔드',
      body: '국립중앙도서관·서울시복지재단 웹 접근성 품질인증(WA) 프로젝트에 참여했습니다. 기능을 만들 때도 키보드·스크린 리더 사용자를 놓치지 않습니다.',
    },
    {
      title: '팀의 생산성을 올리는 공통화',
      body: '반복되는 로직은 Util로, 자주 쓰는 UI는 Core 컴포넌트로 분리해 팀 전체가 같은 부품으로 빠르게 화면을 만들 수 있게 합니다.',
    },
  ],
};

export const companies: Company[] = [
  {
    id: 'yescnc',
    name: '예스씨앤씨',
    legalName: '(주)예스씨앤씨',
    tracks: ['frontend'],
    jobTitle: '프론트엔드 개발자',
    description: '클라우드 · IT 인프라 관리 솔루션',
    start: '2024-04',
    end: null,
    dept: '개발 2팀 · 선임연구원',
    evidence: '건강보험 자격득실확인서',
    summary: [
      'Vue 3 · Quasar · TypeScript 기반 B2B 인프라 관리 솔루션 5개 프로젝트 프론트엔드 개발, pCMP 버전업에서 프론트엔드 메인 담당',
      '백엔드 응답과 실제 데이터 반영 시점의 불일치를 찾아 프론트엔드에서 우회하고, 백엔드 팀과 근본 해결 방향을 협의',
      '공통 컴포넌트 · Util 설계, BT(Beta Test) 기간 이슈 재현 · 분석 및 예외 처리, Playwright 시나리오 기반 E2E 테스트 도입 진행 중',
    ],
    projects: [
      {
        name: 'pCMP — Proxmox 기반 클라우드 관리 플랫폼',
        period: ['2025-11', null],
        summary: 'Proxmox VE 기반 VM · Node를 웹에서 제어하고 모니터링하는 클라우드 관리 플랫폼 버전업',
        role: '프론트엔드 메인 — 화면 구조 · 공통 컴포넌트 설계, 백엔드 API 연동 · 협의, 테스트 · BT 대응까지 담당',
        stack: ['Vue 3', 'Quasar', 'TypeScript', 'ECharts', 'REST API', 'i18n', 'Playwright'],
        highlights: [
          '메인 대시보드 · 시스템 모니터링, VM 액션(시작 · 종료 · 마이그레이션) · 백업 · 복제 · 스냅샷 · 방화벽 · 콘솔',
          '드래그 앤 드롭 VM 마이그레이션 흐름 재정리',
          'Node 셸(Shell) 연동, VM · Node Task 이력 조회 · 추적',
          '(진행 중) Playwright 기반 E2E 테스트 도입 — 실제 사용자 흐름을 시나리오로 정의해, 수동 BT에 의존하던 기능 검증을 자동화',
        ],
        cases: [
          {
            title: 'Proxmox Job 완료와 DB 반영 시점 불일치',
            featured: true,
            tags: ['API 연동', '백엔드 협업', '리스크 관리'],
            problem:
              'VM 작업이 끝나면 Proxmox Job 기준으로 job_success가 내려오지만, 서비스 DB 동기화는 별도로 이루어져 job_success 직후 다시 조회하면 화면에 이전 상태가 남아 있었습니다. 백엔드에서 DB 반영 완료를 알려주는 방법은 없었습니다.',
            action: [
              'job_success를 완료 기준으로 삼지 않고, 대상 리소스의 DB 상태가 실제로 바뀐 것을 확인할 때까지 재조회(polling)한 뒤 화면을 갱신하도록 변경',
              '프론트엔드 polling은 요청이 늘고 반영이 늦어지면 대기가 길어지는 임시 방편이라는 점을 정리해 백엔드 팀에 문제 제기',
            ],
            result:
              '작업 완료 후 화면이 실제 DB 상태와 일치하게 되었고, 백엔드와 협의해 Job 완료 응답을 DB 반영까지 확인한 뒤 내려주는 방식으로 바꾸는 것을 향후 과제로 검토하기로 했습니다.',
            learned: '프론트엔드에서 우회할 수 있는 문제라도 원인이 다른 계층에 있다면, 근거를 정리해 공유해야 제품 전체의 리스크가 줄어든다는 것',
          },
          {
            title: '대용량 로그 · 이벤트 목록 렌더링 최적화',
            featured: true,
            tags: ['렌더링 최적화'],
            problem: '대용량 로그와 이벤트 데이터를 한 번에 그리는 화면에서 브라우저 렌더링 부하가 커 체감 속도가 느렸습니다.',
            action: ['보이는 영역만 그리는 Virtual Scroll과 필요한 시점에 그리는 Lazy Rendering 도입'],
            result: '렌더링 부하를 줄여 대용량 화면의 체감 속도를 개선했습니다.',
          },
          {
            title: 'API 호출 병목으로 인한 화면 응답 지연',
            tags: ['성능 개선', 'API 연동'],
            problem: '여러 API를 호출하는 화면에서 응답 지연(Latency)이 발생했습니다.',
            action: ['호출 병목 구간을 분석해 Promise 기반 비동기 · 병렬 처리로 개선'],
            result: '화면 응답 지연 문제를 해결했습니다.',
          },
          {
            title: 'VM 상태 · Task 진행 상황의 UI 동기화',
            tags: ['상태 관리'],
            problem: 'VM 상태 변화와 Task 진행 상황이 여러 화면에 걸쳐 표시되어, 데이터가 바뀔 때 UI가 즉시 · 안정적으로 갱신되는 구조가 필요했습니다.',
            action: ['watch와 computed 중심으로 상태 흐름을 정리해 데이터 변경이 UI에 자동 반영되도록 구조화'],
            result: 'VM 상태 변화와 Task 진행 상황이 화면에 즉시 반영되도록 했습니다.',
          },
        ],
      },
      {
        name: 'JADE — IDC 관리 서비스',
        period: ['2025-02', '2025-11'],
        summary: 'IDC 자산 · 로그 · 이벤트를 관리하는 서비스 개발',
        role: '로그 관리 · 이벤트 기능 (서브)',
        stack: ['Vue 3', 'Quasar', 'TypeScript', 'ECharts', 'REST API', 'i18n'],
        highlights: [
          '로그 관리 및 이벤트 기능 개발, REST API 연동',
          '공통 Util 및 컴포넌트 개발 · 적용',
          'BT(Beta Test) 기간 이슈 분석 및 예외 처리 · 기능 보완',
        ],
      },
      {
        name: 'Garnet v1.3 — 소프트웨어 자산 · 비용 관리 서비스',
        period: ['2024-11', '2025-02'],
        summary: '소프트웨어 자산 및 비용 관리 서비스 기능 고도화',
        role: '관리자 설정 · 고객 관리 · 회사/도메인 관리 (메인)',
        stack: ['Vue 3', 'Quasar', 'TypeScript', 'ECharts', 'REST API', 'i18n'],
        highlights: ['회사 및 도메인 관리 기능 신규 개발, 관리자 설정 · 고객 관리 기능 개선', 'i18n 다국어 적용, BT 이슈 분석 및 보완'],
        cases: [
          {
            title: '통일성이 떨어지는 기존 컴포넌트 정비',
            tags: ['UI 설계', '유지보수'],
            problem: '기존 화면들이 서로 다른 컴포넌트를 쓰고 있어 같은 기능도 화면마다 모양과 동작이 달랐습니다.',
            action: ['문제가 되는 컴포넌트를 파악해 공통 컴포넌트로 교체하는 방안을 도입하고 기존 화면에 적용'],
            result: '화면 간 UI와 동작의 일관성을 확보했습니다.',
          },
        ],
      },
      {
        name: 'Davis Lite — KPI · SLA 대시보드 서비스',
        period: ['2024-07', '2024-10'],
        summary: 'KPI 관리, 미터링, SLA, 보고서를 제공하는 대시보드 서비스 개발',
        role: 'KPI · SLA · 공통 메타데이터 관리 (메인)',
        stack: ['Vue 3', 'Quasar', 'TypeScript', 'ECharts', 'REST API', 'i18n'],
        highlights: [
          'KPI, SLA, 공통 메타데이터 관리 기능 개발',
          'ECharts 기반 대시보드 차트 구현, 공통 Util · 컴포넌트 개발',
          'i18n 다국어 적용, BT 이슈 분석 및 보완',
        ],
      },
      {
        name: 'Garnet v1.2 — 소프트웨어 자산 · 비용 관리 서비스',
        period: ['2024-05', '2024-07'],
        summary: '소프트웨어 자산 및 비용 관리 서비스 개발',
        role: '관리자 설정 · 고객 관리 (메인)',
        stack: ['Vue 3', 'Quasar', 'TypeScript', 'ECharts', 'REST API', 'i18n'],
        highlights: ['관리자 설정, 고객 관리 기능 개발', 'i18n 다국어 적용, BT 이슈 분석 및 보완'],
      },
    ],
  },
  {
    id: 'wefun',
    name: '위펀',
    legalName: '주식회사 위펀',
    tracks: ['publishing'],
    alongside: ['frontend'],
    jobTitle: '웹 퍼블리셔 (기능 개발 병행)',
    description: '기업 복지 · 구매 플랫폼',
    start: '2022-03',
    end: '2023-08',
    dept: 'R&D부문 Front-End Unit · 매니저',
    evidence: '주식회사 위펀 경력증명서',
    summary: [
      '메인 퍼블리셔 — React · Vue 기반 신규 서비스 3종의 레이아웃 · Core 컴포넌트를 전담하고, 일부 기능 개발을 병행',
      'SCSS(BEM) 기반 마크업 가이드 수립',
    ],
    cases: [
      {
        title: '신규 서비스 3종의 마크업 기준 정립',
            featured: true,
        tags: ['협업', 'UI 설계'],
        problem:
          'React · Vue로 신규 서비스 3종을 연이어 구축하면서, 화면 마크업과 스타일 기준 없이 각자 작업하면 구조가 제각각이 되고 프론트엔드 개발자가 마크업 · CSS에 시간을 쓰게 되는 상황이었습니다.',
        action: [
          'SCSS(BEM) 기반 마크업 가이드를 수립해 클래스 네이밍과 스타일 구조 기준을 통일',
          '메인 퍼블리셔로서 레이아웃과 Core 컴포넌트를 먼저 만들어 제공하고, 마크업 · CSS에서 막히는 프론트엔드 개발자를 지원',
        ],
        result: '서비스 3종의 레이아웃 · Core 컴포넌트를 메인으로 담당했고, 프론트엔드 개발자들은 기능 개발에 더 집중할 수 있게 되었습니다.',
      },
    ],
    projects: [
      {
        name: '스낵24 배송관리 웹',
        period: ['2023-02', '2023-04'],
        summary: '배송 기사 전용 모바일 웹 서비스 구축',
        role: '레이아웃 · 컴포넌트 · 퍼블리싱 메인, 배송 담당자 평가 기능',
        stack: ['React', 'TypeScript', 'Styled-components', 'SCSS', 'REST API'],
        highlights: [
          'vw 단위 기반 모바일 전용 반응형 레이아웃 및 Core 컴포넌트 개발',
          '배송 담당자 평가 기능 개발',
        ],
        link: 'https://delivery-manager.wefun.kr/',
      },
      {
        name: 'KPI24 대시보드',
        period: ['2022-06', '2023-02'],
        summary: '기업용 KPI 대시보드 웹 서비스 구축',
        role: '레이아웃 · 컴포넌트 · 퍼블리싱 메인, 위젯 기능',
        stack: ['Vue', 'TypeScript', 'SCSS', 'REST API'],
        highlights: [
          '반응형 대시보드 및 웹사이트 Core 컴포넌트 개발',
          '버티컬 위젯, 대시보드 위젯 크기 조정, 템플릿 관련 기능 개발',
        ],
        link: 'https://dashboard.kpi24.co.kr/',
      },
      {
        name: '구매24 Mall',
        period: ['2022-04', '2023-02'],
        summary: '기업 전용 PC 폐쇄몰 구축',
        role: '레이아웃 · 컴포넌트 · 퍼블리싱 메인, 장바구니 · 즐겨찾기 기능',
        stack: ['Vue', 'TypeScript', 'SCSS', 'REST API'],
        highlights: ['PC 웹사이트 Core 컴포넌트 및 전체 페이지 마크업 개발', '장바구니, 즐겨찾기 추가 기능 개발'],
        link: 'https://mall.buy24.wefun.co.kr/',
      },
    ],
  },
  {
    id: 'olimplanet',
    name: '올림플래닛',
    legalName: '(주)올림플래닛',
    tracks: ['publishing'],
    jobTitle: '웹 퍼블리셔',
    description: 'VR 가상 전시 · 가상 투어 솔루션',
    start: '2020-06',
    end: '2021-09',
    dept: '서비스기획운영본부 · 프로',
    evidence: 'KOSA 경력증명서',
    summary: [
      'VR 가상 전시 · 가상 모델하우스 반응형 웹사이트 68건 퍼블리싱 (KOSA 기술경력 등록)',
      '마크업 가이드 수립, 사내 홈페이지(워드프레스) 리뉴얼 · 유지보수',
    ],
    cases: [
      {
        title: '짧은 주기의 가상 전시 사이트 반복 구축',
        tags: ['반응형', '생산성'],
        problem: '박람회 · 분양 일정에 맞춰 가상 전시와 가상 모델하우스 사이트를 짧은 주기로, 여러 건을 동시에 구축해야 했습니다.',
        action: ['마크업 가이드를 수립하고, 샘플 전시관을 기준으로 반응형 페이지 구조를 맞춰 행사별 사이트에 적용'],
        result: '1년 4개월 동안 68건(KOSA 등재)을 퍼블리싱했고, 도쿄올림픽 코리아하우스는 5개 국어로 구축했습니다.',
      },
    ],
    projects: [
      {
        name: '도쿄올림픽 코리아하우스 가상 전시',
        period: ['2021-04', '2021-07'],
        summary: '국 · 영 · 일 · 중 · 불 5개 국어 반응형 가상 전시 웹사이트',
        role: '전체 퍼블리싱',
        stack: ['HTML5', 'SCSS', 'JavaScript', 'jQuery'],
        highlights: [],
        link: 'https://vr.miceview.kr/ZR029',
      },
      {
        name: '박람회 · 기업 가상 전시관',
        period: ['2020-08', '2021-08'],
        summary: '에듀테크 코리아 페어, 바이오코리아, LG화학, KT Super VR, 현대백화점 50주년 등 행사별 반응형 가상 전시 사이트를 짧은 주기로 반복 구축',
        role: '전체 퍼블리싱',
        stack: ['HTML5', 'SCSS', 'JavaScript', 'jQuery'],
        highlights: [],
        link: 'https://vr.miceview.kr/ZR042',
      },
      {
        name: '가상 모델하우스 · 가상 투어',
        period: ['2020-06', '2021-08'],
        summary: 'e편한세상 · 더샵 · 롯데캐슬 등 분양 단지 온라인 모델하우스',
        role: '전체 퍼블리싱',
        stack: ['HTML5', 'SCSS', 'JavaScript', 'jQuery'],
        highlights: [],
        link: 'https://vmh.zipview.kr/ZE077/',
      },
    ],
    projectLog: [
      { name: '온라인 방콕 한국 소방 안전 박람회 가상 전시 반응형 웹사이트 구축', period: ['2021-08-23', '2021-08-27'] },
      { name: '2nd APEC Virtual Workshop 가상 전시 반응형 웹사이트 구축', period: ['2021-08-18', '2021-08-27'] },
      { name: '한양 더 챔버 가상 갤러리 반응형 웹사이트 구축', period: ['2021-08-12', '2021-08-27'] },
      { name: 'UCLG ASPAC 가상 전시 반응형 웹사이트 구축', period: ['2021-08-09', '2021-08-27'] },
      { name: '2021 에듀테크 코리아 페어 가상 전시 반응형 웹사이트 구축', period: ['2021-08-09', '2021-08-27'] },
      { name: '2021 LMCE 대한진단검사의학회 가상 전시 반응형 웹사이트 구축', period: ['2021-08-02', '2021-08-27'] },
      { name: '한국 부동산 분양서비스 협회 가상 컨퍼런스 반응형 웹페이지 구축', period: ['2021-07-20', '2021-07-23'] },
      { name: 'HEMA JET 가상 전시 반응형 웹사이트 구축', period: ['2021-07-19', '2021-08-16'] },
      { name: '2021 농식품 과학 기술 대전 가상 전시 반응형 웹사이트 구축', period: ['2021-07-19', '2021-08-20'] },
      { name: '평창 ST LIYARD 가상 투어 반응형 웹사이트 구축', period: ['2021-07-15', '2021-08-17'] },
      { name: '한솔제지 가상전시관 2차 Insper Hansol EB 가상 전시 반응형 웹사이트 구축', period: ['2021-07-14', '2021-08-23'] },
      { name: '용인 롯데캐슬 하이브 엘 가상 투어 반응형 웹사이트 구축', period: ['2021-07-14', '2021-08-27'] },
      { name: '전주 에코시티 가상 투어 반응형 웹사이트 구축', period: ['2021-07-12', '2021-08-20'] },
      { name: '대림 e편한세상 강일 어반브릿지 가상 투어 반응형 웹사이트 구축', period: ['2021-06-28', '2021-08-12'] },
      { name: 'K-festival 2021 가상 전시 반응형 웹사이트 구축', period: ['2021-06-08', '2021-06-18'] },
      { name: '광주 평화맨션 가상 전시관 반응형 웹사이트 구축', period: ['2021-05-24', '2021-07-29'] },
      { name: '현대백화점 50주년 기념 전시회 가상 전시 반응형 웹사이트 구축', period: ['2021-05-21', '2021-08-04'] },
      { name: '대림 e편한세상 연천 웰스하임 가상 투어 반응형 웹사이트 구축', period: ['2021-05-14', '2021-05-28'] },
      { name: '대림 e편한세상 서산 석림 가상 투어 반응형 웹사이트 구축', period: ['2021-05-06', '2021-06-08'] },
      { name: '김해의생명과학축제 가상 전시 반응형 웹사이트 구축', period: ['2021-04-22', '2021-06-21'] },
      { name: '코리아 핀테크 위크 가상 전시 반응형 웹사이트 구축', period: ['2021-04-20', '2021-06-28'] },
      { name: '에피소드 서초393 가상 투어 반응형 웹사이트 구축', period: ['2021-04-20', '2021-06-30'] },
      { name: '한솔제지 가상전시관 Subli-mate 가상 전시 반응형 웹사이트 구축', period: ['2021-04-20', '2021-06-03'] },
      { name: '로레알 디지털 캠퍼스 가상 전시 반응형 웹사이트 구축', period: ['2021-04-14', '2021-05-27'] },
      { name: '대림 e편한세상 의왕 고천 파크루체 가상 투어 반응형 웹사이트 구축', period: ['2021-04-13', '2021-05-14'] },
      { name: '도쿄올림픽 코리아하우스 가상 전시 반응형 웹사이트 구축', period: ['2021-04-08', '2021-07-28'] },
      { name: '바이오코리아 2021 가상 전시 반응형 웹사이트 구축', period: ['2021-04-06', '2021-06-11'] },
      { name: '코리아리서치인터내셔널 가상 전시 반응형 웹사이트 구축', period: ['2021-04-01', '2021-04-05'] },
      { name: '더샵 양평 리버포레 가상 투어 반응형 웹사이트 구축', period: ['2021-03-25', '2021-04-30'] },
      { name: '올림플래닛 가상 전시관 샘플 반응형 웹사이트 구축 및 유지보수', period: ['2021-03-23', '2021-06-17'] },
      { name: '2021 대구국제섬유박람회 가상 전시 반응형 웹사이트 구축', period: ['2021-03-17', '2021-04-20'] },
      { name: '2021 대한민국 고졸인재 일자리 콘서트 가상 전시 반응형 웹사이트 구축', period: ['2021-03-05', '2021-04-02'] },
      { name: '동국대학교 2021 명상, 서울 CONNECT 가상 전시 반응형 웹사이트 구축', period: ['2021-03-04', '2021-04-23'] },
      { name: '한국경제TV 쇼미더집 가상 분양 솔루션 반응형 웹사이트 구축', period: ['2021-03-02', '2021-04-15'] },
      { name: '더샵 송도아크베이 가상 투어 반응형 웹사이트 구축', period: ['2021-02-19', '2021-04-21'] },
      { name: '대림 제주 연동 센트럴파크 가상 투어 반응형 웹사이트 구축', period: ['2021-02-02', '2021-04-01'] },
      { name: 'Virtual-2M(Mobility&Machinery) Expo 2021 가상 전시 반응형 웹사이트 구축', period: ['2021-01-18', '2021-03-11'] },
      { name: '대림 e편한세상 거제 유로스카이 가상 투어 반응형 웹사이트 구축', period: ['2021-01-05', '2021-03-30'] },
      { name: '대림 e편한세상 가평 퍼스트원 가상 투어 반응형 웹사이트 구축', period: ['2020-12-28', '2021-01-19'] },
      { name: 'Untact 릴레이 해커톤 가상 전시 반응형 웹사이트 구축', period: ['2020-12-11', '2021-01-18'] },
      { name: '대림 e편한세상 부평 그랑힐스 가상 투어 반응형 웹사이트 구축', period: ['2020-12-07', '2020-12-28'] },
      { name: '대림 하늘채 평촌 센텀퍼스트 가상 투어 반응형 웹사이트 구축', period: ['2020-11-25', '2021-02-02'] },
      { name: '대림 영종국제도시 센텀베뉴 가상 투어 반응형 웹사이트 구축', period: ['2020-11-23', '2021-01-29'] },
      { name: '2020 다이나믹 단국 공학 페스티벌 가상 전시 반응형 웹사이트 구축', period: ['2020-11-19', '2020-12-08'] },
      { name: '2020 무인이동체산업엑스포 온라인 가상 전시 반응형 웹사이트 구축', period: ['2020-11-19', '2021-01-19'] },
      { name: '반달섬 황금꽃 타워 가상 투어 반응형 웹사이트 구축', period: ['2020-11-12', '2020-11-18'] },
      { name: '이머시브 시티 가상 투어 반응형 웹페이지 구축', period: ['2020-11-12', '2021-01-14'] },
      { name: 'LG화학 온라인 가상 전시 반응형 웹사이트 구축', period: ['2020-11-05', '2020-11-24'] },
      { name: '포레스타 오피스텔 가상 투어 반응형 웹사이트 구축', period: ['2020-10-27', '2020-11-23'] },
      { name: '올림플래닛 집뷰 반응형 홈페이지 리뉴얼 및 유지보수', period: ['2020-10-27', '2020-11-18'] },
      { name: 'KT Super VR 가상 전시 반응형 웹사이트 구축', period: ['2020-10-27', '2020-11-23'] },
      { name: '대우 뉴플랜 써밋갤러리 가상 전시 반응형 웹사이트 구축', period: ['2020-10-15', '2020-11-18'] },
      { name: '국제특허정보박람회 파티넥스 2020 가상 전시 반응형 웹사이트 구축', period: ['2020-10-13', '2020-11-09'] },
      { name: 'K-방역 온라인 나라장터 엑스포 가상 전시 반응형 웹사이트 구축', period: ['2020-10-12', '2020-11-13'] },
      { name: '플라키키 샵 가상 전시 반응형 웹사이트 구축', period: ['2020-10-12', '2020-11-11'] },
      { name: '대림 순천 어반 타워 가상 투어 반응형 웹사이트 구축', period: ['2020-10-07', '2020-10-19'] },
      { name: '디지털콘텐츠 코리아 온라인 엑스포 2020 가상 전시 반응형 웹사이트 구축', period: ['2020-09-21', '2020-10-28'] },
      { name: '대림 화성 남양 뉴타운 가상 투어 반응형 웹사이트 구축', period: ['2020-09-09', '2020-09-16'] },
      { name: '광교 대림 오피스텔 가상 투어 반응형 웹사이트 구축', period: ['2020-09-01', '2020-09-10'] },
      { name: '가평 더 센트럴 파크 반응형 웹사이트 구축', period: ['2020-08-28', '2020-10-29'] },
      { name: '2020 집코노미 언택트 박람회 가상 전시 반응형 웹사이트 구축', period: ['2020-08-24', '2020-09-14'] },
      { name: '대림 김포 마송 어반베뉴 가상 투어 반응형 웹사이트 구축', period: ['2020-08-18', '2020-08-21'] },
      { name: '대림 범양레우스 가상 투어 반응형 웹사이트 구축', period: ['2020-08-17', '2020-08-21'] },
      { name: '에듀테크 코리아 페어 2020 가상 전시 반응형 웹사이트 구축', period: ['2020-08-06', '2020-09-22'] },
      { name: '서울대역 편백숲 파크로얄 반응형 웹사이트 구축', period: ['2020-07-24', '2020-08-03'] },
      { name: '올림플래닛 홈페이지 유지보수', period: ['2020-07-22', '2020-08-04'] },
      { name: '대림 평택 용죽 주택전시관 가상 투어 반응형 웹사이트 구축', period: ['2020-07-16', '2020-07-31'] },
      { name: '광주 초월역 한라비발디 반응형 웹사이트 구축 및 유지보수', period: ['2020-06-01', '2020-11-19'] },
    ],
  },
  {
    id: 'itgood',
    name: '아이티굿',
    legalName: '(주)아이티굿',
    tracks: ['publishing'],
    jobTitle: '웹 퍼블리셔',
    description: '공공기관 웹 구축 에이전시',
    start: '2019-06',
    end: '2020-01',
    dept: '퍼블리싱팀 · 선임연구원',
    evidence: 'KOSA 경력증명서',
    summary: [
      '웹 표준 · 웹 접근성을 준수한 공공기관 홈페이지 구축 (HTML5, CSS3, jQuery, WAI-ARIA)',
      '웹 접근성 품질인증(WA) 마크 취득 프로젝트 2건, 마크업 가이드 수립',
    ],
    cases: [
      {
        title: '공공기관 웹 접근성 품질인증 대응',
            featured: true,
        tags: ['접근성', '웹 표준'],
        problem: '공공기관 홈페이지는 웹 접근성 품질인증(WA) 기준을 통과해야 했습니다.',
        action: ['웹 표준과 WAI-ARIA를 적용한 시맨틱 마크업으로 구축하고 마크업 가이드 수립'],
        result: '참여한 국립중앙도서관 · 서울시복지재단 2건 모두 WA 인증마크를 취득했습니다.',
      },
    ],
    projects: [
      {
        name: '국립중앙도서관 홈페이지 구축',
        period: ['2019-10', '2020-01'],
        summary: '국문 반응형 홈페이지(상세) 및 영문 반응형 홈페이지(메인 · 상세) 구축',
        role: '국문 서브 페이지 전반 · 영문 홈페이지 전체 퍼블리싱',
        stack: ['HTML5', 'CSS3', 'jQuery', 'WAI-ARIA'],
        highlights: ['웹 접근성 품질인증(WA) 마크 취득'],
        link: 'https://www.nl.go.kr/',
      },
      {
        name: '서울시복지재단 홈페이지 구축',
        period: ['2019-06', '2019-10'],
        summary: '국 · 영문 반응형 홈페이지(메인 · 상세) 구축',
        role: '전체 퍼블리싱',
        stack: ['HTML5', 'CSS3', 'jQuery', 'WAI-ARIA'],
        highlights: ['웹 접근성 품질인증(WA) 마크 취득'],
        link: 'https://www.welfare.seoul.kr/',
      },
      {
        name: '한국과학창의재단 홈페이지 구축',
        period: ['2019-09', '2019-10'],
        summary: '반응형 홈페이지 구축',
        role: '퍼블리싱',
        stack: ['HTML5', 'CSS3', 'jQuery'],
        highlights: [],
        link: 'https://kofac.re.kr/',
      },
    ],
    projectLog: [
      { name: '국립중앙도서관 홈페이지 구축', period: ['2019-10-07', '2020-01-13'] },
      { name: '한국과학창의재단 홈페이지 구축', period: ['2019-09-02', '2019-10-03'] },
      { name: '서울시 복지재단 홈페이지 구축', period: ['2019-06-25', '2019-10-04'] },
    ],
  },
  {
    id: 'lob',
    name: '로브',
    legalName: '주식회사 로브',
    tracks: ['publishing'],
    jobTitle: '웹 디자이너 · 퍼블리셔',
    description: '웹 에이전시',
    start: '2018-09',
    end: '2019-03',
    dept: '웹에이전시 · 사원',
    evidence: 'KOSA 경력증명서',
    summary: [
      '기업 · 대학 · 공공기관 홈페이지 16건 디자인 및 퍼블리싱',
      '디자인부터 마크업까지 1인 전담, 웹 접근성 개선 작업',
    ],
    projects: [
      {
        name: '한국전력국제원자력대학원대학교(KINGS) 홈페이지',
        period: ['2018-12', '2019-02'],
        summary: '국 · 영문 반응형 홈페이지 및 교직원 LAB 페이지',
        role: '전체 디자인 · 퍼블리싱',
        stack: ['HTML5', 'CSS3', 'jQuery', 'Photoshop'],
        highlights: [],
        link: 'http://kings.ac.kr/',
      },
      {
        name: '한양대학교 채널 H 멀티미디어 시스템',
        period: ['2018-12', '2019-02'],
        summary: '반응형 홈페이지(메인 · 상세 · 게시판)',
        role: '전체 디자인 · 퍼블리싱',
        stack: ['HTML5', 'CSS3', 'jQuery', 'Photoshop'],
        highlights: [],
      },
    ],
    projectLog: [
      { name: '양주 손짜장 홈페이지 구축', period: ['2019-02-15', '2019-02-22'], client: '양주손짜장마을' },
      { name: '밥상보 홈페이지 웹 접근성 개선', period: ['2019-01-15', '2019-01-30'], client: '밥상보' },
      { name: '한양대학교 채널 H 멀티미디어 시스템 구축', period: ['2018-12-31', '2019-02-28'], client: '한양대학교' },
      { name: '한국전력국제원자력대학원대학교 홈페이지 구축', period: ['2018-12-18', '2019-02-27'], client: '한국전력국제원자력대학원대학교' },
      { name: '치안대학원 홈페이지 구축사업', period: ['2018-12-10', '2018-12-19'], client: '경찰대학' },
      { name: '니드포메딕 웹 개발 및 고도화', period: ['2018-12-10', '2019-01-21'], client: '메디우스' },
      { name: '핑퐁 홈페이지 신규 구축', period: ['2018-12-10', '2018-12-14'], client: '로봇팩토리' },
      { name: '체육쌤 홈페이지 신규 구축', period: ['2018-11-11', '2018-11-18'], client: '(주)로브' },
      { name: '육군 필수 군가 12곡 웹페이지 구축', period: ['2018-10-22', '2018-12-07'], client: '(주)로브' },
      { name: '스마트한 홈페이지 신규 구축', period: ['2018-09-20', '2018-10-26'], client: '(주)로브' },
      { name: '쓰리엘 코리아 홈페이지 신규 구축', period: ['2018-09-19', '2018-10-25'], client: '(주)로브' },
      { name: '코어다이어트 홈페이지 구축', period: ['2018-09-12', '2018-10-10'], client: '(주)로브' },
      { name: '라하잉글리시 홈페이지 개발 구축', period: ['2018-09-07', '2018-10-05'], client: '(주)로브' },
      { name: '왈라비 스튜디오 홈페이지 구축', period: ['2018-08-29', '2018-09-29'], client: '(주)로브' },
      { name: '추가의정서 보고 안내 홈페이지 구축 용역', period: ['2018-08-16', '2018-11-13'], client: '(주)로브' },
      { name: 'HP솔루션 플랫폼 고도화 개발', period: ['2018-08-10', '2018-11-07'], client: '(주)로브' },
    ],
  },
];

export function featuredCases(): { company: string; item: Case }[] {
  return companies.flatMap((c) =>
    [...(c.cases ?? []), ...c.projects.flatMap((p) => p.cases ?? [])]
      .filter((item) => item.featured)
      .map((item) => ({ company: c.name, item })),
  );
}

/** 위펀 · 예스씨앤씨는 KOSA 미등록 상태라 상세 프로젝트를 그대로 목록에 사용 */
export function projectCount(c: Company): number {
  return c.projectLog?.length ?? c.projects.length;
}

export interface SideProject {
  name: string;
  period: [string, string];
  summary: string;
  role: string;
  stack: string[];
  highlights?: string[];
  cases?: Case[];
  link: string;
}

export const sideProjects: SideProject[] = [
  {
    name: '개인 홈페이지 · 이력서 사이트 (ppuppa.github.io)',
    period: ['2026-10', '2026-10'],
    summary: '이력 데이터 하나로 홈페이지 · 이력서 · 경력기술서를 함께 만드는 React + TypeScript 사이트',
    role: '기획 · 디자인 · 개발 (1인)',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'react-i18next', 'Vite', 'Motion', 'Puppeteer', 'GitHub Actions'],
    highlights: [
      '타입이 정의된 이력 데이터 한 곳을 원본으로 두고 세 페이지가 공유하도록 설계 — 내용을 한 번만 고치면 모든 문서에 반영',
      '재직 기간에서 총 경력 · 직무별 경력을 자동 계산해, 문서마다 숫자가 어긋나는 문제를 구조적으로 차단',
      'Tailwind CSS v4 테마를 CSS 변수와 연결해 라이트 · 다크 모드를 변수 교체만으로 전환, 인쇄용 문서 스타일은 별도 CSS로 분리',
      'react-i18next로 한국어 · 영어 지원',
      'Vite 멀티 페이지 빌드, 스크롤 연동 애니메이션, prefers-reduced-motion · 키보드 접근성 대응',
      'Puppeteer로 A4 PDF를 자동 생성하고, 연락처 등 개인정보는 로컬 PDF 빌드에서만 주입해 공개 사이트에는 노출되지 않도록 분리',
    ],
    link: 'https://github.com/PPUPPA/ppuppa.github.io',
  },
  {
    name: '무빙(Moving) — 영화관 예매 사이트',
    period: ['2024-01', '2024-02'],
    summary: '영화 · 상영관 관리와 예매 기능을 갖춘 가상 영화관 사이트 (5인 팀 프로젝트, 그린아이티아카데미)',
    role: '메인 · 영화 · 공지사항 담당 — 사용자 화면과 관리자(백오피스) 화면의 프론트엔드 · 백엔드 개발, 메인 퍼블리싱',
    stack: ['Java', 'Spring', 'MyBatis', 'MySQL', 'JSP', 'Ajax', 'TMDB · YouTube · OpenWeatherMap API'],
    highlights: [
      '메인 퍼블리셔로서 공통 레이아웃과 스타일을 시스템화해, 팀원들이 만든 화면이 이질감 없이 어우러지고 팀원은 기능 개발에 집중할 수 있도록 지원',
      '메인: 상영 중인 영화 인기순 TOP 10 노출, YouTube API로 TOP 10 중 랜덤 영화의 예고편을 메인 비주얼에 재생, OpenWeatherMap API로 날씨별 장르를 매핑해 상영작 추천',
      '영화(관리자): TMDB API로 국내 상영작을 조회해 무빙에서 상영할 영화를 선택 · DB 등록, 상영 중 · 상영 중지 상태 전환(재개봉 대응), 상세 정보 조회 · 수정',
      '영화(사용자): 상영작 목록(인기순 · 가나다순 정렬, 검색)과 상세(스틸컷 캐러셀, 예고편, 예매 링크)',
      '공지사항: 관리자 등록 · 목록 · 상세 · 수정 · 삭제(일괄 삭제), 사용자 목록 · 상세 · 조회수 · 페이징',
    ],
    cases: [
      {
        title: '여러 API로 나뉜 영화 정보 조합',
        tags: ['API 연동', '비동기 처리'],
        problem:
          '영화 한 편의 정보가 TMDB의 여러 API(상세 · 출연진 · 등급 · 이미지 · 영상)로 나뉘어 있어, 여러 요청을 동시에 보내고 응답을 모아야 했습니다. API를 하나만 호출할 때는 문제가 없었지만, 여러 개를 함께 호출하는 데서 막혔습니다.',
        action: [
          'Promise와 reduce 등 비동기 처리 방법을 찾아 익혀, 여러 응답을 모아 하나의 영화 데이터로 조합',
          '조합한 데이터를 프로젝트에서 미리 정한 DB 컬럼명에 맞춰 변환해 저장',
        ],
        result: '관리자가 상영작을 선택하면 필요한 영화 정보가 한 번에 조합되어 DB에 등록되도록 했습니다.',
      },
      {
        title: '다른 팀원이 의존하는 영화 테이블 설계',
        tags: ['DB 설계', '협업'],
        problem:
          '제가 관리하는 영화 테이블을 다른 팀원 대부분이 호출해 사용했는데, 처음 설계할 때 상영 상태값을 고려하지 않아 나중에 추가해야 했습니다. 다른 테이블과 의존 관계가 생겨 영화 데이터를 삭제하기도 어려웠습니다.',
        action: ['영화를 삭제하는 대신 상영 중 · 상영 중지 상태로 관리하도록 바꾸고, 재개봉도 상태 전환으로 처리'],
        result: '다른 팀원의 기능을 깨뜨리지 않고 상영 여부를 관리할 수 있게 되었습니다.',
        learned: '여러 사람이 의존하는 테이블일수록 초기 설계를 꼼꼼히 해야 하고, 서비스의 기반이 되는 데이터는 삭제하기보다 상태로 남겨야 할 때가 있다는 것',
      },
      {
        title: '마무리 단계에서야 시작한 Git 협업',
        tags: ['협업', '실패에서 배운 점'],
        problem:
          '처음부터 Git으로 협업하지 않고 거의 마무리 단계에서 merge를 시작해, 파일이 꼬이거나 팀원의 수정 사항이 반영되지 않은 파일로 덮어쓰는 일이 생겼습니다.',
        action: ['pull로 최신 상태를 받은 뒤 작업하고, 파일을 합치기 전에 팀원과 수정 범위를 확인'],
        result: '남은 기간 동안 충돌을 정리하며 프로젝트를 마무리했습니다.',
        learned: '협업 도구를 쓰더라도 내 파일과 다른 사람의 파일 버전을 교차 확인하는 습관과 커뮤니케이션이 중요하다는 것',
      },
    ],
    link: 'https://accident010.cafe24.com/moving/main.ks',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['Vue 3', 'React', 'TypeScript', 'JavaScript (ES6+)', 'Quasar', 'Styled-components', 'Tailwind CSS', 'ECharts', 'i18n (vue-i18n · react-i18next)'] },
  { group: 'Markup', items: ['HTML5', 'CSS3', 'SCSS (BEM)', '반응형 웹', '웹 표준 · 웹 접근성', 'WAI-ARIA', 'jQuery'] },
  { group: 'Collaboration', items: ['Git', 'Figma', 'Zeplin', 'Swagger', 'Docker (사내 스터디)'] },
  { group: 'Backend 경험', items: ['Java', 'Spring · Spring Boot', 'MyBatis', 'JSP', 'MySQL'] },
];

export const education = [
  { period: '2023.09 – 2026.08', name: '학점은행제 (국가평생교육진흥원)', detail: '컴퓨터공학 학사 · 학점 3.98 / 4.5' },
  { period: '2015.03 – 2018.02', name: '서울예술대학교', detail: '문예창작과 전문학사 · 학점 3.54 / 4.5' },
];

/** core: 이력서(PDF)에도 표시하는 교육 */
export const trainings: { period: string; name: string; detail: string; core?: boolean }[] = [
  { period: '2023.09 – 2024.02', name: '그린아이티아카데미', detail: '자바 · 스프링 프레임워크 기반 풀스택 개발자 과정', core: true },
  { period: '2021.09 – 2021.10', name: '제로베이스 · 노마드코더', detail: '프론트엔드 온라인 과정, 바닐라 JS 챌린지' },
  { period: '2020.02 – 2020.03', name: 'RODI Service & Design Academy', detail: '웹기획 실무 트레이닝 코스' },
  { period: '2018.04 – 2018.09', name: '한국IT아카데미', detail: 'UI/UX 엔지니어링 (반응형 웹 · 모바일) 과정', core: true },
];

export const certificates = [
  { date: '2025.03', name: '멘사코리아 회원', issuer: '멘사코리아' },
  { date: '2018.09', name: '웹디자인기능사', issuer: '한국산업인력공단' },
  { date: '2018.06', name: 'GTQ 그래픽기술자격 1급', issuer: '한국생산성본부' },
];


export const coverLetter = [
  {
    title: '접근성에서 시작된 개발',
    body: [
      '웹 에이전시에서 퍼블리셔로 일하던 시절, 저시력이 있던 상사가 색 대비가 약하거나 버튼이 작은 화면 앞에서 스크린 리더에 의존하는 모습을 가까이에서 봤습니다. 그때부터 웹 접근성을 공부했고, 국립중앙도서관과 서울시복지재단의 웹 접근성 품질인증 프로젝트에 참여했습니다.',
      '공부할수록 접근성은 퍼블리셔 혼자 지킬 수 있는 것이 아니라는 걸 알게 됐습니다. 포커스 이동, 동적으로 바뀌는 콘텐츠, 에러 안내처럼 사용자가 체감하는 접근성의 상당 부분은 기능을 구현하는 단계에서 결정됩니다. 이것이 프론트엔드 개발로 영역을 넓힌 가장 큰 이유입니다.',
    ],
  },
  {
    title: '함께 성장하는 방식',
    body: [
      '아는 것을 나누면서 성장하는 편입니다. 위펀에서는 마크업 가이드와 SCSS BEM 컨벤션을 정리해 팀에 공유했고, 마크업과 CSS에서 막히는 개발자들을 도와 그들이 기능 개발에 더 집중할 수 있게 했습니다. 예스씨앤씨에서는 반복되는 로직과 UI를 공통 Util과 Core 컴포넌트로 분리해 팀 전체가 같은 부품으로 화면을 만들 수 있게 했습니다.',
      '빠르게 결정하고 실행에 옮기는 편입니다. 퍼블리셔로 일하며 개발 역량의 필요성을 느껴 바로 풀스택 과정에 등록했고, 학점은행제로 컴퓨터공학 학사를 취득했습니다. 일이 쌓이기 전에 먼저 처리하는 습관 덕분에 동료들에게 일을 빠르게 끝낸다는 평가를 받아 왔습니다.',
    ],
  },
  {
    title: '앞으로 만들고 싶은 것',
    body: [
      '기능을 빨리 만드는 것만큼, 다음 사람이 쉽게 읽고 고칠 수 있는 구조를 만드는 것이 중요하다고 생각합니다. 어떻게 하면 유지보수가 쉬운 코드를 쓸 수 있을지, 어떻게 재사용하고 성능을 챙길지, 어떻게 하면 UI를 해치지 않으면서 접근성을 지킬 수 있을지를 계속 고민하는 개발자가 되겠습니다.',
    ],
  },
];
