'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '../config';

interface QueryProviderProps {
  children: React.ReactNode;
  devtools?: boolean;
}

export function QueryProvider({
  children,
  devtools = true,
}: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {devtools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
