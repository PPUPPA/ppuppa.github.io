import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initI18n } from './i18n';
import { Career } from './pages/Career';
import './styles/tailwind.css';
import './styles/tokens.css';
import './styles/doc.css';

// 제출용 문서는 한국어 고정
initI18n('ko');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Career />
  </StrictMode>,
);
