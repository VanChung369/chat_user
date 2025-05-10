import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LanguageState } from './types';
import i18n from '@/infrastructure/i18n/config/i18n-config';
import { defaultLanguage } from '@/infrastructure/i18n/constants/languages';

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLanguage: defaultLanguage.value,
      changeLanguage: (lang: string) => {
        i18n.changeLanguage(lang);
        set({ currentLanguage: lang });
      },
    }),
    {
      name: 'language-storage',
    },
  ),
);
