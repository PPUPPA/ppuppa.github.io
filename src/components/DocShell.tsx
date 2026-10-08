import { useEffect, type ReactNode } from 'react';

interface Props {
  current: 'resume' | 'career';
  children: ReactNode;
}

/** A4 문서 페이지 공통 틀 — 화면에서는 툴바와 종이 형태, 인쇄 시에는 본문만 */
export function DocShell({ current, children }: Props) {
  useEffect(() => {
    // 문서는 종이 기준이라 항상 라이트 테마
    document.documentElement.dataset.theme = 'light';
  }, []);

  return (
    <div className="doc-page">
      <div className="doc-toolbar">
        <a href="./index.html" className="doc-toolbar__home">
          ← 홈
        </a>
        <nav className="doc-toolbar__tabs" aria-label="문서 선택">
          <a href="./resume.html" aria-current={current === 'resume' ? 'page' : undefined}>
            이력서
          </a>
          <a href="./career.html" aria-current={current === 'career' ? 'page' : undefined}>
            경력기술서
          </a>
        </nav>
        <button type="button" className="doc-toolbar__print" onClick={() => window.print()}>
          PDF로 저장
        </button>
      </div>
      <main className="paper">{children}</main>
    </div>
  );
}

export function DocSection({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`doc-section${className ? ` ${className}` : ''}`}>
      <h2 className="doc-section__title">{title}</h2>
      {children}
    </section>
  );
}
