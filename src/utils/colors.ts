type Color = {
  [key: string]: string;
};

const languageColor: Color = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  'C#': '#178600',
};

export function getLanguageColor(lang: string) {
  if (!Object.keys(languageColor).includes(lang)) {
    return '#000';
  }

  return languageColor[lang];
}
