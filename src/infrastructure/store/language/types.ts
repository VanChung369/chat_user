export interface LanguageState {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
}
