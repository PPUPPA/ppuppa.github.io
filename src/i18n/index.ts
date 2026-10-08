import i18n from 'i18next';
import { useCallback } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import { contentEn } from './content.en';
import { ui } from './ui';

export type Lang = 'ko' | 'en';

const STORAGE_KEY = 'lang';

/** ?lang= → 이전 선택(localStorage) → 기본 한국어 */
export function detectLang(): Lang {
  const param = new URLSearchParams(location.search).get('lang');
  if (param === 'en' || param === 'ko') return param;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ko') return saved;
  } catch {
    /* 저장소 접근 불가 시 기본값 */
  }
  return 'ko';
}

function applyDocumentLang(lang: Lang, updateMeta: boolean) {
  document.documentElement.lang = lang;
  if (!updateMeta) return;
  document.title = ui[lang].meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', ui[lang].meta.description);
}

/**
 * @param updateMeta 홈페이지만 언어에 따라 <title> · description 을 바꾼다 (문서 페이지는 한국어 고정)
 */
export function initI18n(lang: Lang, { updateMeta = false } = {}) {
  i18n.use(initReactI18next).init({
    resources: {
      ko: { ui: ui.ko },
      en: { ui: ui.en, content: contentEn },
    },
    lng: lang,
    fallbackLng: 'ko',
    ns: ['ui', 'content'],
    defaultNS: 'ui',
    interpolation: { escapeValue: false },
    initAsync: false,
  });
  applyDocumentLang(lang, updateMeta);
  i18n.on('languageChanged', (lng) => applyDocumentLang(lng as Lang, updateMeta));
}

export function useI18n() {
  const { t, i18n: instance } = useTranslation('ui');
  const lang: Lang = instance.language === 'en' ? 'en' : 'ko';

  /** 이력 콘텐츠 번역 — 한국어 원문을 키로 영어 사전을 찾고, 없으면 원문 그대로 */
  const tc = useCallback(
    (text: string) => {
      if (lang === 'ko') return text;
      const translated = t(text, { ns: 'content', keySeparator: false, nsSeparator: false, defaultValue: '' });
      if (!translated) {
        if (import.meta.env.DEV) console.warn('[i18n] 번역 없음:', text);
        return text;
      }
      return translated;
    },
    [lang, t],
  );

  const setLang = useCallback(
    (next: Lang) => {
      instance.changeLanguage(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* 무시 */
      }
      const url = new URL(location.href);
      if (next === 'en') url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');
      history.replaceState(null, '', url);
    },
    [instance],
  );

  return { t, tc, lang, setLang };
}
