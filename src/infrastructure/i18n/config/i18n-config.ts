import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enErrors from '../locales/en/errors.json';
import viErrors from '../locales/vi/errors.json';
import { defaultLanguage } from '../constants/languages';

i18n.use(initReactI18next).init({
  debug: false,
  resources: {
    en: {
      common: { ...enErrors },
    },
    vi: {
      common: { ...viErrors },
    },
  },
  defaultNS: 'common',
  lng: defaultLanguage.value,
  fallbackLng: defaultLanguage.value,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
