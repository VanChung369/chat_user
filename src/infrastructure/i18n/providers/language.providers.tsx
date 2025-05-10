'use client';

import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../config/i18n-config';

export default function LocalizationProvider({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <I18nextProvider i18n={i18n} defaultNS={'common'}>
      {children}
    </I18nextProvider>
  );
}
