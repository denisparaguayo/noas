import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    // If the path starts with http, it is external, do not prefix
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('tel:') || path.startsWith('mailto:')) {
      return path;
    }
    const cleanPath = path === '/' ? '' : path.replace(/^\//, '');
    const prefix = l === defaultLang ? '' : '/es';
    return `${prefix}/${cleanPath}`;
  }
}
