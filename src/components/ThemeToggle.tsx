import { useEffect, useState } from 'react';
import { useI18n } from '../i18n';
import { Tooltip } from './Tooltip';

type Theme = 'light' | 'dark';

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function ThemeToggle() {
  const { t } = useI18n();
  const [theme, setTheme] = useState<Theme>(() => currentTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* 저장 불가 환경은 무시 */
    }
  };

  const label = theme === 'dark' ? t('a11y.toLight') : t('a11y.toDark');

  return (
    <Tooltip label={label} align="end">
      <button
        type="button"
        className="grid size-[34px] place-items-center rounded-full border border-line bg-surface transition-transform duration-400 ease-soft hover:-rotate-30"
        onClick={toggle}
        aria-label={label}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          {theme === 'dark' ? (
            <path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5 1 3h-2l1-3Zm0 20-1-3h2l-1 3ZM2 12l3-1v2l-3-1Zm20 0-3 1v-2l3 1ZM4.9 4.9l2.8 1.4-1.4 1.4-1.4-2.8Zm14.2 14.2-2.8-1.4 1.4-1.4 1.4 2.8Zm0-14.2-1.4 2.8-1.4-1.4 2.8-1.4ZM4.9 19.1l1.4-2.8 1.4 1.4-2.8 1.4Z" />
          ) : (
            <path fill="currentColor" d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1Z" />
          )}
        </svg>
      </button>
    </Tooltip>
  );
}
