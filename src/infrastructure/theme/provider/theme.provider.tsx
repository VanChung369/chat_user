'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProviderProps } from '../types/theme.types';
import { DEFAULT_THEME } from '../constants/theme.constants';

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
}: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
