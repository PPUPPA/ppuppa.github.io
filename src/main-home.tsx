import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { detectLang, initI18n } from './i18n';
import { Home } from './pages/Home';
import './styles/tailwind.css';
import './styles/tokens.css';

initI18n(detectLang(), { updateMeta: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
