import { ui, defaultLang, routes, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

/** Prefixa um caminho interno com o idioma atual. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path === '/' ? '/' : path}`;
}

/** URL da página de termos no idioma. */
export function termsPath(lang: Lang): string {
  return routes.terms[lang];
}

/** URL da home no idioma. */
export function homePath(lang: Lang): string {
  return routes.home[lang];
}

export { type Lang };
