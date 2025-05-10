'use client';

import { useLanguageStore } from '@/infrastructure/store';
import { useMemo } from 'react';
import { UseTranslationOptions, useTranslation } from 'react-i18next';
import { defaultLanguage, supportedLanguages } from '../constants/languages';

export default function useLocales(
  translateOptions?: UseTranslationOptions<string>,
) {
  const { currentLanguage } = useLanguageStore();
  const { i18n, t } = useTranslation(undefined, translateOptions);

  const currentLang = useMemo(
    () =>
      supportedLanguages.find((lang) => lang.value === currentLanguage) ||
      defaultLanguage,
    [currentLanguage],
  );

  return {
    t,
    i18n,
    currentLang,
  };
}
