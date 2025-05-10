import { Language } from '../types/language.types';

export const supportedLanguages: Language[] = [
  {
    icon: '',
    label: 'english',
    value: 'en',
    locale: 'en-US',
  },
  {
    icon: '',
    label: 'vietnamese',
    value: 'vn',
    locale: 'vn-VN',
  },
];

export const defaultLanguage = supportedLanguages[0];
