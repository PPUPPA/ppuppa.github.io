export type WorkKind = 'frontend' | 'publishing' | 'design';

export interface Work {
  num: string;
  title: string;
  client: string;
  company: string;
  year: number;
  kind: WorkKind;
  /** 기여도 (기존 포트폴리오 표기 유지) */
  contribution: string;
  url?: string;
}

export const works: Work[] = [
  { num: '33', title: '스낵24 배송관리 웹', client: '위펀 · 배송기사 전용', company: '위펀', year: 2023, kind: 'frontend', contribution: '퍼블리싱 40% · 프론트엔드 25%', url: 'https://delivery-manager.wefun.kr/' },
  { num: '32', title: 'KPI24', client: '위펀', company: '위펀', year: 2022, kind: 'frontend', contribution: '퍼블리싱 60% · 프론트엔드 15%', url: 'https://dashboard.kpi24.co.kr/' },
  { num: '31', title: '구매24 Mall', client: '위펀 · 폐쇄몰', company: '위펀', year: 2022, kind: 'frontend', contribution: '퍼블리싱 40% · 프론트엔드 20%', url: 'https://mall.buy24.wefun.co.kr/' },
  { num: '34', title: '무빙 (Moving)', client: '그린아이티아카데미 팀 프로젝트', company: '교육', year: 2024, kind: 'frontend', contribution: '프론트엔드 30% · 백엔드 25%', url: 'https://accident010.cafe24.com/moving/main.ks' },
  { num: '30', title: 'Team Korea House — Tokyo 2020', client: 'Team Korea House', company: '올림플래닛', year: 2021, kind: 'publishing', contribution: '퍼블리싱 100%', url: 'https://vr.miceview.kr/ZR029' },
  { num: '26', title: 'Edtech Korea Fair 2021', client: '에듀테크 코리아 페어 사무국', company: '올림플래닛', year: 2021, kind: 'publishing', contribution: '퍼블리싱 100%', url: 'https://vr.miceview.kr/ZR042' },
  { num: '25', title: '가상 전시관 샘플 (뷰어 타입)', client: '올림플래닛', company: '올림플래닛', year: 2021, kind: 'publishing', contribution: '퍼블리싱 100%', url: 'https://vr.miceview.kr/sample_exhib' },
  { num: '27', title: '모아 미래도 에듀파크', client: '광주 평화맨션 재건축조합', company: '올림플래닛', year: 2021, kind: 'publishing', contribution: '퍼블리싱 100%', url: 'https://vmh.zipview.kr/ZE119/' },
  { num: '29', title: '청량리역 포레스타 E-모델하우스', client: '이룸씨앤디', company: '올림플래닛', year: 2020, kind: 'publishing', contribution: '퍼블리싱 100%', url: 'https://vmh.zipview.kr/ZE077/' },
  { num: '28', title: '광주 초월역 한라비발디 온라인 분양관', client: '리얼하우스', company: '올림플래닛', year: 2020, kind: 'publishing', contribution: '퍼블리싱 50%' },
  { num: '24', title: '국립중앙도서관', client: '국립중앙도서관 · WA 인증', company: '아이티굿', year: 2019, kind: 'publishing', contribution: '퍼블리싱 60%', url: 'https://www.nl.go.kr/' },
  { num: '22', title: '서울시복지재단', client: '서울시복지재단 · WA 인증', company: '아이티굿', year: 2019, kind: 'publishing', contribution: '퍼블리싱 60%', url: 'https://www.welfare.seoul.kr/' },
  { num: '23', title: '한국과학창의재단', client: '한국과학창의재단', company: '아이티굿', year: 2019, kind: 'publishing', contribution: '퍼블리싱 40%', url: 'https://kofac.re.kr/' },
  { num: '19', title: '한국전력국제원자력대학원대학교', client: 'KINGS', company: '로브', year: 2019, kind: 'design', contribution: '디자인 100% · 퍼블리싱 100%', url: 'http://kings.ac.kr/' },
  { num: '16', title: '한양대 채널 H', client: '한양대학교', company: '로브', year: 2019, kind: 'design', contribution: '디자인 100% · 퍼블리싱 100%' },
  { num: '12', title: '경찰대학 치안대학원', client: '경찰대학', company: '로브', year: 2018, kind: 'design', contribution: '디자인 100% · 퍼블리싱 100%', url: 'http://grad.police.ac.kr/' },
  { num: '07', title: '추가의정서 보고 안내', client: '한국원자력통제기술원', company: '로브', year: 2018, kind: 'design', contribution: '디자인 80% · 퍼블리싱 95%' },
  { num: '18', title: '양주 손짜장', client: '양주손짜장마을', company: '로브', year: 2019, kind: 'design', contribution: '디자인 100% · 퍼블리싱 100%' },
  { num: '20', title: '로브 회사 홈페이지', client: '(주)로브', company: '로브', year: 2019, kind: 'design', contribution: '디자인 100% · 퍼블리싱 100%' },
  { num: '17', title: '로브 회사 홈페이지 (초기)', client: '(주)로브', company: '로브', year: 2019, kind: 'design', contribution: '디자인 100% · 퍼블리싱 100%' },
  { num: '21', title: '체육쌤', client: '체육쌤', company: '로브', year: 2018, kind: 'publishing', contribution: '퍼블리싱 100%' },
  { num: '08', title: '라하 잉글리시', client: 'LOOK', company: '로브', year: 2018, kind: 'design', contribution: '디자인 90% · 퍼블리싱 100%' },
  { num: '11', title: '스마트한 주식회사', client: '스마트한', company: '로브', year: 2018, kind: 'design', contribution: '디자인 100% · 퍼블리싱 100%' },
  { num: '14', title: 'PINGPONG', client: '아이로봇', company: '로브', year: 2018, kind: 'design', contribution: '디자인 80% · 퍼블리싱 100%' },
  { num: '09', title: 'CoreDiet', client: '메드사피엔스', company: '로브', year: 2018, kind: 'design', contribution: '디자인 100% · 퍼블리싱 100%' },
  { num: '06', title: 'Wallaby Studio', client: 'AYOBA', company: '로브', year: 2018, kind: 'design', contribution: '디자인 80% · 퍼블리싱 80%' },
  { num: '05', title: 'HP솔루션 회사소개', client: 'HP솔루션', company: '로브', year: 2018, kind: 'design', contribution: '디자인 100% · 퍼블리싱 100%' },
  { num: '04', title: 'HP솔루션 플랫폼', client: 'HP솔루션', company: '로브', year: 2018, kind: 'publishing', contribution: '퍼블리싱 30%' },
  { num: '15', title: 'Need for Medic', client: '메디우스', company: '로브', year: 2018, kind: 'publishing', contribution: '퍼블리싱 30%' },
  { num: '10', title: '3L 코리아', client: '3L 코리아', company: '로브', year: 2018, kind: 'design', contribution: '디자인 100% · 퍼블리싱 100%' },
  { num: '13', title: '육군 필수 군가 12곡', client: '-', company: '로브', year: 2018, kind: 'design', contribution: '디자인 50% · 퍼블리싱 100%' },
];

